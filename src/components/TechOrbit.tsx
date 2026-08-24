import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TechItem {
  name: string;
  color: string;
  ring: number; // 0: inner, 1: middle, 2: outer
  initialAngle: number;
  svgPath: React.ReactNode;
  viewBox?: string;
}

// Crisp custom SVGs for each technology logo
const techList: TechItem[] = [
  // Ring 0: Inner (R_x = 80, R_y = 35)
  {
    name: 'React',
    color: '#61DAFB',
    ring: 0,
    initialAngle: 0,
    viewBox: '0 0 841.9 733.9',
    svgPath: (
      <g>
        <path fill="currentColor" d="M841.9,367c0,182.2-188.4,330-421,330S0,549.2,0,367,188.4,37,421,37,841.9,184.8,841.9,367Z" opacity=".1"/>
        <path fill="currentColor" d="M666.3,296.5c-35.9-62.2-86-112.3-148.2-148.2-61-35.2-127.3-53-197.1-53s-136.1,17.8-197.1,53c-62.2,35.9-112.3,86-148.2,148.2-35.2,61-53,127.3-53,197.1s17.8,136.1,53,197.1c35.9,62.2,86,112.3,148.2,148.2,61,35.2,127.3,53,197.1,53s136.1-17.8,197.1-53c62.2-35.9,112.3-86,148.2-148.2,35.2-61,53-127.3,53-197.1S701.5,357.5,666.3,296.5ZM421,595c-125.9,0-228-102.1-228-228s102.1-228,228-228,228,102.1,228,228S546.9,595,421,595Z" className="hidden"/>
        <ellipse cx="421" cy="367" rx="386" ry="147.5" fill="none" stroke="currentColor" strokeWidth="20"/>
        <ellipse cx="421" cy="367" rx="386" ry="147.5" fill="none" stroke="currentColor" strokeWidth="20" transform="rotate(60 421 367)"/>
        <ellipse cx="421" cy="367" rx="386" ry="147.5" fill="none" stroke="currentColor" strokeWidth="20" transform="rotate(120 421 367)"/>
        <circle cx="421" cy="367" r="54.7" fill="currentColor"/>
      </g>
    ),
  },
  {
    name: 'Python',
    color: '#3776AB',
    ring: 0,
    initialAngle: Math.PI * 0.67,
    viewBox: '0 0 110 110',
    svgPath: (
      <path
        fill="currentColor"
        d="M55,2C25.8,2,27.1,14.5,27.1,14.5l0.1,12.9h28.1v4c0,0-0.2,28.2-31.2,28.2c0,0-21.7-0.1-21.7,21.5c0,21.6,18.5,21.5,18.5,21.5h11v-15.4c0,0-0.4-18.4,18-18.4H81c0,0,27,0.3,27-26.6C108,15.7,96.3,2,81,2C65.7,2,55,2,55,2z M39.3,9.5c2.3,0,4.2,1.9,4.2,4.2c0,2.3-1.9,4.2-4.2,4.2c-2.3,0-4.2-1.9-4.2-4.2C35.1,11.4,37,9.5,39.3,9.5z M70.7,92.1c2.3,0,4.2,1.9,4.2,4.2c0,2.3-1.9,4.2-4.2,4.2c-2.3,0-4.2-1.9-4.2-4.2C66.5,94,68.4,92.1,70.7,92.1z"
      />
    ),
  },
  {
    name: 'JavaScript',
    color: '#F7DF1E',
    ring: 0,
    initialAngle: Math.PI * 1.33,
    viewBox: '0 0 24 24',
    svgPath: (
      <path
        fill="currentColor"
        d="M0 0h24v24H0V0zm22.034 18.268c-.175-1.127-.899-2.022-2.338-2.613-1.196-.464-2.046-.777-2.046-1.503 0-.61.428-.962 1.13-.962.778 0 1.344.382 1.637 1.096l1.968-1.258c-.54-1.298-1.614-2.146-3.414-2.146-2.22 0-3.693 1.259-3.693 3.12 0 2.2 1.848 2.863 3.53 3.52 1.04.42 1.57.732 1.57 1.365 0 .54-.512.92-1.242.92-.93 0-1.625-.495-1.986-1.352l-2.002 1.192c.627 1.488 1.905 2.32 3.905 2.32 2.348 0 3.864-1.23 3.864-3.328zM10.155 12h2.04v7.92c0 2.35-1.134 3.73-3.627 3.73-1.98 0-3.13-.93-3.79-2.28l1.838-1.077c.41 1.02 1.11 1.44 1.95 1.44.975 0 1.59-.51 1.59-1.935V12z"
      />
    ),
  },

  // Ring 1: Middle (R_x = 150, R_y = 65)
  {
    name: 'PyTorch',
    color: '#EE4C2C',
    ring: 1,
    initialAngle: 0,
    viewBox: '0 0 24 24',
    svgPath: (
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
        className="hidden"
      />
    ), // Use standard fallback icon logic for PyTorch
  },
  {
    name: 'TensorFlow',
    color: '#FF6F00',
    ring: 1,
    initialAngle: Math.PI * 0.4,
    viewBox: '0 0 24 24',
    svgPath: (
      <path
        fill="currentColor"
        d="M12 1.5L3 6.7v10.6l9 5.2 9-5.2V6.7l-9-5.2zm7.5 15.2l-7.5 4.3v-4.5l4.5-2.6.8.5v1.3.5.5zm0-2.8l-1.5-.9V11.2l1.5.9v1.6zm-6-2.5l-4.5-2.6 4.5-2.6 4.5 2.6-4.5 2.6zm-1.5 9.6l-7.5-4.3V7.2l7.5 4.3v9.6z"
      />
    ),
  },
  {
    name: 'Next.js',
    color: '#000000',
    ring: 1,
    initialAngle: Math.PI * 0.8,
    viewBox: '0 0 24 24',
    svgPath: (
      <path
        fill="currentColor"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm1.25-15.5h2.5v7h-2.5v-7zm-5.75 0h2.5V11L14 6.5h2.5L13.75 12 16.5 16.5h-2.5L11 12v4.5H7.75v-10z"
        className="hidden"
      />
    ),
  },
  {
    name: 'Node.js',
    color: '#339933',
    ring: 1,
    initialAngle: Math.PI * 1.2,
    viewBox: '0 0 24 24',
    svgPath: (
      <path
        fill="currentColor"
        d="M12 2L3 7v10l9 5 9-5V7L12 2zm7.5 14.2L12 20.4l-7.5-4.2V8.8L12 4.6l7.5 4.2v6.8zM12 8.5l4.5 2.6v2.8L12 16.5l-4.5-2.6v-2.8L12 8.5z"
      />
    ),
  },
  {
    name: 'Firebase',
    color: '#FFCA28',
    ring: 1,
    initialAngle: Math.PI * 1.6,
    viewBox: '0 0 24 24',
    svgPath: (
      <path
        fill="currentColor"
        d="M18.89 20.38L21 6.12a.38.38 0 0 0-.58-.39l-8.42 8.42-3.2-6.08a.38.38 0 0 0-.67 0L3 20.38a.38.38 0 0 0 .53.49L12 15.6l8.36 5.27a.38.38 0 0 0 .53-.49z"
      />
    ),
  },

  // Ring 2: Outer (R_x = 220, R_y = 95)
  {
    name: 'Scikit-learn',
    color: '#F7931E',
    ring: 2,
    initialAngle: 0,
    viewBox: '0 0 24 24',
    svgPath: (
      <path
        fill="currentColor"
        d="M12 2L2 22h20L12 2zm0 4l6.5 13h-13L12 6zm-2.5 7h5v2h-5v-2z"
        className="hidden"
      />
    ),
  },
  {
    name: 'Express',
    color: '#000000',
    ring: 2,
    initialAngle: Math.PI * 0.4,
    viewBox: '0 0 24 24',
    svgPath: (
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"
        className="hidden"
      />
    ),
  },
  {
    name: 'Flask',
    color: '#000000',
    ring: 2,
    initialAngle: Math.PI * 0.8,
    viewBox: '0 0 24 24',
    svgPath: (
      <path
        fill="currentColor"
        d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
        className="hidden"
      />
    ),
  },
  {
    name: 'Unity',
    color: '#FFFFFF',
    ring: 2,
    initialAngle: Math.PI * 1.2,
    viewBox: '0 0 24 24',
    svgPath: (
      <path
        fill="currentColor"
        d="M12.12 1.34L1.75 7.33v11.98l10.37 5.99 10.37-5.99V7.33L12.12 1.34zM3.75 9.07l6.87-3.97v7.93l-6.87 3.97V9.07zm8.37 11.23l-6.87-3.97 6.87-3.97 6.87 3.97-6.87 3.97zm8.37-4.13l-6.87-3.97V5.1l6.87 3.97v7.93z"
      />
    ),
  },
  {
    name: 'Blender',
    color: '#EA7600',
    ring: 2,
    initialAngle: Math.PI * 1.6,
    viewBox: '0 0 24 24',
    svgPath: (
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
        className="hidden"
      />
    ),
  },
];


