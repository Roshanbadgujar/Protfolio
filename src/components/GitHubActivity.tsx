import React from 'react';
import { motion } from 'motion/react';
import { Github, Star, GitBranch, GitCommit } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip, Cell } from 'recharts';

const data = [
  { day: 'Mon', commits: 12 },
  { day: 'Tue', commits: 18 },
  { day: 'Wed', commits: 15 },
  { day: 'Thu', commits: 22 },
  { day: 'Fri', commits: 19 },
  { day: 'Sat', commits: 8 },
  { day: 'Sun', commits: 5 },
];

export const GitHubActivity = () => {
  return (
    <section className="py-24 bg-brand-bg/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass p-8 md:p-12 rounded-3xl border-brand-border overflow-hidden relative">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 blur-3xl rounded-full -mr-32 -mt-32" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-white text-brand-bg flex items-center justify-center">
                  <Github size={24} />
                </div>
                <h3 className="text-2xl font-bold">GitHub Activity</h3>
              </div>
              <p className="text-brand-muted mb-8 leading-relaxed">
                I maintain an active presence on GitHub, contributing to open-source projects and documenting my engineering journey through public repositories.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="p-4 glass rounded-xl text-center">
                  <div className="text-2xl font-bold text-brand-accent">500+</div>
                  <div className="text-xs text-brand-muted uppercase tracking-wider mt-1">Commits</div>
                </div>
                <div className="p-4 glass rounded-xl text-center">
                  <div className="text-2xl font-bold text-brand-accent">24</div>
                  <div className="text-xs text-brand-muted uppercase tracking-wider mt-1">Repos</div>
                </div>
                <div className="p-4 glass rounded-xl text-center">
                  <div className="text-2xl font-bold text-brand-accent">150+</div>
                  <div className="text-xs text-brand-muted uppercase tracking-wider mt-1">Stars</div>
                </div>
              </div>
            </div>

            <div className="h-[250px] w-full glass rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-mono text-brand-muted">Weekly Contribution</span>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-sm bg-brand-accent/20" />
                  <div className="w-3 h-3 rounded-sm bg-brand-accent/50" />
                  <div className="w-3 h-3 rounded-sm bg-brand-accent" />
                </div>
              </div>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <XAxis 
                    dataKey="day" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#888', fontSize: 12 }} 
                  />
                  <Tooltip 
                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                    contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '8px' }}
                  />
                  <Bar dataKey="commits" radius={[4, 4, 0, 0]}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.commits > 15 ? '#10b981' : '#10b98180'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
