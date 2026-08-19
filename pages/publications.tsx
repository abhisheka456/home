import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import PublicationCard from '@/components/PublicationCard';
import {
  journalPapers,
  conferencePapers,
  bookChapters,
} from '@/lib/publications';

export default function Publications() {
  return (
    <>
      <Head>
        <title>Publications :: GitWind</title>
      </Head>
      <Layout border="border-2">
        <h1 className="text-2xl font-bold mb-2">Publications</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Peer-reviewed research in computational intelligence, optimization,
          and machine learning.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">📚 Journal Papers</h2>
        <div className="mb-4">
          {journalPapers.map((paper) => (
            <PublicationCard key={paper.doi || paper.title} publication={paper} />
          ))}
        </div>

        <h2 className="text-xl font-semibold mt-6 mb-3">🎤 Conference Papers</h2>
        <div className="mb-4">
          {conferencePapers.map((paper) => (
            <PublicationCard key={paper.doi || paper.title} publication={paper} />
          ))}
        </div>

        <h2 className="text-xl font-semibold mt-6 mb-3">📖 Book Chapters</h2>
        <div className="mb-4">
          {bookChapters.map((paper) => (
            <PublicationCard key={paper.doi || paper.title} publication={paper} />
          ))}
        </div>
      </Layout>
    </>
  );
}