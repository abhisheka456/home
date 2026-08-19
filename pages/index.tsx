import Head from 'next/head';
import {
  IoBasketballOutline,
  IoChatbubbleEllipsesOutline,
  IoJournalOutline,
  IoMapOutline,
  IoCameraOutline,
  IoGridOutline,
  IoCodeSlash,
} from 'react-icons/io5';
import React from 'react';
import Layout from '@/components/Layout';
import About from '@/components/About';
import Hobbies from '@/components/Hobbies';
import WhatDoing from '@/components/WhatDoing';

export default function Index() {
  const hobbyData = {
    bb: {
      title: 'Cricket: My 22-Yard Meditation',
      desc: (
        <div className="space-y-2 text-left text-gray-800">
          <p className="flex items-start gap-2">
            <span>🏏</span>
            <span><span className="font-semibold text-blue-600">Strategic Mindset</span> | Applying <span className="italic">game theory</span> to field placements and run chases (optimization off the pitch!)</span>
          </p>
          <p className="flex items-start gap-2">
            <span>⚡</span>
            <span><span className="font-semibold text-red-600">Fast Bowling Fanatic</span> | Love decoding pace physics – from swing mechanics to the perfect yorker algorithm</span>
          </p>
          <p className="flex items-start gap-2">
            <span>🌞</span>
            <span><span className="font-semibold text-amber-600">Weekend Warrior</span> | Whether batting in Patna's heat or watching Tests with <span className="italic">chai</span>, cricket is my ultimate stress-relief <span className="italic">algorithm</span></span>
          </p>
        </div>
      ),
    },
    pbs: {
      title: 'Research Papers: My Intellectual Playground',
      desc: (
        <div className="space-y-2 text-left text-gray-800">
          <p className="flex items-start gap-2">
            <span>🔍</span>
            <span><span className="font-semibold text-indigo-700">Professional Curiosity</span> | Dissecting cutting-edge studies with a reviewer's eye and a researcher's hunger for hidden insights</span>
          </p>
          <p className="flex items-start gap-2">
            <span>📚</span>
            <span><span className="font-semibold text-blue-600">Knowledge Architect</span> | Connecting dots across AI/optimization papers to build new mental frameworks - one citation at a time</span>
          </p>
          <p className="flex items-start gap-2">
            <span>✍️</span>
            <span><span className="font-semibold text-teal-700">Peer Review Alchemist</span> | My red pen transforms drafts into diamonds (serving as Associate Editor for top computational journals)</span>
          </p>
        </div>
      ),
    },
    tvl: {
      title: 'Travel Philosophy',
      desc: (
        <div className="space-y-2 text-left text-gray-800">
          <p className="flex items-start gap-2">
            <span>✈️</span>
            <span>From navigating Seoul's neon-lit streets to hiking Bohemian trails, I collect <span className="italic">cultural algorithms</span>—where every journey optimizes my worldview like a nature-inspired search function.</span>
          </p>
        </div>
      ),
    },
    pgpy: {
      title: 'Photography',
      desc: (
        <div className="space-y-2 text-left text-gray-800">
          <p className="flex items-start gap-2">
            <span>📸</span>
            <span>Falling in love with stray beams of light <span className="text-pink-600">❤️</span> - the only loss function that rewards overfitting.</span>
          </p>
          <p className="flex items-start gap-2">
            <span>🖼️</span>
            <span>Debugging reality one shot at a time <span className="text-blue-600">⚙️</span> - aperture, meet my second-favorite hyperparameter.</span>
          </p>
        </div>
      ),
    },
  };
  const WDData = {
    wd: {
      title: 'Coding: Where Logic Meets Artistry',
      desc: (
        <div className="space-y-3 text-left text-gray-800">
          <p className="flex items-start gap-2">
            <span>💡</span>
            <span className="text-left"><span className="font-semibold text-indigo-700">Elegant Solutions</span> | Transforming complex problems into clean, optimized algorithms with computational grace</span>
          </p>
          <p className="flex items-start gap-2">
            <span>⚡</span>
            <span className="text-left"><span className="font-semibold text-blue-600">Performance Alchemist</span> | My code speaks three languages: efficiency (Python), speed (C++), and scalability (CUDA)</span>
          </p>
          <p className="flex items-start gap-2">
            <span>🛠️</span>
            <span className="text-left"><span className="font-semibold text-teal-700">Full-Stack Thinker</span> | From computer vision pipelines to evolutionary optimization - every system deserves beautiful engineering</span>
          </p>
        </div>
      ),
    },
    flc: {
      title: 'Teaching Philosophy',
      desc: (
        <div className="space-y-3 text-left text-gray-800">
          <p className="flex items-start gap-2">
            <span>🧠</span>
            <span className="text-left"><span className="font-semibold text-indigo-700">Concept Alchemist</span> | Turning complex algorithms into intuitive lessons through storytelling and real-world analogies</span>
          </p>
          <p className="flex items-start gap-2">
            <span>💻</span>
            <span className="text-left"><span className="font-semibold text-blue-600">Code Whisperer</span> | My labs prioritize hands-on learning - from evolutionary computation in Seoul to computer vision in Ostrava</span>
          </p>
          <p className="flex items-start gap-2">
            <span>🌐</span>
            <span className="text-left"><span className="font-semibold text-teal-700">Global Mentor</span> | Cultivating adaptive thinkers across cultures, with emergency coffee breaks ☕ for tough debugging sessions</span>
          </p>
        </div>
      ),
    },
  };
  return (
    <>
      <Head>
        <title>Abhishek Kumar :: Research & Education</title>
      </Head>
      <Layout border="border-2">
        <About />

        <h1 className="text-lg font-semibold my-4 text-indigo-700">What I'm Doing</h1>
        <div className="grid md:grid-cols-2 gap-y-4 gap-x-2 px-4">
          <WhatDoing title={WDData.flc.title} desc={WDData.flc.desc}>
            <IoGridOutline className="text-blue-600 text-6xl" />
          </WhatDoing>
          <WhatDoing title={WDData.wd.title} desc={WDData.wd.desc}>
            <IoCodeSlash className="text-teal-600 text-6xl" />
          </WhatDoing>
        </div>
        <h1 className="text-lg font-semibold my-4 text-indigo-700">Hobbies</h1>
        <div className="grid md:grid-cols-2 gap-y-4 gap-x-2 px-4">
          <Hobbies title={hobbyData.bb.title} desc={hobbyData.bb.desc}>
            <IoBasketballOutline className="text-red-600 text-6xl" />
          </Hobbies>
          <Hobbies title={hobbyData.pbs.title} desc={hobbyData.pbs.desc}>
            <IoJournalOutline className="text-amber-600 text-6xl" />
          </Hobbies>
          <Hobbies title={hobbyData.tvl.title} desc={hobbyData.tvl.desc}>
            <IoMapOutline className="text-purple-600 text-6xl" />
          </Hobbies>
          <Hobbies title={hobbyData.pgpy.title} desc={hobbyData.pgpy.desc}>
            <IoCameraOutline className="text-pink-600 text-6xl" />
          </Hobbies>
        </div>
      </Layout>
    </>
  );
}
{
  /* <style>
ion-icon {
  --ionicon-stroke-width: 16px;
}
</style> */
}

