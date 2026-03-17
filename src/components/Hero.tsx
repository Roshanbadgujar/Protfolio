import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Github, Terminal, Cpu, Server, Database, Code2 } from 'lucide-react';

const BackendTerminal = () => {
  const lines = [
    { text: "roshan@backend:~$ npm start", color: "text-white/40" },
    { text: "> initializing server...", color: "text-brand-accent" },
    { text: "> connecting to mongodb...", color: "text-brand-accent" },
    { text: "> database connected successfully", color: "text-emerald-400" },
    { text: "> express server running on port 3000", color: "text-emerald-400" },
    { text: "> ai model loaded: gemini-pro", color: "text-brand-accent-secondary" },
    { text: "> system ready for requests", color: "text-white/60" },
  ];

  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines(prev => (prev < lines.length ? prev + 1 : prev));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-[11px] sm:text-xs leading-relaxed space-y-2">
      {lines.slice(0, visibleLines).map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className={line.color}
        >
          {line.text}
        </motion.div>
      ))}
      {visibleLines >= lines.length && (
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="w-2 h-4 bg-brand-accent inline-block align-middle ml-1"
        />
      )}
    </div>
  );
};

const ServerStatus = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {[
        { label: 'CPU', value: '12%', icon: <Cpu size={14} /> },
        { label: 'RAM', value: '1.2GB', icon: <Server size={14} /> },
        { label: 'DB', value: 'Active', icon: <Database size={14} /> },
        { label: 'API', value: '200 OK', icon: <Code2 size={14} /> },
      ].map((stat) => (
        <div key={stat.label} className="bg-white/[0.03] border border-white/[0.05] rounded-xl p-4 flex items-center gap-4 group hover:border-brand-accent/30 transition-all duration-500">
          <div className="text-brand-accent/60 group-hover:text-brand-accent transition-colors">
            {stat.icon}
          </div>
          <div>
            <div className="text-[8px] font-mono font-bold text-brand-muted uppercase tracking-widest">{stat.label}</div>
            <div className="text-xs font-bold text-white/80">{stat.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-brand-bg">
      {/* Advanced Atmospheric Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Layered Gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(99,102,241,0.08),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,rgba(236,72,153,0.08),transparent_50%)]" />
        
        {/* Animated Glows */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px]" 
        />
        
        {/* Tech Grid with Perspective */}
        <div className="absolute inset-0 tech-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
        
        {/* Background Image with Low Opacity */}
        <div className="absolute inset-0 opacity-[0.03] grayscale contrast-150 mix-blend-overlay">
          <img 
            src="https://picsum.photos/seed/server-room/1920/1080" 
            alt="Server Background" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Content */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4"
            >
              <div className="h-[1px] w-12 bg-brand-accent/50" />
              <span className="text-xs font-mono font-bold tracking-[0.5em] uppercase text-brand-accent/60">
                B.Tech Student // Hackathon Enthusiast
              </span>
            </motion.div>

            <div className="space-y-8">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-7xl sm:text-8xl md:text-9xl font-bold tracking-tighter leading-[0.85] font-display"
              >
                <span className="block text-white/95">BUILDING</span>
                <span className="block text-brand-accent italic">SYSTEMS</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-xl md:text-2xl text-brand-muted max-w-xl leading-relaxed"
              >
                I'm <span className="text-white font-semibold">Roshan Badgujar</span>, a B.Tech student at <span className="text-brand-accent">SDBCE Indore</span>, specializing in building scalable backend systems and leading hackathon teams.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-6"
            >
              <a
                href="#projects"
                className="relative group px-10 py-5 bg-white text-brand-bg font-bold rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] active:scale-95 shadow-2xl"
              >
                <div className="absolute inset-0 bg-brand-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative flex items-center gap-3 text-lg group-hover:text-white transition-colors duration-500">
                  View Architecture <ArrowRight size={20} />
                </span>
              </a>
              
              <a
                href="https://github.com/Roshanbadgujar"
                target="_blank"
                rel="noreferrer"
                className="px-10 py-5 bg-white/[0.03] border border-white/[0.05] font-bold rounded-2xl hover:bg-white/[0.08] transition-all duration-500 flex items-center gap-3 text-white/80 hover:text-white hover:scale-[1.02] active:scale-95 shadow-xl"
              >
                <Github size={20} />
                GitHub
              </a>
            </motion.div>
          </div>

          {/* Right Side: Backend Look */}
          <div className="relative perspective-1000 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, rotateY: 20, x: 50 }}
              animate={{ opacity: 1, rotateY: 0, x: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="relative z-10"
            >
              {/* Terminal Window */}
              <div className="bg-[#0a0a0a] rounded-[2.5rem] border border-white/[0.08] shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden group">
                {/* Header */}
                <div className="flex items-center justify-between px-8 py-5 border-b border-white/[0.03] bg-white/[0.01]">
                  <div className="flex gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/20" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20" />
                  </div>
                  <div className="flex items-center gap-3">
                    <Terminal size={14} className="text-brand-accent/40" />
                    <span className="text-[10px] font-mono font-bold text-brand-accent/40 uppercase tracking-[0.4em]">
                      backend_core.sh
                    </span>
                  </div>
                  <div className="w-12 h-[1px] bg-white/[0.05]" />
                </div>
                
                {/* Terminal Body */}
                <div className="p-10 min-h-[280px]">
                  <BackendTerminal />
                </div>

                {/* Footer / Status */}
                <div className="px-8 py-8 border-t border-white/[0.03] bg-white/[0.01] space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono font-bold text-brand-muted uppercase tracking-widest">System Health</span>
                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <div className="w-2 h-2 rounded-full bg-emerald-500/20" />
                      <div className="w-2 h-2 rounded-full bg-emerald-500/20" />
                    </div>
                  </div>
                  <ServerStatus />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-accent/10 rounded-full blur-[60px] -z-10" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-accent-secondary/10 rounded-full blur-[60px] -z-10" />
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-accent to-transparent" />
        <span className="text-[8px] font-mono text-brand-muted uppercase tracking-[0.5em] vertical-text">Scroll</span>
      </motion.div>
    </section>
  );
};
