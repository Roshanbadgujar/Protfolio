import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin, Terminal, Download, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'About', href: '#profile' },
  { name: 'Experience', href: '#experience' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll
      const sections = navItems.map(item => item.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection('#' + section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-6xl',
        scrolled ? 'top-4' : 'top-8'
      )}
    >
      <div className={cn(
        "relative bg-black/40 backdrop-blur-2xl rounded-[2rem] px-6 py-3 flex items-center justify-between border transition-all duration-500 shadow-2xl",
        scrolled ? "border-white/10" : "border-white/5"
      )}>
        {/* Logo Area */}
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 group"
        >
          <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-white/10 group-hover:border-brand-accent/50 transition-colors duration-500">
            <img 
              src="/images/profile.jpg" 
              alt="Roshan Badgujar" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-brand-accent/10 group-hover:bg-transparent transition-colors duration-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-white leading-none">Roshan Badgujar</span>
            <span className="text-[9px] font-mono font-bold text-brand-accent/60 uppercase tracking-widest mt-1">Backend_Eng // v2.0</span>
          </div>
        </motion.a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center bg-white/[0.03] border border-white/[0.05] rounded-2xl px-2 py-1.5">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "px-5 py-2 text-[10px] font-mono font-bold uppercase tracking-widest transition-all duration-300 rounded-xl relative group",
                activeSection === item.href ? "text-brand-accent" : "text-white/40 hover:text-white/80"
              )}
            >
              {item.name}
              {activeSection === item.href && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-0 bg-brand-accent/10 rounded-xl -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-4 mr-4">
            <a href="https://github.com/Roshanbadgujar" target="_blank" rel="noreferrer" className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.05] text-white/30 hover:text-brand-accent hover:border-brand-accent/30 transition-all duration-300">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/roshan-badgujar-9005a731b/" target="_blank" rel="noreferrer" className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.05] text-white/30 hover:text-brand-accent hover:border-brand-accent/30 transition-all duration-300">
              <Linkedin size={18} />
            </a>
          </div>

          <a
            href="#contact"
            className="hidden sm:flex items-center gap-3 px-6 py-2.5 bg-brand-accent text-brand-bg font-bold text-xs uppercase tracking-widest rounded-xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(100,100,255,0.3)]"
          >
            <Terminal size={14} />
            Hire Me
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.05] text-white/60 hover:text-brand-accent transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-full left-0 right-0 mt-4 bg-black/80 backdrop-blur-3xl rounded-[2rem] border border-white/10 p-8 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-lg font-bold text-white/60 hover:text-brand-accent hover:bg-brand-accent/5 transition-all duration-300"
                >
                  {item.name}
                  <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <a href="#" className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05] text-white/60 font-bold text-sm">
                  <Github size={20} /> GitHub
                </a>
                <a href="#" className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-brand-accent text-brand-bg font-bold text-sm">
                  <Download size={20} /> Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
