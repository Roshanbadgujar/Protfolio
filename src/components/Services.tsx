import React from 'react';
import { motion } from 'motion/react';
import { Layout, Server, Database, Cpu, Globe, Zap } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      title: "Frontend Development",
      description: "Crafting pixel-perfect, responsive, and high-performance user interfaces using React and Next.js.",
      icon: <Layout size={32} />,
      tags: ["React", "Next.js", "Tailwind", "Framer Motion"]
    },
    {
      title: "Backend Architecture",
      description: "Building scalable and secure server-side applications with Node.js, Express, and robust API designs.",
      icon: <Server size={32} />,
      tags: ["Node.js", "Express", "JWT", "REST APIs"]
    },
    {
      title: "Database Management",
      description: "Designing efficient database schemas and optimizing queries for both SQL and NoSQL environments.",
      icon: <Database size={32} />,
      tags: ["MongoDB", "PostgreSQL", "Redis", "Mongoose"]
    },
    {
      title: "AI Integration",
      description: "Integrating modern LLMs and AI capabilities into web applications to create intelligent user experiences.",
      icon: <Cpu size={32} />,
      tags: ["Gemini API", "OpenAI", "Vector DBs", "LangChain"]
    },
    {
      title: "Web Performance",
      description: "Optimizing web applications for maximum speed, SEO, and core web vitals to ensure the best UX.",
      icon: <Zap size={32} />,
      tags: ["SEO", "Caching", "Lazy Loading", "Minification"]
    },
    {
      title: "Full Stack Solutions",
      description: "End-to-end product development from initial concept to deployment and maintenance.",
      icon: <Globe size={32} />,
      tags: ["MERN", "Deployment", "CI/CD", "Cloud"]
    }
  ];

  return (
    <section id="services" className="py-32 relative overflow-hidden bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="h-[1px] w-12 bg-brand-accent/50" />
            <span className="text-xs font-mono font-bold tracking-[0.5em] uppercase text-brand-accent/60">
              Expertise
            </span>
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-bold font-display tracking-tighter leading-[0.85]">
            What I <br />
            <span className="text-white/5 italic">Can Do For You</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="h-full bg-white/[0.02] backdrop-blur-3xl p-12 rounded-[3rem] border border-white/[0.05] hover:border-brand-accent/30 transition-all duration-700 flex flex-col group-hover:-translate-y-3 shadow-2xl">
                <div className="w-20 h-20 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center mb-10 text-brand-accent group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-brand-bg transition-all duration-500 shadow-xl group-hover:shadow-brand-accent/20">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-bold font-display text-white/90 mb-6 group-hover:text-brand-accent transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-brand-muted leading-relaxed mb-10 flex-1 text-lg">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {service.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono font-bold text-white/20 uppercase tracking-widest px-4 py-1.5 bg-white/[0.03] rounded-full border border-white/[0.05] group-hover:text-brand-accent/60 group-hover:border-brand-accent/20 transition-colors duration-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
