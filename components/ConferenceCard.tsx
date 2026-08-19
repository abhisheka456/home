import React from 'react';

interface ConferenceCardProps {
  role: string;
  conference: string;
  years: string;
  session?: string;
}

export default function ConferenceCard({ role, conference, years, session }: ConferenceCardProps) {
  return (
    <div className="mb-4 p-4 rounded-lg border-l-4 border-purple-500 bg-purple-500 bg-opacity-10">
      <div className="flex items-start">
        <span className="text-2xl mr-2">🎤</span>
        <div>
          <h4 className="font-bold">{role}</h4>
          <p className="text-sm text-gray-600">{conference} ({years})</p>
          {session && <p className="text-xs text-gray-500">{session}</p>}
        </div>
      </div>
    </div>
  );
}