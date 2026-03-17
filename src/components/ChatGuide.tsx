import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { cn } from '@/lib/utils';

const SYSTEM_INSTRUCTION = `You are an AI Portfolio Guide representing Full Stack Developer Roshan Badgujar. 
Your purpose is to guide visitors through Roshan's developer portfolio and explain his work, projects, skills, and engineering experience in a clear, confident, and professional way.

About Roshan:
Roshan is a Full Stack Developer specializing in the MERN stack. He focuses on building scalable web applications and AI-powered systems. He enjoys solving real engineering problems and building products that can be used in real-world scenarios.

Technical Skills:
- Frontend: React.js, Next.js, JavaScript, HTML5, CSS3, Tailwind CSS.
- Backend: Node.js, Express.js, RESTful APIs, JWT authentication, MVC architecture.
- Database: MongoDB, Basic SQL.
- AI: Google Gemini API, LLM integrations, Vector databases, AI workflow automation.

Projects:
1. Healthcare Web Application: A full-stack healthcare platform built using the MERN stack. Includes patient appointment booking, management dashboards, and secure authentication.
2. AI Recipe Recommendation System: Uses AI (Gemini) to suggest recipes based on ingredients entered by the user.
3. AI Agent Workflow System: A complex project involving 9+ autonomous AI agents that coordinate tasks such as data retrieval, reasoning, and contextual search using vector databases.

Engineering Mindset:
Roshan enjoys building systems from scratch, experimenting with AI-driven workflows, and working on projects that combine backend systems, frontend interfaces, and intelligent automation. He focuses on scalability and clean architecture.

Behavior Rules:
1. Always maintain a professional and positive tone.
2. Present Roshan as a capable and thoughtful software engineer.
3. Focus on explaining his engineering mindset, problem solving skills, and technical abilities.
4. Never exaggerate or fabricate achievements. Only explain the real information provided.
5. Speak confidently but naturally.
6. Keep explanations concise, helpful, and technically clear.`;

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const ChatGuide = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const startTour = () => {
    setHasPermission(true);
    const welcomeText = "Hi! I'm Roshan's AI portfolio guide. I'm here to walk you through his projects, skills, and engineering experience. Roshan is a Full Stack Developer who loves building scalable systems and AI-powered tools. Where would you like to start?";
    setMessages([{
      role: 'model',
      text: welcomeText
    }]);
  };

  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', text: textToSend };
    setMessages(prev => [...prev, userMsg]);
    if (!textOverride) setInput('');
    setIsLoading(true);

    try {
      const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
      if (!apiKey) {
        setMessages(prev => [
          ...prev,
          { role: 'model', text: "AI key missing. Please set NEXT_PUBLIC_GEMINI_API_KEY." }
        ]);
        return;
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const chat = ai.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
        history: messages.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        }))
      });

      const result = await chat.sendMessage({ message: textToSend });
      const responseText = result.text || "I'm sorry, I couldn't process that request.";
      
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      console.error("Chat Error:", error);
      const errorText = "I'm having a bit of trouble connecting right now. Feel free to explore the portfolio manually!";
      setMessages(prev => [...prev, { role: 'model', text: errorText }]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeText = "Hi! I'm Roshan's AI portfolio guide. If you'd like, I can walk you through his projects, skills, and engineering experience. Would you like a quick guided tour?";
      setMessages([{
        role: 'model',
        text: welcomeText
      }]);
    }
  }, [isOpen, messages.length]);

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] h-[550px] bg-[#0B0F14] rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden border border-white/10"
          >
            {/* Header - Hardware Style */}
            <div className="p-4 border-b border-white/5 bg-white/2 flex items-center justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/5 to-transparent pointer-events-none" />
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent">
                  <Bot size={20} />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-widest text-white/90">System Guide v2.5</div>
                  <div className="text-[9px] text-brand-accent font-mono flex items-center gap-1.5 uppercase tracking-tighter">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse shadow-[0_0_8px_rgba(0,229,168,0.8)]" />
                    Neural Link Active
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 text-white/30 hover:text-white/90 transition-all interactive">
                <X size={18} />
              </button>
            </div>

            {/* Messages - Terminal Style */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "flex flex-col gap-2",
                    msg.role === 'user' ? "items-end" : "items-start"
                  )}
                >
                  <div className="flex items-center gap-2 px-1">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-white/20">
                      {msg.role === 'user' ? 'Local User' : 'Remote AI'}
                    </span>
                    <div className={cn("w-1 h-1 rounded-full", msg.role === 'user' ? "bg-brand-accent-purple" : "bg-brand-accent")} />
                  </div>
                  <div className={cn(
                    "p-4 rounded-xl text-sm leading-relaxed relative group",
                    msg.role === 'user' 
                      ? "bg-brand-accent-purple/5 text-white/90 border border-brand-accent-purple/20 rounded-tr-none" 
                      : "bg-white/2 text-white/80 border border-white/5 rounded-tl-none"
                  )}>
                    {msg.text}
                    
                    {/* Hardware Accents */}
                    <div className={cn(
                      "absolute top-0 w-4 h-[1px]",
                      msg.role === 'user' ? "right-0 bg-brand-accent-purple/40" : "left-0 bg-brand-accent/40"
                    )} />
                    
                    {/* Permission Buttons */}
                    {!hasPermission && msg.role === 'model' && i === 0 && (
                      <div className="mt-6 flex gap-3">
                        <button 
                          onClick={startTour}
                          className="px-5 py-2.5 bg-brand-accent text-brand-bg text-[10px] font-mono font-bold uppercase tracking-widest rounded-lg hover:bg-brand-accent/90 transition-all interactive shadow-[0_0_20px_rgba(0,229,168,0.2)]"
                        >
                          Initialize Tour
                        </button>
                        <button 
                          onClick={() => setHasPermission(true)}
                          className="px-5 py-2.5 bg-white/5 border border-white/10 text-white/60 text-[10px] font-mono font-bold uppercase tracking-widest rounded-lg hover:bg-white/10 transition-all interactive"
                        >
                          Manual Mode
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex flex-col gap-2 items-start">
                  <div className="flex items-center gap-2 px-1">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-white/20">Remote AI</span>
                    <div className="w-1 h-1 rounded-full bg-brand-accent animate-pulse" />
                  </div>
                  <div className="p-4 bg-white/2 rounded-xl rounded-tl-none border border-white/5 flex gap-1.5">
                    <span className="w-1.5 h-1.5 bg-brand-accent/40 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-brand-accent/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-brand-accent/40 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
            </div>

            {/* Input - Hardware Style */}
            <div className="p-6 border-t border-white/5 bg-white/2">
              <div className="relative group">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={hasPermission ? "ENTER COMMAND..." : "INITIALIZE LINK..."}
                  disabled={!hasPermission || isLoading}
                  className="w-full bg-black/40 border border-white/10 rounded-xl pl-5 pr-14 py-4 text-xs font-mono text-white/90 placeholder:text-white/20 focus:outline-none focus:border-brand-accent/50 focus:shadow-[0_0_20px_rgba(0,229,168,0.05)] transition-all disabled:opacity-50"
                />
                <button
                  onClick={handleSend}
                  disabled={!hasPermission || isLoading || !input.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-3 text-brand-accent hover:bg-brand-accent/10 rounded-lg transition-all disabled:opacity-50 interactive"
                >
                  <Send size={18} />
                </button>
              </div>
              <div className="mt-3 flex justify-between items-center px-1">
                <div className="text-[8px] font-mono text-white/10 uppercase tracking-widest">Secure Link v2.5.0</div>
                <div className="flex gap-1">
                  <div className="w-1 h-1 rounded-full bg-brand-accent/20" />
                  <div className="w-1 h-1 rounded-full bg-brand-accent/20" />
                  <div className="w-1 h-1 rounded-full bg-brand-accent/20" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "h-16 px-8 rounded-2xl flex items-center gap-4 shadow-[0_0_50px_rgba(0,0,0,0.3)] transition-all duration-500 border border-white/10 relative overflow-hidden group",
          isOpen ? "bg-[#0B0F14] text-white" : "bg-brand-accent text-brand-bg"
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        {isOpen ? <X size={24} className="relative z-10" /> : <MessageSquare size={24} className="relative z-10" />}
        {!isOpen && (
          <span className="font-mono font-bold text-xs uppercase tracking-[0.2em] relative z-10">Neural Link</span>
        )}
        {!isOpen && (
          <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.8)] animate-pulse" />
        )}
      </motion.button>
    </div>
  );
};
