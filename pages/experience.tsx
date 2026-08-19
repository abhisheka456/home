import React from 'react';
import Layout from '@/components/Layout';
import ResearchCard from '@/components/ResearchCard';
import EditorialCard from '@/components/EditorialCard';
import PeerReviewCard from '@/components/PeerReviewCard';
import ConferenceCard from '@/components/ConferenceCard';
import TeachingCard from '@/components/TeachingCard';
import MembershipCard from '@/components/MembershipCard';
import Head from 'next/head';

export default function skillsAndExperience() {
  const researchData = {
    current: {
      emoji: '🎓',
      color: 'border-purple-500',
      title: 'Visiting Professor',
      date: 'Nov 2024 - Present',
      place: 'Ostrava, Czech Republic',
      org: 'ENET Centre, VSB – Technical University of Ostrava',
    },
    sejong: {
      emoji: '📚',
      color: 'border-purple-500',
      title: 'Assistant Professor',
      date: 'Mar 2024 - Oct 2024',
      place: 'Seoul, South Korea',
      org: 'Department of Computer Science, Sejong University',
    },
    knuPostdoc1: {
      emoji: '🔬',
      color: 'border-blue-500',
      title: 'BK21 Postdoctoral Fellow',
      date: 'May 2023 - Feb 2024',
      place: 'Daegu, South Korea',
      org: 'Department of AI, Kyungpook National University',
    },
    lgResearch: {
      emoji: '🏭',
      color: 'border-green-500',
      title: 'Postdoctoral Fellow (LG Research Centre)',
      date: 'May 2022 - May 2023',
      place: 'Daegu, South Korea',
      org: 'Department of AI, Kyungpook National University',
    },
    knuPostdoc2: {
      emoji: '🔬',
      color: 'border-blue-500',
      title: 'BK21 Postdoctoral Fellow',
      date: 'May 2021 - May 2022',
      place: 'Daegu, South Korea',
      org: 'Department of AI, Kyungpook National University',
    },
    visitingScholar: {
      emoji: '🌏',
      color: 'border-blue-500',
      title: 'Visiting Scholar',
      date: 'Jan 2020 - May 2021',
      place: 'Daegu, South Korea',
      org: 'ECIS Lab, Department of AI, Kyungpook National University',
    },
  };

  return (
    <>
      <Head>
        <title>Experience :: GitWind</title>
      </Head>
      <Layout border="border-2">
         <h3 className="text-lg font-semibold mt-3">Academic & Research Experience</h3>
        <ResearchCard
          emoji={researchData.current.emoji}
          color={researchData.current.color}
          title={researchData.current.title}
          date={researchData.current.date}
          place={researchData.current.place}
          org={researchData.current.org}
        />
        <ResearchCard
          emoji={researchData.sejong.emoji}
          color={researchData.sejong.color}
          title={researchData.sejong.title}
          date={researchData.sejong.date}
          place={researchData.sejong.place}
          org={researchData.sejong.org}
        />
        <ResearchCard
          emoji={researchData.knuPostdoc1.emoji}
          color={researchData.knuPostdoc1.color}
          title={researchData.knuPostdoc1.title}
          date={researchData.knuPostdoc1.date}
          place={researchData.knuPostdoc1.place}
          org={researchData.knuPostdoc1.org}
        />
        <ResearchCard
          emoji={researchData.lgResearch.emoji}
          color={researchData.lgResearch.color}
          title={researchData.lgResearch.title}
          date={researchData.lgResearch.date}
          place={researchData.lgResearch.place}
          org={researchData.lgResearch.org}
        />
        <ResearchCard
          emoji={researchData.knuPostdoc2.emoji}
          color={researchData.knuPostdoc2.color}
          title={researchData.knuPostdoc2.title}
          date={researchData.knuPostdoc2.date}
          place={researchData.knuPostdoc2.place}
          org={researchData.knuPostdoc2.org}
        />
        <ResearchCard
          emoji={researchData.visitingScholar.emoji}
          color={researchData.visitingScholar.color}
          title={researchData.visitingScholar.title}
          date={researchData.visitingScholar.date}
          place={researchData.visitingScholar.place}
          org={researchData.visitingScholar.org}
        />

        <h3 className="text-lg font-semibold mt-3">Professional Activities</h3>
        <h4 className="text-md font-medium mt-2">Editorial Roles</h4>
        <EditorialCard
          role="Associate Editor"
          journal="Swarm and Evolutionary Computation"
          details="SCI, IF: 10.267, Q1 in AI"
        />
        <EditorialCard
          role="Lead Guest Editor"
          journal="Special Issue on Recent Advances in Constraint Handling Techniques, Swarm and Evolutionary Computation"
        />
        <EditorialCard
          role="Guest Editor"
          journal="Special Issue on AI for Smart Grids, Energies"
          details="SCI, IF: 3.252"
        />

        <h4 className="text-md font-medium mt-4">Peer Review Activities</h4>
        <PeerReviewCard journal="IEEE Transactions: Evolutionary Computation, Cybernetics, Smart Grid" />
        <PeerReviewCard journal="Elsevier: Swarm & Evolutionary Computation, Applied Soft Computing, Information Sciences" />
        <PeerReviewCard journal="Springer: Artificial Intelligence Review" />

        <h4 className="text-md font-medium mt-4">Conference Leadership</h4>
        <ConferenceCard
          role="Special Session Chair"
          conference="IEEE CEC"
          years="2020-2022"
          session="Real-World Constrained Optimization (Glasgow, Krakow, Padova)"
        />
        <ConferenceCard
          role="Special Session Chair"
          conference="GECCO"
          years="2020-2022"
          session="Bound-Constrained Optimization (Cancun, Lille, Boston)"
        />
        <ConferenceCard
          role="Key Organizer"
          conference="IEEE UPCON"
          years="2016"
          session="IIT BHU"
        />

        <h4 className="text-md font-medium mt-4">Teaching Experience</h4>
        <TeachingCard
          role="Ph.D Teaching Assistant"
          course="Artificial Intelligence & Computer Networks"
        />
        <TeachingCard
          role="Ph.D Teaching Assistant"
          course="Power Systems & Operations Research"
        />

        <h4 className="text-md font-medium mt-4">Professional Memberships</h4>
        <MembershipCard
          organization="IEEE CIS UP Section"
          role="Executive Committee Member"
          years="2022"
        />
        <MembershipCard
          organization="IEEE Student Chapter, IIT BHU"
          role="Senior Advisor"
          years="2018-2020"
        />
        <MembershipCard
          organization="IEEE Computational Intelligence Society"
          role="Member"
        />
       
      </Layout>
    </>
  );
}
