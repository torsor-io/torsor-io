import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import retroSetup from '../../assets/bg.png';
import companyBg from '../../assets/bgL.png';
import mapBg from '../../assets/bgM.png';
import switchBg from '../../assets/bgS.png';
import switchMapBg from '../../assets/bgMS.png';
import switchLabBg from '../../assets/bgLS.png';
import overlayBooks from '../../assets/overlayBooks.png';
import audioFile1 from '../../assets/audio1.wav';
import folder from '../../assets/folderIcon.png';
import hiddenFolder from '../../assets/hiddenFolderIcon.png';
import wrapTerminalText, { wrapTerminalLines } from '../../utils/textWrapper.js';
import weirdBg from '../../assets/weirdspace.png';

// For any scaling issues
const SCALE_X = 1.15; // Adjust this value to scale horizontally
const SCALE_Y = 1.0; // Adjust this value to scale vertically
const SHIFT_X = -7.5; // Adjust this value to shift horizontally
const SHIFT_Y = -0.04; // Adjust this value to shift vertically

// Add array of audio files at the top with your imports
const audioFiles = [
  {
    src: audioFile1, // your existing audio file
    name: "Track 1"
  },
  // Add more tracks here, e.g.:
  // {
  //   src: audioFile2,
  //   name: "Track 2"
  // }
];

const PhoneLight = ({ active }) => {
  // Custom CSS animation for pulsing
  const pulseStyle1 = {
    animation: active ? 'phonePulse 1s step-end infinite' : 'none'
  };

  return (
    <>
      {/* Add keyframes for the animation */}
      <style>
        {`
          @keyframes phonePulse {
            0%, 49% { opacity: 1; filter: blur(1px); }
            50%, 100% { opacity: 0.1; filter: blur(1px); }
          }
        `}
      </style>
      
      <div 
        style={pulseStyle1}
        className={`
      absolute left-[71%] top-[93%] 
      w-[8%] h-[2%] 
      rounded-full
      transition-all duration-300
      ${active ? 'bg-amber-400 blur-[0.1%] shadow-[0_0_8px_4px_rgba(221,191,36,0.6)]' : 'opacity-0'
          }
        `}
      />
    </>
  );
};

const PrjLight1 = ({ active }) => {
  // Custom CSS animation for pulsing
  const pulseStyle2 = {
    animation: active ? 'prjPulse1 8s ease-in-out infinite' : 'none'
  };

  return (
    <>
      {/* Add keyframes for the animation */}
      <style>
        {`
          @keyframes prjPulse1 {
            0%, 100% { opacity: 0.3; filter: blur(1px); }
            50% { opacity: 0.3; filter: blur(1px); }
          }
        `}
      </style>
      
      <div 
        style={pulseStyle2}
    className={`
      absolute left-[75%] top-[95.5%] 
      w-[0px] h-[0px] 
      rounded-full
      transition-all duration-300
      ${active ? 'bg-amber-200 blur-[1px] shadow-[0_0_8px_4px_rgba(251,31,26,0.6)]' : 'opacity-0'
          }
        `}
      />
    </>
  );
};

const PrjLight2 = ({ active }) => {
  // Custom CSS animation for pulsing
  const pulseStyle3 = {
    animation: active ? 'prjPulse2 8s ease-in-out infinite' : 'none'
  };

  return (
    <>
      {/* Add keyframes for the animation */}
      <style>
        {`
          @keyframes prjPulse2 {
            0%, 100% { opacity: 0.1; filter: blur(1px); }
            50% { opacity: 1; filter: blur(1px); }
          }
        `}
      </style>
      
      <div 
        style={pulseStyle3}
    className={`
      absolute left-[72%] top-[95.5%] 
      w-[3px] h-[3px] 
      rounded-full
      transition-all duration-600
      ${active ? 'bg-red-200 blur-[1px] shadow-[0_0_8px_4px_rgba(251,31,126,0.6)]' : 'opacity-0'          }
        `}
      />
    </>
  );
};

const PrjLight3 = ({ active }) => (
  <div 
    className={`
      absolute left-[68%] top-[95.5%] 
      w-[3px] h-[3px] 
      rounded-full
      transition-all duration-200
      ${active ? 'bg-green-200 blur-[1px] shadow-[0_0_8px_4px_rgba(51,231,26,0.4)]' : 'opacity-0'}
    `}
  />
);

const TerminalLight = ({ active, weird }) => (
  <div 
    className={`
      absolute ${weird ? 'left-[119.8%] top-[30%]' : 'left-[117%] top-[94.60%]'}
      w-[1.3%] h-[1%] 
      rounded-full
      transition-all duration-200
      ${active ? 'bg-rose-300 blur-[0.4px] shadow-[0_0_8px_4px_rgba(211,31,26,0.4)]' : 'opacity-0'}
    `}
  />
);

const CDLight2 = ({ active }) => (
  <div 
    className={`
      absolute left-[22.7%] top-[25.3%] 
      w-[55%] h-[3%] 
      rounded-full
      transition-all duration-300
      ${active ? 'bg-blue-100 blur-[0.4px] shadow-[0_0_8px_4px_rgba(11,231,226,0.4)]' : 'opacity-0'}
    `}
  />
);

const CDLight1 = ({ active }) => (
  <div 
    className={`
      absolute left-[23.4%] top-[25.3%] 
      w-[60%] h-[2%] 
      rounded-full
      transition-all duration-300
      ${active ? 'bg-blue-700 blur-[4px] shadow-[0_0_8px_4px_rgba(11,31,226,0.4)]' : 'opacity-0'}
    `}
  />
);

const PortalLight1 = ({ active, weird, setWeird }) => (
  <div 
    className={`
      absolute left-[10%] top-[5%] 
      w-[80%] h-[1%] 
      rounded-full
      transition-all duration-300
      ${active ? 'bg-red-700 blur-[1px] shadow-[0_0_8px_4px_rgba(200,10,40,0.4)]' : 'opacity-0'}
      z-40
      cursor-pointer
    `}
    onClick={() => setWeird(!weird)}
  />
);

const PortalLight2 = ({ active, weird, setWeird }) => (
  <div 
    className={`
      absolute left-[10%] top-[103%] 
      w-[80%] h-[1%] 
      rounded-full
      transition-all duration-300
      ${active ? 'bg-red-700 blur-[1px] shadow-[0_0_8px_4px_rgba(200,10,40,0.4)]' : 'opacity-0'}
      z-40
      cursor-pointer
    `}
    onClick={() => setWeird(!weird)}
  />
);

const PortalLight3 = ({ active, weird, setWeird }) => (
  <div 
    className={`
      absolute left-[10%] top-[5%] 
      w-[1%] h-[100%] 
      rounded-full
      transition-all duration-300
      ${active ? 'bg-red-700 blur-[1px] shadow-[0_0_8px_4px_rgba(200,10,40,0.4)]' : 'opacity-0'}
      z-40
      cursor-pointer
    `}
    onClick={() => setWeird(!weird)}
  />
);

const PortalLight4 = ({ active, weird, setWeird }) => (
  <div 
    className={`
      absolute left-[90%] top-[5%] 
      w-[1%] h-[100%] 
      rounded-full
      transition-all duration-300
      ${active ? 'bg-red-700 blur-[1px] shadow-[0_0_8px_4px_rgba(200,10,40,0.4)]' : 'opacity-0'}
      z-40
      cursor-pointer
    `}
    onClick={() => setWeird(!weird)}
  />
);

const PortalLight5 = ({ active, weird, setWeird }) => (
  <div 
    className={`
      absolute left-[-10%] top-[-5%] 
      w-[120%] h-[120%] 
      transition-all duration-300
      ${active ? 'bg-red-950 blur-[20px] shadow-[0_0_10px_4px_rgba(100,10,40,0.4)]' : 'opacity-0'}
      z-40
      cursor-pointer
    `}
    onClick={() => setWeird(!weird)}
  />
);

const PortalLight6 = ({ active, weird, setWeird }) => (
  <div 
    className={`
      absolute left-[22%] top-[16%] 
      w-[58%] h-[80%] 
      transition-all duration-300
      ${active ? 'bg-stone-950 blur-[3px] shadow-[0_0_10px_4px_rgba(100,10,40,0.4)]' : 'opacity-0'}
      z-40
      cursor-pointer
    `}
    onClick={() => setWeird(!weird)}
  />
);

