import React from 'react';

interface TeachingCardProps {
  role: string;
  course: string;
  details?: string;
}

export default function TeachingCard({ role, course, details }: TeachingCardProps) {
  return (
    <div className="mb-4 p-4 rounded-lg border-l-4 border-green-500 bg-green-500 bg-opacity-10">
      <div className="flex items-start">
        <span className="text-2xl mr-2">👨‍🏫</span>
        <div>
          <h4 className="font-bold">{role}</h4>
          <p className="text-sm text-gray-600">{course}</p>
          {details && <p className="text-xs text-gray-500">{details}</p>}
        </div>
      </div>
    </div>
  );
}