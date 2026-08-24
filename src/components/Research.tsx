import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, ShieldCheck, Cpu, Database, Trophy } from 'lucide-react';

export const Research: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Interconnected node background specifically for Research
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles: { x: number; y: number; r: number; dx: number; dy: number }[] = [];
    const count = 30;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.15,
        dy: (Math.random() - 0.5) * 0.15,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(6, 182, 212, 0.2)';
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.04)';
      ctx.lineWidth = 0.8;

      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > width) p.dx = -p.dx;
        if (p.y < 0 || p.y > height) p.dy = -p.dy;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section id="research" className="py-24 relative overflow-hidden bg-[#030014]">
      {/* Dynamic Background Network */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-70" />

      {/* Decorative gradient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-cyan-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="flex flex-col items-center justify-center text-center mb-16 space-y-2">
          <h4 className="text-xs uppercase font-semibold text-cyan-400 tracking-[0.25em]">
            PUBLICATIONS & RECORDS
          </h4>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            RESEARCH & WORLD RECORDS
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mt-2" />
        </div>

        <div className="flex flex-col gap-8">
          {/* Featured Research Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-premium p-8 sm:p-10 rounded-3xl border border-cyan-500/10 hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(6,182,212,0.12)] transition-all duration-500 text-left flex flex-col md:flex-row gap-8 items-start relative group"
          >
            {/* Glowing Corner Badge */}
            <div className="absolute top-0 right-0 px-4 py-1.5 rounded-bl-2xl rounded-tr-3xl text-[9px] font-bold uppercase tracking-wider bg-cyan-950/80 border-b border-l border-cyan-500/20 text-cyan-400">
              IEEE Sponsor
            </div>

            {/* Left Block: Icon and Identity indicators */}
            <div className="flex flex-row md:flex-col gap-4 items-center md:items-start shrink-0">
              <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)] group-hover:scale-105 transition-transform duration-300">
                <BookOpen className="w-8 h-8" />
              </div>
              <div className="flex flex-col gap-1 md:mt-2 text-left">
                <span className="text-[10px] font-bold text-slate-500 tracking-wider">PAPER STATUS</span>
                <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Presented & Published
                </span>
              </div>
            </div>

            {/* Right Block: Paper Details */}
            <div className="space-y-4 flex-grow">
              <span className="inline-block text-[11px] font-extrabold text-cyan-400 tracking-widest uppercase bg-cyan-950/30 border border-cyan-500/10 px-3 py-1 rounded-full">
                IEEE Research Publication
              </span>

              <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight tracking-wide group-hover:text-cyan-300 transition-colors">
                Ram Mandir in the Metaverse: Bridging Devotion and Digital Innovation
              </h3>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-400 font-medium">
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-500">Conference:</span>
                  <span className="text-slate-300">International Conference on Future Technologies (ICFT2025)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-500">Organized By:</span>
                  <span className="text-slate-300">Walchand College of Engineering, Sangli</span>
                </div>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed font-normal pt-2 border-t border-slate-900">
                This publication addresses the design and implementation of an interactive virtual reality replica of the historic temple inside a WebXR-compatible Metaverse ecosystem. It evaluates optimized 3D asset workflows (combining Blender structures and Unity runtime scripts) to deliver devotational immersive experiences with cross-platform performance.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="flex items-center gap-1 text-[10px] font-semibold bg-indigo-950/20 text-indigo-300 px-2.5 py-1 rounded-md border border-indigo-500/10">
                  <Cpu className="w-3 h-3 text-cyan-400" />
                  Unity & C# Scripting
                </span>
                <span className="flex items-center gap-1 text-[10px] font-semibold bg-indigo-950/20 text-indigo-300 px-2.5 py-1 rounded-md border border-indigo-500/10">
                  <Database className="w-3 h-3 text-cyan-400" />
                  3D Asset Optimization
                </span>
                <span className="flex items-center gap-1 text-[10px] font-semibold bg-indigo-950/20 text-indigo-300 px-2.5 py-1 rounded-md border border-indigo-500/10">
                  <BookOpen className="w-3 h-3 text-cyan-400" />
                  WebXR Devops
                </span>
              </div>

              <div className="pt-6">
                <a
                  href="https://ieeexplore.ieee.org/document/11336512"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white px-6 py-3 rounded-xl text-xs font-bold tracking-wider transition-all border border-cyan-400/20 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-[1.02]"
                >
                  VIEW PUBLICATION
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Unique World Record Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="glass-premium p-8 sm:p-10 rounded-3xl border border-amber-500/10 hover:border-amber-400/30 hover:shadow-[0_0_40px_rgba(245,158,11,0.12)] transition-all duration-500 text-left flex flex-col md:flex-row gap-8 items-start relative group"
          >
            {/* Glowing Corner Badge */}
            <div className="absolute top-0 right-0 px-4 py-1.5 rounded-bl-2xl rounded-tr-3xl text-[9px] font-bold uppercase tracking-wider bg-amber-950/80 border-b border-l border-amber-500/20 text-amber-400">
              World Record
            </div>

            {/* Left Block: Icon and Identity indicators */}
            <div className="flex flex-row md:flex-col gap-4 items-center md:items-start shrink-0">
              <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/20 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.1)] group-hover:scale-105 transition-transform duration-300">
                <Trophy className="w-8 h-8" />
              </div>
              <div className="flex flex-col gap-1 md:mt-2 text-left">
                <span className="text-[10px] font-bold text-slate-500 tracking-wider">RECORD ID</span>
                <span className="text-xs font-semibold text-amber-400 flex items-center gap-1">
                  2016YA187
                </span>
              </div>
            </div>

            {/* Right Block: Record Details */}
            <div className="space-y-4 flex-grow">
              <span className="inline-block text-[11px] font-extrabold text-amber-400 tracking-widest uppercase bg-amber-950/30 border border-amber-500/10 px-3 py-1 rounded-full">
                Unique World Record
              </span>

              <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight tracking-wide group-hover:text-amber-300 transition-colors">
                Longest Distance Covered in a Day by Youngest Cyclist
              </h3>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-400 font-medium">
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-500">Record Holder:</span>
                  <span className="text-slate-300">Prithviraj Sanjay Shahapure</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-500">Organizer:</span>
                  <span className="text-slate-300">Dr. Cyrus Poonawalla International School, Kolhapur</span>
                </div>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed font-normal pt-2 border-t border-slate-900">
                Achieved the official title by covering a distance of 125 km in 6 hours. This record was intended to spread a message of healthy lifestyle to attract students towards the sport of cycling, while raising critical public awareness about air pollution in Kolhapur, Maharashtra, India.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="flex items-center gap-1 text-[10px] font-semibold bg-amber-950/20 text-amber-300 px-2.5 py-1 rounded-md border border-amber-500/10">
                  125 km Distance
                </span>
                <span className="flex items-center gap-1 text-[10px] font-semibold bg-amber-950/20 text-amber-300 px-2.5 py-1 rounded-md border border-amber-500/10">
                  6 Hours Duration
                </span>
                <span className="flex items-center gap-1 text-[10px] font-semibold bg-amber-950/20 text-amber-300 px-2.5 py-1 rounded-md border border-amber-500/10">
                  Clean Air Awareness Campaign
                </span>
              </div>

              <div className="pt-6">
                <a
                  href="https://www.uniqueworldrecords.com/records/posts/longest-distance-covered-in-a-day-by-youngest-cyclist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-white px-6 py-3 rounded-xl text-xs font-bold tracking-wider transition-all border border-amber-400/20 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:scale-[1.02]"
                >
                  VIEW OFFICIAL RECORD
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
