import React from 'react';
import { motion } from 'motion/react';
import { Code2, Cpu, Database, Rocket, Layout, Server, Workflow, Brain, ShieldCheck, Zap } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Layout size={18} />,
    skills: ['React.js', 'Next.js', 'JavaScript', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    icon: <Server size={18} />,
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Auth'],
  },
  {
    title: 'Database',
    icon: <Database size={18} />,
    skills: ['MongoDB', 'Basic SQL', 'Indexing', 'Aggregation'],
  },
  {
    title: 'AI Systems',
    icon: <Cpu size={18} />,
    skills: ['Gemini API', 'LLM Integration', 'Vector DBs', 'Prompt Eng.'],
  },
];

const principles = [
  {
    title: 'Scalable Systems',
    icon: <Rocket size={20} />,
  },
  {
    title: 'API Design',
    icon: <ShieldCheck size={20} />,
  },
  {
    title: 'Performance',
    icon: <Zap size={20} />,
  },
  {
    title: 'Clean Architecture',
    icon: <Brain size={20} />,
  },
];

export const Profile = () => {
  return (
    <section id="profile" className="py-32 relative overflow-hidden bg-brand-bg">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* About Section - Main Bento Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bg-white/[0.02] backdrop-blur-3xl p-10 md:p-20 rounded-[3rem] border border-white/[0.05] relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] group-hover:opacity-[0.05] transition-all duration-700 pointer-events-none">
              <img 
                src="https://picsum.photos/seed/developer-profile/1200/800" 
                alt="Background" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale scale-110 group-hover:scale-100 transition-transform duration-1000"
              />
            </div>
            
            <div className="relative z-10 grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-4">
                <div className="relative group/photo">
                  <div className="absolute inset-0 bg-brand-accent/20 blur-3xl rounded-full group-hover:bg-brand-accent/40 transition-all duration-700" />
                  <div className="relative aspect-square rounded-[2rem] overflow-hidden border-2 border-white/10 group-hover:border-brand-accent/50 transition-all duration-700 shadow-2xl">
                    <img 
                      src="/images/profile.jpg" 
                      alt="Roshan Badgujar" 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
                    />
                  </div>
                  {/* Decorative Badge */}
                  <div className="absolute -bottom-4 -right-4 bg-brand-accent text-brand-bg px-4 py-2 rounded-xl font-mono font-bold text-[10px] uppercase tracking-widest shadow-xl">
                    Verified_Dev
                  </div>
                </div>
              </div>

              <div className="md:col-span-8 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-12 bg-brand-accent/50" />
                  <h2 className="text-xs font-mono font-bold text-brand-accent/60 uppercase tracking-[0.5em]">
                    The Engineer
                  </h2>
                </div>
                
                <h3 className="text-5xl md:text-7xl font-bold tracking-tighter font-display leading-[0.85]">
                  Building Products, <br />
                  <span className="text-white/5 italic">Solving Problems.</span>
                </h3>
                
                <div className="space-y-6 text-brand-muted text-xl leading-relaxed max-w-2xl">
                  <p>
                    Motivated Full Stack Developer specializing in the <span className="text-white font-semibold">MARN stack</span> with a focus on clean, maintainable code. 
                  </p>
                  <p>
                    Proven ability to build <span className="text-brand-accent">scalable backend systems</span> and interactive frontend interfaces. Strong team leader with <span className="text-white font-semibold">hackathon experience</span>, a passion for building real-world products, and a commitment to continuous learning.
                  </p>
                </div>
              </div>
            </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 mt-20 pt-12 border-t border-white/[0.05]">
                {principles.map((p, i) => (
                  <motion.div 
                    key={p.title} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="space-y-5 group/item"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-brand-accent group-hover/item:bg-brand-accent group-hover/item:text-brand-bg transition-all duration-500 shadow-xl group-hover/item:shadow-brand-accent/20">
                      {p.icon}
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-muted group-hover/item:text-brand-accent transition-colors">
                      {p.title}
                    </div>
                  </motion.div>
                ))}
              </div>
          </motion.div>

          {/* Skills Section - Side Bento Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="bg-white/[0.02] backdrop-blur-3xl p-10 rounded-[3rem] border border-white/[0.05] h-full flex flex-col shadow-2xl relative overflow-hidden group">
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-accent/5 rounded-full blur-[80px] group-hover:bg-brand-accent/10 transition-all duration-700" />
              
              <h2 className="text-xs font-mono font-bold text-brand-accent/60 uppercase tracking-[0.5em] mb-16">
                Technical Arsenal
              </h2>
              
              <div className="space-y-12 flex-1">
                {skillCategories.map((category) => (
                  <div key={category.title} className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-brand-accent">
                        {category.icon}
                      </div>
                      <h4 className="font-bold text-xs uppercase tracking-[0.3em] text-white/80">{category.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05] text-[11px] font-mono text-brand-muted hover:text-brand-accent hover:border-brand-accent/30 transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 pt-12 border-t border-white/[0.05]">
                <div className="p-8 rounded-[2rem] bg-brand-accent/[0.03] border border-brand-accent/10 relative group/focus overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent opacity-0 group-hover/focus:opacity-100 transition-opacity duration-500" />
                  <p className="text-[10px] font-mono font-bold text-brand-accent uppercase tracking-[0.3em] mb-4 relative z-10">Current Focus</p>
                  <p className="text-base text-brand-muted italic leading-relaxed relative z-10">&quot;Architecting autonomous AI agents with long-term memory.&quot;</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
