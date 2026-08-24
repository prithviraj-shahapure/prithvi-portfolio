import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Sparkles } from 'lucide-react';

interface Project {
  id: number;
  name: string;
  desc: string;
  image: string;
  tags: string[];
  github: string;
  demo?: string;
  featured?: boolean;
}

export const Projects: React.FC = () => {
  const projectsList: Project[] = [
    {
      id: 1,
      name: 'PocketPilot AI',
      desc: 'An AI-powered personal finance and expense tracking ecosystem. Automates category tagging, predicts budget overflows, offers intelligent wealth management insights, and features an interactive conversational AI co-pilot panel.',
      image: '/screenshots/pocketpilot.png',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Firebase', 'Recharts'],
      github: 'https://github.com/prithviraj-shahapure/PocketPilotAI',
      featured: true,
    },
    {
      id: 2,
      name: 'StockVision AI',
      desc: 'An AI-driven stock market visualization and paper trading analytics platform. Delivers real-time market data visualization, custom dashboard watchlists, interactive analytical charts, and an AI trading mentor bot.',
      image: '/screenshots/stockvision.png',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Finnhub API', 'Recharts'],
      github: 'https://github.com/prithviraj-shahapure/AiStock',
      featured: true,
    },
    {
      id: 3,
      name: 'ResumeIQ AI',
      desc: 'An intelligent AI-powered resume parser and Applicant Tracking System (ATS) optimization tool. Analyzes uploaded resumes, computes ATS compatibility scores, reveals critical missing skills, and suggests course materials.',
      image: '/screenshots/resumeiq.png',
      tags: ['React', 'Python', 'Flask', 'Natural Language Processing', 'Tailwind CSS'],
      github: 'https://github.com/prithviraj-shahapure/ResumeIQ-AI',
      featured: true,
    },
    {
      id: 4,
      name: 'Ram Mandir in the Metaverse',
      desc: 'An immersive virtual reality spatial environment built using Unity. Features high-fidelity architectural assets modeled in Blender, custom gameplay mechanics coded in C#, and optimized rendering for WebXR devices.',
      image: '/screenshots/RamMandir.png',
      tags: ['Unity', 'Blender', 'C#', 'WebXR', '3D Modeling', 'Virtual Reality'],
      github: 'https://github.com/prithviraj-shahapure',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Title */}
      <div className="flex flex-col items-center justify-center text-center mb-16 space-y-2">
        <h4 className="text-xs uppercase font-semibold text-cyan-400 tracking-[0.25em]">
          CREATIVE LABS
        </h4>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          MY PROJECTS
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mt-2" />
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {projectsList.map((project, index) => {
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-premium rounded-2xl border border-indigo-500/10 overflow-hidden flex flex-col justify-between hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.12)] transition-all duration-300 group hover:-translate-y-1.5"
            >
              {/* Project Image Preview Container */}
              <div className="relative aspect-[16/9] overflow-hidden bg-space-950 border-b border-indigo-500/10">
                {project.featured && (
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 shadow-md">
                    <Sparkles className="w-2.5 h-2.5 animate-pulse text-cyan-400" />
                    <span>FEATURED AI</span>
                  </div>
                )}
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 filter brightness-90 group-hover:brightness-100 select-none pointer-events-none"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-950/80 via-space-950/10 to-transparent pointer-events-none" />
              </div>

              {/* Text content details */}
              <div className="p-6 text-left flex flex-col justify-between flex-grow">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors leading-tight">
                    {project.name}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-normal">
                    {project.desc}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded text-[10px] font-semibold tracking-wide bg-indigo-950/40 border border-indigo-500/15 text-indigo-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 mt-6 pt-2 border-t border-slate-900">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-white font-medium text-xs tracking-wider transition-all"
                  >
                    <Github className="w-4 h-4" />
                    GITHUB CODE
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium text-xs tracking-wider hover:from-purple-500 hover:to-indigo-500 transition-all border border-purple-500/20"
                    >
                      <ExternalLink className="w-4 h-4" />
                      LIVE DEMO
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
