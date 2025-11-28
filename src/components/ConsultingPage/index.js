import { BeakerIcon } from '@heroicons/react/24/solid';
import WaveBackground from '../shared/WaveBackground';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../shared/Navbar';
import { useState } from 'react';

const SelectedWorkPage = ({ isDark, setIsDark, waveState, setWaveState }) => {
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

  const selectedWork = [
    {
      id: 'qml-research',
      title: 'Novel QML Framework',
      organization: 'Xanadu Quantum Technologies',
      type: 'Research',
      brief: 'Devised a new approach to quantum machine learning based on the Hidden Subgroup Problem.',
      outcome: 'The Hidden Subgroup Problem is the simplest and most beautiful example of exponential quantum advantage, and generalizes Shor\'s famous algorithm. In this project, we found a way to ground concrete quantum machine learning algorithms in hidden subgroup inference.',
      link: 'https://arxiv.org/abs/2409.00172', // Can add arxiv link if desired
      tags: ['Quantum Computing', 'Machine Learning', 'Research']
    },
    {
      id: 'quantum-codebook',
      title: 'Xanadu Quantum Codebook',
      organization: 'Xanadu Quantum Technologies',
      type: 'Curriculum',
      brief: 'Co-developed interactive, code-first textbook on quantum computing.',
      outcome: 'Used at 100+ universities worldwide. Accessible pedagogical resource for quantum computing.',
      link: 'https://pennylane.ai/codebook',
      tags: ['Education', 'Quantum Computing', 'Curriculum']
    },
    {
      id: 'course-planner',
      title: 'University Course Planner',
      organization: 'University of Melbourne',
      type: 'Software',
      brief: 'Built prototype for student-facing course planner at the University of Melbourne.',
      outcome: 'To actually build a realistic course plan, you need to take degree requirements into account, such as total credit and major structure, as well individual course prerequisites, scheduling, and availability. Students may also want to explore where courses lead ("post-requisites"), and need an intuitive interface that lets them iteratively plan. The course planner provides all this and more, with some fun data structures I developed under the hood.',
      link: 'https://students.unimelb.edu.au/your-course/manage-your-course/planning-your-course-and-subjects/faculty-course-planning-resources/my-course-planner',
      tags: ['Software', 'Education', 'UX Design']
    },
    {
      id: 'physics-outreach',
      title: 'Physics Education & Outreach',
      organization: 'UBC Physics Circle, VISST, Teen Nerd Nite',
      type: 'Outreach',
      brief: 'Created and delivered physics programs for young scientists, from weekly problem-solving sessions to summer camps on black holes.',
      outcome: 'Reached hundreds of students. Made frontier physics accessible through elegant shortcuts and visual intuition.',
      link: 'https://hapax.github.io/outreach/',
      tags: ['Education', 'Outreach', 'Physics']
    },
    {
      id: 'creative-synthesis',
      title: 'Cross-Domain Creative Work',
      organization: 'Independent',
      type: 'Creative',
      brief: 'Technical writing, physics pedagogy, mathematical art, philosophical essays, and alchemical studies spanning quantum computing, relativity, and operator algebras.',
      outcome: 'Demonstrates capacity for interdisciplinary synthesis and pattern recognition across multiple modalities.',
      link: 'https://hapax.github.io/',
      tags: ['Research', 'Art', 'Philosophy', 'Writing']
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
            className="mb-12"
          >
            <h2 className={`text-4xl font-bold ${textColor} mb-4`}>Selected Work</h2>
            <p className={`text-lg ${subtleText} max-w-2xl`}>
	  Sort of like a CV, but less boring!
            </p>
          </motion.div>

          {/* Work Items */}
          <div className="space-y-4">
            {selectedWork.map((work, index) => (
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={`mt-12 rounded-xl p-8 border ${borderColor} ${headerBg} backdrop-blur-sm text-center`}
          >
            <BeakerIcon className={`h-12 w-12 ${textColor} mx-auto mb-4`} />
            <h3 className={`text-2xl font-bold ${textColor} mb-3`}>Interested in collaborating?</h3>
            <p className={`${subtleText} mb-6 max-w-xl mx-auto`}>
              I work on paradigm-shift research at the intersection of quantum computing, 
              operator algebras, and fundamental physics. Open to exploring collaborations 
              that value depth over speed.
            </p>
            <a 
              href="mailto:david@torsor.io" 
              className={`inline-block ${buttonBg} ${textColor} px-8 py-3 rounded-lg 
                         transition-colors border ${borderColor} hover:scale-105 transform`}
            >
              Get in touch
            </a>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default SelectedWorkPage;
