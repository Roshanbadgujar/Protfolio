import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ExternalLink, Github, Database, Cpu, Globe, ArrowRight, Code2 } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactElement<{ size?: number; className?: string }>;
  image: string;
  color: string;
  github: string;
  link: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative perspective-1000"
    >
      <div className="relative bg-white/[0.02] backdrop-blur-3xl rounded-[3rem] overflow-hidden border border-white/[0.05] transition-all duration-700 group-hover:border-brand-accent/30 shadow-2xl preserve-3d">
        {/* Image / Preview Area */}
        <div className="h-80 relative overflow-hidden" style={{ transform: "translateZ(50px)" }}>
          <img 
            src={project.image} 
            alt={project.title}
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-all duration-700 group-hover:scale-110"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-700`} />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="relative group/icon">
               <div className="absolute inset-0 bg-brand-accent/10 blur-[100px] rounded-full scale-150 group-hover:scale-200 transition-transform duration-700" />
               <div className="relative z-10 text-white/10 group-hover:text-brand-accent group-hover:scale-110 transition-all duration-700">
                 {React.cloneElement(project.icon, { size: 100 })}
               </div>
             </div>
          </div>
          
          {/* Tech Tags Overlay */}
          <div className="absolute bottom-8 left-8 flex flex-wrap gap-3">
            {project.tags.map((tag: string, i: number) => (
              <motion.span 
                key={tag} 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="px-5 py-2 rounded-full bg-black/60 backdrop-blur-xl border border-white/[0.05] text-[10px] font-mono font-bold text-brand-accent/80 uppercase tracking-widest hover:bg-brand-accent hover:text-brand-bg transition-all duration-300 cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-12 space-y-8" style={{ transform: "translateZ(30px)" }}>
          <div className="flex justify-between items-start">
            <h3 className="text-4xl font-bold font-display text-white/90 group-hover:text-brand-accent transition-colors duration-500 leading-tight">{project.title}</h3>
            <div className="flex gap-5">
              <a href="#" className="text-white/20 hover:text-brand-accent transition-all duration-500 hover:scale-125"><Github size={24} /></a>
              <a href="#" className="text-white/20 hover:text-brand-accent transition-all duration-500 hover:scale-125"><ExternalLink size={24} /></a>
            </div>
          </div>
          
          <p className="text-brand-muted leading-relaxed text-xl">
            {project.description}
          </p>

          {/* Architecture Reveal */}
          <div className="pt-8 border-t border-white/[0.05]">
            <button className="text-[11px] font-mono font-bold text-brand-accent/60 uppercase tracking-[0.4em] flex items-center gap-4 group/btn hover:gap-6 hover:text-brand-accent transition-all duration-500">
              View System Architecture <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-500" />
            </button>
          </div>
        </div>

        {/* Hover Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent/0 via-brand-accent/5 to-brand-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-3xl pointer-events-none" />
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const projects: Project[] = [
    {
      title: "Kanchana AI",
      description: "A sophisticated AI-driven assistant designed for complex task automation and natural language processing, leveraging advanced LLM integration.",
      tags: ["Gemini AI", "Node.js", "React", "Tailwind"],
      icon: <Cpu />,
      image: "https://picsum.photos/seed/kanchana-ai/800/600",
      color: "from-brand-accent/20 to-transparent",
      github: "https://github.com/Roshanbadgujar",
      link: "#"
    },
    {
      title: "Healthcare Web Application",
      description: "Full-stack healthcare platform with patient booking, appointment handling, and secure admin dashboards. Solo project focused on system reliability.",
      tags: ["MongoDB", "Express", "React", "Node.js", "JWT"],
      icon: <Globe />,
      image: "https://picsum.photos/seed/healthcare/800/600",
      color: "from-brand-accent/20 to-transparent",
      github: "https://github.com/Hacktecher-04?tab=repositories",
      link: "https://healthcare.netlify.app"
    },
    {
      title: "Advanced Recipe Builder",
      description: "A development-ready platform for creating and managing smart recipes with AI-powered ingredient suggestions and nutritional analysis.",
      tags: ["MERN Stack", "Gemini API", "Redux", "Netlify"],
      icon: <Database />,
      image: "https://picsum.photos/seed/recipe-pro/800/600",
      color: "from-white/10 to-transparent",
      github: "https://github.com/Hacktecher-04?tab=repositories",
      link: "https://khanakhajana.netlify.app"
    },
    {
      title: "Professional Resume Builder",
      description: "A high-performance tool for generating ATS-friendly resumes dynamically, featuring multiple templates and real-time PDF generation.",
      tags: ["React", "Node.js", "PDF-Lib", "Tailwind"],
      icon: <Code2 size={24} />,
      image: "https://picsum.photos/seed/resume-builder/800/600",
      color: "from-brand-accent/20 to-transparent",
      github: "https://github.com/Roshanbadgujar",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-16">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="h-[1px] w-12 bg-brand-accent/50" />
              <span className="text-xs font-mono font-bold tracking-[0.5em] uppercase text-brand-accent/60">
                Case Studies
              </span>
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-bold font-display tracking-tighter leading-[0.85]">
              Engineering <br />
              <span className="text-white/5 italic">Excellence</span>
            </h2>
          </div>
          <div className="max-w-lg text-right space-y-8">
            <p className="text-brand-muted text-2xl leading-relaxed">
              Exploring the intersection of <span className="text-white font-semibold">scalable architecture</span> and <span className="text-brand-accent">intelligent systems</span> through real-world implementations.
            </p>
            <div className="flex justify-end gap-3">
              <div className="w-3 h-3 rounded-full bg-brand-accent" />
              <div className="w-3 h-3 rounded-full bg-brand-accent/30" />
              <div className="w-3 h-3 rounded-full bg-brand-accent/10" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