const PortalTunnel = ({ active, weird, setWeird }) => {
  return (
	  <>
 {/* Add keyframes for pulse animation */}
	  <style>
        {`
          @keyframes portalLight {
            100% { 
                opacity: 1; 
                border-width: 1px; 
                border-color: rgba(175,30,30,0.2);
                }
            0% { 
                opacity: 0.0; 
                border-width: 10px; 
                border-color: rgba(100,30,30,0.2);
                }
          }
        `}
      </style>
      
{[...Array(16)].map((_, i) => (
  <div
    key={i}
    className="absolute bg-rose-900/0 transition-all duration-[10s] cursor-pointer"  // Changed bg to be fully transparent
    onClick={() => setWeird(!weird)}
    style={{
      left: `${18 + i * 3}%`,
      top: `${15 + 2* i * i}%`,
      width: `${64 - i * 6}%`,
      height: `${84.5 - i * 7}%`,
      animation: active ? `portalLight 2s ease-in-out forwards` : 'none',
      boxShadow: active ? `0 0 ${5 + i * 2}px rgba(120,30,30,0.4)` : 'none',
      border: active ? '2px solid' : '0px solid',  // Hide border when inactive
	opacity: active ? 1 : 0.0,  // Ensure full transparency when inactive
	zIndex: 40
    }}
  />
))}
      </>
  );
};

