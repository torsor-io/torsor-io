import { FilmIcon } from '@heroicons/react/24/solid';
import WaveBackground from '../shared/WaveBackground';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../shared/Navbar';
import { useState } from 'react';

const CommunityPage = ({ isDark, setIsDark, waveState, setWaveState }) => {
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

  const community = [
    {
      id: 'yaw',
      title: 'yaw: Algebraic Quantum Programming',
      organization: 'Torsor Labs',
      type: 'Quantum',
      brief: 'Tutorials and other documentation for yaw, an algebraic quantum language written in Python.',
      outcome: (
      <ul className="list-disc list-inside space-y-2">
        <li>
              <a href="/assets/library/yaw/yaw011.html" className="underline hover:opacity-70">Tutorial 1: Getting started</a>
          {'. '} A first tutorial on running <code>yaw</code>.
              </li>
        <li>
              <a href="/assets/library/yaw/teleport.html" className="underline hover:opacity-70">Tutorial 2: Teleportation</a>
          {'. '} How to teleport quantum states in <code>yaw</code>. Exercises to come!
          </li>
      </ul>
    ),
	link: 'https://github.com/torsor-io/yaw',
	tags: ['Quantum Computing', 'Programming', 'Algebra', 'Pedagogy']
    },
    {
      id: 'P^4',
      title: 'P⁴: Pedagogical Pre-PrePrints',
      organization: 'Torsor Labs',
      type: 'Various',
      brief: 'A library of friendly, unpolished notes on various topics.',
      outcome: (
      <ul className="list-disc list-inside space-y-2">
              <li>
              <a href="/assets/library/duality-PI/PI-talk.html" className="underline hover:opacity-70">Duality from Stone to Isbell (2025)</a>
              {': '} A tour through duality theorems in logic, algebra, and category theory.
              </li>
        <li>
              <a href="/assets/library/stable-diffusion/stable-diffusion.html" className="underline hover:opacity-70">Diffusion models (2024)</a>
          {': '} How can you train a model to hallucinate data from noise?
              </li>
        <li>
              <a href="/assets/library/svm/svm.html" className="underline hover:opacity-70">Transformers as SVMs (2024)</a>
          {': '} Linear attention is a support vector machine!
          </li>
              <a href="/assets/library/rep-learn/rep-learn.html" className="underline hover:opacity-70">Symmetry disentangled features (2023)</a>
          {': '} A cool connection between feature learning and group theory.
          </li>
      </ul>
    ),
      link: '',
	tags: ['Quantum Computing', 'Machine Learning', 'Logic', 'Mathematics', 'Statistics']
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
      src="/assets/img/wizard.png" 
      alt="Community header"
      className="h-80 object-cover rounded-xl mx-auto"
	  />
          </motion.div>

          {/* Work Items */}
          <div className="space-y-4">
            {community.map((work, index) => (
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
                          <span>View project</span>
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
            <div className={`text-med text-center ${subtleText} mt-8`}>
              <a 
                href="https://www.youtube.com/@torsor_labs" 
                className={`inline-block ${buttonBg} ${textColor} text-l px-6 py-3 rounded-lg transition-colors border ${borderColor}`}
              >
                <FilmIcon className={`h-6 w-6 ${textColor}`} />
          </a>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CommunityPage;
