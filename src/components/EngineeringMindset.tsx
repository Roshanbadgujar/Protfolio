import React from 'react';
import { motion } from 'motion/react';
import { Layers, Zap, Shield, Share2, Cpu } from 'lucide-react';

const MindsetCard = ({ icon: Icon, title, description, index }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="glass p-8 rounded-3xl border-white/5 relative group overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
      <Icon size={120} />
    </div>
    <div className="relative z-10 space-y-4">
      <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold font-display">{title}</h3>
      <p className="text-brand-muted text-sm leading-relaxed">
        {description}
      </p>
    </div>
    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-accent/0 via-brand-accent/20 to-brand-accent/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
  </motion.div>
);

export const EngineeringMindset = () => {
  const principles = [
    {
      icon: Layers,
      title: "Scalable Architecture",
      description: "Designing systems that handle growth gracefully, utilizing microservices and efficient data pipelines."
    },
    {
      icon: Zap,
      title: "AI Integration",
      description: "Seamlessly embedding LLMs and AI agents into workflows to automate complex reasoning tasks."
    },
    {
      icon: Shield,
      title: "Robust Security",
      description: "Implementing defense-in-depth strategies to protect data and maintain system integrity at scale."
    },
    {
      icon: Share2,
      title: "Interconnected Systems",
      description: "Building APIs and integration layers that allow diverse technologies to communicate effectively."
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/5 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border-white/5 text-xs font-mono text-brand-accent uppercase tracking-widest"
          >
            <Zap size={14} className="animate-pulse" />
            Engineering Philosophy
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold font-display tracking-tighter">
            The <span className="text-gradient">Mindset</span> of Scale
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p, i) => (
            <MindsetCard key={i} {...p} index={i} />
          ))}
        </div>

        {/* Animated Diagram Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 glass p-12 rounded-[40px] border-white/5 relative overflow-hidden group"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold font-display">System Orchestration</h3>
              <p className="text-brand-muted leading-relaxed">
                My approach involves creating a symbiotic relationship between traditional full-stack architectures and modern AI reasoning layers. By decoupling the UI, the backend, and the AI agents, I ensure each component can scale independently while maintaining high performance.
              </p>
              <div className="flex gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-2xl font-bold text-brand-accent">99.9%</span>
                  <span className="text-[10px] font-mono text-white/30 uppercase">Uptime Focus</span>
                </div>
                <div className="w-[1px] h-12 bg-white/10" />
                <div className="flex flex-col gap-1">
                  <span className="text-2xl font-bold text-brand-accent">50ms</span>
                  <span className="text-[10px] font-mono text-white/30 uppercase">Avg Latency</span>
                </div>
              </div>
            </div>
            <div className="relative h-64 flex items-center justify-center">
              {/* Abstract Animated Diagram */}
              <div className="relative w-48 h-48">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-dashed border-brand-accent/20 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 border-2 border-dashed border-brand-accent-purple/20 rounded-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-3xl bg-brand-accent/20 flex items-center justify-center shadow-[0_0_30px_rgba(0,242,255,0.2)]">
                    <Cpu size={32} className="text-brand-accent" />
                  </div>
                </div>
                {/* Floating Nodes */}
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 1, 0.3]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: i * 0.5 
                    }}
                    className="absolute w-3 h-3 bg-brand-accent rounded-full"
                    style={{
                      top: `${50 + 45 * Math.sin(i * Math.PI / 2)}%`,
                      left: `${50 + 45 * Math.cos(i * Math.PI / 2)}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
