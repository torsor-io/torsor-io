// src/components/ResearchPage/index.js
import { AcademicCapIcon } from '@heroicons/react/24/solid';
import WaveBackground from '../shared/WaveBackground';
import { motion } from 'framer-motion';
import Navbar from '../shared/Navbar';

const ResearchPage = ({ isDark, setIsDark, waveState, setWaveState }) => {

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
                    src="/assets/rocks/johnny.png"
                    alt="Paper visualization"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Paper Details */}
                <div className="space-y-4">
                  <h2 className={`text-2xl font-bold ${textColor}`}>
          A Short History of Rocks
      </h2>
                  <p className={`${subtleText} text-sm`}>
          David Wakeham • February 17, 2025
                  </p>
                  <p className={`${subtleText}`}>
                    This essay gives a short, informal account of the development of digital logic from the Pleistocene to the Manhattan Project, reversible circuits, and Richard Feynman’s allied proposal for quantum computing. We argue that Feynman’s state-based analogy is not the only way to arrive at quantum computing, nor indeed the simplest. To illustrate, we imagine an alternate timeline in which John von Neumann skipped Operation Crossroads to debug a military computer, got tickled by the problem, and discovered a completely different picture of quantum computing in 1946.
                  </p>
                  <div className="flex space-x-4">
                    
                      <a href="/assets/rocks/rocks.pdf"
                      className={`${buttonBg} ${textColor} px-4 py-2 rounded-lg transition-colors text-sm`}
                    >
                      Read Paper
      </a>

      <a href="https://arxiv.org/abs/2503.00005"
                      className={`${buttonBg} ${textColor} px-4 py-2 rounded-lg transition-colors text-sm`}
                    >
                      arXiv
      </a>
                  </div>
                </div>
              </div>
            </motion.div>

{/* Talks and Posters Section */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  className={`rounded-xl p-6 border ${borderColor} ${headerBg} backdrop-blur-sm`}
>
  <h2 className={`text-2xl font-bold ${textColor} mb-4`}>
    Talks and Posters
  </h2>
  <ul className="space-y-3">
    <li>
      <a 
        href="/assets/PI-talk/PI-talk" 
        className={`${subtleText} hover:underline`}
      >
          • "An algebraic foundation for quantum programming".
	   <i>Seminar, Perimeter Institute</i>, Feb 25, 2025.</a>
	  </li>
    <li>
      <a 
        href="/assets/qdays-poster.pdf" 
        className={`${subtleText} hover:underline`}
      >
          • "An new foundation for quantum programming".
      </a> <a href="https://2025.quantumdays.ca/" className={`${subtleText}`}><i>Quantum Days</i>, Feb 19–21, 2025.</a>
	  </li>
    {/* Add more talks/posters as needed */}
  </ul>
</motion.div>
      
            {/* Existing Subscribe Section */}
            <div className={`text-med text-center ${subtleText}`}>
          <br/>
              <a 
                href="mailto:research@torsor.io"
                className={`inline-block ${buttonBg} ${textColor} text-l px-6 py-3 rounded-lg transition-colors border ${borderColor}`}
              >
                <AcademicCapIcon className={`h-6 w-6 ${textColor}`} />
          </a>
	  	  <p></p>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default ResearchPage;
