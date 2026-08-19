import React from 'react';

interface PeerReviewCardProps {
  journal: string;
  years?: string;
}

export default function PeerReviewCard({ journal, years }: PeerReviewCardProps) {
  return (
    <div className="mb-4 p-4 rounded-lg border-l-4 border-blue-500 bg-blue-500 bg-opacity-10">
      <div className="flex items-start">
        <span className="text-2xl mr-2">🔍</span>
        <div>
          <h4 className="font-bold">Peer Reviewer</h4>
          <p className="text-sm text-gray-600">{journal}</p>
          {years && <p className="text-xs text-gray-500">{years}</p>}
        </div>
      </div>
    </div>
  );
}