import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Send, MapPin } from 'lucide-react';

export const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const onChange = (key: 'name' | 'email' | 'message') => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [key]: event.target.value,
    }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        }),
      });

      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(payload?.error || 'Unable to send message.');
      }

      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (submitError) {
      setStatus('error');
      setError(submitError instanceof Error ? submitError.message : 'Something went wrong.');
    }
  };

  return (
    <section id="contact" className="py-32 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-[1px] w-12 bg-brand-accent/50" />
              <span className="text-xs font-mono font-bold tracking-[0.5em] uppercase text-brand-accent/60">
                Connection
              </span>
            </motion.div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-7xl font-bold tracking-tighter mb-10 font-display leading-[0.9]"
            >
              Let&apos;s build <br />
              <span className="text-white/5 italic">something great.</span>
            </motion.h3>
            <p className="text-brand-muted text-xl mb-12 leading-relaxed max-w-lg">
              I&apos;m currently looking for new opportunities to contribute to high-impact engineering teams. My inbox is always open.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform duration-500">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-brand-muted uppercase tracking-widest mb-1">Email</div>
                  <div className="text-xl font-medium text-white/90">roshanbadgujar87@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform duration-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-brand-muted uppercase tracking-widest mb-1">Location</div>
                  <div className="text-xl font-medium text-white/90">India</div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="https://github.com/Roshanbadgujar" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center hover:bg-brand-accent hover:text-white transition-all duration-500">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/roshan-badgujar-9005a731b/" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center hover:bg-brand-accent hover:text-white transition-all duration-500">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.02] backdrop-blur-3xl p-10 md:p-12 rounded-[3rem] border border-white/[0.05] shadow-2xl"
          >
            <form className="space-y-8" onSubmit={onSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-mono text-brand-muted uppercase tracking-widest ml-1">Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={onChange('name')}
                    required
                    className="w-full bg-white/[0.03] border border-white/[0.05] rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-accent/50 transition-colors text-white placeholder:text-white/10"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-mono text-brand-muted uppercase tracking-widest ml-1">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={onChange('email')}
                    required
                    className="w-full bg-white/[0.03] border border-white/[0.05] rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-accent/50 transition-colors text-white placeholder:text-white/10"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-mono text-brand-muted uppercase tracking-widest ml-1">Message</label>
                <textarea
                  placeholder="Tell me about your project..."
                  rows={4}
                  value={form.message}
                  onChange={onChange('message')}
                  required
                  className="w-full bg-white/[0.03] border border-white/[0.05] rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-accent/50 transition-colors resize-none text-white placeholder:text-white/10"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-5 bg-white text-brand-bg font-bold rounded-2xl hover:bg-brand-accent hover:text-white transition-all duration-500 flex items-center justify-center gap-3 group text-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
              </button>
              {status === 'success' && (
                <div className="text-sm text-emerald-300 font-medium">
                  Thanks! Your message has been sent.
                </div>
              )}
              {status === 'error' && (
                <div className="text-sm text-rose-300 font-medium">
                  {error || 'Unable to send message right now.'}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
