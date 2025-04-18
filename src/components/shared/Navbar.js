// src/components/shared/Navbar.js
import { HomeModernIcon } from '@heroicons/react/24/solid';
import { SunIcon, MoonIcon, PauseIcon, PlayIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const Navbar = ({ 
  isDark, 
  setIsDark,
  waveState, 
  setWaveState,
  headerBg, 
  buttonBg, 
  borderColor, 
  navText 
}) => {
  return (
	  <>
      {/* Button section */}
      <div className="fixed top-4 right-4 flex gap-2 z-50">
        <button
          onClick={() => setIsDark(!isDark)}
          className={`p-2 rounded-full ${buttonBg} transition-colors duration-300`}
        >
          {isDark ? (
            <SunIcon className="h-6 w-6 text-slate-100" />
          ) : (
            <MoonIcon className="h-6 w-6 text-slate-800" />
          )}
        </button>
        <button
          onClick={() => {
            const states = { play: 'pause', pause: 'clear', clear: 'play' };
            setWaveState(prevState => states[prevState]);
          }}
          className={`p-2 rounded-full ${buttonBg} transition-colors duration-300`}
        >
          {waveState === 'play' ? (
            <PauseIcon className={`h-6 w-6 ${isDark ? 'text-slate-100' : 'text-slate-800'}`} />
          ) : waveState === 'pause' ? (
            <EyeSlashIcon className={`h-6 w-6 ${isDark ? 'text-slate-100' : 'text-slate-800'}`} />
          ) : (
            <PlayIcon className={`h-6 w-6 ${isDark ? 'text-slate-100' : 'text-slate-800'}`} />
          )}
        </button>
      </div>

      <header className={`fixed top-0 w-full ${headerBg} backdrop-blur-xl border-b ${borderColor} z-40`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex space-x-8">
            <a href="" className={`${navText} hover:opacity-50 text-xl`}>
              <HomeModernIcon className={`h-6 w-6 mt-0 mr-2 stroke-1 ${navText}`} />
            </a>
            <a href="#blog" className={`${navText} hover:opacity-50`}>Blog</a>
            <a href="#research" className={`${navText} hover:opacity-50`}>Research</a>
          <a href="#consulting" className={`${navText} hover:opacity-50`}>Consulting</a>
            <a href="#community" className={`${navText} hover:opacity-50`}>Hackery</a>
            <a href="#team" className={`${navText} hover:opacity-50`}>Team</a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