// Map of names to fallback simple SVG paths if hidden is true
const overridePaths: Record<string, { viewBox: string; node: React.ReactNode }> = {
  'PyTorch': {
    viewBox: '0 0 24 24',
    node: <path fill="currentColor" d="M12 2L2.5 17h19L12 2zm0 3.84L17.79 15H6.21L12 5.84zM11 9h2v4h-2V9zm0 5h2v2h-2v-2z" />,
  },
  'Next.js': {
    viewBox: '0 0 24 24',
    node: <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 13.5l-3.5-5.25V15.5h-1.5v-7h1.5l3.5 5.25V8.5h1.5v7h-1.5z" />,
  },
  'Scikit-learn': {
    viewBox: '0 0 24 24',
    node: <path fill="currentColor" d="M12 2L2 7l10 5 10-5-10-5zm0 10L2 17l10 5 10-5-10-5z" />,
  },
  'Express': {
    viewBox: '0 0 24 24',
    node: <path fill="currentColor" d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm2.5 11.5h-3v1h3v1.5h-5v-6h5v1.5h-3v1h3v1z" />,
  },
  'Flask': {
    viewBox: '0 0 24 24',
    node: <path fill="currentColor" d="M12 2a5 5 0 0 0-5 5v2.34l-1.78.89A2 2 0 0 0 4 11.92V18a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-6.08a2 2 0 0 0-1.22-1.69L17 9.34V7a5 5 0 0 0-5-5zm3 7.66l1.22-.61V18a2 2 0 0 1-2 2H9.78A2 2 0 0 1 8 18V9.05l1.22.61a2 2 0 0 0 1.78 0L12 9.11l1 .55a2 2 0 0 0 2 0z" />,
  },
  'Blender': {
    viewBox: '0 0 24 24',
    node: <path fill="currentColor" d="M12 2a10 10 0 0 0-10 10 10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm1 3.5c1.86 0 3.38 1.4 3.49 3.21l-2.09.42c-.22-.72-.94-1.23-1.79-1.19-.94.05-1.66.86-1.61 1.8.05.94.86 1.66 1.8 1.61.54-.03.99-.29 1.25-.69l1.98.71C15 13.06 13.11 14 11.5 14a4.5 4.5 0 1 1 1.5-8.5zm-1 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />,
  },
};

