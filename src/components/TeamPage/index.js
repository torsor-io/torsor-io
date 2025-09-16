// src/components/ResearchPage/index.js
import { UserPlusIcon } from '@heroicons/react/24/solid';
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`rounded-xl p-6 border ${borderColor} ${headerBg} backdrop-blur-sm`}
            >
              <div className="grid md:grid-cols-2 gap-6">
<div className="space-y-4">
  <div className="aspect-auto rounded-lg overflow-hidden">
    <img
                    src="/assets/team/david.png"
                    alt="David Wakeham"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="aspect-auto rounded-lg overflow-hidden">
    <img
      src="/assets/team/jon-bw.jpeg"
      alt="Jon Male"
      className="w-full h-full object-cover"
    />
	  </div>
</div>
                
                <div className="space-y-4">
                  <h2 className={`text-2xl font-bold ${textColor}`}>
          Meet the Founders
      </h2>
                  <p className={`${subtleText} text-sm`}>
          David Wakeham • Founder & CEO
                  </p>
                  <p className={`${subtleText}`}>
          David has a <a href="https://hapax.github.io/assets/ubc_2022_november_wakeham_david.pdf" className={`hover:underline`}>PhD</a> in string theory and black holes (UBC 2022), a masters degree in particle physics, and undergraduate degrees in philosophy and math. Before going rogue, he worked at <a href="https://www.xanadu.ai/" className={`hover:underline`}>Xanadu</a> (2022–25). He now gets to fulfil a lifelong dream of interdimensional wizardry.
                  </p>
                 <div className="flex space-x-4">
                    
                      <a href="https://hapax.github.io/"
                      className={`${buttonBg} ${textColor} px-4 py-2 rounded-lg transition-colors text-sm`}
                    >
                      Blog
      </a>

                            <a href="https://scholar.google.com/citations?user=WAgYEwYAAAAJ&hl=en"
                      className={`${buttonBg} ${textColor} px-4 py-2 rounded-lg transition-colors text-sm`}
                    >
                      Google Scholar
      </a>
          </div>
	                    <div className="flex space-x-4">

                  </div>
                  <p className={`${subtleText} text-sm !mt-24`}>
          Jon Male • Founder
                  </p>
                  <p className={`${subtleText} !mb-24`}>
	  Jon is a seasoned technologist and entrepreneur with deep expertise in building innovative software platforms. As CTO of Axium for sixteen years, he architected <a href="https://www.deltek.com/en/erp/ajera" className={`hover:underline`}>Ajera</a>, a comprehensive ERP system for architecture and engineering firms that was later acquired by Deltek. The founder of <a href="https://mindfulos.org/" className={`hover:underline`}>mindfulOS</a>, he's pioneering ethical alternatives to conventional media platforms for young children.
                  </p>
                  <div className="flex space-x-4">

                  </div>

                </div>
              </div>
            </motion.div>
      
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`rounded-xl p-6 border ${borderColor} ${headerBg} backdrop-blur-sm`}
            >
              <div className="grid md:grid-cols-2 gap-6">
<div className="space-y-4">
  <div className="aspect-auto rounded-lg overflow-hidden">
    <img
      src="/assets/team/jude.jpeg"
      alt="Jude McDonald"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="aspect-auto rounded-lg overflow-hidden">
    <img
      src="/assets/team/mike-bw.jpg"
      alt="Michael Kinach"
      className="w-full h-full object-cover"
    />
	  </div>
  <div className="aspect-auto rounded-lg overflow-hidden">
    <img
      src="/assets/team/mieke.png"
      alt="Mieke Westenbroek"
      className="w-full h-full object-cover"
    />
  </div>
</div>
                
                <div className="space-y-4">
                  <h2 className={`text-2xl font-bold ${textColor}`}>
          Meet the Team
      </h2>
                  <p className={`${subtleText} text-sm`}>
          Jude McDonald • Research intern
                  </p>
                  <p className={`${subtleText} !mb-20`}>
          Jude studies physics and mathematics at the University of Victoria. He participated in the Quantum School for Young Students (QSYS) at UWaterloo, connecting promising students with world-leading quantum researchers. At Torsor, Jude focuses on the algebraic foundations of Yaw.
                  </p>
                  <div className="flex space-x-4">

                  </div>
                  <p className={`${subtleText} text-sm !mt-22`}>
          Michael Kinach • Scientific consultant
                  </p>
                  <p className={`${subtleText}`}>
          Michael holds a PhD in physics from the University of British Columbia. With a research background in high-performance computing and numerical analysis, he specializes in the design of algorithms and simulation tools for classical and quantum systems. At Torsor Labs, Michael focuses on making rad educational resources.
                  </p>
                  <div className="flex space-x-4 !mb-24">
                    
                      <a href="https://kinach.ca/"
                      className={`${buttonBg} ${textColor} px-4 py-2 rounded-lg transition-colors text-sm`}
                    >
                      Website
      </a>
	  </div>
	                    <div className="flex space-x-4">

                  </div>
                  <p className={`${subtleText} text-sm !mt-24`}>
          Mieke Westenbroek • Product/strategy consultant
                  </p>
                  <p className={`${subtleText} !mb-24`}>
	  Mieke holds an MSc in Management, specializing in Strategy & Entrepreneurship, from Catolica Lisbon School of Business and Economics. Her background is in product management and strategy, with a passion for helping companies develop, align and deliver strategies and products that deliver human value. At Torsor, Mieke works on business strategy. 
                  </p>
                  <div className="flex space-x-4">

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

{/* <p className={`${subtleText}`}>Applying is simple! Please visit the <a href="/#puzzle" className={`hover:underline`}><tt>fbr</tt> terminal</a> and submit an application using the command <tt>dice > mail</tt>.</p>*/}
<p className={`${subtleText}`}>Visit the <a href="/#puzzle" className={`hover:underline`}>terminal</a> and roll <tt>dice > mail</tt> to express interest. Or join our Slack below!</p>
</motion.div>
      
            {/* Existing Subscribe Section */}
            <div className={`text-med text-center ${subtleText}`}>
              <br/>
              <a 
                href="https://join.slack.com/t/torsorlabs/shared_invite/zt-3d0j63xua-~4~9OS~R_M1PntnVRlH8uA"
                className={`inline-block ${buttonBg} ${textColor} text-l px-6 py-3 rounded-lg transition-colors border ${borderColor}`}
              >
                <UserPlusIcon className={`h-6 w-6 ${textColor}`} />
              </a>
              <p></p>
            </div>

          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default TeamPage;
