import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      });
      
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power2.out'
      });

      // Create particle trail
      createParticle(e.clientX, e.clientY);
    };

    const createParticle = (x: number, y: number) => {
      const particle = document.createElement('div');
      const size = Math.random() * 3 + 1;
      particle.className = 'fixed rounded-full pointer-events-none z-[9998]';
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      
      // Randomly choose between accent and secondary for star colors
      const color = Math.random() > 0.5 ? '#00E5A8' : '#5BE7FF';
      particle.style.backgroundColor = color;
      particle.style.boxShadow = `0 0 ${size * 2}px ${color}`;
      
      document.body.appendChild(particle);

      gsap.to(particle, {
        x: (Math.random() - 0.5) * 60, // Reduced spread for more refined look
        y: (Math.random() - 0.5) * 60,
        opacity: 0,
        scale: 0,
        rotation: Math.random() * 360,
        duration: Math.random() * 0.8 + 0.4,
        ease: 'power2.out',
        onComplete: () => particle.remove()
      });
    };

    const onMouseDown = () => {
      gsap.to([cursor, follower], { scale: 0.8, duration: 0.2 });
    };

    const onMouseUp = () => {
      gsap.to([cursor, follower], { scale: 1, duration: 0.2 });
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, .interactive')) {
        setIsHovering(true);
        gsap.to(follower, { scale: 1.5, backgroundColor: 'rgba(0, 229, 168, 0.1)', borderColor: 'rgba(0, 229, 168, 0.5)', duration: 0.3 });
      } else {
        setIsHovering(false);
        gsap.to(follower, { scale: 1, backgroundColor: 'transparent', borderColor: 'rgba(0, 229, 168, 0.2)', duration: 0.3 });
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', handleHover);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-brand-accent rounded-full pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(0,229,168,0.8)]"
      />
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-6 h-6 border border-brand-accent/20 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-300"
      />
    </>
  );
};
