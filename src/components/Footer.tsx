import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/[0.05] bg-brand-bg relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 bg-brand-accent/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <div className="text-2xl font-bold tracking-tighter flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-white text-brand-bg rounded-xl flex items-center justify-center font-black text-lg shadow-2xl">
                RB
              </div>
              <span className="text-white/90">Roshan <span className="text-brand-accent">Badgujar</span></span>
            </div>
            <p className="text-base text-brand-muted max-w-xs">
              Building the future of web and AI systems with passion and precision.
            </p>
          </div>

          <div className="flex gap-8">
            <a href="https://github.com/Roshanbadgujar" target="_blank" rel="noreferrer" className="text-white/20 hover:text-brand-accent transition-all duration-300 hover:scale-125">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/roshan-badgujar-9005a731b/" target="_blank" rel="noreferrer" className="text-white/20 hover:text-brand-accent transition-all duration-300 hover:scale-125">
              <Linkedin size={24} />
            </a>
            <a href="mailto:roshanbadgujar87@gmail.com" className="text-white/20 hover:text-brand-accent transition-all duration-300 hover:scale-125">
              <Mail size={24} />
            </a>
          </div>

          <div className="text-sm text-brand-muted font-mono font-bold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Roshan Badgujar.
          </div>
        </div>
      </div>
    </footer>
  );
};
