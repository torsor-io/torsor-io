import { BuildingLibraryIcon } from '@heroicons/react/24/solid';
import WaveBackground from '../shared/WaveBackground';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../shared/Navbar';
import { useState } from 'react';

const ConsultingPage = ({ isDark, setIsDark, waveState, setWaveState }) => {
  const [expandedCase, setExpandedCase] = useState(null);

  // Theme variables
  const textColor = isDark ? 'text-slate-100' : 'text-stone-600';
  const subtleText = isDark ? 'text-slate-300 font-comm' : 'text-stone-700 font-comm';
  const navText = isDark ? 'text-slate-300 font-comm' : 'text-stone-700 font-comm';
  const headerBg = isDark ? 'bg-slate-900/80' : 'bg-amber-50/70';
  const borderColor = isDark ? 'border-slate-800' : 'border-stone-300';
  const buttonBg = isDark ? 'bg-slate-800/50 hover:bg-slate-700/50' : 'bg-orange-100/50 hover:bg-orange-200';
  const gradientBg = isDark 
    ? 'bg-gradient-to-b from-slate-900 to-slate-1000' 
    : 'bg-gradient-to-b from-amber-50 to-amber-100';

  const cases = [
    {
      id: 'fidelity',
      logo: '/logos/fidelity.png',
      title: 'Fidelity Investments',
      brief: 'Developed novel quantum statistical methods for financial outlier detection, advancing fundamental understanding of QFT-based quantum machine learning applications in finance.',
      details: {
        challenge: 'Explore financial applications of QFT-based quantum machine learning.',
        approach: 'Developed a new non-parametric statistical test for outliers using quantum computing techniques.',
        innovation: 'Created novel synthesis of quantum Fourier transforms and classical statistical methods.',
        outcome: 'Advanced theoretical understanding of quantum applications in financial analysis.'
      }
    },
    {
      id: 'xanadu',
      logo: '/logos/xanadu.png',
      title: 'Xanadu',
      brief: 'Created a quantum adaptation of classical item analysis techniques, leading to breakthrough improvements in adaptive quantum Fourier transforms and significant reductions in sample complexity.',
      details: {
        challenge: 'Improve efficiency of quantum machine learning algorithms.',
        approach: 'Adapted Bahadur\'s classical item analysis to quantum context.',
        innovation: 'Developed new form of adaptive QFT with dramatically reduced sample complexity.',
        outcome: 'Theoretical breakthrough in quantum algorithm efficiency.'
      }
    },
    {
      id: 'unimelb',
      logo: '/logos/unimelb.png',
      title: 'University of Melbourne',
      brief: 'Designed core architecture for an interactive course planning system, now used by tens of thousands of students university-wide, demonstrating our ability to turn technical insights into scalable solutions.',
      details: {
        challenge: 'Create scalable, interactive course planning system for university students.',
        approach: 'Developed novel data structures and backend architecture.',
        innovation: 'Created flexible, extensible system that could scale across different faculties.',
        outcome: 'System adopted university-wide, serving tens of thousands of students.'
      }
    }
  ];
    
  return (
    <div className={`min-h-screen transition-colors`}>
      <div className="fixed top-0 left-0 w-full h-full z-[-5] opacity-50">
        <WaveBackground isDark={isDark} waveState={waveState} />
      </div>

      <div className={`fixed top-0 left-0 w-full h-full z-[-10] ${gradientBg} opacity-100 transition-colors`} />

      <div className="relative min-h-screen z-0">
        <Navbar 
          isDark={isDark}
          setIsDark={setIsDark}
          waveState={waveState}
          setWaveState={setWaveState}
          headerBg={headerBg}
          borderColor={borderColor}
          navText={navText}
          buttonBg={buttonBg}
        />

        <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {/* Research Consulting Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`rounded-xl p-6 border ${borderColor} ${headerBg} backdrop-blur-sm`}
            >
              <h2 className={`text-2xl font-bold ${textColor} mb-4`}>Research consulting</h2>
              <div className={`${subtleText}`}>
                <p className="mb-4">Torsor Labs offers research consulting on a number of topics, including:</p>
                <ul className="space-y-1 mb-4">
                  <li>• quantum software and algorithm design;</li>
                  <li>• metrology, signal processing and machine learning;</li>
                  <li>• technical outreach and education.</li>
                </ul>
                <p className="mb-4">
                  This leverages our domain expertise on quantum programming and QML and unique interdisciplinary perspective. 
                  As much as we like solving problems, we like helping clients ask the right questions even more. We can assist in:
                </p>
                <ul className="space-y-1 mb-4">
                  <li>• setting up open, creative, and effective research cultures;</li>
                  <li>• framing new research programs;</li>
                  <li>• conducting domain audits to help surface questions.</li>
                </ul>
                <p>
                  In short, we can teach you to fish, help you land the big one, or both. Get in touch to talk how we can help shape your research process!
                </p>
              </div>
            </motion.div>

            {/* Case Studies Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className={`rounded-xl p-6 border ${borderColor} ${headerBg} backdrop-blur-sm`}
            >
              <h2 className={`text-2xl font-bold ${textColor} mb-4`}>Case studies</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cases.map((study) => (
                  <motion.div
                    key={study.id}
                    className={`cursor-pointer rounded-lg border ${borderColor} overflow-hidden
                               ${isDark ? 'bg-slate-800/30' : 'bg-orange-50/30'}`}
                    onClick={() => setExpandedCase(expandedCase === study.id ? null : study.id)}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  >
                    <div className="p-4 space-y-3">
                      <img 
                        src={study.logo}
                        alt={study.title}
                        className="w-full h-12 object-contain mb-3"
                      />
                      <h3 className={`text-lg font-bold ${textColor}`}>{study.title}</h3>
                      <p className={`text-sm ${subtleText}`}>{study.brief}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <AnimatePresence>
                {expandedCase && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className={`mt-6 rounded-lg border ${borderColor} overflow-hidden
                              ${isDark ? 'bg-slate-800/30' : 'bg-orange-50/30'}`}
                  >
                    <div className="p-6 space-y-4">
                      <h3 className={`text-xl font-bold ${textColor}`}>
                        {cases.find(c => c.id === expandedCase)?.title}
                      </h3>
                      
                      {Object.entries(cases.find(c => c.id === expandedCase)?.details || {}).map(([key, value]) => (
                        <div key={key} className="space-y-2">
                          <h4 className={`font-bold ${textColor} capitalize`}>{key}</h4>
                          <p className={subtleText}>{value}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Contact Section */}
            <div className={`text-med text-center ${subtleText}`}>
              <a 
                href="mailto:community@torsor.io" 
                className={`inline-block ${buttonBg} ${textColor} text-l px-6 py-3 rounded-lg transition-colors border ${borderColor}`}
              >
                <BuildingLibraryIcon className={`h-6 w-6 ${textColor}`} />
              </a>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default ConsultingPage;
