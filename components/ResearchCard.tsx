import React from 'react';

interface ResearchCardProps {
  emoji: string;
  color: string;
  title: string;
  date: string;
  place: string;
  org: string;
  desc?: string;
}

export default function ResearchCard({
  emoji,
  color,
  title,
  date,
  place,
  org,
  desc,
}: ResearchCardProps) {
  return (
    <div className={`mb-4 p-4 rounded-lg border-l-4 ${color} bg-opacity-10 ${color.replace('border', 'bg')}`}>
      <div className="flex items-start">
        <span className="text-2xl mr-2">{emoji}</span>
        <div>
          <h4 className="font-bold">{title}</h4>
          <p className="text-sm text-gray-600">{org}, {place}</p>
          <p className="text-xs text-gray-500">{date}</p>
          {desc && <p className="mt-2 text-sm">{desc}</p>}
        </div>
      </div>
    </div>
  );
}