// src/components/blog/BlogPost.js
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import { blogPosts } from './blogData';
import { format } from 'date-fns';
import WaveBackground from '../shared/WaveBackground';

const BlogPost = ({ isDark, setIsDark, waveState, setWaveState }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(post => post.id === id);
  const [mathJaxReady, setMathJaxReady] = useState(false);
    
  // Theme variables (matching BlogPage)
  const textColor = isDark ? 'text-slate-100' : 'text-stone-600';
  const subtleText = isDark ? 'text-slate-300 font-comm' : 'text-stone-700 font-comm';
  const navText = isDark ? 'text-slate-300 font-comm' : 'text-stone-700 font-comm';
  const headerBg = isDark ? 'bg-slate-900/80' : 'bg-amber-50/70';
  const borderColor = isDark ? 'border-slate-800' : 'border-stone-300';
  const buttonBg = isDark ? 'bg-slate-800/50 hover:bg-slate-700/50' : 'bg-orange-100/50 hover:bg-orange-200';
  const footerColor = isDark ? 'to-slate-1000' : 'to-amber-100';
  const gradientBg = isDark 
    ? 'bg-gradient-to-b from-slate-900 to-slate-1000' 
    : 'bg-gradient-to-b from-amber-50 to-amber-100';

    
useEffect(() => {
    // Initial MathJax setup
    if (window.MathJax) {
      // Ensure MathJax is fully loaded
      window.MathJax.startup.promise.then(() => {
        setMathJaxReady(true);
      });
    }
  }, []);

  useEffect(() => {
    // Re-render MathJax when theme changes or content updates
    if (mathJaxReady && window.MathJax) {
      try {
        // Clear previous typeset
        window.MathJax.startup.document.clear();
        
        // Re-typeset the entire document
        window.MathJax.typesetPromise([document.body])
          .catch(err => console.error('MathJax typeset error:', err));
      } catch (err) {
        console.error('MathJax re-rendering error:', err);
      }
    }
  }, [isDark, mathJaxReady, post?.content]);
    
  if (!post) {
    navigate('#blog');
    return null;
  }

  return (
    <div className="min-h-screen relative">
      {/* Wave Background - bottom layer */}
      <div className="fixed top-0 left-0 w-full h-full z-[-5] opacity-50">
        <WaveBackground isDark={isDark} waveState={waveState} />
      </div>

      {/* Gradient overlay */}
      <div className={`fixed top-0 left-0 w-full h-full z-[-10] ${gradientBg} transition-colors`} />

      {/* Content container */}
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
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <header className="mb-12">
              <h1 className={`text-3xl font-comfortaa font-bold ${textColor} mb-4`}>
                {post.title}
              </h1>
              
	  <div className={`${subtleText} flex items-center gap-2 text-sm`}>
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
            </header>

            {/* Tags */}
            {post.tags && (
              <div className="flex gap-2 mb-8">
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

            {/* Content */}
            <div 
              className={`prose prose-base ${isDark ? 'prose-invert' : ''} max-w-none ${subtleText} mb-12`}
              dangerouslySetInnerHTML={{ __html: post.content }}           />
      
            {/* Navigation */}
            <div className={`flex items-center justify-between pt-6 border-t ${borderColor}`}>
              <button 
                onClick={() => navigate('blog')}
                className={`${textColor} hover:opacity-80 transition-opacity flex items-center gap-2`}
              >
          <div className={`text-sm font-comm`}><i>← Back to blog</i></div>
              </button>
            </div>
          </motion.article>
        </main>

        <Footer 
          subtleText={subtleText}
          borderColor={borderColor}
          footerColor={footerColor}
        />
      </div>
    </div>
  );
};

export default BlogPost;