export const TechOrbit: React.FC = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [angles, setAngles] = useState<number[]>(techList.map((t) => t.initialAngle));
  const requestRef = useRef<number | null>(null);
  const prefersReducedMotionRef = useRef(false);

  useEffect(() => {
    prefersReducedMotionRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Speeds of orbit for each ring
    const ringSpeeds = [
      0.007,  // Ring 0 (Inner): Fast
      -0.004, // Ring 1 (Middle): Medium (reverse)
      0.002,  // Ring 2 (Outer): Slow
    ];

    const updateOrbit = () => {
      if (!prefersReducedMotionRef.current) {
        setAngles((prevAngles) =>
          prevAngles.map((angle, idx) => {
            const tech = techList[idx];
            // Slow down dramatically if this specific tech or any tech is hovered
            const speedMultiplier = hoveredTech === tech.name ? 0.05 : hoveredTech ? 0.3 : 1.0;
            const delta = ringSpeeds[tech.ring] * speedMultiplier;
            return (angle + delta) % (Math.PI * 2);
          })
        );
      }
      requestRef.current = requestAnimationFrame(updateOrbit);
    };

    requestRef.current = requestAnimationFrame(updateOrbit);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [hoveredTech]);

  // Radius parameters for different dimensions
  const getRingRadii = (ring: number) => {
    // [Rx, Ry]
    switch (ring) {
      case 0:
        return { rx: 90, ry: 35 }; // Inner ring
      case 1:
        return { rx: 160, ry: 60 }; // Middle ring
      case 2:
      default:
        return { rx: 230, ry: 90 }; // Outer ring
    }
  };

  return (
    <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] flex items-center justify-center select-none overflow-visible">
      {/* Central Core Glow */}
      <div className="absolute w-20 h-20 rounded-full bg-cyan-500/20 blur-xl animate-pulse" />
      <div className="absolute w-12 h-12 rounded-full bg-purple-500/30 blur-md animate-pulse" />
      <div className="absolute w-6 h-6 rounded-full bg-white/70 shadow-[0_0_15px_rgba(255,255,255,0.8)]" />

      {/* Orbital Ring Ellipses */}
      {[0, 1, 2].map((ringNum) => {
        const { rx, ry } = getRingRadii(ringNum);
        return (
          <div
            key={ringNum}
            className="absolute border border-indigo-500/10 rounded-full pointer-events-none"
            style={{
              width: rx * 2,
              height: ry * 2,
              transform: 'rotate(-10deg)', // Slight angle tilt for perspective
            }}
          />
        );
      })}

      {/* Orbiting Icons */}
      {techList.map((tech, idx) => {
        const angle = angles[idx];
        const { rx, ry } = getRingRadii(tech.ring);
        const tiltAngle = -10 * (Math.PI / 180); // Tilt of orbit path in radians

        // Parametric coordinates of ellipse
        const rawX = rx * Math.cos(angle);
        const rawY = ry * Math.sin(angle);

        // Apply tilt rotation matrix
        const x = rawX * Math.cos(tiltAngle) - rawY * Math.sin(tiltAngle);
        const y = rawX * Math.sin(tiltAngle) + rawY * Math.cos(tiltAngle);

        // 3D perspective mapping
        // cos(angle) determines depth (front/back)
        // From -1 (deep back) to 1 (close front)
        const depthFactor = Math.sin(angle); // Let sine control depth so it loops depthwise
        const scale = 0.65 + 0.35 * ((depthFactor + 1) / 2); // scale: 0.65 to 1.0
        const opacity = 0.35 + 0.65 * ((depthFactor + 1) / 2); // opacity: 0.35 to 1.0
        const zIndex = Math.round(10 + 10 * depthFactor); // z-index: 0 to 20

        const isHovered = hoveredTech === tech.name;

        // Custom path resolution
        const customPath = overridePaths[tech.name];
        const renderViewBox = customPath ? customPath.viewBox : (tech.viewBox || '0 0 24 24');
        const renderNodes = customPath ? customPath.node : tech.svgPath;

        return (
          <div
            key={tech.name}
            className="absolute transition-transform duration-75 cursor-pointer"
            style={{
              transform: `translate(${x}px, ${y}px) scale(${isHovered ? scale * 1.3 : scale})`,
              opacity: isHovered ? 1.0 : opacity,
              zIndex: isHovered ? 99 : zIndex,
            }}
            onMouseEnter={() => setHoveredTech(tech.name)}
            onMouseLeave={() => setHoveredTech(null)}
          >
            {/* The Tech Icon Capsule */}
            <div
              className={`relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full border bg-[#05021a]/80 backdrop-blur-sm transition-all duration-300 ${
                isHovered
                  ? 'border-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.6)] text-white scale-110'
                  : 'border-indigo-500/20 text-slate-400'
              }`}
              style={{
                boxShadow: isHovered ? `0 0 15px ${tech.color}44` : 'none',
                borderColor: isHovered ? tech.color : undefined,
                color: isHovered ? tech.color : undefined,
              }}
            >
              <svg
                viewBox={renderViewBox}
                className="w-5.5 h-5.5 sm:w-6 sm:h-6 transition-colors"
              >
                {renderNodes}
              </svg>

              {/* Glowing Aura Ring on hover */}
              {isHovered && (
                <div
                  className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-60"
                  style={{ borderColor: tech.color }}
                />
              )}

              {/* Tooltip Tag */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute bottom-[-32px] px-2 py-0.5 rounded bg-space-900 border border-indigo-500/30 text-[10px] font-semibold text-white tracking-wider uppercase whitespace-nowrap shadow-[0_4px_10px_rgba(0,0,0,0.5)] pointer-events-none"
                  >
                    {tech.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        );
      })}
    </div>
  );
};
