            {/* Research Consulting Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`rounded-xl p-6 border ${borderColor} ${headerBg} backdrop-blur-sm`}
            >
              <h2 className={`text-2xl font-bold ${textColor} mb-4`}>Research consulting</h2>
              <div className={`${subtleText}`}>
                <p className="mb-4"><i>Coming soon</i>: Case studies.
                </p> <br/>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cases.map((study) => (
        <motion.div
          key={study.id}
          className={`cursor-pointer rounded-lg border ${borderColor} overflow-hidden
                     ${isDark ? 'bg-slate-800/30' : 'bg-orange-50/30'}`}
          onClick={() => setExpandedCase(expandedCase === study.id ? null : study.id)}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <div className="p-4">
            <img 
              src={study.logo}
              alt={study.title}
              className="w-full h-24 object-contain"
            />
          </div>
        </motion.div>
      ))}
    </div>
    
<AnimatePresence>
  {expandedCase && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`rounded-lg border ${borderColor} overflow-hidden
                 ${isDark ? 'bg-slate-800/30' : 'bg-orange-50/30'} mt-4`}
    >
      <div className="p-4 space-y-2">
        <h3 className={`font-bold ${textColor}`}>
          {cases.find(study => study.id === expandedCase)?.title}
        </h3>
        <p className={`text-sm ${subtleText}`}>
          {cases.find(study => study.id === expandedCase)?.brief}
        </p>
      </div>
    </motion.div>
  )}
</AnimatePresence>
  </div>
</motion.div>
