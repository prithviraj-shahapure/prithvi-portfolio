import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, GraduationCap, Award, Target, Brain, Code, Eye, Bike, Activity, Trophy, Zap, Compass } from 'lucide-react';

export const About: React.FC = () => {
  // Photo mask coordinates
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Bio text mask coordinates
  const [bioMousePos, setBioMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isBioHovered, setIsBioHovered] = useState(false);

  // Mobile mode tab
  const [mobileActiveTab, setMobileActiveTab] = useState<'interactive' | 'sports'>('interactive');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!e.touches[0]) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.touches[0].clientX - rect.left,
      y: e.touches[0].clientY - rect.top,
    });
    setIsHovered(true);
  };

  const handleBioMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setBioMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleBioTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!e.touches[0]) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setBioMousePos({
      x: e.touches[0].clientX - rect.left,
      y: e.touches[0].clientY - rect.top,
    });
    setIsBioHovered(true);
  };

  // Technical engineering tags
  const interests = [
    { name: 'Artificial Intelligence', icon: <Brain className="w-3.5 h-3.5" /> },
    { name: 'Machine Learning', icon: <Cpu className="w-3.5 h-3.5" /> },
    { name: 'Full Stack Development', icon: <Code className="w-3.5 h-3.5" /> },
    { name: 'AR/VR / Immersive Technology', icon: <Eye className="w-3.5 h-3.5" /> },
    { name: 'Computer Vision', icon: <Eye className="w-3.5 h-3.5" /> },
    { name: 'Generative AI', icon: <Brain className="w-3.5 h-3.5" /> },
    { name: 'Software Engineering', icon: <Code className="w-3.5 h-3.5" /> },
    { name: 'Cyclist (Sports Background)', icon: <Bike className="w-3.5 h-3.5" /> },
  ];

  // Technical engineering cards
  const cards = [
    {
      title: 'CURRENT FOCUS',
      desc: 'AI / ML + Full Stack Development',
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
    },
    {
      title: 'EDUCATION',
      desc: 'B.Tech in Artificial Intelligence & Machine Learning',
      icon: <GraduationCap className="w-5 h-5 text-indigo-400" />,
    },
    {
      title: 'RESEARCH',
      desc: 'IEEE Research Publication Published',
      icon: <Award className="w-5 h-5 text-cyan-400" />,
    },
    {
      title: 'CAREER GOAL',
      desc: 'Building intelligent and impactful software systems.',
      icon: <Target className="w-5 h-5 text-pink-400" />,
    },
  ];

  // Athletic & Sports tags
  const sportsInterests = [
    { name: 'State-Level Cyclist', icon: <Bike className="w-3.5 h-3.5" /> },
    { name: 'Triathlete (Swim • Bike • Run)', icon: <Activity className="w-3.5 h-3.5" /> },
    { name: 'World Record Holder', icon: <Trophy className="w-3.5 h-3.5" /> },
    { name: 'Endurance Cycling', icon: <Bike className="w-3.5 h-3.5" /> },
    { name: 'Fitness & Mental Stamina', icon: <Zap className="w-3.5 h-3.5" /> },
    { name: 'Disciplined Athlete', icon: <Compass className="w-3.5 h-3.5" /> },
  ];

  // Athletic & Sports cards
  const sportsCards = [
    {
      title: 'STATE-LEVEL CYCLIST',
      desc: 'Competitive championship cyclist across Maharashtra state circuits.',
      icon: <Bike className="w-5 h-5 text-amber-400" />,
    },
    {
      title: 'TRIATHLETE',
      desc: 'Multi-sport endurance competitor: Passionate about Swim • Bike • Run.',
      icon: <Activity className="w-5 h-5 text-emerald-400" />,
    },
    {
      title: 'WORLD RECORD',
      desc: '125 km in 6 hrs (Clean Air Awareness Campaign - Unique ID: 2016YA187)',
      icon: <Trophy className="w-5 h-5 text-yellow-400" />,
    },
    {
      title: 'ATHLETIC DRIVE',
      desc: 'Translating athletic grit and relentless stamina into complex engineering solutions.',
      icon: <Zap className="w-5 h-5 text-cyan-400" />,
    },
  ];

  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Title */}
      <div className="flex flex-col items-center justify-center text-center mb-10 space-y-2">
        <motion.h4
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase font-semibold text-cyan-400 tracking-[0.25em]"
        >
          INTRODUCTION
        </motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
        >
          ABOUT ME
        </motion.h2>
        <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mt-2" />
      </div>

      {/* Mobile Interactive Switcher / Helper */}
      <div className="flex lg:hidden justify-center items-center gap-2 mb-8">
        <button
          onClick={() => setMobileActiveTab(mobileActiveTab === 'sports' ? 'interactive' : 'sports')}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide border transition-all duration-300 bg-purple-950/50 border-purple-500/30 text-purple-200 active:scale-95 shadow-[0_0_15px_rgba(168,85,247,0.2)]"
        >
          {mobileActiveTab === 'sports' ? (
            <>
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>Tap to view: <strong className="text-white">Tech Engineering</strong></span>
            </>
          ) : (
            <>
              <Bike className="w-3.5 h-3.5 text-amber-400" />
              <span>Tap to view: <strong className="text-amber-300">Sports & Cycling Profile</strong></span>
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Interactive Dual Photo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-4 flex justify-center"
        >
          <div
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchMove={handleTouchMove}
            onTouchEnd={() => {
              if (mobileActiveTab !== 'sports') setIsHovered(false);
            }}
            className="relative w-64 sm:w-72 lg:w-80 select-none overflow-hidden rounded-2xl cursor-crosshair touch-none"
          >
            {/* Primary Profile Image (default base layer) */}
            <img
              src="/profile.png"
              alt="Prithviraj Sanjay Shahapure"
              className="w-full h-auto object-contain pointer-events-none"
            />

            {/* Secondary Profile 2 Image (masked to cursor/touch position with soft wide feathering) */}
            <img
              src="/profile2.png"
              alt="Prithviraj Sanjay Shahapure Reveal"
              className="absolute inset-0 w-full h-full object-contain pointer-events-none transition-opacity duration-300"
              style={{
                opacity: mobileActiveTab === 'sports' || isHovered ? 1 : 0,
                WebkitMaskImage:
                  mobileActiveTab === 'sports'
                    ? 'none'
                    : isHovered
                    ? `radial-gradient(circle 175px at ${mousePos.x}px ${mousePos.y}px, black 45%, rgba(0,0,0,0.6) 75%, transparent 100%)`
                    : 'none',
                maskImage:
                  mobileActiveTab === 'sports'
                    ? 'none'
                    : isHovered
                    ? `radial-gradient(circle 175px at ${mousePos.x}px ${mousePos.y}px, black 45%, rgba(0,0,0,0.6) 75%, transparent 100%)`
                    : 'none',
              }}
            />
          </div>
        </motion.div>

        {/* Right Column: Interactive Dual Bio (Technical by default, Athletic Sports on cursor mask) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onMouseMove={handleBioMouseMove}
          onMouseEnter={() => setIsBioHovered(true)}
          onMouseLeave={() => setIsBioHovered(false)}
          onTouchStart={() => setIsBioHovered(true)}
          onTouchMove={handleBioTouchMove}
          onTouchEnd={() => {
            if (mobileActiveTab !== 'sports') setIsBioHovered(false);
          }}
          className="lg:col-span-8 relative select-none rounded-3xl cursor-crosshair touch-none"
        >
          {/* Base Layer: Technical Engineering Profile */}
          <div className="space-y-8 flex flex-col pointer-events-auto">
            <div className="space-y-4 text-left">
              <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-medium">
                I am an Artificial Intelligence & Machine Learning engineering student focused on building intelligent software, full-stack applications, and immersive AR/VR experiences.
              </p>
              <p className="text-base text-slate-400 leading-relaxed font-normal">
                Driven by curiosity and a passion for engineering, I integrate AI technologies into real-world software products. Coming from a sports background as a cyclist, I bring the same discipline, focus, and drive to my software engineering work. From advanced machine learning models to frontend-backend systems and immersive virtual environments, I strive to create impactful and intelligent solutions.
              </p>
            </div>

            {/* Technical Interests Tags */}
            <div className="flex flex-wrap gap-2.5 pt-1.5">
              {interests.map((interest) => (
                <span
                  key={interest.name}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-950/30 text-indigo-300 border border-indigo-500/10 hover:border-indigo-400/30 transition-all duration-300 hover:text-white"
                >
                  {interest.icon}
                  {interest.name}
                </span>
              ))}
            </div>

            {/* Technical Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {cards.map((card, idx) => (
                <div
                  key={idx}
                  className="glass-premium flex items-start gap-4 p-4 rounded-xl border border-indigo-500/10 hover:border-indigo-400/20 hover:shadow-[0_4px_20px_rgba(99,102,241,0.05)] transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-indigo-950/40 border border-indigo-500/15 group-hover:scale-105 transition-transform">
                    {card.icon}
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-bold text-slate-400 tracking-wider">
                      {card.title}
                    </span>
                    <span className="text-sm font-semibold text-slate-200 mt-1 leading-snug">
                      {card.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Masked Overlay Layer: Athletic & Sports Profile (Revealed on Cursor Hover / Touch Drag) */}
          <div
            className="absolute inset-0 space-y-8 flex flex-col pointer-events-none transition-opacity duration-300 bg-[#030014]"
            style={{
              opacity: mobileActiveTab === 'sports' || isBioHovered ? 1 : 0,
              WebkitMaskImage:
                mobileActiveTab === 'sports'
                  ? 'none'
                  : isBioHovered
                  ? `radial-gradient(circle 240px at ${bioMousePos.x}px ${bioMousePos.y}px, black 50%, rgba(0,0,0,0.6) 80%, transparent 100%)`
                  : 'none',
              maskImage:
                mobileActiveTab === 'sports'
                  ? 'none'
                  : isBioHovered
                  ? `radial-gradient(circle 240px at ${bioMousePos.x}px ${bioMousePos.y}px, black 50%, rgba(0,0,0,0.6) 80%, transparent 100%)`
                  : 'none',
            }}
          >
            <div className="space-y-4 text-left">
              <p className="text-lg sm:text-xl text-amber-200 leading-relaxed font-semibold">
                Beyond engineering, I am an active State-Level Cyclist and passionate Triathlete who lives by the spirit of SWIM • BIKE • RUN.
              </p>
              <p className="text-base text-amber-100/75 leading-relaxed font-normal">
                Endurance sports have shaped my work ethic and mindset. Pushing through grueling 100+ km rides, intense training schedules, and competitive multi-sport events has built unshakeable discipline, grit, and mental stamina — attributes I bring directly into solving complex software engineering challenges.
              </p>
            </div>

            {/* Sports Interests Tags */}
            <div className="flex flex-wrap gap-2.5 pt-1.5">
              {sportsInterests.map((interest) => (
                <span
                  key={interest.name}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-950/40 text-amber-300 border border-amber-500/20 shadow-[0_0_10px_rgba(245,158,11,0.1)]"
                >
                  {interest.icon}
                  {interest.name}
                </span>
              ))}
            </div>

            {/* Sports Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {sportsCards.map((card, idx) => (
                <div
                  key={idx}
                  className="glass-premium flex items-start gap-4 p-4 rounded-xl border border-amber-500/20 bg-amber-950/20 shadow-[0_4px_20px_rgba(245,158,11,0.08)]"
                >
                  <div className="p-2 rounded-lg bg-amber-950/60 border border-amber-500/30">
                    {card.icon}
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-bold text-amber-400 tracking-wider">
                      {card.title}
                    </span>
                    <span className="text-sm font-semibold text-amber-100 mt-1 leading-snug">
                      {card.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
