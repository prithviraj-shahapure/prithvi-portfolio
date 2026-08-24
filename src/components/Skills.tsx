import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface Skill {
  name: string;
  type: 'png' | 'svg';
  color?: string;
  svgPath?: React.ReactNode;
  viewBox?: string;
}

// Map of custom colored SVGs for technologies not available as PNGs on reference site
const svgSkills: Record<string, { color: string; viewBox: string; svg: React.ReactNode }> = {
  'Python': {
    color: '#3776AB',
    viewBox: '0 0 24 24',
    svg: <path fill="currentColor" d="M12 2C6.48 2 6 6.5 6 6.5h2.5s.5-2.5 3.5-2.5 3.5 1.5 3.5 2.5v1.5H9v4h6.5s3.5-.5 3.5-3.5V6.5S18.5 2 12 2zm-3 8.5v1.5H6.5S3 12 3 15v2.5S3 22 9.5 22s6.5-4.5 6.5-4.5h-2.5s-.5 2.5-3.5 2.5-3.5-1.5-3.5-2.5v-1.5H15v-4H8.5z" />,
  },
  'PyTorch': {
    color: '#EE4C2C',
    viewBox: '0 0 24 24',
    svg: <path fill="currentColor" d="M12 2L2.5 17h19L12 2zm0 3.84L17.79 15H6.21L12 5.84zM11 9h2v4h-2V9zm0 5h2v2h-2v-2z" />,
  },
  'TensorFlow': {
    color: '#FF6F00',
    viewBox: '0 0 24 24',
    svg: <path fill="currentColor" d="M12 1.5L3 6.7v10.6l9 5.2 9-5.2V6.7l-9-5.2zm7.5 15.2l-7.5 4.3v-4.5l4.5-2.6.8.5v1.3.5.5zm0-2.8l-1.5-.9V11.2l1.5.9v1.6zm-6-2.5l-4.5-2.6 4.5-2.6 4.5 2.6-4.5 2.6zm-1.5 9.6l-7.5-4.3V7.2l7.5 4.3v9.6z" />,
  },
  'Scikit-learn': {
    color: '#F7931E',
    viewBox: '0 0 24 24',
    svg: <path fill="currentColor" d="M12 2L2 7l10 5 10-5-10-5zm0 10L2 17l10 5 10-5-10-5z" />,
  },
  'OpenCV': {
    color: '#5C3EE8',
    viewBox: '0 0 24 24',
    svg: <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />,
  },
  'Pandas': {
    color: '#150458',
    viewBox: '0 0 24 24',
    svg: <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-6h2v6zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />,
  },
  'Flask': {
    color: '#A0A0A0',
    viewBox: '0 0 24 24',
    svg: <path fill="currentColor" d="M12 2a5 5 0 0 0-5 5v2.34l-1.78.89A2 2 0 0 0 4 11.92V18a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-6.08a2 2 0 0 0-1.22-1.69L17 9.34V7a5 5 0 0 0-5-5zm3 7.66l1.22-.61V18a2 2 0 0 1-2 2H9.78A2 2 0 0 1 8 18V9.05l1.22.61a2 2 0 0 0 1.78 0L12 9.11l1 .55a2 2 0 0 0 2 0z" />,
  },
  'Git': {
    color: '#F05032',
    viewBox: '0 0 24 24',
    svg: <path fill="currentColor" d="M20.73 11.27l-8-8a1 1 0 0 0-1.41 0l-8 8a1 1 0 0 0 0 1.41l8 8a1 1 0 0 0 1.41 0l8-8a1 1 0 0 0 0-1.41zM12 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0-4.5A1.5 1.5 0 1 1 12 10a1.5 1.5 0 0 1 0 3.5zm3.5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />,
  },
  'Vercel': {
    color: '#FFFFFF',
    viewBox: '0 0 24 24',
    svg: <path fill="currentColor" d="M12 2L2 20h20L12 2z" />,
  },
  'Unity': {
    color: '#FFFFFF',
    viewBox: '0 0 24 24',
    svg: <path fill="currentColor" d="M12.12 1.34L1.75 7.33v11.98l10.37 5.99 10.37-5.99V7.33L12.12 1.34zM3.75 9.07l6.87-3.97v7.93l-6.87 3.97V9.07zm8.37 11.23l-6.87-3.97 6.87-3.97 6.87 3.97-6.87 3.97zm8.37-4.13l-6.87-3.97V5.1l6.87 3.97v7.93z" />,
  },
  'Blender': {
    color: '#EA7600',
    viewBox: '0 0 24 24',
    svg: <path fill="currentColor" d="M12 2a10 10 0 0 0-10 10 10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm1 3.5c1.86 0 3.38 1.4 3.49 3.21l-2.09.42c-.22-.72-.94-1.23-1.79-1.19-.94.05-1.66.86-1.61 1.8.05.94.86 1.66 1.8 1.61.54-.03.99-.29 1.25-.69l1.98.71C15 13.06 13.11 14 11.5 14a4.5 4.5 0 1 1 1.5-8.5zm-1 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />,
  },
  'Three.js': {
    color: '#0080FF',
    viewBox: '0 0 24 24',
    svg: <path fill="currentColor" d="M12 2L2 22h20L12 2zm0 4.25L18.75 18H5.25L12 6.25z" />,
  },
  'WebXR': {
    color: '#FF007F',
    viewBox: '0 0 24 24',
    svg: <path fill="currentColor" d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-9 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />,
  },
  'C#': {
    color: '#178600',
    viewBox: '0 0 24 24',
    svg: <path fill="currentColor" d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm-1.5 14h-3v-8h3v8zm7.5-3.5h-2v2-1v-2h-2v-1h2v-2h1v2h2v1z" />,
  },
  'C++': {
    color: '#00599C',
    viewBox: '0 0 24 24',
    svg: <path fill="currentColor" d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm-1.5 14h-3v-8h3v8zm7.5-3.5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1z" />,
  },
};

