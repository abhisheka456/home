/**
 * Returns an asset URL prefixed with the GitHub Pages base path (e.g. `/home`).
 *
 * NEXT_PUBLIC_BASE_PATH is inlined at build time; leave it unset in local dev
 * so asset paths stay root-relative (`/assets/...`).
 */
export const asset = (path: string): string =>
  `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`;