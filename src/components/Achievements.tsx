import React from 'react';
import { motion } from 'motion/react';
import { Award, Trophy, Users, Rocket } from 'lucide-react';

const achievements = [
  {
    title: 'Hackathon Finalist',
    description: 'Developed a real-time disaster management system in 48 hours, integrating AI for damage assessment.',
    icon: <Trophy className="text-amber-400" />,
    tag: 'Innovation',
  },
  {
    title: 'Team Leadership',
    description: 'Led a team of 4 developers to build a university-wide event management portal used by 2000+ students.',
    icon: <Users className="text-blue-400" />,
    tag: 'Leadership',
  },
  {
    title: 'MVP Development',
    description: 'Successfully launched 3 MVPs for early-stage startups within tight deadlines of 4-6 weeks.',
    icon: <Rocket className="text-emerald-400" />,
    tag: 'Speed',
  },
  {
    title: 'Open Source Contributor',
    description: 'Active contributor to MERN stack libraries and AI automation tools on GitHub.',
    icon: <Award className="text-purple-400" />,
    tag: 'Community',
  },
];

export const Achievements = () => {
  return (
    <section className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-brand-accent uppercase tracking-widest mb-4">Milestones</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Key Achievements</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 rounded-2xl border-white/5 hover:border-brand-accent/20 transition-all"
            >
              <div className="mb-4 flex justify-between items-start">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                  {a.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-muted border border-white/10 px-2 py-0.5 rounded">
                  {a.tag}
                </span>
              </div>
              <h4 className="text-lg font-bold mb-2">{a.title}</h4>
              <p className="text-sm text-brand-muted leading-relaxed">{a.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