export const Skills: React.FC = () => {
  // Ordered rows for Prithviraj's actual tech stack, arranged to form an upside down triangle (6, 5, 4, 3, 2)
  const rows: Skill[][] = [
    // Row 1 (6 icons): Core Frontend Web
    [
      { name: 'HTML', type: 'png' },
      { name: 'CSS', type: 'png' },
      { name: 'JavaScript', type: 'png' },
      { name: 'TypeScript', type: 'png' },
      { name: 'React', type: 'png' },
      { name: 'Next.js', type: 'png' },
    ],
    // Row 2 (5 icons): Web Frameworks & Databases
    [
      { name: 'Tailwind', type: 'png' },
      { name: 'Node.js', type: 'png' },
      { name: 'Express', type: 'png' },
      { name: 'MongoDB', type: 'png' },
      { name: 'MySQL', type: 'png' },
    ],
    // Row 3 (4 icons): Cloud, DevOps & Backends
    [
      { name: 'Firebase', type: 'png' },
      { name: 'Flask', type: 'svg' },
      { name: 'Git', type: 'svg' },
      { name: 'Docker', type: 'png' },
    ],
    // Row 4 (3 icons): Deployment & Programming Languages
    [
      { name: 'Vercel', type: 'svg' },
      { name: 'Python', type: 'png' },
      { name: 'C++', type: 'png' },
    ],
    // Row 5 (2 icons): 3D Modeling & Game Dev
    [
      { name: 'Unity', type: 'png' },
      { name: 'Blender', type: 'png' },
    ],
  ];

  const getPngPath = (name: string): string => {
    switch (name) {
      case 'JavaScript': return '/skills/js.png';
      case 'TypeScript': return '/skills/ts.png';
      case 'Next.js': return '/skills/next.png';
      case 'Node.js': return '/skills/node.png';
      case 'Tailwind': return '/skills/tailwind.png';
      case 'C++': return '/skills/c++.png';
      case 'Blender': return '/skills/blender.svg';
      default: return `/skills/${name.toLowerCase()}.png`;
    }
  };

  const renderIcon = (skill: Skill) => {
    if (skill.type === 'png') {
      const src = getPngPath(skill.name);
      return (
        <img
          alt={skill.name}
          loading="lazy"
          width="75"
          height="75"
          className="w-16 h-16 sm:w-[75px] sm:h-[75px] object-contain select-none pointer-events-none hover:scale-115 transition-transform duration-300 filter drop-shadow-[0_0_10px_rgba(112,66,248,0.15)]"
          src={src}
        />
      );
    } else {
      const svgDetails = svgSkills[skill.name];
      if (!svgDetails) return null;
      return (
        <div
          className="w-16 h-16 sm:w-[75px] sm:h-[75px] flex items-center justify-center rounded-2xl bg-[#090530]/30 border border-indigo-500/10 hover:border-cyan-400/40 hover:scale-115 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all duration-300 p-3 select-none"
          style={{ color: svgDetails.color }}
        >
          <svg
            viewBox={svgDetails.viewBox}
            className="w-10 h-10 sm:w-11 sm:h-11 transition-colors"
          >
            {svgDetails.svg}
          </svg>
        </div>
      );
    }
  };

  return (
    <section
      id="skills"
      style={{ transform: 'scale(0.95)' }}
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20 bg-[#030014] z-20"
    >
      {/* Slogans header */}
      <div className="w-full h-auto flex flex-col items-center justify-center z-10 px-4">
        {/* Quote Badge */}
        <div className="Welcome-box py-[8px] px-[12px] border border-[#7042f88b] opacity-[0.9] mb-4">
          <Sparkles className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Why do we fall? So we can learn to pick ourselves up.
          </h1>
        </div>

        {/* Header Title */}
        <div className="text-2xl sm:text-[30px] text-white font-medium mt-[10px] text-center mb-[15px] leading-tight">
          Making apps with modern technologies.
        </div>
        {/* Cursive Subtitle */}
        <div className="cursive text-lg sm:text-[20px] text-gray-200 mb-12 mt-[10px] text-center leading-snug">
          Never miss a task, deadline or idea.
        </div>
      </div>

      {/* Centered multi-row grid (exact reference layout style) */}
      <div className="w-full flex flex-col gap-6 items-center justify-center z-10 max-w-5xl mx-auto px-4">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-row justify-center items-center flex-wrap gap-6 sm:gap-8"
          >
            {row.map((skill, skillIndex) => {
              // Staggered entry animation delay
              const delay = (rowIndex * 0.1) + (skillIndex * 0.04);
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay }}
                  className="relative group cursor-pointer"
                >
                  {renderIcon(skill)}

                  {/* Tooltip on hover */}
                  <div className="absolute top-[-30px] left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-space-950 border border-indigo-500/20 text-[10px] text-slate-300 font-bold uppercase tracking-wider scale-0 group-hover:scale-100 transition-all duration-200 shadow-md whitespace-nowrap pointer-events-none z-30">
                    {skill.name}
                  </div>
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Video Background Layer */}
      <div className="w-full h-full absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full z-[-10] opacity-25 absolute flex items-center justify-center bg-cover">
          <video
            loop
            muted
            autoPlay
            playsInline
            preload="none"
            className="w-full h-auto object-cover min-h-full"
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
