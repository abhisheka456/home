import React from 'react';
import Layout from '@/components/Layout';
import ProjectCards from '@/components/ProjectCards';
import Head from 'next/head';

export default function projects() {
  const projectData = {
    energyAnalysis: {
      title: 'Energy Consumption Pattern Analysis',
      subTitle: 'Collaborator: Prof. Rammohan Mallipeddi (2021-2023)',
      desc:
        "AI-driven energy consumption analytics for incentive design & facility optimization. Funded by National Research Foundation of Korea (NRF).",
      link: '',
      linkText: '',
      stacks: [
        { title: 'Time-series forecasting', color: 'text-red-200' },
        { title: 'Behavioral pattern clustering', color: 'text-blue-200' },
      ],
    },
    videoUnderstanding: {
      title: 'Deep Learning for Video Understanding',
      subTitle: 'Collaborator: Prof. Dong Gyun Lee (2023-2024)',
      desc:
        "Development of video recognition & captioning using deep learning/external knowledge bases. Funded by NRF Excellent Early-Career Researcher Grant.",
      link: '',
      linkText: '',
      stacks: [
        { title: 'Multimodal transformers', color: 'text-purple-200' },
        { title: 'Knowledge-graph integration', color: 'text-green-200' },
      ],
    },
    sustainableTech: {
      title: 'Sustainable High-Tech Industries',
      subTitle: 'Collaborator: Dr. Lukáš Prokop (2025-Present)',
      desc:
        "Regional sustainability through advanced tech under EU Just Transition Programme. Funded by EU Operational Programme REFRESH.",
      link: '',
      linkText: '',
      stacks: [
        { title: 'Renewable energy systems', color: 'text-yellow-200' },
        { title: 'Smart manufacturing', color: 'text-indigo-200' },
      ],
    },
  };

  return (
    <>
      <Head>
        <title>Projects :: GitWind</title>
      </Head>
      <Layout border="border-2">
        <h3 className="text-lg font-semibold my-4">
          Research Projects & Collaborations
        </h3>
        <div className="grid gap-4 mb-3">
          <ProjectCards
            title={projectData.energyAnalysis.title}
            subTitle={projectData.energyAnalysis.subTitle}
            desc={projectData.energyAnalysis.desc}
            link={projectData.energyAnalysis.link}
            linkText={projectData.energyAnalysis.linkText}
            stacks={projectData.energyAnalysis.stacks}
          />
          <ProjectCards
            title={projectData.videoUnderstanding.title}
            subTitle={projectData.videoUnderstanding.subTitle}
            desc={projectData.videoUnderstanding.desc}
            link={projectData.videoUnderstanding.link}
            linkText={projectData.videoUnderstanding.linkText}
            stacks={projectData.videoUnderstanding.stacks}
          />
          <ProjectCards
            title={projectData.sustainableTech.title}
            subTitle={projectData.sustainableTech.subTitle}
            desc={projectData.sustainableTech.desc}
            link={projectData.sustainableTech.link}
            linkText={projectData.sustainableTech.linkText}
            stacks={projectData.sustainableTech.stacks}
          />
        </div>
      </Layout>
    </>
  );
}
