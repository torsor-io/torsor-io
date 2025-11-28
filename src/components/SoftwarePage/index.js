import { CommandLineIcon } from '@heroicons/react/24/solid';
import WaveBackground from '../shared/WaveBackground';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../shared/Navbar';
import { useState } from 'react';

const SoftwarePage = ({ isDark, setIsDark, waveState, setWaveState }) => {
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
            {/* Paper Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`rounded-xl p-6 border ${borderColor} ${headerBg} backdrop-blur-sm`}
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Paper Image */}
          <div className="aspect-3/2 w-md overflow-hidden">
                  <img
                    src="/assets/img/wizard.png"
                    alt="Paper visualization"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Paper Details */}
                <div className="space-y-4">
                  <h2 className={`text-2xl font-bold ${textColor}`}>
          Learning <b className={`font-comfortaa ${textColor}`}>yaw</b>
      </h2>
                  <p className={`${subtleText}`}>
	  <b className={`font-comfortaa ${textColor} mb-3`}>yaw</b> will be a functional language for programming quantum computers (currently under development). If you want to see how to code quantumly with high-school algebra, you're in the right place!
	  </p>
	  <div className={`border-t ${borderColor} mb-4 mt-10`}></div>
<ul className="space-y-3">
    <li className={`${subtleText}`}>
          • <a 
        href="/assets/yaw101.html" 
        className={`hover:underline`}
      ><b className={`font-comfortaa ${textColor} mb-3`}>yaw 101</b></a>. This tutorial previews basic syntax, culminating in superdense coding.
	  </li>
  </ul>
                </div>
              </div>
            </motion.div>

            {/* Contact Section */}
            <div className={`text-med text-center ${subtleText}`}>
              <a 
                href="https://github.com/torsor-io" 
                className={`inline-block ${buttonBg} ${textColor} text-l px-6 py-3 rounded-lg transition-colors border ${borderColor}`}
              >
                <CommandLineIcon className={`h-6 w-6 ${textColor}`} />
          </a>
          </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default SoftwarePage;
