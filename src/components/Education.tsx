import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

export const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science (AI & ML)",
      institution: "Sushila Devi Bansal College of Engineering, Indore",
      period: "2024 - 2028",
      description: "Focusing on Artificial Intelligence and Machine Learning. Actively participating in technical communities and leading hackathon teams.",
      courses: ["Computer Science Fundamentals", "AI & ML Basics", "Full Stack Development", "Data Structures"]
    }
  ];

  const certifications = [
    {
      title: "Leadership & Participation",
      issuer: "National-level Coding Events",
      date: "2024",
      icon: <Award size={20} />
    },
    {
      title: "Hackathon Excellence",
      issuer: "IIT Indore / Chameli Devi College",
      date: "2024",
      icon: <Award size={20} />
    },
    {
      title: "Full Stack Specialization",
      issuer: "Self-Paced Learning",
      date: "2024",
      icon: <Award size={20} />
    }
  ];

  return (
    <section id="education" className="py-32 relative overflow-hidden bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24">
          
          {/* Education Side */}
          <div>
            <div className="mb-20 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="h-[1px] w-12 bg-brand-accent/50" />
                <span className="text-xs font-mono font-bold tracking-[0.5em] uppercase text-brand-accent/60">
                  Academic Background
                </span>
              </motion.div>
              <h2 className="text-6xl md:text-8xl font-bold font-display tracking-tighter leading-[0.85]">
                Education <br />
                <span className="text-white/5 italic">History</span>
              </h2>
            </div>

            <div className="space-y-16">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative pl-10 border-l border-white/[0.05]"
                >
                  <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] bg-brand-accent rounded-full shadow-[0_0_15px_rgba(100,100,255,0.4)]" />
                  <div className="flex items-center gap-3 text-brand-accent/60 font-mono text-[10px] uppercase tracking-widest font-bold mb-4">
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>
                  <h3 className="text-3xl font-bold font-display text-white/90 mb-3">{edu.degree}</h3>
                  <p className="text-brand-accent/80 font-bold mb-6 text-lg">{edu.institution}</p>
                  <p className="text-brand-muted text-lg leading-relaxed mb-8">{edu.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {edu.courses.map(course => (
                      <span key={course} className="text-[10px] font-mono font-bold text-white/20 border border-white/[0.05] px-4 py-1.5 rounded-full bg-white/[0.02]">
                        {course}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Side */}
          <div className="bg-white/[0.02] backdrop-blur-3xl p-12 md:p-16 rounded-[3rem] border border-white/[0.05] shadow-2xl">
            <div className="mb-16 space-y-6">
              <div className="flex items-center gap-4 text-brand-accent">
                <BookOpen size={32} />
                <h3 className="text-4xl font-bold font-display text-white/90">Certifications</h3>
              </div>
              <p className="text-brand-muted text-lg leading-relaxed">Validating my technical expertise through industry-recognized certifications and continuous learning.</p>
            </div>

            <div className="grid gap-8">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between p-8 rounded-3xl bg-white/[0.03] border border-white/[0.05] hover:border-brand-accent/30 transition-all duration-500 group shadow-xl"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-bg transition-all duration-500 shadow-lg">
                      {cert.icon}
                    </div>
                    <div>
                      <h4 className="text-white/90 font-bold text-lg group-hover:text-brand-accent transition-colors duration-500">{cert.title}</h4>
                      <p className="text-brand-muted text-[10px] uppercase tracking-widest font-bold mt-1">{cert.issuer}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-white/10 uppercase tracking-widest">{cert.date}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 p-10 rounded-[2.5rem] bg-brand-accent/[0.03] border border-brand-accent/10 relative group/focus overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent opacity-0 group-hover/focus:opacity-100 transition-opacity duration-500" />
              <h4 className="text-[10px] font-mono font-bold text-brand-accent uppercase tracking-[0.3em] mb-4 relative z-10">Continuous Learning</h4>
              <p className="text-base text-brand-muted italic leading-relaxed relative z-10">&quot;I spend at least 10 hours a week learning new technologies and contributing to open source.&quot;</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
