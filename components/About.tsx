import React from 'react';
import {
  IoBasketballOutline,
  IoCameraOutline,
  IoChatbubbleEllipsesOutline,
  IoMapOutline,
} from 'react-icons/io5';

export default function About() {
  return (
    <>
      <h1 className="text-lg font-semibold my-2">About Me</h1>
      <div className="flex flex-col mb-4 text-lg tracking-wide gap-y-4 px-4 text-gray-800">
        <h2 className="text-xl font-bold mb-4 text-indigo-700"> From the Banks of the Ganges to the Frontiers of Computational Intelligence</h2>
        <p className="font-medium mb-6 text-blue-600">Algorithm Designer × Machine Visionary × Knowledge Architect</p>
        <p className="font-medium mb-6 text-purple-700">Profession: Visiting Professor, ENET Center, CEETe, VSB-TOU, Ostrava, Czech Republic</p>
        
        <p className="mb-4">
          My story begins in <span className="font-semibold text-blue-600">Patna, Bihar</span> - where the mighty Ganges first taught me that powerful currents (whether of water or ideas) always find their optimal path. This early inspiration carried me through:
        </p>

        <ul className="space-y-3 mb-6">
          <li>🏔️ <span className="font-semibold text-green-700">Himalayan Foundations</span><br/>B.Tech in Electrical Engineering at Uttarakhand Technical University</li>
          <li>⚡ <span className="font-semibold text-purple-700">Varanasi Enlightenment</span><br/>Ph.D. in Systems Engineering at IIT (BHU), mastering nature-inspired computation</li>
          <li>🌏 <span className="font-semibold text-blue-700">Global Odyssey</span><br/>Postdoc at Kyungpook National University (South Korea) → Professorship at Sejong University (Seoul) → Visiting Chair at VSB-TU Ostrava (Czech Republic)</li>
        </ul>

        <h3 className="text-lg font-bold mb-3">My Computational Toolkit</h3>
        <p className="mb-4">I build bridges between:</p>
        <ul className="space-y-2 mb-6">
          <li>🧠 <span className="font-semibold text-indigo-700">Evolutionary Intelligence</span> (Swarm optimization champion - IEEE CEC 2017/2020)</li>
          <li>👁️ <span className="font-semibold text-teal-700">Machine Perception</span> (Computer Vision & Deep Learning applications)</li>
          <li>⚡ <span className="font-semibold text-amber-700">Energy Systems</span> (Optimizing power networks with bio-inspired algorithms)</li>
        </ul>

        <h3 className="text-lg font-bold mb-3">Shaping the Scientific Landscape</h3>
        <p className="mb-4">
          As Associate Editor for <span className="font-semibold text-indigo-700">Swarm and Evolutionary Computation</span> and other top journals, I curate the future of computational intelligence while mentoring the next generation of researchers.
        </p>

        <h3 className="text-lg font-bold mb-3">Between Algorithms</h3>
        <p className="mb-4">You'll find me:</p>
        <ul className="space-y-2 mb-6">
          <li>☕ Switching between <span className="italic text-amber-700">litti-chokha</span> nostalgia and <span className="italic text-red-600">kimchi</span> adventures</li>
          <li>📚 Reviewing papers with the same intensity I once studied Bihar Board textbooks</li>
          <li>🌉 Connecting my Bihari roots to global research collaborations</li>
        </ul>

        <p className="font-semibold text-lg text-indigo-700">Let's Optimize the Future - Together</p>
      </div>
    </>
  );
}
