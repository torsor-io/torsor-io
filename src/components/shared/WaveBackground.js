import { useEffect, useRef } from 'react';

const WaveBackground = ({ isDark, waveState }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const lastFrameRef = useRef(null); // Store the last frame
    const SCALE_Y = 0.6;
    
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

// When paused, save the current canvas state
    if (waveState === 'pause' && !lastFrameRef.current) {
      lastFrameRef.current = ctx.getImageData(0, 0, canvas.width, canvas.height);
    }
    // When unpaused, clear the saved frame
    if (waveState !== 'pause') {
      lastFrameRef.current = null;
    }
      
      const resize = () => {
	  const pixelRatio = window.devicePixelRatio || 1;
	  canvas.width = window.innerWidth * pixelRatio;
	  canvas.height = window.innerHeight * pixelRatio;
	  ctx.scale(pixelRatio, pixelRatio);
	  canvas.style.width = `${window.innerWidth}px`;
	  canvas.style.height = `${window.innerHeight}px`;
      };

    window.addEventListener('resize', resize);
    resize();

    const numLines = 40;
    const points = 80;
    const amplitude = 80;
    const wavelength = 0.08;
    const offset = -0.15;
      
    const animate = () => {
      if (waveState === 'clear') {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
      } else if (waveState === 'play') {
	  ctx.clearRect(0, 0, canvas.width, canvas.height);
	  
	  ctx.lineCap = 'round';
	  ctx.lineJoin = 'round';
	  
        for (let i = 0; i < numLines; i++) {
          ctx.beginPath();
          
          const progress = i / numLines;
          // Adjust colors based on theme
          const r = isDark 
            ? Math.round(155 * (1.9 - progress))
            : Math.round(160 * (1.9 - progress));
          const g = isDark
            ? Math.round(10 + (40 * progress))
            : Math.round(100 + (40 * progress));
          const b = isDark
            ? Math.round(255 * 0.4 * progress)
            : Math.round(20+100 * 0.4 * progress);
          
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${isDark ? 0.25 : 0.2})`;
          ctx.lineWidth = 1.5;

          for (let x = 0; x <= points; x++) {
            const xPos = (canvas.width * x) / points;
            const time = Date.now() * 0.0002;
            
            const yOffset = 
	      offset *(canvas.height)+
              Math.sin(x * wavelength + time + i * 0.2) * amplitude * 0.34 +
              Math.sin(x * wavelength * 2 + time * 1.5) * amplitude * 0.2 +
              Math.sin(x * wavelength * 4 + time * 1) * amplitude * 0.1 +
              Math.sin(x * wavelength * 3 + time * 1 + i * 0.05) * amplitude * 0.8;

            const yPos = (canvas.height / 2) + yOffset + (i * 5) - (numLines * 2.5);
            
            if (x === 0) {
              ctx.moveTo(xPos, SCALE_Y*yPos);
            } else {
              ctx.lineTo(xPos, SCALE_Y*yPos);
            }
          }
          
          ctx.stroke();
        }
      } else if (waveState === 'pause' && lastFrameRef.current) {
        // Restore the last frame when paused
        ctx.putImageData(lastFrameRef.current, 0, 0);
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDark, waveState]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default WaveBackground;