const PhotonicVisualizer = () => {
  const [points, setPoints] = useState([]);
  const [phase, setPhase] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 200, y: 50 });
  const [isCollapsed, setIsCollapsed] = useState(false);
  const containerRef = useRef(null);
  const [chaosFactor, setChaosFactor] = useState(0);

  useEffect(() => {
    // Generate initial points with random phases
    const initialPoints = Array.from({length: 40}, (_, i) => ({
      x: i * 10,
      y: 0,
      phase: Math.random() * Math.PI * 2,
      amplitude: Math.random() * 0.5 + 0.5
    }));
    setPoints(initialPoints);

    // Animation loop
    const interval = setInterval(() => {
      setPhase(p => (p + 0.1) % (Math.PI * 2));
      // Gradually reduce chaos over time
      setChaosFactor(c => Math.max(0, c * 0.95));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newX = (x / rect.width) * 400;
    const newY = (y / rect.height) * 100;
    
    // Increase chaos based on mouse movement speed
    const dx = newX - mousePos.x;
    const dy = newY - mousePos.y;
    const moveSpeed = Math.sqrt(dx * dx + dy * dy);
    setChaosFactor(c => Math.min(1, c + moveSpeed * 0.01));
    
    setMousePos({ x: newX, y: newY });
  };

  const handleClick = () => {
    setIsCollapsed(false);
    // Reset chaos on collapse
    setChaosFactor(0);
  };

  // Calculate wave pattern
  const pathData = points.map((point, i) => {
    let y;
    if (isCollapsed) {
      // Basic sine wave when collapsed
      const baseY = Math.sin(point.x / 50 + phase) * 20;
      // Add chaos based on mouse position and chaos factor
      const dx = point.x - mousePos.x;
      const dy = 50 - mousePos.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const mouseInfluence = Math.max(0, 1 - distance / 200) * chaosFactor;
      y = baseY + (Math.sin(point.x * 0.3 + phase * 2) * 10 * mouseInfluence);
    } else {
      // Complex interference pattern when not collapsed
      const dx = point.x - mousePos.x;
      const dy = 50 - mousePos.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const mouseInfluence = Math.max(0, 1 - distance / 200);
      y = Math.sin(point.phase + phase + mouseInfluence * Math.PI) * 
          point.amplitude * 20 * (1 + mouseInfluence * 0.5);
    }
    
    return `${i === 0 ? 'M' : 'L'} ${point.x} ${y + 50}`;
  }).join(' ');

  return (
    <div 
      ref={containerRef}
      className="w-96 h-18 bg-black/80 rounded-lg p-4 flex flex-col cursor-pointer"
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      <div className="text-green-400 font-mono text-sm mb-2">
        {isCollapsed ? "Collapsed State" : ""}
      </div>
      <svg className="w-full h-full" viewBox="0 0 400 100">
        {/* Background grid */}
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" className="stroke-green-500/10" strokeWidth="0.5"/>
        </pattern>
        <rect width="400" height="100" fill="url(#grid)" />
        
        {/* Beam splitters */}
        <line x1="100" y1="30" x2="100" y2="70" 
          className={`${isCollapsed ? 'stroke-green-500/10' : 'stroke-green-500/30'}`} 
          strokeWidth="2" 
        />
        <line x1="300" y1="30" x2="300" y2="70" 
          className={`${isCollapsed ? 'stroke-green-500/10' : 'stroke-green-500/30'}`} 
          strokeWidth="2" 
        />
        
        {/* Interference pattern */}
        <path 
          d={pathData} 
          fill="none" 
          className="stroke-green-400" 
          strokeWidth="1.5"
        />
        
        {/* Mouse influence indicator */}
        <circle 
          cx={mousePos.x}
          cy={mousePos.y}
          r={3 + chaosFactor * 2}
          className="fill-green-400/30"
        />
        
        {/* Particles */}
        {!isCollapsed && points.filter((_, i) => i % 8 === 0).map((point, i) => {
          const dx = point.x - mousePos.x;
          const dy = 50 - mousePos.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const mouseInfluence = Math.max(0, 1 - distance / 200);
          
          return (
            <circle 
              key={i}
              cx={point.x}
              cy={Math.sin(point.phase + phase + mouseInfluence * Math.PI) * 
                  point.amplitude * 20 * (1 + mouseInfluence * 0.5) + 50}
              r={2 + mouseInfluence * 2}
              className="fill-green-300 animate-pulse"
            />
          );
        })}
      </svg>
    </div>
  );
};

const encodeBookTitle = (title) => {
  return title.split('').map(char => {
    if (char === ' ' || char.match(/[^a-zA-Z]/)) return char;
    
    const baseChar = char.toLowerCase();
    const offset = baseChar.charCodeAt(0) - 'a'.charCodeAt(0);
    
    return `<b>${encoder[offset]}</b>`;
  }).join('');
};

const faces = [
'⚀',
'⚁',
'⚂',
'⚃',
'⚄',
'⚅'
];

const encoder = [
    '♂', // a
    '♺', // b
    'λ', // c
    '⍾', // d
    'ψ', // e
    '◑', // f
    'ы', // g
    '⬢', // h
    '↻', // i
    '䷀', // j
    'π', // k
    '▽', // l
    '⁙', // m
    '˥', // n
    '∿', // o
    '𝖲', // p
    '◾', // q
    '◫', // r
    '⋉', // s
    '⋒', // t
    '𝆦', // u
    '𝒜', // v
    '⏀', // w
    '≟', // x
    '🜎', // y
    '⦻' // z
];

// List of interview questions
const questions = [
    'In the sewer beneath the Prague Orloj is a locked box. What is inside?',
    'Why is time one-dimensional?',
    'You have a pile of warm metal shavings in the shape of a cone. Discuss.',
    'Intelligent life evolves from topologically robust quantum matter. Describe its social structure and language.',
    'George Box said “All models are wrong, but some are useful.” Is this a model?',
    'Someone gives you a hot rock. Design a simple programming language using operations on the rock, and outline a thermodynamic error-correction scheme.',
    'On a <i>d</i>-dimensional cubic lattice of 1 Ω resistors, what is the equivalent resistance between nodes separated by a knight\'s move?',
    'What does Löb\'s theorem have to do with quining?',
    'Devise an experiment to test the Many Worlds Interpretation.',
    'Explain Onsager\'s solution to the 2d Ising model in pictures.',
    'In a nebula far, far away, a large cloud of gas collapses axisymmetrically. Explain how it could be repurposed into a time machine.',
    'What is the analogue of a “thunk” in the natural world?',
    'You can tessellate hyperbolic space with regular heptagons. Show this can be viewed as a quantum error-correcting code, and relate code distance to the Gauss-Bonnet formula.',
    'How could you use a two-level quantum system to navigate around a star?',
    'Write pseudocode which trains a diffusion model to paint with brainwaves. Pay careful attention to the conditioning step.',
    'Describe the Reproducing Kernel Hilbert Space of a one-layer transformer model.',
    'The phenomenon of edge cases indicates the “manifold hypothesis” for data cannot be quite correct. Suggest a mathematical refinement, use your refinement to make a prediction about real data, and test that prediction.',
    'Suppose you have a quantum field theory with a tunable coupling, and the ability to prepare and measure asymptotic states to precision ε. Outline a scheme for computing and determine if it is (quantum) Turing complete.',
    'What is the Bayesian-optimal strategy for Newcomb\'s paradox?',
    'How could you turn an ant colony into a programmable distributed system?',
    'Use dimensional analysis to explain why π appears in the Basel problem.',
    'Create a labyrinth based on Bing\'s house with two rooms.',
    'How does the No-Cloning theorem modify the CAP theorem for quantum distributed systems? What new tradeoffs emerge?',
    'What can homotopy type theory teach us about error correction?',
    'Which is more important to physics: information theory or complexity theory?',
    'Suppose an intelligent alien species sends us a signal. Can we adopt any provably robust priors about its content or structure? And how could they help decode the signal?',
    'Kerckhoffs\' principle states that our cryptosystems should remain secure when the adversary knows the protocol. Explain why, in quantum cryptography, we can go further, and design systems which remain secure when the adversary has the key.',
    'Suppose that, in some dusty compartment of the Wren library, another box of Ramanujan\'s notes is unearthed. Write down one of its formulas or discoveries.',
    'Does <tt>MIP* = RE</tt> have implications for ham radio operators?',
    'Explain to a curious 10-year old why a perfectly round sphere can\'t make gravitational waves.',
    'Is it possible to reliably check a traveling salesman\'s route is optimal, without learning anything about the route?',
    'What makes sparsity interesting?',
    'Pose — and solve — a quantum version of the Hardest Logic Puzzle Ever.'
];

// New FileExplorer component
const FileExplorer = ({ onClose }) => {
  return (
	  <div
      className="fixed inset-0 bg-black/80 font-mono flex items-center justify-center z-50"
	  onClick={(e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
	  }}
	  >
	  <div className="bg-slate-300/90 border-2 border-gray-400 rounded w-[600px] h-[400px] relative"
	  onClick={(e) => e.stopPropagation()}>
        {/* Title Bar */}
        <div className="bg-slate-700 font-mono border-b-2 border-gray-400 p-2 flex justify-between items-center">
          <span className="text-gray-200 font-mono text-l">~/prj</span>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:bg-slate-600 px-2 border border-gray-400"
          >
            ×
          </button>
        </div>
        
      {/* File System */}
          <div className="p-4 text-slate-800 font-mono text-sm">
          {/* Active Directory */}
          <div 
      className="cursor-pointer flex items-center p-1 hover:bg-slate-400"
      onClick={() => window.location.href = 'https://yaw.dev'}
          >
          <img 
      src={folder}
      alt="folder" 
      className="w-6 h-6 mr-2"
          />
          <span>yaw</span>
          </div>
          
      {/* Hidden/Inactive Directories */}
      {['.syg', '.paχ', '.göd'].map((dir) => (
              <div 
          key={dir}
          className="flex items-center p-1 opacity-50"
              >
              <img 
          src={hiddenFolder}
          alt="folder" 
          className="w-6 h-6 mr-2 grayscale"
              />
              <span className="text-slate-500">{dir}</span>
              </div>
      ))}
      </div>

        {/* Status Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-slate-500 border-t-2 border-gray-400 p-1 text-gray-200 text-sm">
          4 items
        </div>
      </div>
    </div>
  );
};

// Stuff for weirdspace terminal

const GodLanguage = () => {
  const symbols = {
      core: ['▘', '▗', '▘', '▝', '▞', '▚', '◆', '▪', '▮', '▬', '▰', '▴', '▸', '▾', '◂', '●'],
      connectors: ['▙', '▛', '▜', '▟', '▍','▐', '▲', '▶', '▼', '◀', '◧', '◨', '◐', '◑', '◒', '◓', '◩', '◪', '◭', '◮'],
      modifiers: ['▤', '▥', '▦', '▧', '▨', '▩', '◍'],
      terminals: ['◜', '◝', '◞', '◟', '◠', '◡'],
      complex: ['◘', '◈', '▣', '◚', '◛', '◔', '◕', '◬']
  };

  const generateWord = () => {
    const structures = [
      () => [
        symbols.core[Math.floor(Math.random() * symbols.core.length)],
        symbols.complex[Math.floor(Math.random() * symbols.complex.length)]
      ],
      () => [
        symbols.modifiers[Math.floor(Math.random() * symbols.modifiers.length)],
        symbols.core[Math.floor(Math.random() * symbols.core.length)],
        symbols.complex[Math.floor(Math.random() * symbols.complex.length)]
      ]
    ];
    
    const structure = structures[Math.floor(Math.random() * structures.length)];
    return structure().join('');
  };

const generateSentence = () => {
  const length = Math.floor(Math.random() * 5) + 2; // 2-4 words
  const words = Array(length).fill(0).map(generateWord);
  
  // Join words with different random connectors
  const result = words.reduce((sentence, word, index) => {
    if (index === 0) return word;
    const connector = symbols.connectors[Math.floor(Math.random() * symbols.connectors.length)];
    return sentence + '' + connector + ' ' + word;
  }, '');
  
  const terminal = symbols.terminals[Math.floor(Math.random() * symbols.terminals.length)];
  return result + ' ' + terminal;
};

  return (
    <div className="text-xl tracking-wider opacity-70">
      {generateSentence()}
    </div>
  );
};

// Full terminal

const Terminal = ({ onClose, isSwitched, setIsSwitched, books, setBooks, sudoMode, setSudoMode, weird }) => {
    const [commands, setCommands] = useState([
  weird ? 
    <span key="init">
      <a 
        href="https://lrc.la.utexas.edu/eieol" 
        className="text-red-500 hover:text-red-400 cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
      >
        ēacencræftig cnotta forðcyme
      </a>
      
    </span> 
    : 
    'Welcome to the Redshift Shell! (rsh v1.0.0)'
]);
    const [currentInput, setCurrentInput] = useState('');
    const inputRef = useRef(null);
    const [awaitingPassword, setAwaitingPassword] = useState(false);
    const [activeBackground, setActiveBackground] = useState('default');
    const [commandHistory, setCommandHistory] = useState([]); // Store command history
    const [historyIndex, setHistoryIndex] = useState(-1); // Track position in history
    const outputRef = useRef(null); // Add ref for the output div

    // To remove?
    const godMessages = [
	`Bla`
    ];
    
    const handleKeyDown = (e) => {
	if (e.key === 'Enter' && currentInput.trim()) {
	    // Add to command history first
	    setCommandHistory(prev => [...prev, currentInput]);
	    setHistoryIndex(-1); // Reset history index
	    
	    const output = handleCommand(currentInput);
	    const wrappedCommand = wrapTerminalText(`> ${currentInput}`);
	    setCommands(prev => [...prev, wrappedCommand, ...output]);
	    setCurrentInput('');
	}
        else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (commandHistory.length > 0) {
                const newIndex = historyIndex + 1;
                if (newIndex < commandHistory.length) {
                    setHistoryIndex(newIndex);
                    setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
                }
            }
        }
        else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex > 0) {
                const newIndex = historyIndex - 1;
                setHistoryIndex(newIndex);
                setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
            } else if (historyIndex === 0) {
                setHistoryIndex(-1);
                setCurrentInput('');
            }
        }
        else if (e.key === 'PageUp') {
            if (outputRef.current) {
                outputRef.current.scrollTop -= outputRef.current.clientHeight;
            }
        }
        else if (e.key === 'PageDown') {
            if (outputRef.current) {
                outputRef.current.scrollTop += outputRef.current.clientHeight;
            }
        }
    };


    
    // Extended commands only available after sudo
    const extendedCommands = {
        '⍾ψλ∿⍾ψ': 'Turn symbolish gibberish into words.', //decode
	'ψ˥λ∿⍾ψ': 'Turn words into symbolic gibberish.', //encode
	//'∿♺⋒ψ⋉⏀ψ': 'Tickle the rsh hardware wavefunction.', //observe
	'ы⋉ψψ𝆦': 'Directly contact CEO.', // greet
	'λ∿⁙⁙𝒜˥ψ': 'Read mail from portal terminal.', //commune
	'⏀ψ↻◫⍾⋉𝖲♂λψ': 'Open portal.', //weirdspace
	// Add more secret commands
    };
    
  // Handle commands
  const handleCommand = (cmd) => {
      const [command, ...args] = cmd.trim().split(' ');

      let output;

      if (weird) {
	  return [
		  <div key="god-message" className="mt-4 mb-4">
		  <GodLanguage />
		  </div>
	  ];
}
      
      if (cmd === 'dice > mail' || cmd === 'dice>mail')
	{
	    const roll1 = Math.floor(Math.random() * 6) + 1;
	    const roll2 = Math.floor(Math.random() * 6) + 1;
	    const sum = 6*roll1 + roll2;
	    const question = questions[sum % questions.length];
	    const face1 = faces[roll1-1];
	    const face2 = faces[roll2-1];
	    const emailBody = `Dear talent community management,\n\nI used the secret \`dice\` command on rsh and rolled ${face1} and ${face2} (question ${sum}):\n\n"${question}"\n\nMy answer follows:`;
	    window.location.href = `mailto:careers@rsh.dev?subject=Redshift Labs Application&body=${encodeURIComponent(emailBody)}`;
	    return [`Opening email client with dice roll ${face1}+${face2}...`];
	}
      
      // Handle sudo specially
      if (command.toLowerCase() === 'sudo' && !sudoMode) {
	  const command = args[0];
	  setAwaitingPassword(true);
	  return ['Enter password:'];
      }
      
      // Check password when awaiting it
      if (awaitingPassword) {
	  setAwaitingPassword(false);
	  if (command === 'jinxed') {  // Replace with actual password
              setSudoMode(true);
              return [
		  'Access granted.',
		  'New commands unlocked:',
		  ...Object.entries(extendedCommands).map(([cmd, desc]) => `  ${cmd.padEnd(10)} - ${desc}`)
              ];
	  } else {
              return ['Access denied.'];
	  }
      }

      if (command.toLowerCase() === 'sudo' && sudoMode) {
	  // Check if there are any arguments
	  if (!args.length) {
	      return ['Error: sudo requires a command argument. Type \'help\' for available commands.'];
	  }
	  
	  switch(args[0].toLowerCase()) {
          case 'weirdspace':
	      if (!isSwitched) {
		  setIsSwitched(!isSwitched);
		  return ['Portal open.'];
	      } else
	      {
		  setIsSwitched(!isSwitched);
		  return ['Portal closed.'];
	      }
	  case 'greet': {
	      window.location.href = 'mailto:david@rsh.dev';
	      return ['Opening direct line to CEO...'];
	  }
	  case 'encode': {
	      if (args.length < 2) {
		  return ['Usage: sudo encode <text>'];
	      }
	      const textToEncode = args.slice(1).join(' ');
	      const encodedText = textToEncode.split('').map(char => {
		  if (char === ' ' || char.match(/[^a-zA-Z]/)) return char;
		  
		  const baseChar = char.toLowerCase();
		  const offset = baseChar.charCodeAt(0) - 'a'.charCodeAt(0);
		  
		  return offset >= 0 && offset < encoder.length ? encoder[offset] : char;
	      }).join('');
	      
	      return ['Original: ' + textToEncode, 'Encoded:  ' + encodedText];
	  }
	  case 'decode': {
	      if (args.length < 2) {
		  return ['Usage: sudo decode <text>'];
	      }
	      const textToDecode = args.slice(1).join(' ');
	      const decodedText = textToDecode.split('').map(char => {
		  const index = encoder.indexOf(char);
		  if (index === -1) return char;
		  
		  return String.fromCharCode('a'.charCodeAt(0) + index);
	      }).join('');
	      
	      return ['Original: ' + textToDecode, 'Decoded:  ' + decodedText];
	  }
	  case 'observe': {
	      return [
		      <PhotonicVisualizer key="photon-viz" />
	      ];
	  }
	  case 'commune':
	      if (!isSwitched) {
		  return [`Error: No interdimensional connection detected.`];
	      }
	      const messageIndex = Math.floor(Math.random() * godMessages.length);
	      return [
		  `\nEstablishing connection across dimensional barrier...\n`,
		  `Connection established to ancient terminal...\n`,
		  `...\n`,
		  godMessages[messageIndex],
		  `\n...connection maintained...`
	      ];
	  }
      }
      
      {/* To remove
      if (command.toLowerCase() === 'sudo' && sudoMode) {
	  switch(args[0].toLowerCase()) {
          case 'make_coffee':
	      if (activeBackground === 'coffee') {
		  setActiveBackground('default');
		  return ['Starting to shake?'];
	      }
	      if (activeBackground === 'default') {
		  setActiveBackground('coffee');
		  return ['Drink the black water from Denny`s.'];
	      }
	      if (activeBackground === 'coffeePlant') {
		  setActiveBackground('plant');
		  return ['Finished. Now you can get back to communing with the shrub.'];
	      }
	      if (activeBackground === 'plant') {
		  setActiveBackground('coffeePlant');
		  return ['Single-origin double ristretto, prepped in a high school chemistry lab.'];
	      }
	  }
	  } */}
      
      switch(command.toLowerCase()) {
      case 'echo':
	  if (args.join(' ') === '$HOME') {
              return ['/Canada/British_Columbia/Vancouver/Redshift_Labs'];
	  }
	  if (args.join(' ') === '$FOUNDER') {
              return ['/Canada/British_Columbia/Vancouver/Redshift_Labs/David_Wakeham'];
	  }
	  if (args.join(' ') === '$TERM') {
              return ['rshterm'];
	  }
	  return [args.join(' ')];
      
case 'cd':
  const newPath = args[0];
  if (!newPath || newPath === '~') {
    setCurrentDirectory('~');
    return [];
  }
  if (newPath === '..') {
    // Get parent directory by removing last segment
    const parentDir = currentDirectory.split('/').slice(0, -1).join('/') || '~';
    setCurrentDirectory(parentDir);
    return [];
  }
  
  // Handle full paths
  if (newPath.includes('/')) {
    const segments = newPath.split('/').filter(Boolean); // Remove empty segments
    let currentCheck = currentDirectory === '~' ? '~' : currentDirectory;
    let validPath = true;
    let tempDir = fileSystem['~'];
    
    for (const segment of segments) {
      if (!tempDir.contents[segment] || tempDir.contents[segment].type !== 'dir') {
        validPath = false;
        break;
      }
      tempDir = tempDir.contents[segment];
    }
    
    if (validPath) {
      setCurrentDirectory(newPath.startsWith('~') ? newPath : `${currentDirectory}/${newPath}`.replace(/\/+/g, '/'));
      return [];
    }
    return [`cd: no such directory: ${newPath}`];
  }
  
  // Handle single directory
  try {
    const currentDir = getCurrentDir(currentDirectory);
    if (currentDir.contents[newPath]?.type === 'dir') {
      setCurrentDirectory(`${currentDirectory}/${newPath}`.replace(/\/+/g, '/'));
      return [];
    }
  } catch (e) {
    // Handle error
  }
  
  return [`cd: no such directory: ${newPath}`];
	  
      case 'ls':
	  try {
	      const dir = getCurrentDir(currentDirectory);
	      const contents = Object.entries(dir.contents)
		    .map(([name, item]) => `${item.type === 'dir' ? 'd' : '-'}rw-r--r--  ${name}${item.type === 'dir' ? '/' : ''}`)
		    .sort();
	      return contents.length ? contents : ['Directory is empty'];
	  } catch (e) {
	      return ['Invalid directory'];
	  }
	  
      case 'cat':
	  try {
              const dir = getCurrentDir(currentDirectory);
              const file = args[0];
              if (dir.contents[file]?.type === 'file') {
		  return dir.contents[file].content.split('\n');
              }
              return ['No such file'];
	  } catch (e) {
              return ['Invalid path'];
	  }
      }
      
    const command2 = cmd.toLowerCase().trim();

      
    switch(command2) {
      case 'help':
	if (sudoMode) {
	    output = [
		'Available commands:',
		'  help   - Show this help message.',
		'  man    - About Redshift Labs.',
		'  jobs   - Careers and openings.',
		'  mail   - Contact us.',
		'  clear  - Clear terminal.',
		'  exit   - Close terminal.',
		'Additional commands require super user privileges.',
		'-----',
		'Sudo commands:',
		'  ⍾ψλ∿⍾ψ      - Turn symbolish gibberish into words.', //decode
		'  ψ˥λ∿⍾ψ      - Turn words into symbolic gibberish.', //encode
	        // '  ∿♺⋒ψ⋉⏀ψ  - Tickle the rsh hardware wavefunction.', //observe
                '  ы⋉ψψ𝆦       - Directly contact CEO.', // greet
         	'  λ∿⁙⁙𝒜˥ψ     - Read mail from portal terminal.', //commune
         	'  ⏀ψ↻◫⍾⋉𝖲♂λψ - Open portal.', //weirdspace
		// Add any other sudo commands here
	    ];
	} else {
	    output = [
		'Available commands:',
		'  help  - Show this help message.',
		'  man   - About Redshift Labs.',
		'  jobs  - Careers and openings.',
		'  mail  - Contact us.',
		'  clear - Clear terminal.',
		'  exit  - Close terminal.',
		'Additional commands require super user privileges.',
	    ];
  }
  break;
    case 'books':
	if (!books) {
	    setBooks(true);
	    return ['Library signing on.']
	} else {
	    setBooks(false);
	    return [`Library signing off.`]
	}
      case 'man':
        return [
	    `REDSHIFT LABS\nRedshift Labs is a startup focused on research-led innovation in various topics, including quantum computing, AI, and distributed systems. These innovations power beautiful and useful products that improve people's lives.\n-----`,
	    `VALUES\nWe believe in:`,
		`  •  Wonder, play, and the joy of discovery`,
		`  •  Working with interdisciplinary abandon`,
		`  •  Making complex ideas accessible and beautiful`,
		`  •  Balancing pure research with practical impact`,
		`  •  Focusing on innovations that benefit all.\n-----\n MORE INFORMATION`,
	    '  •  Check out the directory or external storage to learn about our projects.',
            '  •  Echo environmental variables like $HOME and $FOUNDER for organizational details.',
	    '  •  You can access our library with the \`books\` command.',
	       ];
      case 'pwd':
        return [`${currentDirectory}`];
      case 'mail':
	window.location.href = 'mailto:contact@rsh.dev';
	return ['Opening email client...'];
      case 'clear':
        setCommands([]);
        return [];
      case 'exit':
        onClose();
        return [];
    case 'jobs':
	{
	    return [
		`We're building a team of unconventional thinkers who combine deep technical expertise with curiosity and creative insight.\n-----`,
		`Current openings:`,
		`None`,
		`However, you may wish to try: dice > mail.`
	    ];
	}
    case 'dice':
	{
	    const roll1 = Math.floor(Math.random() * 6) + 1;
	    const roll2 = Math.floor(Math.random() * 6) + 1;
	    const sum = 6*roll1 + roll2;
	    const question = questions[sum % questions.length];
	    const face1 = faces[roll1-1];
	    const face2 = faces[roll2-1];
	    return [
		`Rolling dice...`,
		`${face1}`,
		`${face2}`,
		`\n`, question
	    ];
	}
    default:
	if (command === 'sudo') {
            return [`Command not found: ${args[0]}. Type 'help' for available commands.`];
	} else {
	    return [`Command not found: ${command}. Type 'help' for available commands.`];
	}
    }
       return wrapTerminalLines(output);
  };

// File system
const [currentDirectory, setCurrentDirectory] = useState('~');
const fileSystem = {
    '~': {
	type: 'dir', contents:
	{ 'prj': {
	    type: 'dir',
	    contents: {
		'yaw': {
		    type: 'dir',
		    contents: {
			'star': {
			    type: 'dir',
			    contents: {
				'README.md': { type: 'file', content: 'YawStar: High-level quantum programming language\nBased on C*-algebraic foundations.' }
			    }
			},
			'cloud': {
			    type: 'dir',
			    contents: {
				'README.md': { type: 'file', content: 'YawCloud: Quantum development environment\nOptimize, debug, and simulate quantum software.' }
			    }
			},
			'space': {
			    type: 'dir',
			    contents: {
				'README.md': { type: 'file', content: 'YawSpace: Quantum deployment platform\nCompile and manage deployment to quantum backends.' }
			    }
			}
		    }
		},
		'syg': { type: 'dir', contents: {} },
		'paχ': { type: 'dir', contents: {} },
		'göd': { type: 'dir', contents: {} }
	    }
	}}}
};

// Helper function to get current directory contents
const getCurrentDir = (path) => {
  const parts = path.split('/').filter(p => p && p !== '~');
  let current = fileSystem['~'];
  for (const part of parts) {
    current = current.contents[part];
  }
  return current;
};

  // Focus input on mount and click
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div 
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={(e) => {
      if (e.target === e.currentTarget) {
        onClose();
      } else {
        inputRef.current?.focus();
      }
      }}
    >
	  <div
      className={!weird ? "bg-black border border-green-500/30 rounded-lg w-[800px] h-[500px] relative overflow-hidden" : "bg-red-950 border border-red-200/30 rounded-lg w-[800px] h-[500px] relative overflow-hidden"}
	  onClick={(e) => e.stopPropagation()}>
        {/* Terminal Header */}
          <div className={!weird ? "border-b border-green-500/30 p-2 flex justify-between items-center" : "border-b border-red-200/30 p-2 flex justify-between items-center"}>
          <span className={!weird ? "text-green-400 font-mono text-sm" : "text-red-500 font-mono text-sm"}>{weird ? 'göd' : 'rsh'}</span>
          <button 
            onClick={onClose}
      className={!weird ? "text-green-400 hover:text-green-300 transition-colors" : "text-red-500 hover:text-red-300 transition-colors"}
          >
            ×
          </button>
        </div>
        
      {/* Terminal Content */}
	  <div className={!weird ? "p-4 font-mono text-green-400 text-sm h-[calc(100%-48px)] overflow-y-auto overflow-x-hidden" : "p-4 font-mono text-red-500 text-sm h-[calc(100%-48px)] overflow-y-auto overflow-x-hidden"}>
	  {commands.map((line, i) => (
		  <div key={i} className="whitespace-pre-wrap break-words leading-9">{line}</div>
	  ))}
          
          {/* Input Line */}
          <div className="flex items-center mt-2 leading-normal">
            <span>> </span>
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={handleKeyDown}
      className={!weird ? "ml-1 bg-transparent outline-none flex-1 text-green-200" : "ml-1 bg-transparent outline-none flex-1 text-red-400"}
              autoFocus
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const EncodedPaper = ({ message, onClose, onReload }) => {
    const [angles, setAngles] = useState(() => ({
	// Generate random angles between -5 and 5 degrees for background sheets
	// Smaller rotation angles for more subtle effect
	angle1: Math.random() * 3 - 1.5,
	angle2: Math.random() * 3 - 1.5,
	angle3: Math.random() * 2 - 1
	}));

  // Common paper styles
  const paperStyles = {
    backgroundColor: '#f5f5dc',
    backgroundImage: `repeating-linear-gradient(#f5f5dc 0px, #f5f5dc 24px, #a9bcd9 25px)`,
    backgroundSize: '100% 25px',
    minHeight: '100px',
      padding: '12px 20px',
      borderRadius: '5px',
    width: '400px',
    position: 'absolute',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
  };

// Handle reload with new angles
  const handleReload = () => {
    setAngles({
      angle1: Math.random() * 3 - 1.5,
	angle2: Math.random() * 3 - 1.5,
	angle3: Math.random() * 4 - 1
    });
    onReload();
  };
    
  return (
    <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
      {/* Background layers */}
      <div 
        className="absolute"
        style={{
          ...paperStyles,
          transform: `translate(-50%, -50%) rotate(${angles.angle1}deg)`,
          top: '4px',
          left: '2px',
          zIndex: 48
        }}
      />
      <div 
        className="absolute"
        style={{
          ...paperStyles,
          transform: `translate(-50%, -50%) rotate(${angles.angle2}deg)`,
          top: '2px',
          left: '1px',
          zIndex: 49
        }}
      />
      
      {/* Main paper with content */}
      <div 
        className="encoded-paper-modal text-center fixed left-2/3 top-2/3 -translate-x-[45%] -translate-y-[45%] shadow-sm shadow-slate-700/10 cursor-pointer"
        onClick={handleReload}
        style={{
            ...paperStyles,
	  transform: `translate(-50%, -50%) rotate(${angles.angle3}deg)`,
          zIndex: 50
        }}
      >
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-2 right-2 text-gray-600 text-mono hover:text-gray-800"
        >
          ×
        </button>
        
        <div className="font-mono text-zinc-700 pt-4">
          <div dangerouslySetInnerHTML={{ __html: message }} />
        </div>
      </div>
    </div>
  );
};

const InteractiveLanding = ({ isSwitched, setIsSwitched, books, setBooks, weird, setWeird }) => {
    const [activeArea, setActiveArea] = useState(null);
    const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
    const [debug, setDebug] = useState(false);
    const [displayMode, setDisplayMode] = useState('normal'); // 'normal', 'debug', or 'display'
    const [showTerminal, setShowTerminal] = useState(false);
    const [showTerminalText, setShowTerminalText] = useState(false);
    const [activeBackground, setActiveBackground] = useState('default');
    const [showFileExplorer, setShowFileExplorer] = useState(false);
    const [frameRect, setFrameRect] = useState(null);
    // For transition
    const navigate = useNavigate();
    // For theme switch
    const defaultBg = isSwitched ? switchBg : retroSetup
    const labBg = isSwitched ? switchLabBg : companyBg
    const globeBg = isSwitched ? switchMapBg : mapBg
    // For book decoding
    const [encodedMessage, setEncodedMessage] = useState(null);
    const [showEncodedMessage, setShowEncodedMessage] = useState(false);
    // For state persistence
    const [sudoMode, setSudoMode] = useState(false);
    // For music
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    // For overlays

// Add handler for cycling tracks
const cycleTrack = () => {
  const nextIndex = (currentTrackIndex + 1) % audioFiles.length;
  setCurrentTrackIndex(nextIndex);
  if (isPlaying) {
    // Stop current track and play new one
    audioRef.current.pause();
    audioRef.current.src = audioFiles[nextIndex].src;
    audioRef.current.play();
  }
};

    
  // Handle terminal text display with delay
  useEffect(() => {
    let timeout;
    if (activeArea === 'terminal') {
      // Delay of 300ms before showing text
      timeout = setTimeout(() => {
        setShowTerminalText(true);
      }, 300);
    } else {
      setShowTerminalText(false);
    }
    // Cleanup timeout
    return () => clearTimeout(timeout);
  }, [activeArea]);

useEffect(() => {
  const handleClickOutside = (e) => {
    if (showEncodedMessage && !e.target.closest('.encoded-paper-modal')) {
      setShowEncodedMessage(false);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [showEncodedMessage]);
    
// Background images for each area
  const backgroundImages = {
      default: defaultBg,
      terminal: defaultBg,
      frame: labBg,
      contact: defaultBg,
      projects: defaultBg,
      map: globeBg,
      // Add new overlay images:
      overlay: overlayBooks,
      weird: weirdBg
  };
    
  // Areas defined as percentages of image dimensions
  const areas = [
    {
      id: 'terminal',
      name: 'Redshift Shell',
      left: 0.269,   // 25% from left
      top: 0.54,    // 45% from top
      width: 0.145,  // 35% of image width
      height: 0.2, // 30% of image height
	hoverText: weird ? 'göd' : 'rsh',
	visible:true
    },
    {
      id: 'frame',
      name: 'frame',
      left: 0.284,
      top: 0.107,
      width: 0.165,
      height: 0.266,
	hoverText: '/about',
	visible:!weird
    },
    {
      id: 'contact',
      name: 'Contact',
      left: 0.187,
      top: 0.185,
      width: 0.051,
      height: 0.175,
	hoverText: 'contact',
	visible:!weird
    },
    {
      id: 'projects',
      name: 'Projects',
      left: 0.18,
      top: 0.67,
      width: 0.065,
      height: 0.123,
	hoverText: 'projects',
	visible:!weird
    },
   {
    id: 'map',
    name: 'Map',
    left: 0.713,    // Position in right corner
    top: 0.11,     // Near bottom
    width: 0.08,   // Small clickable area
    height: 0.135,
       hoverText: 'map',
	visible:!weird
   },
   {
    id: 'muzik',
    name: 'muzik',
    left: 0.8,    // Position in right corner
    top: 0.26,     // Near bottom
    width: 0.07,   // Small clickable area
    height: 0.03,
       hoverText: isPlaying ? `⏸ ${audioFiles[currentTrackIndex].name}` : `▶ ${audioFiles[currentTrackIndex].name}`,
	visible:!weird
   },
   {
    id: 'bookMars',
    name: 'The Mars Trilogy',
    left: 0.797,    // Adjust these values to match book positions
    top: 0.36,
    width: 0.024,  // Books are typically narrow
    height: 0.14,  // and tall
    hoverText: '♂',
       link: 'https://www.kimstanleyrobinson.info/',
       visible:(books && !weird)
   },
   {
    id: 'GEB',
    name: 'Godel Escher Bach',
    left: 0.75,    // Adjust these values to match book positions
    top: 0.34,
    width: 0.01,  // Books are typically narrow
    height: 0.16,  // and tall
    hoverText: '♺',
       link: 'https://rauterberg.employee.id.tue.nl/lecturenotes/DDM110%20CAS/Hofstadter-1979%20G%C3%B6del%20Escher%20Bach.pdf',
	visible:(books && !weird)
   },
   {
    id: 'SICP',
    name: 'SICP',
    left: 0.562,    // Adjust these values to match book positions
    top: 0.363,
    width: 0.008,  // Books are typically narrow
    height: 0.14,  // and tall
    hoverText: 'λ',
       link: 'https://sarabander.github.io/sicp/html/',
       	visible:(books && !weird)
   },
   {
    id: 'bell',
    name: 'The Bell Telephone Laboratories',
    left: 0.612,    // Adjust these values to match book positions
    top: 0.342,
    width: 0.003,  // Books are typically narrow
    height: 0.16,  // and tall
    hoverText: '⍾',
       link: 'https://royalsocietypublishing.org/doi/pdf/10.1098/rspa.1950.0140',
       	visible:(books && !weird)
   },
   {
    id: 'democritus',
    name: 'Quantum Computing Since Democritus',
    left: 0.692,    // Adjust these values to match book positions
    top: 0.346,
    width: 0.006,  // Books are typically narrow
    height: 0.155,  // and tall
    hoverText: 'ψ',
       link: 'https://www.scottaaronson.com/democritus/',
       	visible:(books && !weird)
   },
   {
    id: 'tao',
    name: 'Tao Te Ching',
    left: 0.744,    // Adjust these values to match book positions
    top: 0.35,
    width: 0.002,  // Books are typically narrow
    height: 0.15,  // and tall
    hoverText: '◑',
       link: 'https://archive.org/details/taoteching-Stephen-Mitchell-translation-v9deoq/page/n6/mode/1up',
       	visible:(books && !weird)
   },
   {
    id: 'leonardo',
    name: 'Leonardo da Vincis notebooks',
    left: 0.803,    // Adjust these values to match book positions
    top: 0.55,
    width: 0.047,  // Books are typically narrow
    height: 0.102,  // and tall
    hoverText: 'ы',
       link: 'https://www.vam.ac.uk/articles/leonardo-da-vincis-notebooks',
       	visible:(books && !weird)
   },
   {
    id: 'babel',
    name: 'The Library of Babel',
    left: 0.725,    // Adjust these values to match book positions
    top: 0.695,
    width: 0.004,  // Books are typically narrow
    height: 0.16,  // and tall
    hoverText: '⬢',
       link: 'https://libraryofbabel.info/',
       	visible:(books && !weird)
   },
   {
    id: 'wake',
       name: 'Finnegans Wake',
    left: 0.6,    // Adjust these values to match book positions
    top: 0.54,
    width: 0.014,  // Books are typically narrow
    height: 0.11,  // and tall
    hoverText: '↻',
       link: 'https://finwake.com/1024chapter1/1024finn1.htm',
       	visible:(books && !weird)
   },
      {
    id: 'iching',
       name: 'I Ching',
    left: 0.582,    // Adjust these values to match book positions
    top: 0.336,
    width: 0.0065,  // Books are typically narrow
    height: 0.165,  // and tall
    hoverText: '䷀',
	  link: 'http://www2.unipr.it/~deyoung/I_Ching_Wilhelm_Translation.html',
	  	visible:(books && !weird)
      },
      {
    id: 'pcm',
       name: 'The Princeton Companion to Mathematics',
    left: 0.775,    // Adjust these values to match book positions
    top: 0.732,
    width: 0.0215,  // Books are typically narrow
    height: 0.126,  // and tall
    hoverText: 'π',
	  link: 'https://sites.math.rutgers.edu/~zeilberg/akherim/PCM.pdf',
	  	visible:(books && !weird)
      },
      {
    id: 'feynman',
       name: 'The Feynman Lectures on Physics Volume II',
    left: 0.716,    // Adjust these values to match book positions
    top: 0.538,
    width: 0.018,  // Books are typically narrow
    height: 0.115,  // and tall
    hoverText: '▽',
	  link: 'https://www.feynmanlectures.caltech.edu/',
	  	visible:(books && !weird)
      },
      {
    id: 'browne',
       name: 'The Garden of Cyrus',
    left: 0.646,    // Adjust these values to match book positions
    top: 0.757,
    width: 0.008,  // Books are typically narrow
    height: 0.1,  // and tall
    hoverText: '⁙',
	  link: 'https://penelope.uchicago.edu/hgc.html',
	  	visible:(books && !weird)
      },
      {
    id: 'wittgenstein',
       name: 'Philosophical Investigations',
    left: 0.651,    // Adjust these values to match book positions
    top: 0.347,
    width: 0.009,  // Books are typically narrow
    height: 0.153,  // and tall
    hoverText: '⅂',
	  link: 'https://edisciplinas.usp.br/pluginfile.php/4294631/mod_resource/content/0/Ludwig%20Wittgenstein%2C%20P.%20M.%20S.%20Hacker%2C%20Joachim%20Schulte.%20Philosophical%20Investigations.%20Wiley.pdf',
	  visible:(books && !weird)
      },
      {
    id: 'blake',
       name: 'The Four Zoas',
    left: 0.663,    // Adjust these values to match book positions
    top: 0.713,
    width: 0.051,  // Books are typically narrow
    height: 0.026,  // and tall
    hoverText: '⦻',
	  link: 'https://www.blakearchive.org/',
	  	visible:(books && !weird)
      },
      {
    id: 'fourier',
       name: 'Fourier Analysis',
    left: 0.84,    // Adjust these values to match book positions
    top: 0.36,
    width: 0.01,  // Books are typically narrow
    height: 0.14,  // and tall
    hoverText: '∿',
	  link: 'https://archive.org/details/fourieranalysis0000korn',
	  	visible:(books && !weird)
      },
      {
    id: 'smullyan',
       name: 'To Mock a Mockingbird',
    left: 0.6435,    // Adjust these values to match book positions
    top: 0.539,
    width: 0.006,  // Books are typically narrow
    height: 0.115,  // and tall
    hoverText: '𝖲',
	  link: 'https://raymondsmullyan.com/',
	  	visible:(books && !weird)
      },
      {
    id: 'tufte',
       name: 'Envisioning Information',
    left: 0.68, 
    top: 0.336,
    width: 0.005, 
    height: 0.163,
    hoverText: '◫',
	  link: 'https://www.edwardtufte.com/book/envisioning-information',
	  	visible:(books && !weird)
      },
      {
    id: 'egan',
       name: 'Schilds Ladder',
    left: 0.5835, 
    top: 0.547,
    width: 0.007, 
    height: 0.107,
    hoverText: '⋉',
	  link: 'https://www.gregegan.net/',
	  	visible:(books && !weird)
      },
      {
    id: 'rosetta',
       name: 'A Rosetta Stone',
    left: 0.63, 
    top: 0.735,
    width: 0.005, 
    height: 0.12,
    hoverText: '⋒',
	  link: 'https://arxiv.org/pdf/0903.0340',
	  	visible:(books && !weird)
      },
      {
    id: 'bead',
       name: 'The Glass Bead Game',
    left: 0.6695, 
    top: 0.552,
    width: 0.0175, 
    height: 0.103,
    hoverText: '𝆦',
	link: 'https://www.nobelprize.org/prizes/literature/1946/hesse/facts/',
	visible:(books && !weird)
      },
      {
    id: 'simmons',
       name: 'Introduction to Topology and Modern Analysis',
    left: 0.699, 
    top: 0.754,
    width: 0.004, 
    height: 0.103,
    hoverText: '𝒜',
	link: 'https://archive.org/details/introduction-to-topology-and-modern-analysis-simmons',
	 visible:(books && !weird)
      },
      {
    id: 'weinberg',
       name: 'The Quantum Theory of Fields',
    left: 0.606, 
    top: 0.72,
    width: 0.011, 
    height: 0.138,
    hoverText: '⏀',
	link: 'https://www.cambridge.org/core/books/quantum-theory-of-fields/22986119910BF6A2EFE42684801A3BDF',
	 visible:(books && !weird)
      },
      {
    id: 'computation',
       name: 'The Nature of Computation',
    left: 0.616, 
    top: 0.345,
    width: 0.011, 
    height: 0.155,
    hoverText: '≟',
	link: 'https://nature-of-computation.org/',
	 visible:(books && !weird)
      },
      {
    id: 'the-book',
       name: 'Proofs from THE BOOK',
    left: 0.77, 
    top: 0.543,
    width: 0.006, 
    height: 0.11,
    hoverText: '◾',
	link: 'https://archive.org/details/MartinAignerGnterM.ZieglerAuth.ProofsFromTHEBOOK',
	 visible:(books && !weird)
      },
      {
    id: 'jung',
       name: 'Psychology and Alchemy',
    left: 0.8037, 
    top: 0.73,
    width: 0.014, 
    height: 0.128,
    hoverText: '🜎',
	link: 'https://archive.org/details/MartinAignerGnterM.ZieglerAuth.ProofsFromTHEBOOK',
	 visible:(books && !weird)
      },
{
  id: 'decoder',
  name: 'Book Decoder',
  left: 0.822,    
  top: 0.79,     
  width: 0.03,   
  height: 0.07,  
  hoverText: 'cryptobrary',
  visible: books,
  onClick: () => {
    // Always generate a new clue when opening
    const visibleBooks = areas.filter(area => 
      area.link && area.name && area.id !== 'decoder'
    );
    const randomBook = visibleBooks[Math.floor(Math.random() * visibleBooks.length)];
    const encodedTitle = encodeBookTitle(randomBook.name);
    setEncodedMessage({
      text: encodedTitle,
    });
    setShowEncodedMessage(true);
  }
},
// In the areas array definition
{
  id: 'portal',
  name: 'portal',
  left: 0.607,
  top: 0.197,
  width: 0.045,
  height: 0.092,
    hoverText: !weird ? 'weirdspace' : 'basespace',
    visible: isSwitched,
  onClick: () => {
    setWeird(!weird);
  }
},    
];

  // Handle image load and window resize
  const handleImageLoad = (e) => {
    const img = e.target;
    const { width, height } = img.getBoundingClientRect();
    setImageDimensions({ width, height });
  };

  useEffect(() => {
    const handleResize = () => {
      const img = document.getElementById('main-image');
      if (img) {
        const { width, height } = img.getBoundingClientRect();
        setImageDimensions({ width, height });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Debug/display mode toggle with 'd' key
  useEffect(() => {
    const handleKeyPress = (e) => {
	if (e.key === '?') {setDisplayMode(prev => {
			if (prev === 'normal') return 'display';
			if (prev === 'display') return 'debug';
			return 'normal';
	})};
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

    useEffect(() => {
	const preventDefault = (e) => e.preventDefault();
	document.addEventListener('contextmenu', preventDefault);
	return () => document.removeEventListener('contextmenu', preventDefault);
    }, []);
    
    return (
<div className="w-screen h-screen bg-black overflow-hidden flex items-center justify-center">
    {/* Aspect ratio wrapper - this maintains proportions */}
    <div className="relative" style={{ 
     width: 'min(100vw, 150vh)', // Use minimum of viewport width or height-based width
      height: 'min(66.6vw, 100vh)', // Use minimum of viewport height or width-based height
      margin: 'auto'
    }}>
      {/* Content container */}
      <div className="absolute inset-0">

      {/* Terminal Overlay */}
      {showTerminal && (
	      <Terminal 
	  onClose={() => setShowTerminal(false)}
	  isSwitched={isSwitched}
	  setIsSwitched={setIsSwitched}
	  books={books}
	  setBooks={setBooks}
	  sudoMode={sudoMode}
	  setSudoMode={setSudoMode}
	  weird={weird}
	      />
      )}

      {/* File system overlay */}
      {showFileExplorer && (
	      <FileExplorer onClose={() => setShowFileExplorer(false)} />
      )}
      
      {/* Debug Controls */}
      {debug /*&& (
        <div className="fixed top-0 left-0 bg-black/80 text-white p-4 font-mono text-sm z-50">
          <p>Debug Mode (press 'd' to toggle)</p>
          <p>Image: {Math.round(imageDimensions.width)}x{Math.round(imageDimensions.height)}px</p>
          <p>Active: {activeArea || 'none'}</p>
        </div>
      )*/}

<audio 
  ref={audioRef}
  src={audioFiles[currentTrackIndex].src}
  loop
/>
      

    {/* Background Images */}
    {Object.entries(backgroundImages).map(([key, src]) => (
	    <img 
	key={key}
	src={src}
	alt={`${key} view`}
	draggable="false"
	onContextMenu={(e) => e.preventDefault()}
	className={`
          absolute w-full h-full 
          transition-opacity duration-700
          ${((weird && key==='weird' && !(activeArea === 'portal')) || 
              (activeArea === key || 
              (key === 'default' && !activeArea) || 
              (activeBackground === key && !(activeArea === 'portal')) || 
              (key === 'overlay' && books && !(activeArea === 'portal')))) ? 
            'opacity-100' : 'opacity-0'}
          ${key.startsWith('overlay') ? 'z-100' : ''} // Higher z-index for overlays
    `}
	    />
    ))}
    
{/* Interactive Areas */}
        {areas.map(area => area.visible && (
          <div
            key={area.id}
            style={{
              position: 'absolute',
              left: `${area.left * 100 * SCALE_X + SHIFT_X}%`,
              top: `${area.top * 100 * SCALE_Y + SHIFT_Y}%`,
              width: `${area.width * 100 * SCALE_X}%`,
              height: `${area.height * 100 * SCALE_Y}%`,
              outline: displayMode === 'debug' ? '1px dashed rgba(101, 141, 91, 0.8)' : 'none',
		backgroundColor: displayMode === 'debug' ? 'rgba(101, 151, 101, 0.3)' : 'transparent',
	      zIndex: 40	
            }}
            className="cursor-pointer transition-all duration-300"
            onMouseEnter={() => setActiveArea(area.id)}
            onMouseLeave={() => setActiveArea(null)}
	    onClick={(e) => {
		if (area.id === 'terminal') {
		    setShowTerminal(true);
		}
		if (area.id === 'projects') {
		    setShowFileExplorer(true);
		}
		if (area.id === 'contact') {
		    window.location.href = 'mailto:contact@rsh.dev';
		}
		if (area.id === 'frame') {
		    const rect = e.currentTarget.getBoundingClientRect();
		    setFrameRect({
			left: rect.left,
			top: rect.top,
			width: rect.width,
			height: rect.height
		    });
		    // Short delay to allow state to update before navigation
		    setTimeout(() => {
			navigate('/about', { state: { frameRect } });
		    }, 50);
		}
		if (area.id === 'map') {
		    // Cycle through modes: normal -> display -> debug -> normal
		    setDisplayMode(prev => {
			if (prev === 'normal') return 'display';
			if (prev === 'display') return 'debug';
			return 'normal';
		    });
		} else if (area.id === 'muzik') {
		    if (e.button === 2) { // Right click to cycle tracks
			e.preventDefault();
			cycleTrack();
		    } else { // Left click to play/pause
			if (isPlaying) {
			    audioRef.current.pause();
			} else {
			    audioRef.current.src = audioFiles[currentTrackIndex].src;
			    audioRef.current.play();
			}
			setIsPlaying(!isPlaying);
		    }
		} else if (area.id === 'decoder' && area.onClick) {  // Add this condition
		    area.onClick();
		} else if (area.link) {
		    window.open(area.link, '_blank');
		}
	    }}
          >
            {/* Lights*/}
{area.id === 'contact' && (
  <PhoneLight active={activeArea === 'contact' && !showTerminal} />
)}
{area.id === 'projects' && (
  <PrjLight1 active={activeArea === 'projects' && !showTerminal} />
)}
{area.id === 'projects' && (
  <PrjLight2 active={activeArea === 'projects' && !showTerminal} />
)}
{area.id === 'projects' && (
  <PrjLight3 active={activeArea === 'projects' && !showTerminal} />
)}
{area.id === 'terminal' && (
	<TerminalLight weird={weird} active={activeArea === 'terminal' && !showTerminal} />
)}
{area.id === 'portal' && (
	<PortalLight5 weird={weird} setWeird={setWeird} active={activeArea === 'portal' && !showTerminal} />
)}
{area.id === 'portal' && (
  <PortalLight1 weird={weird} setWeird={setWeird} active={activeArea === 'portal' && !showTerminal} />
)}
{area.id === 'portal' && (
  <PortalLight2 weird={weird} setWeird={setWeird} active={activeArea === 'portal' && !showTerminal} />
)}
{area.id === 'portal' && (
  <PortalLight3 weird={weird} setWeird={setWeird} active={activeArea === 'portal' && !showTerminal} />
)}
{area.id === 'portal' && (
  <PortalLight4 weird={weird} setWeird={setWeird} active={activeArea === 'portal' && !showTerminal} />
)}
{area.id === 'portal' && (
  <PortalLight6 weird={weird} setWeird={setWeird} active={activeArea === 'portal' && !showTerminal} />
)}
{area.id === 'portal' && (
  <PortalTunnel weird={weird} setWeird={setWeird} active={activeArea === 'portal' && !showTerminal} />
)}
{area.id === 'muzik' && (
  <CDLight1 active={isPlaying || activeArea === 'muzik' && !showTerminal} />
)}
{area.id === 'muzik' && (
  <CDLight2 active={isPlaying || activeArea === 'muzik' && !showTerminal} />
)}
            {/* Hover Text */}
          {(activeArea === area.id && (displayMode === 'debug' || displayMode === 'display' )) && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap">
                <div className="bg-black/0 text-white px-3 py-1 rounded text-sm font-mono">
                  {area.hoverText}
                </div>
              </div>
            )}

	  {area.id === 'terminal' && activeArea === 'terminal' && !showTerminal && (
    <div 
      className={`
        absolute ${weird ? 'left-12' : 'left-10'} top-1/4 -translate-x-2/3 -translate-y-1/2 
        transition-opacity duration-500
        ${showTerminalText ? 'opacity-100' : 'opacity-0'}
      `}
    >
		  <div className={weird ? "text-red-500 font-mono text-sm whitespace-nowrap" : "text-green-400 font-mono text-sm whitespace-nowrap"}>><span className="terminal-cursor">|</span>
      </div>
    </div>
	  )}

	    {/* Add this near the end of your InteractiveLanding return statement */}
{showEncodedMessage && (
  <EncodedPaper 
    message={encodedMessage.text}
    onClose={() => setShowEncodedMessage(false)}
    onReload={() => {
      const visibleBooks = areas.filter(area => 
        area.link && area.name && area.id !== 'decoder'
      );
      const randomBook = visibleBooks[Math.floor(Math.random() * visibleBooks.length)];
      const encodedTitle = encodeBookTitle(randomBook.name);
      setEncodedMessage({
        text: encodedTitle,
      });
    }}
  />
)}
          </div>
        ))}
      </div>
	</div>
	    </div>
  );
};

export default InteractiveLanding;
