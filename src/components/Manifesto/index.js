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

const Manifesto = ({ isDark, setIsDark, waveState, setWaveState }) => {
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
  const cardBgOff = isDark ? 'bg-slate-800/20' : 'bg-orange-100/20';
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
<div class="flex justify-center items-center">
  <a href="/#puzzle">
    <img 
      src={logo} 
      alt="Torsor Logo" 
      class="mx-auto max-w-md w-full"
    />
  </a>
</div>
          </p>
        </motion.div>


	        {/* Mission Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto"
            >
	    <p className={`${subtleText} text-lg`}>
	    Borges <a href="https://www.labster8.net/wp-content/uploads/2019/09/The-Fearful-Sphere-of-Pascal.pdf">writes</a> about the metaphor of the infinite sphere, whose
	center is everywhere but whose circumference is nowhere. This notion starts with Hermes Tresmegistus as an assertion of the intelligibility of God, but ends with
	    Pascal as a statement of the unknowability of Nature, or imprisonment and loss. Pascal calls it a "fearful sphere"; although Borges invents this quote, Pascal <a href="https://www.penseesdepascal.fr/Transition/Transition7-moderne.php">did write</a> <i>Le silence éternel de ces espaces infinis m’effraie</i>, or "The eternal silence of these infinite spaces frightens me."
        </p>
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

export default Manifesto;
