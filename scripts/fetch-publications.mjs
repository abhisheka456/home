/**
 * Fetch publication data from ORCID public API and generate lib/publications.ts
 *
 * Usage: node scripts/fetch-publications.mjs
 * Output: overwrites lib/publications.ts
 */
import { writeFileSync } from 'fs';

const ORCID_ID = '0000-0002-8783-5128';
const BASE = `https://pub.orcid.org/v3.0/${ORCID_ID}`;

// ORCID sometimes mis-types proceedings volumes as journal-article;
// move these into conference-paper by exact title match.
const FORCE_CONFERENCE = [
  'UEQMS: UMAP Embedded Quick Mean Shift Algorithm for High Dimensional Clustering', // AAAI proceedings
  'CSS-A Cheap-Surrogate-Based Selection Operator for Multi-objective Optimization', // LNCS / GECCO
];

const normalize = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

// arXiv-only preprints to drop outright (not picked up by twin-matching).
const DROP_ARXIV_ONLY = [
  'UAVSNet: An Encoder-Decoder Architecture based UAV Image Segmentation Network', // deep-learning preprint, no journal record
];

function extractAuthors(work) {
  const contributors = (work.contributors && work.contributors.contributor) || [];
  return contributors
    .map((c) => c['credit-name'] && c['credit-name'].value)
    .filter(Boolean)
    .join(', ');
}

function extractDoi(work) {
  const extIds = (work['external-ids'] && work['external-ids']['external-id']) || [];
  const doi = extIds.find((e) => e['external-id-type'] === 'doi');
  return doi ? doi['external-id-value'] : undefined;
}

async function getJson(url, accept, attempts = 3) {
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(url, { headers: { Accept: accept } });
      if (res.status === 503 && i < attempts - 1) {
        await sleep(400 + i * 400);
        continue;
      }
      if (!res.ok) throw new Error(`${url} -> ${res.status}`);
      return res.json();
    } catch (e) {
      if (i === attempts - 1) throw e;
      await sleep(400 + i * 400);
    }
  }
  throw new Error(`unreachable for ${url}`);
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Crossref fallback: many older ORCID records lack contributor data, but the
// DOI record almost always has authors.
async function crossrefAuthors(doi) {
  try {
    const data = await getJson(`https://api.crossref.org/works/${encodeURIComponent(doi)}`, 'application/json');
    const authors = (data.message && data.message.author) || [];
    return authors
      .map((a) => {
        if (a.given) return `${a.given} ${a.family || ''}`.trim();
        return a.name || a.family || '';
      })
      .filter(Boolean)
      .join(', ');
  } catch {
    return '';
  }
}

// Run an async fn over items with limited concurrency.
async function mapLimit(items, limit, fn) {
  const results = new Array(items.length);
  let i = 0;
  async function worker() {
    while (i < items.length) {
      const idx = i++;
      results[idx] = await fn(items[idx], idx);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
}

async function main() {
  const summary = await getJson(`${BASE}/works`, 'application/json');
  const groups = summary.group || [];
  console.log(`Found ${groups.length} works`);

  const works = groups
    .map((g) => {
      const w = g['work-summary'] && g['work-summary'][0];
      if (!w) return null;
      return {
        putCode: w['put-code'],
        title: (w.title && w.title.title && w.title.title.value) || '(untitled)',
        type: w.type,
        year: (w['publication-date'] && w['publication-date'].year && w['publication-date'].year.value) || '',
        venue: (w['journal-title'] && w['journal-title'].value) || '',
        doi: extractDoi(w),
      };
    })
    .filter(Boolean);

  // Fetch per-work records (limited concurrency, retried) for author lists.
  const details = await mapLimit(works, 4, async (w) => {
    try {
      const rec = await getJson(`${BASE}/work/${w.putCode}`, 'application/json');
      return { putCode: w.putCode, authors: extractAuthors(rec) };
    } catch (e) {
      console.warn(`work ${w.putCode} fetch failed: ${e.message}`);
      return { putCode: w.putCode, authors: '' };
    }
  });
  const authorsByCode = new Map(details.map((d) => [d.putCode, d.authors]));
  console.log('Author lists fetched:', details.filter((d) => d.authors).length, '/', details.length);

  // Dedupe: arXiv preprints that have a peer-reviewed twin in any other venue are dropped.
  const byNormTitle = new Map();
  for (const w of works) {
    const key = normalize(w.title);
    if (!byNormTitle.has(key)) byNormTitle.set(key, []);
    byNormTitle.get(key).push(w);
  }
  const isArxiv = (w) => /arxiv/i.test(w.venue);
  const drop = new Set();
  for (const wins of byNormTitle.values()) {
    const published = wins.filter((w) => !isArxiv(w));
    for (const w of wins) {
      if (isArxiv(w) && published.length > 0) {
        drop.add(w.putCode);
        console.log(`DROP arXiv preprint (has published twin): ${w.title}`);
      }
    }
  }

  const journals = [];
  const conferences = [];
  const chapters = [];

  const seen = new Set();
  // Deterministic processing order regardless of API response order.
  const ordered = [...works].sort((a, b) => Number(a.putCode) - Number(b.putCode));
  for (const w of ordered) {
    if (drop.has(w.putCode)) continue;
    if (DROP_ARXIV_ONLY.includes(w.title)) {
      console.log(`DROP arXiv-only preprint: ${w.title}`);
      continue;
    }
    const nTitle = normalize(w.title);
    if (seen.has(nTitle)) {
      console.log(`DROP duplicate: ${w.title}`);
      continue;
    }
    seen.add(nTitle);

    let type = w.type;
    if (FORCE_CONFERENCE.includes(w.title)) type = 'conference-paper';

    let authors = authorsByCode.get(w.putCode) || '';
    // Fill in author lists missing from ORCID via Crossref (by DOI).
    if (!authors && w.doi) {
      authors = await crossrefAuthors(w.doi);
      if (!authors) console.log(`NO authors found for: ${w.title}`);
    }

    const entry = {
      title: w.title,
      authors,
      venue: w.venue || '(venue not listed)',
      year: w.year,
      ...(w.doi ? { doi: w.doi } : {}),
    };

    if (type === 'conference-paper') conferences.push(entry);
    else if (type === 'book-chapter') chapters.push(entry);
    else journals.push(entry);
  }

  const sortDesc = (a, b) => (a.year === b.year ? a.title.localeCompare(b.title) : b.year.localeCompare(a.year));
  journals.sort(sortDesc);
  conferences.sort(sortDesc);
  chapters.sort(sortDesc);

  const ts = `// Generated by scripts/fetch-publications.mjs — do not edit manually.
// Run \`node scripts/fetch-publications.mjs\` to regenerate from ORCID.

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  doi?: string;
}

export const journalPapers: Publication[] = ${JSON.stringify(journals, null, 2)};

export const conferencePapers: Publication[] = ${JSON.stringify(conferences, null, 2)};

export const bookChapters: Publication[] = ${JSON.stringify(chapters, null, 2)};
`;

  writeFileSync('lib/publications.ts', ts);
  console.log(`Wrote lib/publications.ts`);
  console.log(`  journals: ${journals.length}, conferences: ${conferences.length}, book chapters: ${chapters.length}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});