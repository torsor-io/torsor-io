// src/components/blog/index.js
import WaveBackground from '../shared/WaveBackground';
import { motion } from 'framer-motion';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import { blogPosts } from './blogData';
import { format } from 'date-fns';

const BlogPage = ({ isDark, setIsDark, waveState, setWaveState }) => {

  // Theme variables (matching your AboutPage)
  const textColor = isDark ? 'text-slate-100' : 'text-stone-600';
  const subtleText = isDark ? 'text-slate-300 font-comm' : 'text-stone-700 font-comm';
  const navText = isDark ? 'text-slate-300 font-comm' : 'text-stone-700 font-comm';
  const headerBg = isDark ? 'bg-slate-900/80' : 'bg-amber-50/70';
  const borderColor = isDark ? 'border-slate-800' : 'border-stone-300';
  const buttonBg = isDark ? 'bg-slate-800/50 hover:bg-slate-700/50' : 'bg-orange-100/50 hover:bg-orange-200';
    const footerColor = isDark ? 'to-slate-1000' : 'to-amber-100'
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
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className={`border-b ${borderColor} pb-12 last:border-b-0`}
            >
              {/* Title */}
              <h2 className={`text-2xl font-bold font-comfortaa ${textColor} mb-3`}>
                <a href={`/blog/${post.id}`} className="hover:opacity-80 transition-opacity">
                  {post.title}
                </a>
              </h2>
              
              {/* Metadata */}
              <div className={`${subtleText} mb-4 text-sm flex items-center gap-2`}>
                <time dateTime={post.date}>
                  {format(new Date(post.date), 'MMMM d, yyyy')}
                </time>
                {post.author && (
                  <>
                    <span>·</span>
                    <span>{post.author}</span>
                  </>
                )}
              </div>
              
              {/* Excerpt */}
              <p className={`${subtleText} mb-4`}>{post.excerpt}</p>
              
              {/* Tags */}
              {post.tags && (
                <div className="flex gap-2 mb-4">
                  {post.tags.map(tag => (
                    <span 
                      key={tag}
                      className={`text-sm ${subtleText} px-2 py-1 rounded-full border ${borderColor}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              
              {/* Read more link */}
              <a 
                href={`/blog/${post.id}`}
                className={`inline-block font-comm ${textColor} hover:opacity-80 transition-opacity`}
              >
                <i className="text-sm">Read more →</i> 
              </a>
            </article>
          ))}
        </motion.div>
	  </main>

      {/* Footer */}
      <Footer 
  subtleText={subtleText}
  borderColor={borderColor}
  footerColor={footerColor}
      />
	  </div>
    </div>
  );
};

export default BlogPage;
