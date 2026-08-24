import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  depth: number;
  alpha: number;
  alphaSpeed: number;
}

interface FloatingParticle {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
}

export const CosmicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const prefersReducedMotionRef = useRef(false);

  useEffect(() => {
    // Check user preference for reduced motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotionRef.current = motionQuery.matches;

    const handleMotionChange = (e: MediaQueryListEvent) => {
      prefersReducedMotionRef.current = e.matches;
    };
    motionQuery.addEventListener('change', handleMotionChange);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Re-initialize lists
    let stars: Star[] = [];
    let particles: FloatingParticle[] = [];

    const initStars = () => {
      stars = [];
      const count = Math.min(Math.floor((width * height) / 8000), 180);
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 1.5 + 0.5,
          depth: Math.random() * 0.8 + 0.2, // speed factor for parallax
          alpha: Math.random() * 0.8 + 0.2,
          alphaSpeed: (Math.random() * 0.01 + 0.005) * (Math.random() < 0.5 ? 1 : -1),
        });
      }
    };

    const initParticles = () => {
      particles = [];
      const count = Math.min(Math.floor((width * height) / 30000), 30);
      const colors = ['rgba(147, 51, 234, 0.15)', 'rgba(59, 130, 246, 0.15)', 'rgba(6, 182, 212, 0.15)'];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 3 + 1,
          vx: (Math.random() - 0.5) * 0.2,
          vy: -Math.random() * 0.4 - 0.1, // Floating upwards
          alpha: Math.random() * 0.5 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    initStars();
    initParticles();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse positions (-0.5 to 0.5)
      mouseRef.current.targetX = (e.clientX / window.innerWidth) - 0.5;
      mouseRef.current.targetY = (e.clientY / window.innerHeight) - 0.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smoothly transition current mouse coordinates to targets (lag/interpolation)
      if (!prefersReducedMotionRef.current) {
        mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
        mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;
      } else {
        mouseRef.current.x = 0;
        mouseRef.current.y = 0;
      }

      // Draw Stars
      ctx.fillStyle = '#ffffff';
      stars.forEach((star) => {
        // Apply Parallax effect based on star's depth
        const offsetX = mouseRef.current.x * star.depth * -40;
        const offsetY = mouseRef.current.y * star.depth * -40;

        let sx = (star.x + offsetX + width) % width;
        let sy = (star.y + offsetY + height) % height;

        // Twinkle stars (pulsing alpha)
        if (!prefersReducedMotionRef.current) {
          star.alpha += star.alphaSpeed;
          if (star.alpha > 1 || star.alpha < 0.1) {
            star.alphaSpeed = -star.alphaSpeed;
          }
        }

        ctx.globalAlpha = star.alpha;
        ctx.beginPath();
        ctx.arc(sx, sy, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw Floating Particles
      particles.forEach((p) => {
        const offsetX = mouseRef.current.x * 20;
        const offsetY = mouseRef.current.y * 20;

        let px = (p.x + offsetX + width) % width;
        let py = (p.y + offsetY + height) % height;

        if (!prefersReducedMotionRef.current) {
          p.y += p.vy;
          p.x += p.vx;
          if (p.y < -10) {
            p.y = height + 10;
            p.x = Math.random() * width;
          }
        }

        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      motionQuery.removeEventListener('change', handleMotionChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#030014] pointer-events-none">
      {/* Cinematic Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-[20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-900/10 blur-[150px] animate-pulse-glow" style={{ animationDelay: '-5s' }} />
      <div className="absolute top-[40%] left-[20%] w-[45%] h-[45%] rounded-full bg-cyan-900/5 blur-[130px] animate-pulse-glow" style={{ animationDelay: '-2.5s' }} />
      
      {/* Interactive canvas layer */}
      <canvas ref={canvasRef} className="absolute inset-0 block" />
    </div>
  );
};
