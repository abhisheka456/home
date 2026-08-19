import React from 'react';
import { IoFlaskOutline } from 'react-icons/io5';

const ResearchInterests = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Research Interests</h1>
      
      <div className="p-4 hover:bg-gray-50 transition-colors duration-200 rounded-lg">
        <div className="flex gap-4 items-start">
          <div className="flex-none p-3 bg-blue-100 rounded-lg shadow-sm">
            <IoFlaskOutline className="text-blue-700 text-3xl" />
          </div>
          <div className="flex-1">
            <div className="space-y-6">
              <p className="text-gray-800">
                My research is mainly centered around designing simple yet effective methods to address 
                a variety of Machine Learning Problems, Theoretical Analysis of Learning Algorithms, 
                Optimization Theory, and Application of Machine Learning and Optimization Algorithms 
                in the field of Computer Vision and Modern Power System.
              </p>

              <div className="space-y-4">
                <div className="bg-white border-4 border-blue-400 rounded-xl p-5 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <span className="text-blue-600 text-xl">🧠</span>
                    </div>
                    <h4 className="font-bold text-blue-800 text-lg">Core Research Domains</h4>
                  </div>
                  
                  <div className="space-y-4 pl-4">
                    <div>
                      <h5 className="font-medium text-gray-700">🤖 Machine Learning Development</h5>
                      <ul className="list-disc list-inside text-gray-600 pl-5 space-y-1">
                        <li>🛠️ Design of simple yet effective ML methods</li>
                        <li>📊 Theoretical analysis of learning algorithms</li>
                        <li>👁️🗨️ Applications in Computer Vision & Power Systems</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-medium text-gray-700">🌀 Unsupervised/Semi-supervised Learning</h5>
                      <ul className="list-disc list-inside text-gray-600 pl-5 space-y-1">
                        <li>✨ Enhanced clustering algorithms (noise-resistant variants)</li>
                        <li>🖼️ Applications in image segmentation and object detection</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-medium text-gray-700">📐 Theoretical Machine Learning</h5>
                      <ul className="list-disc list-inside text-gray-600 pl-5 space-y-1">
                        <li>🔄 Convergence analysis of clustering/classification</li>
                        <li>𝓓 Probability divergence measures</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-medium text-gray-700">🧬 Evolutionary Optimization</h5>
                      <ul className="list-disc list-inside text-gray-600 pl-5 space-y-1">
                        <li>⚙️ Novel algorithm variants for high-dimension problems</li>
                        <li>⚡ Applications in classifier optimization and power systems</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-medium text-gray-700">➕ Additional Interests</h5>
                  <ul className="list-disc list-inside text-gray-600 pl-5 space-y-1">
                    <li>🧩 Constraint handling techniques</li>
                    <li>🎯 Multi/many-objective optimization</li>
                    <li>🐘 Large-scale optimization</li>
                    <li>🔌 Power system applications</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchInterests;