import React from 'react';
import { motion } from 'motion/react';
import { Quote, Code2, Cpu, Zap, Terminal } from 'lucide-react';

export const DeveloperSpotlight = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-brand-bg">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-accent/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Editorial Content */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="h-[1px] w-12 bg-brand-accent/50" />
              <span className="text-xs font-mono font-bold tracking-[0.5em] uppercase text-brand-accent/60">
                Developer Spotlight
              </span>
            </motion.div>

            <div className="space-y-8">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-6xl md:text-8xl font-bold font-display tracking-tighter leading-[0.85]"
              >
                CODE IS MY <br />
                <span className="text-brand-accent italic">CANVAS.</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="relative"
              >
                <Quote className="absolute -top-8 -left-8 text-white/5 w-24 h-24 -z-10" />
                <p className="text-2xl md:text-3xl text-brand-muted leading-relaxed font-light italic">
                  "I believe that great software isn't just about solving problems—it's about creating experiences that feel seamless, intelligent, and human."
                </p>
              </motion.div>
            </div>

            {/* Technical Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-12">
              {[
                { label: 'Hackathons', value: '5+', icon: <Zap size={16} /> },
                { label: 'B.Tech Year', value: '2nd', icon: <Cpu size={16} /> },
                { label: 'Projects', value: '10+', icon: <Code2 size={16} /> },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + (i * 0.1) }}
                  className="space-y-2"
                >
                  <div className="flex items-center gap-3 text-brand-accent/60">
                    {stat.icon}
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest">{stat.label}</span>
                  </div>
                  <div className="text-4xl font-bold font-display text-white/90">{stat.value}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Large Stylized Image */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative"
            >
              {/* Decorative Frames */}
              <div className="absolute -inset-4 border border-brand-accent/20 rounded-[3rem] -z-10 translate-x-4 translate-y-4" />
              <div className="absolute -inset-4 border border-white/5 rounded-[3rem] -z-20 translate-x-8 translate-y-8" />
              
              {/* Main Image Container */}
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border-2 border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.5)] group">
                <img 
                  src="/images/profile.jpg" 
                  alt="Roshan Badgujar" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                />
                
                {/* Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex items-center gap-3 mb-2">
                    <Terminal size={14} className="text-brand-accent" />
                    <span className="text-[10px] font-mono font-bold text-brand-accent uppercase tracking-widest">Status: Active</span>
                  </div>
                  <p className="text-xs text-white/60 font-mono leading-relaxed">
                    Currently architecting high-performance systems and exploring the boundaries of AI integration.
                  </p>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -right-8 bg-white text-brand-bg p-8 rounded-full shadow-2xl z-20 hidden md:block"
              >
                <div className="text-center">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-widest mb-1">Available</div>
                  <div className="text-xs font-bold text-brand-accent">FOR HIRE</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
