// src/components/ResearchPage/index.js
import { RocketLaunchIcon } from '@heroicons/react/24/solid';
import WaveBackground from '../shared/WaveBackground';
import { motion } from 'framer-motion';
import Navbar from '../shared/Navbar';

const ResearchPage = ({ isDark, setIsDark, waveState, setWaveState }) => {
  // ... existing theme variables ...

  return (
    <div className={`min-h-screen transition-colors`}>
      {/* ... existing wave and gradient backgrounds ... */}
      
      <div className="relative min-h-screen z-0">
        <Navbar {...navbarProps} />

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
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img
                    src="/path-to-your-paper-image.png"
                    alt="Paper visualization"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Paper Details */}
                <div className="space-y-4">
                  <h2 className={`text-2xl font-bold ${textColor}`}>
                    Your Paper Title
                  </h2>
                  <p className={`${subtleText} text-sm`}>
                    Authors • Date
                  </p>
                  <p className={`${subtleText}`}>
                    Your edited abstract goes here. Make it engaging and accessible
                    while maintaining academic rigor.
                  </p>
                  <div className="flex space-x-4">
                    
                      href="/assets/rocks.pdf"
                      className={`${buttonBg} ${textColor} px-4 py-2 rounded-lg transition-colors text-sm`}
                    >
                      Read Paper
                    </a>
                    
                      href="/path-to-code"
                      className={`${buttonBg} ${textColor} px-4 py-2 rounded-lg transition-colors text-sm`}
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Existing Subscribe Section */}
            <div className={`text-lg text-center ${subtleText}`}>
              <p>More research papers, learning resources, and library coming soon.</p>
              <br/>
              <a 
                href="mailto:contact@rsh.dev?subject=Subscribe&body=Please add me to the Redshift Labs mailing list!"
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

export default ResearchPage;
