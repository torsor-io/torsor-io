// src/components/AboutPage/index.js
import WaveBackground from '../shared/WaveBackground';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import LogoDay from '../../assets/logoday.png';
import LogoNight from '../../assets/logonight.png';

const AboutPage = ({ isDark, setIsDark, waveState, setWaveState }) => {
  const location = useLocation();
  const frameRect = location.state?.frameRect;

// Calculate initial styles based on frame position
  const initial = frameRect ? {
    position: 'fixed',
    left: frameRect.left,
    top: frameRect.top,
    width: frameRect.width,
    height: frameRect.height,
    scale: 1,
  } : {
    opacity: 0,
  };
    
  const textColor = isDark ? 'text-slate-100' : 'text-stone-600';
  const subtleText = isDark ? 'text-slate-300 font-comm' : 'text-stone-700 font-comm';
  const navText = isDark ? 'text-slate-300 font-comm' : 'text-stone-700 font-comm';
  const headerBg = isDark ? 'bg-slate-900/80' : 'bg-amber-50/70';
  const borderColor = isDark ? 'border-slate-800' : 'border-stone-300';
  const cardBg = isDark ? 'bg-slate-800/50' : 'bg-orange-100/50';
  const buttonBg = isDark ? 'bg-slate-800/50 hover:bg-slate-700/50' : 'bg-orange-100/50 hover:bg-orange-200';
    const logo = isDark ? LogoNight : LogoDay;
    const footerColor = isDark ? 'to-slate-1000' : 'to-amber-100'
  const gradientBg = isDark 
  ? 'bg-gradient-to-b from-slate-900 to-slate-1000' 
	: 'bg-gradient-to-b from-amber-50 to-amber-100';
    
    return (
	<AnimatePresence>
      <motion.div 
        initial={initial}
        animate={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: 'auto',
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          ease: [0.45, 0, 0.55, 1], // Smooth easing
        }}
        className={`min-h-screen ${gradientBg} transition-colors -z-10`}
	    >
	
	    <div className={`min-h-screen transition-colors duration-800`}>

      	{/* Keep wave fixed */}
	    <div className="fixed top-0 left-0 w-full h-full -z-20 opacity-50">
	    <WaveBackground isDark={isDark} waveState={waveState} />
	  </div>
	
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
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
            >
	
	    <h1 className={`font-young text-4xl sm:text-5xl font-bold ${textColor} mb-6`}>
	</h1>
	    <p className={`text-xl ${subtleText} max-w-3xl mx-auto font-poppins`}>
	    <div className="mb-4 flex justify-center items-center">	    <img
	src={logo}
      alt="Torsor Logo" 
      className="w-1/2 h-1/2 object-cover"
	    />
	    </div>
            <b>Torsor Labs</b> is performs fundamental research on quantum computing, AI, and distributed systems.
	    We offer bespoke research consulting, develop open source software, and create high-quality educational materials in order to make the benefits of our work available.
          </p>
        </motion.div>

	<motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
            >

        {/* Projects Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {/* Yaw Card */}
<div className={`${cardBg} rounded-lg p-6 border ${borderColor}`}>
  <h3 className={`font-comfortaa text-2xl font-bold ${textColor} mb-3`}><a href="#yaw">yaw</a></h3>
  <p className={subtleText}>
            Can quantum programming be more than machine code? And how does this tie into near-term applications?
            </p> 
          </div>

          {/* Sigil Card */}
<div className={`${cardBg} rounded-lg p-6 border ${borderColor}`}>
  <h3 className={`font-comfortaa text-2xl font-bold ${textColor} mb-3`}>ςil</h3>
  <p className={subtleText}>
            How can we future-proof our Turing tests? Are there ways to enforce chains of trust in distributed agent workflows?
            </p>
          </div>

          {/* Paχ Card */}
<div className={`${cardBg} rounded-lg p-6 border ${borderColor}`}>
  <h3 className={`font-comfortaa font-bold text-2xl ${textColor} mb-3`}>paχ</h3>
  <p className={subtleText}>
            If trust is the main concern, are fully decentralized protocols actually necessary, or is partial centralization possible?
            </p>
          </div>
            </motion.div>
	    </motion.div>


	        {/* Mission Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto text-center"
        >
<h2 className={`text-3xl font-comfortaa font-bold ${textColor} mb-6`}><a href="/#puzzle">Shaped by difference.</a></h2>
	    <p className={`${subtleText} text-lg mb-8`}>
	    Inspired by places like Bell Labs, we believe discovery is not only the result of hard work, but a creative alchemy of play, wonder, and the sense of mission attached to urgent problems. We also believe in making our ideas accessible, and crafting tools that improve people's lives.
          </p>
<p className={`${subtleText} text-lg mb-8`}>
Check out <a href="#team" className="underline">careers</a> if this sounds like your jam!
</p>
          <a 
  href="mailto:contact@torsor.io"
  className={`inline-block ${buttonBg} ${textColor} text-l px-6 py-3 rounded-lg transition-colors border ${borderColor}`}
>
            <ChatBubbleBottomCenterTextIcon className={`h-6 w-6  ${textColor}`} />
          </a>
        </motion.div>
      </main>

      {/* Footer */}
      <Footer 
  subtleText={subtleText}
  borderColor={borderColor}
  footerColor={footerColor}
      />
    </div>
</motion.div>
    </AnimatePresence>
  );
};

export default AboutPage;
