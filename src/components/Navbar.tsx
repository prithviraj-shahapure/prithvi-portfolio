import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About Me', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Research', id: 'research' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleScrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-space-950/70 backdrop-blur-md border-b border-indigo-500/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand/Logo */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer flex flex-col items-start"
          >
            <span className="text-xl font-bold tracking-wider text-white flex items-center gap-1.5">
              PS<span className="text-cyan-400 font-black">.</span>
            </span>
            <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-[0.2em] hidden sm:inline-block">
              Prithviraj Sanjay Shahapure
            </span>
          </div>

          {/* Center Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-indigo-950/20 px-3 py-1.5 rounded-full border border-indigo-500/10 backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBg"
                      className="absolute inset-0 bg-indigo-500/10 rounded-full border border-indigo-400/20 shadow-[0_0_15px_rgba(99,102,241,0.15)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Socials & Resume CTA (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/prithviraj-shahapure"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-200 p-1"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/prithviraj-shahapure/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-200 p-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 hover:text-white p-1"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[60px] z-40 bg-space-950/95 backdrop-blur-lg md:hidden border-b border-indigo-500/10 flex flex-col justify-between p-6 h-[calc(100vh-60px)]"
          >
            <div className="flex flex-col space-y-6 pt-6">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleScrollTo(item.id)}
                    className={`text-left text-lg font-semibold tracking-wide py-2 border-b border-slate-800 transition-colors ${
                      isActive
                        ? 'text-cyan-400 border-indigo-500/20'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.label}</span>
                      {isActive && <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col items-center space-y-4 pb-12">
              <div className="flex items-center space-x-8">
                <a
                  href="https://github.com/prithviraj-shahapure"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors duration-200 p-2 bg-slate-900/40 rounded-full border border-slate-800"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/prithviraj-shahapure/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors duration-200 p-2 bg-slate-900/40 rounded-full border border-slate-800"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
              <span className="text-xs text-slate-500 font-mono tracking-wider">
                prithvi.ai.web@gmail.com
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
