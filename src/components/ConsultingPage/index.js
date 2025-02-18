const CaseStudies = ({ isDark, textColor, subtleText, borderColor }) => {
  const [activeCase, setActiveCase] = useState('fidelity');
  
  const cases = [
    {
      id: 'fidelity',
      logo: '/logos/fidelity.png',
      title: 'Fidelity Investments',
      brief: 'Developed novel quantum statistical methods for financial outlier detection, advancing fundamental understanding of QFT-based quantum machine learning applications in finance.',
      details: {
        challenge: 'Explore financial applications of QFT-based quantum machine learning.',
        approach: 'Developed a new non-parametric statistical test for outliers using quantum computing techniques.',
        innovation: 'Created novel synthesis of quantum Fourier transforms and classical statistical methods.',
        outcome: 'Advanced theoretical understanding of quantum applications in financial analysis.'
      }
    },
    {
      id: 'xanadu',
      logo: '/logos/xanadu.png',
      title: 'Xanadu',
      brief: 'Created a quantum adaptation of classical item analysis techniques, leading to breakthrough improvements in adaptive quantum Fourier transforms and significant reductions in sample complexity.',
      details: {
        challenge: 'Improve efficiency of quantum machine learning algorithms.',
        approach: 'Adapted Bahadur\'s classical item analysis to quantum context.',
        innovation: 'Developed new form of adaptive QFT with dramatically reduced sample complexity.',
        outcome: 'Theoretical breakthrough in quantum algorithm efficiency.'
      }
    },
    {
      id: 'unimelb',
      logo: '/logos/unimelb.png',
      title: 'University of Melbourne',
      brief: 'Designed core architecture for an interactive course planning system, now used by tens of thousands of students university-wide, demonstrating our ability to turn technical insights into scalable solutions.',
      details: {
        challenge: 'Create scalable, interactive course planning system for university students.',
        approach: 'Developed novel data structures and backend architecture.',
        innovation: 'Created flexible, extensible system that could scale across different faculties.',
        outcome: 'System adopted university-wide, serving tens of thousands of students.'
      }
    }
  ];

  return (
    <div className="space-y-6">
      {/* Logo Tabs */}
      <div className="flex justify-center space-x-8">
        {cases.map((study) => (
          <motion.button
            key={study.id}
            onClick={() => setActiveCase(study.id)}
            className={`p-4 rounded-lg transition-all
                      ${activeCase === study.id ? 
                        (isDark ? 'bg-slate-800/30' : 'bg-orange-50/30') : 
                        'bg-transparent'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src={study.logo}
              alt={study.title}
              className={`h-10 w-auto object-contain transition-opacity
                         ${activeCase === study.id ? 'opacity-100' : 'opacity-50'}`}
            />
          </motion.button>
        ))}
      </div>

      {/* Content Area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className={`rounded-lg border ${borderColor} overflow-hidden
                     ${isDark ? 'bg-slate-800/30' : 'bg-orange-50/30'} p-6`}
        >
          <div className="space-y-4">
            <h3 className={`text-xl font-bold ${textColor}`}>
              {cases.find(c => c.id === activeCase)?.title}
            </h3>
            <p className={subtleText}>
              {cases.find(c => c.id === activeCase)?.brief}
            </p>
            
            {Object.entries(cases.find(c => c.id === activeCase)?.details || {}).map(([key, value]) => (
              <div key={key} className="space-y-2">
                <h4 className={`font-bold ${textColor} capitalize`}>{key}</h4>
                <p className={subtleText}>{value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CaseStudies;
