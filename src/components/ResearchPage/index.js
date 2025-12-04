import { CommandLineIcon } from '@heroicons/react/24/solid';
import WaveBackground from '../shared/WaveBackground';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../shared/Navbar';
import { useState } from 'react';

const ResearchPage = ({ isDark, setIsDark, waveState, setWaveState }) => {
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

  const research = [
    {
      id: 'SIQP1',
      title: 'The Structure and Interpretation of Quantum Program I',
      organization: 'David Wakeham',
      type: 'Quantum',
      brief: 'We propose a new foundation for quantum programming, based on algebra rather than Hilbert space.',
      outcome: 'Qubits are a great way to build a quantum computer, but a limited way to program one. We replace the usual "states and gates" formalism with a "props and ops" (propositions and operators) model in which (a) the C*-algebra of observables supplies the syntax; (b) states, viewed as linear functionals, give the semantics; and (c) a novel diagrammatic calculus unifies the two.',
	link: 'https://arxiv.org/abs/2509.04527',
	tags: ['Quantum Computing', 'Programming', 'Algebra', 'Pedagogy']
    },
    {
      id: 'rocks',
      title: 'A Short History of Rocks: or, How to Invent Quantum Computing',
      organization: 'David Wakeham',
      type: 'Quantum',
      brief: 'An instructive fable consisting of (1) an account of digital logic from the Pleistocene to WWII, (2) an alternate timeline in which von Neumann invents quantum computing.',
      outcome: "This essay gives a short, informal account of the development of digital logic from the Pleistocene to the Manhattan Project, the introduction of reversible circuits, and Richard Feynman's allied proposal for quantum computing. We argue that Feynman's state-based analogy is not the only way to arrive at quantum computing, nor indeed the simplest. To illustrate, we imagine an alternate timeline in which John von Neumann skipped Operation Crossroads to debug a military computer, got tickled by the problem, and discovered a completely different picture of quantum computing — in 1946.",
      link: 'https://arxiv.org/abs/2503.00005',
	tags: ['Quantum Computing', 'Programming', 'Logic', 'Creative']
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

        <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
	     <img 
      src="/assets/rocks/rocks.png" 
      alt="Research header"
      className="w-98 h-98 object-cover rounded-xl mx-auto"
	  />
            <p className={`${subtleText}`}>
	  Recent research projects:
            </p>
          </motion.div>

          {/* Work Items */}
          <div className="space-y-4">
            {research.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`rounded-xl p-6 border ${borderColor} ${headerBg} backdrop-blur-sm
                           cursor-pointer transition-all hover:shadow-lg`}
                onClick={() => setExpandedCase(expandedCase === work.id ? null : work.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className={`text-xl font-bold ${textColor}`}>{work.title}</h3>
                      <span className={`px-2 py-1 text-xs rounded ${
                        isDark ? 'bg-slate-700 text-slate-300' : 'bg-orange-100 text-stone-700'
                      }`}>
                        {work.type}
                      </span>
                    </div>
                    <p className={`text-sm ${subtleText} mb-2`}>{work.organization}</p>
                    <p className={`${subtleText}`}>{work.brief}</p>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedCase === work.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`ml-4 ${textColor}`}
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>

                <AnimatePresence>
                  {expandedCase === work.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-opacity-30"
                      style={{ borderColor: isDark ? 'rgb(148 163 184)' : 'rgb(120 113 108)' }}
                    >
			  {/*                      <p className={`${textColor} font-medium mb-2`}>Outcome:</p>*/}
                      <p className={`${subtleText} mb-4`}>{work.outcome}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {work.tags.map(tag => (
                          <span
                            key={tag}
                            className={`px-3 py-1 text-sm rounded-full ${
                              isDark ? 'bg-slate-800 text-slate-300' : 'bg-orange-50 text-stone-700'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {work.link && (
                        <a
                          href={work.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 ${textColor} hover:underline`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>View preprint</span>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

        {/* Collaboration CTA */}
            <div className={`text-med text-center ${subtleText} mt-4`}>
              <a 
                href="https://github.com/torsor-io" 
                className={`inline-block ${buttonBg} ${textColor} text-l px-6 py-3 rounded-lg transition-colors border ${borderColor}`}
              >
                <CommandLineIcon className={`h-6 w-6 ${textColor}`} />
          </a>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ResearchPage;
