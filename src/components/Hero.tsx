import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { TechOrbit } from './TechOrbit';

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center w-full h-full pt-24 pb-16 overflow-hidden z-20"
    >
      {/* Blackhole Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="rotate-180 absolute top-[-300px] sm:top-[-340px] left-0 w-full h-full object-cover -z-20 opacity-80"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      {/* Grid Layout Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-25 mt-16 lg:mt-0">
        {/* Left Column: Heading and copy */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 order-2 lg:order-1">
          {/* Welcome Box Badge */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="Welcome-box py-[8px] px-[12px] border border-[#7042f88b]"
          >
            <Sparkles className="text-[#b49bff] mr-[10px] h-5 w-5 animate-pulse" />
            <h1 className="Welcome-text text-xs sm:text-[13px]">
              AI/ML Engineer • Full Stack Developer • AR/VR Developer
            </h1>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-start mt-4 w-full"
          >
            <div className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-none">
              <span>
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 filter drop-shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                  Prithviraj
                </span>{' '}
                Sanjay Shahapure
              </span>
            </div>
          </motion.div>

          {/* Subheading / Description */}
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-slate-400 my-5 max-w-[600px] leading-relaxed font-normal"
          >
            Building production-ready AI systems, intelligent assistants, and immersive digital applications.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-row gap-4 w-full sm:w-auto pt-2"
          >
            <button
              onClick={() => handleScrollTo('projects')}
              className="py-2.5 px-6 bg-[#030014]/40 border border-[#7042f88b] text-white cursor-pointer rounded-lg text-sm font-semibold tracking-wider hover:bg-[#7042f8]/20 hover:border-[#7042f8] hover:shadow-[0_0_20px_rgba(112,66,248,0.25)] hover:scale-103 active:scale-95 transition-all"
            >
              View Projects
            </button>
            <a
              href="/Resume_Prithviraj_Shahapure.pdf"
              download
              className="py-2.5 px-6 bg-[#030014]/40 border border-[#7042f88b] text-center text-white cursor-pointer rounded-lg text-sm font-semibold tracking-wider hover:bg-[#7042f8]/20 hover:border-[#7042f8] hover:shadow-[0_0_20px_rgba(112,66,248,0.25)] hover:scale-103 active:scale-95 transition-all"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Right Column: Reference SVG Background + Orbit Overlaid */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 relative w-full h-[400px] sm:h-[450px] lg:h-[550px] flex items-center justify-center order-1 lg:order-2"
        >
          {/* Reference Space Vector Graphics Background */}
          <img
            alt="Space Orbit layout vector"
            draggable="false"
            loading="lazy"
            src="/hero-bg.svg"
            className="absolute inset-0 w-full h-full object-contain opacity-35 select-none pointer-events-none"
          />

          {/* Interactive 3D Tech Orbit rotating in front of it */}
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-auto">
            <TechOrbit />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
