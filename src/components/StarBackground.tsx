import React, { useEffect, useRef } from 'react';

export const StarBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const starCount = 200;
    
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      const size = Math.random() * 2 + 0.5;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const duration = Math.random() * 3 + 2;
      const delay = Math.random() * 5;
      
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${x}%`;
      star.style.top = `${y}%`;
      star.style.opacity = (Math.random() * 0.5 + 0.2).toString();
      
      // Random color for some stars
      if (Math.random() > 0.8) {
        star.style.background = Math.random() > 0.5 ? '#00E5A8' : '#5BE7FF';
        star.style.boxShadow = `0 0 4px ${star.style.background}`;
      }
      
      // Add twinkling effect
      star.animate([
        { opacity: 0.2, transform: 'scale(1)' },
        { opacity: 1, transform: 'scale(1.2)' },
        { opacity: 0.2, transform: 'scale(1)' }
      ], {
        duration: duration * 1000,
        delay: delay * 1000,
        iterations: Infinity,
        easing: 'ease-in-out'
      });

      // Add floating movement
      star.animate([
        { transform: 'translate(0, 0)' },
        { transform: `translate(${(Math.random() - 0.5) * 20}px, ${(Math.random() - 0.5) * 20}px)` },
        { transform: 'translate(0, 0)' }
      ], {
        duration: (Math.random() * 10 + 10) * 1000,
        iterations: Infinity,
        easing: 'linear'
      });
      
      container.appendChild(star);
    }
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#0B0F14]"
    >
      <div className="absolute inset-0 glow-mesh opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,168,0.03),transparent_70%)]" />
    </div>
  );
};
