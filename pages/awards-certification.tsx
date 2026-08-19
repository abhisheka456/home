import React from 'react';
import Layout from '@/components/Layout';
import AwardCard from '@/components/AwardCard';
import CertificationCard from '@/components/CertificationCard';
import Head from 'next/head';

export default function awardsAndCertification() {
  
  return (
    <>
      <Head>
        <title>Awards & Certification :: GitWind</title>
      </Head>
      <Layout border="border-2">
        <div className="prose max-w-none text-gray-800 dark:text-gray-200">
          <h4 className="text-xl font-bold text-indigo-700 dark:text-indigo-300">🏆 Academic & Research Achievements</h4>
          
          <h5 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300">Journal Recognition</h5>
          <AwardCard
            icon="🏆"
            title="2022 Best Paper Award (Editor's Selection)"
            place="Applied Soft Computing"
            date="2022"
            description="Paper: The spherical search algorithm for bound-constrained global optimization problems"
            link="https://www.sciencedirect.com/journal/applied-soft-computing/about/awards"
            linkText="Award Link"
          />

          <h5 className="font-semibold mt-4 text-indigo-700">Competitive Algorithm Rankings</h5>
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-4 bg-white dark:bg-gray-800">
            <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 dark:border-gray-700">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-100">Algorithm</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-100">Competition</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-100">Rank</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-100">Conference/Year</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-100">Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-100"><span className="text-indigo-600 dark:text-indigo-300">SASS</span></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-100">Real-World Const. SOO</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-100">🥇 <span className="text-indigo-600 dark:text-indigo-300">1st</span></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-100">IEEE CEC-2020 & GECCO-2020</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-100">Glasgow, UK / Cancún, MX</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-100"><span className="text-indigo-600 dark:text-indigo-300">sCMAgES</span></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-100">Real-World Const. SOO</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-100">🥉 <span className="text-indigo-600 dark:text-indigo-300">3rd</span></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-100">IEEE CEC-2020 & GECCO-2020</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-100">Glasgow, UK / Cancún, MX</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-100"><span className="text-indigo-600 dark:text-indigo-300">ESHADE_USM</span></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-100">100-Digit Challenge</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-100">5th</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-100">IEEE CEC-2019</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-100">Wellington, NZ</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-100"><span className="text-indigo-600 dark:text-indigo-300">EBOwithCMAR</span></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-100">Non-tuning Section</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-100">🥈 <span className="text-indigo-600 dark:text-indigo-300">2nd</span></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-100">IEEE CEC-2019</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-100">Wellington, NZ</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-100"><span className="text-indigo-600 dark:text-indigo-300">EBOwithCMAR</span></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-100">Real-Param. SOO</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-100">🥇 <span className="text-indigo-600 dark:text-indigo-300">1st</span></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-100">IEEE CEC-2017</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-100">Donostia, Spain</td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>

          <h5 className="text-lg font-semibold mt-4 text-indigo-700 dark:text-indigo-300">Other Honors</h5>
          <AwardCard
            icon="🥇"
            title="Poster Presentation - 1st Prize"
            place="IIT (BHU) Institute Day"
            date="Feb 2018 | Varanasi, India"
            description="For 'Effective Butterfly Optimizer'"
          />
          <AwardCard
            icon="🏅"
            title="Early Career Awards"
            place="IEEE CIS UP Section, IIT Kanpur"
            date="2016"
            description="Young Researcher Award-2016"
          />
          <AwardCard
            icon="🎓"
            title="Academic Excellence"
            place="UTU"
            date="B.Tech"
            description="Top 3 Rank throughout B.Tech & MHRD Ph.D Scholarship (5 years via GATE)"
          />
        </div>
      </Layout>
    </>
  );
}
