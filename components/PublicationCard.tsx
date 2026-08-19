import React from 'react';
import type { Publication } from '@/lib/publications';

interface PublicationCardProps {
  publication: Publication;
}

// Safety net for very long author lists.
const MAX_AUTHORS = 10;

export default function PublicationCard({ publication }: PublicationCardProps) {
  const authors = publication.authors
    ? publication.authors.split(', ')
    : [];

  const authorLabel =
    authors.length > MAX_AUTHORS
      ? `${authors.slice(0, MAX_AUTHORS).join(', ')}, et al.`
      : publication.authors;

  return (
    <div className="mb-4 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow border-l-4 border-indigo-400">
      <h5 className="font-bold text-indigo-600 dark:text-indigo-400">
        {publication.title}
      </h5>
      {authorLabel && (
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
          {authorLabel}
        </p>
      )}
      <div className="flex items-center justify-between mt-2 flex-wrap gap-x-2">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {publication.venue} · {publication.year}
        </p>
        {publication.doi && (
          <a
            href={`https://doi.org/${publication.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
          >
            Paper ↗
          </a>
        )}
      </div>
    </div>
  );
}