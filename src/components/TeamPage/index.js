// src/components/ResearchPage/index.js
import { RocketLaunchIcon } from '@heroicons/react/24/solid';
import WaveBackground from '../shared/WaveBackground';
import { motion } from 'framer-motion';
import Navbar from '../shared/Navbar';

const TeamPage = ({ isDark, setIsDark, waveState, setWaveState }) => {

      // Theme variables (matching your AboutPage)
  const textColor = isDark ? 'text-slate-100' : 'text-stone-600';
  const subtleText = isDark ? 'text-slate-300 font-comm' : 'text-stone-700 font-comm';
  const navText = isDark ? 'text-slate-300 font-comm' : 'text-stone-700 font-comm';
  const headerBg = isDark ? 'bg-slate-900/80' : 'bg-amber-50/70';
  const borderColor = isDark ? 'border-slate-800' : 'border-stone-300';
  const buttonBg = isDark ? 'bg-slate-800/50 hover:bg-slate-700/50' : 'bg-orange-100/50 hover:bg-orange-200';
  const gradientBg = isDark 
  ? 'bg-gradient-to-b from-slate-900 to-slate-1000' 
	: 'bg-gradient-to-b from-amber-50 to-amber-100';
    
  return (
    <div className={`min-h-screen transition-colors`}>
      	{/* Keep wave fixed */}
	    <div className="fixed top-0 left-0 w-full h-full z-[-5] opacity-50">
	    <WaveBackground isDark={isDark} waveState={waveState} />
	  </div>

      <div className={`fixed top-0 left-0 w-full h-full z-[-10] ${gradientBg} opacity-100 transition-colors`} />

	  <div className="relative min-h-screen z-0">
      {/* Navbar */}
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

        {/* Main Content */}
        <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {/* Paper Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`rounded-xl p-6 border ${borderColor} ${headerBg} backdrop-blur-sm`}
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Paper Image */}
                <div className="aspect-auto rounded-lg overflow-hidden">
                  <img
                    src="/assets/team/david.png"
                    alt="Paper visualization"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Paper Details */}
                <div className="space-y-4">
                  <h2 className={`text-2xl font-bold ${textColor}`}>
          Meet the Founder
      </h2>
                  <p className={`${subtleText} text-sm`}>
          David Wakeham • Founder & Interdimensional Wizard
                  </p>
                  <p className={`${subtleText}`}>
          David has a PhD in string theory and black holes (UBC 2022), a masters degree in particle physics, and undergraduate degrees in philosophy and math. He worked at <a href="https://www.xanadu.ai/">Xanadu</a> (2022–25) where he was one of the architects of the <a href="https://pennylane.ai/codebook" className={`hover:underline`}>PennyLane Quantum Codebook</a>, created the company's first <a href="https://pennylane.ai/qml/demos/circuits_as_fourier_series" className={`hover:underline`}>first interactive demos</a>, <a href="https://pennylane.ai/blog/2024/04/quantum_transformers" className={`hover:underline`}>thought critically</a> about quantum and LLMs, and invented <a href="https://arxiv.org/abs/2409.00172" className={`hover:underline`}>new ways</a> to use quantum computers for AI. He has a wide range of interests and likes to combine them in unexpected ways.
                  </p>
                  <div className="flex space-x-4">
                    
                      <a href="https://hapax.github.io/"
                      className={`${buttonBg} ${textColor} px-4 py-2 rounded-lg transition-colors text-sm`}
                    >
                      Personal website
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

{/* Join us */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  className={`rounded-xl p-6 border ${borderColor} ${headerBg} backdrop-blur-sm`}
>

<p className={`${subtleText}`}>
If you'd like to learn more about careers, please first visit the <a href="/#puzzle" className={`hover:underline`}>terminal</a> and try <tt>dice > mail</tt>.
</p>
</motion.div>
      
            {/* Existing Subscribe Section */}
            <div className={`text-med text-center ${subtleText}`}>
              <br/>
              <a 
                href="mailto:contact@torsor.io?subject=Subscribe&body=Please add me to the Torsor Labs mailing list!"
                className={`inline-block ${buttonBg} ${textColor} text-l px-6 py-3 rounded-lg transition-colors border ${borderColor}`}
              >
                <RocketLaunchIcon className={`h-6 w-6 ${textColor}`} />
              </a>
              <p>Subscribe for updates!</p>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default TeamPage;
