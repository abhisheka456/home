import React from 'react';
import { IoSchoolOutline } from 'react-icons/io5';

export default function EducationCard({ degree, institution, year, details }) {
  return (
    <div className="p-4 hover:bg-gray-50 transition-colors duration-200 rounded-lg">
      <div className="flex gap-4 items-start">
        <div className="flex-none p-3 bg-green-100 rounded-lg shadow-sm">
          <IoSchoolOutline className="text-green-700 text-3xl" />
        </div>
        <div className="flex-1">
          <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
            {degree.includes('Ph.D') ? '🎓 ' : '📚 '}{degree}
          </h1>
          <div className="mt-3 space-y-1">
            <h5 className="text-gray-700 font-semibold text-lg">🏛️ {institution}</h5>
            <p className="text-gray-600 text-base">📅 {year}</p>
            {details && (
              <div className="mt-4">
                {details[0].startsWith("🏆 Key contributions:") && (
                  <div className="bg-white border-4 border-green-400 rounded-xl p-5 shadow-lg">
                    {console.log("Rendering key contributions box")}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-green-100 p-2 rounded-full">
                        <span className="text-green-600 text-xl">🏆</span>
                      </div>
                      <h4 className="font-bold text-green-800 text-lg">Key Contributions</h4>
                    </div>
                    <div className="space-y-2">
                      {details[0]
                        .replace("🏆 Key contributions:", "")
                        .split('\n')
                        .filter(line => line.trim())
                        .map((line, index) => (
                          <p key={index} className="text-gray-800">
                            {line}
                          </p>
                      ))}
                    </div>
                  </div>
                )}
                {details[0] !== "🏆 Key contributions:" && (
                  <ul className="space-y-3">
                    {details.map((detail, index) => (
                      <li
                        key={index}
                        className="text-gray-800 text-base pl-3 border-l-4 border-green-300 hover:border-green-500 transition-colors duration-200"
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
