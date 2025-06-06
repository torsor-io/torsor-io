// src/components/CommunityPage/index.js
import { CodeBracketSquareIcon } from '@heroicons/react/24/solid';
import WaveBackground from '../shared/WaveBackground';
import { motion } from 'framer-motion';
import Navbar from '../shared/Navbar';

const CommunityPage = ({ isDark, setIsDark, waveState, setWaveState }) => {

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
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
          >

{/* Education Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`rounded-xl p-6 border ${borderColor} ${headerBg} backdrop-blur-sm`}
            >
              <h2 className={`text-2xl font-bold ${textColor} mb-4`}>
                Education
              </h2>
              <div className={`${subtleText}`}>
                <p className="mb-4">
                  Tutorials, guides, and learning resources for quantum computing and related technologies.
                </p>
                <ul className="space-y-1">
                  <li>• <i>Coming soon: </i>Learning guides</li>
                  <li>• <i>Coming soon:</i> Hacking reality</li>
      {/* Add more educational resources as they become available */}
                </ul>
              </div>
            </motion.div>

            {/* Open Source Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className={`rounded-xl p-6 border ${borderColor} ${headerBg} backdrop-blur-sm`}
            >
              <h2 className={`text-2xl font-bold ${textColor} mb-4`}>
                Open source
              </h2>
              <div className={`${subtleText}`}>
                <p className="mb-4">
          Open source projects and documentation.
                </p>
                <ul className="space-y-1">
                  <li>• <i>Coming soon:</i> The YAW Algebraic Way</li>
                  <li>• <i>Coming soon:</i> Contribution guidelines</li>
      {/* Add more open source projects as they become available */}
                </ul>
              </div>
            </motion.div>

            {/* Subscribe Section */}
          <div className={`text-med text-center ${subtleText}`}>
	  <a 
                href="https://github.com/torsor-io" className={`inline-block ${buttonBg} ${textColor} text-l px-6 py-3 rounded-lg transition-colors border ${borderColor}`}
>
            <CodeBracketSquareIcon className={`h-6 w-6  ${textColor}`} />
          </a>
	  <p></p>
	  </div>

	 </motion.div>
	  </main>
      
	  </div>
    </div>
  );
};

export default CommunityPage;
