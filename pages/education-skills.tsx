import EducationCard from '../components/EducationCard';
import Layout from '@/components/Layout';

import ResearchInterests from '@/components/ResearchInterests';

const EducationSkills = () => {
  return (
    <Layout border="border-2">
      <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Education & Research Background</h1>
      
      <EducationCard
        degree="Ph.D in Systems Engineering"
        institution="Indian Institute of Technology (BHU), Varanasi"
        year="2020"
        details={[
          "🔬 Specialized in power system optimization algorithms",
          "📜 Thesis: 'Mathematical Algorithms for Power Distribution Systems' supervised by Dr. Rakesh Kumar Misra and Dr. Devender Singh",
          "🌐 Pioneered hybrid approaches combining nature-inspired computation with conventional methods",
          `🏆 Key contributions:
⚡ Developed novel constraint-handling techniques for ill-conditioned distribution systems
📈 Created metaheuristic solutions outperforming traditional methods
🔄 Designed iterative framework for islanded microgrid analysis`
        ]}
      />

      <EducationCard
        degree="B.Tech in Electrical Engineering"
        institution="Uttarakhand Technical University, Dehradun"
        year="2013"
        details={[
          "🎓 Graduated with 78% marks",
          "🔌 Foundation for subsequent research in power engineering"
        ]}
      />
      </div>
      <ResearchInterests />
    </Layout>
  );
};

export default EducationSkills;
