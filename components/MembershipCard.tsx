import React from 'react';

interface MembershipCardProps {
  organization: string;
  role: string;
  years?: string;
}

export default function MembershipCard({ organization, role, years }: MembershipCardProps) {
  return (
    <div className="mb-4 p-4 rounded-lg border-l-4 border-teal-500 bg-teal-500 bg-opacity-10">
      <div className="flex items-start">
        <span className="text-2xl mr-2">🤝</span>
        <div>
          <h4 className="font-bold">{role}</h4>
          <p className="text-sm text-gray-600">{organization}</p>
          {years && <p className="text-xs text-gray-500">{years}</p>}
        </div>
      </div>
    </div>
  );
}