import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceItemProps {
  exp: any;
  index: number;
  key?: any;
}

const ExperienceItem = ({ exp, index }: ExperienceItemProps) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-brand-accent rounded-full transform -translate-x-1/2 z-10 shadow-[0_0_20px_rgba(100,100,255,0.4)]" />

      {/* Content Card */}
      <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-24' : 'md:pr-24'} pl-12`}>
        <div className="bg-white/[0.02] backdrop-blur-3xl p-10 rounded-[2.5rem] border border-white/[0.05] hover:border-brand-accent/30 transition-all duration-500 group">
          <div className="flex flex-wrap justify-between items-start mb-8 gap-4">
            <div>
              <h3 className="text-3xl font-bold font-display text-white/90 group-hover:text-brand-accent transition-colors duration-500">
                {exp.role}
              </h3>
              <div className="flex items-center gap-3 text-brand-accent/60 font-mono text-xs mt-2 font-bold tracking-wider">
                <Briefcase size={14} />
                <span>{exp.company}</span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-2 text-white/30 font-mono text-[10px] uppercase tracking-widest font-bold">
                <Calendar size={12} />
                <span>{exp.period}</span>
              </div>
              <div className="flex items-center gap-2 text-white/20 font-mono text-[10px] uppercase tracking-widest mt-1">
                <MapPin size={12} />
                <span>{exp.location}</span>
              </div>
            </div>
          </div>

          <p className="text-brand-muted leading-relaxed mb-8 text-lg">
            {exp.description}
          </p>

          <div className="space-y-4">
            {exp.achievements.map((achievement: string, j: number) => (
              <div key={j} className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-brand-accent/30" />
                <span className="text-sm text-white/50 font-mono tracking-tight">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Spacer for the other side */}
      <div className="hidden md:block md:w-1/2" />
    </motion.div>
  );
};

export const Experience = () => {
  const experiences = [
    {
      company: "IIT Indore & Chameli Devi College",
      role: "Hackathon Team Lead",
      period: "2024 - Present",
      location: "Indore, India",
      description: "Leading 'Hacktecher' team in multiple 24-hour and 48-hour national-level hackathons. Managing end-to-end development of MVPs under tight time constraints.",
      achievements: [
        "Led a team of 4 developers to build and deploy MVPs",
        "Participated in Hackathons at IIT Indore and Chameli Devi College",
        "Demonstrated effective project management and agile sprint planning",
        "Resolved technical conflicts and ensured timely delivery of features"
      ]
    },
    {
      company: "Hacktecher Team",
      role: "Founder & Core Member",
      period: "2024 - Present",
      location: "Community",
      description: "Founded and managing a technical community focused on open-source development and competitive programming. Leading live deployments on GitHub.",
      achievements: [
        "Leading open-source development and live deployments",
        "Engaging in technical learning communities and coding groups",
        "Organizing internal team coding events and knowledge sharing",
        "Managing the team's GitHub organization and project repositories"
      ]
    },
    {
      company: "National Level Coding Events",
      role: "Participant & Leader",
      period: "2024",
      location: "Various",
      description: "Actively participating in national-level coding competitions and technical events, earning certificates for leadership and technical excellence.",
      achievements: [
        "Earned Certificates for Leadership and Participation",
        "Mastered rapid prototyping and MVP development",
        "Collaborated with diverse teams to solve real-world problems",
        "Applied MARN stack to build innovative solutions"
      ]
    }
  ];

  return (
    <section id="experience" className="py-32 relative overflow-hidden bg-brand-bg">
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
              Professional Journey
            </span>
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-bold font-display tracking-tighter leading-[0.85]">
            Experience <br />
            <span className="text-white/5 italic">Timeline</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/[0.05] transform -translate-x-1/2" />

          <div className="space-y-24">
            {experiences.map((exp, i) => (
              <ExperienceItem key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
