import React from 'react';
import { motion } from 'motion/react';

export const TechSphere = () => {
  return (
    <div className="w-full h-full min-h-[500px] flex items-center justify-center perspective-1000">
      <div className="relative w-64 h-64 preserve-3d animate-[spin_20s_linear_infinite]">
        
        {/* CSS 3D Cube / Core */}
        <div className="absolute inset-0 preserve-3d">
          {/* Front */}
          <div className="absolute inset-0 bg-brand-accent/10 border border-brand-accent/30 backdrop-blur-sm translate-z-[128px]" />
          {/* Back */}
          <div className="absolute inset-0 bg-brand-accent/10 border border-brand-accent/30 backdrop-blur-sm -translate-z-[128px] rotate-y-180" />
          {/* Right */}
          <div className="absolute inset-0 bg-brand-accent/10 border border-brand-accent/30 backdrop-blur-sm translate-x-[128px] rotate-y-90" />
          {/* Left */}
          <div className="absolute inset-0 bg-brand-accent/10 border border-brand-accent/30 backdrop-blur-sm -translate-x-[128px] -rotate-y-90" />
          {/* Top */}
          <div className="absolute inset-0 bg-brand-accent/10 border border-brand-accent/30 backdrop-blur-sm -translate-y-[128px] rotate-x-90" />
          {/* Bottom */}
          <div className="absolute inset-0 bg-brand-accent/10 border border-brand-accent/30 backdrop-blur-sm translate-y-[128px] -rotate-x-90" />
        </div>

        {/* Inner Core Glow */}
        <div className="absolute inset-8 bg-brand-accent/20 rounded-full blur-3xl animate-pulse" />
        
        {/* Floating Tech Nodes */}
        {['React', 'Node', 'Next.js', 'AI', 'LLM', 'MongoDB', 'AWS', 'Python'].map((tech, i) => (
          <div 
            key={tech}
            className="absolute preserve-3d"
            style={{
              transform: `rotateY(${i * 45}deg) translateZ(200px)`
            }}
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotateZ: [0, 10, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5
              }}
              className="px-4 py-2 glass border-brand-accent/20 rounded-xl text-[10px] font-mono text-brand-accent uppercase tracking-widest whitespace-nowrap"
            >
              {tech}
            </motion.div>
          </div>
        ))}

        {/* Orbital Rings */}
        <div className="absolute inset-[-50px] border border-brand-accent/10 rounded-full rotate-x-75 animate-[spin_10s_linear_infinite]" />
        <div className="absolute inset-[-100px] border border-brand-accent-secondary/10 rounded-full rotate-y-75 animate-[spin_15s_linear_infinite_reverse]" />
      </div>

      {/* Background Particles (CSS) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: [Math.random() * 400 - 200, Math.random() * 400 - 200],
              y: [Math.random() * 400 - 200, Math.random() * 400 - 200]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            className="absolute w-1 h-1 bg-brand-accent rounded-full blur-[1px]"
            style={{
              top: '50%',
              left: '50%'
            }}
          />
        ))}
      </div>
    </div>
  );
};
