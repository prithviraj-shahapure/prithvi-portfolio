import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-indigo-500/10 bg-[#030014]/80 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand details */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
          <span className="text-lg font-bold tracking-wider text-white">
            PS<span className="text-cyan-400">.</span>
          </span>
          <span className="text-sm font-semibold text-slate-300">
            Prithviraj Sanjay Shahapure
          </span>
          <span className="text-xs text-slate-500 font-medium tracking-wide">
            AI/ML Engineer • Full Stack Developer • AR/VR Developer
          </span>
        </div>

        {/* Social / Email Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/prithviraj-shahapure"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-cyan-400 transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/prithviraj-shahapure/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-cyan-400 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:prithvi.ai.web@gmail.com"
            className="text-slate-500 hover:text-cyan-400 transition-colors duration-200"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-6 border-t border-slate-900 text-center">
        <p className="text-xs text-slate-600 font-medium tracking-wide">
          © {currentYear} Prithviraj Sanjay Shahapure. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
