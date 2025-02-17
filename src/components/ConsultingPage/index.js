// src/components/ProductsPage/index.js
import { RocketLaunchIcon } from '@heroicons/react/24/solid';
import WaveBackground from '../shared/WaveBackground';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../shared/Navbar';
import { useState } from 'react';

const ConsultingPage = ({ isDark, setIsDark, waveState, setWaveState }) => {
  const [expandedCase, setExpandedCase] = useState(null);
  
  const textColor = isDark ? 'text-slate-100' : 'text-stone-600';
  const subtleText = isDark ? 'text-slate-300' : 'text-stone-700';
  const headerBg = isDark ? 'bg-slate-900/80' : 'bg-amber-50/70';
  const borderColor = isDark ? 'border-slate-800' : 'border-stone-300';
  const cardBg = isDark ? 'bg-slate-800/50' : 'bg-orange-100/50';

  const caseStudies = [
    {
      id: 'fidelity',
      logo: '/logos/fidelity.png',
      title: 'Quantum ML for Financial Services',
      brief: 'Developed novel quantum machine learning approaches',
      details: `Led the development of innovative quantum machine learning techniques
                in collaboration with Fidelity Investments, focusing on...`
    },
    // Add other case studies
  ];

  return (
    <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Value Proposition */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <h1 className={`text-4xl font-bold mb-6 ${textColor}`}>
          Research-Driven Innovation
        </h1>
        <p className={`text-xl ${subtleText}`}>
          We bring mathematical depth and novel approaches to complex technical challenges,
          discovering insights that transform how you think about your problems.
        </p>
      </motion.section>

      {/* Areas of Expertise */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-16"
      >
        <h2 className={`text-2xl font-bold mb-6 ${textColor}`}>Areas of Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {['Quantum Computing Architecture', 'Hardware Co-design', 'Error Correction', 
            'Algorithm Design'].map((area, i) => (
            <div key={i} className={`p-4 rounded-lg ${cardBg} border ${borderColor}`}>
              <h3 className={`font-bold ${textColor}`}>{area}</h3>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Case Studies */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className={`text-2xl font-bold mb-6 ${textColor}`}>Case Studies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              className={`cursor-pointer p-4 rounded-lg ${cardBg} border ${borderColor}
                         hover:scale-105 transition-transform`}
              onClick={() => setExpandedCase(expandedCase === study.id ? null : study.id)}
            >
              <img 
                src={study.logo} 
                alt={study.title}
                className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {expandedCase && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`mt-4 p-6 rounded-lg ${cardBg} border ${borderColor}`}
            >
              <h3 className={`text-xl font-bold mb-4 ${textColor}`}>
                {caseStudies.find(s => s.id === expandedCase)?.title}
              </h3>
              <p className={subtleText}>
                {caseStudies.find(s => s.id === expandedCase)?.details}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>
    </main>
  );
};

export default ConsultingPage;
