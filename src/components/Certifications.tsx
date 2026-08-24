import React, { useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Award, ZoomIn, X, ExternalLink } from 'lucide-react';

interface Certificate {
  title: string;
  org: string;
  image: string;
  category: 'Certification' | 'Virtual Internship';
}

export const Certifications: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const certificates: Certificate[] = [
    {
      title: 'AWS Academy Graduate - Cloud Foundations',
      org: 'AWS Academy',
      image: '/Certifications/AWS.png',
      category: 'Certification',
    },
    {
      title: 'AI-ML Virtual Internship Certificate',
      org: 'EduSkills / AWS Academy',
      image: '/Virtual Internships/AI-ML Virtual Internship.jpg',
      category: 'Virtual Internship',
    },
    {
      title: 'CISCO Virtual Internship',
      org: 'Cisco Networking Academy',
      image: '/Virtual Internships/CISCO.jpg',
      category: 'Virtual Internship',
    },
    {
      title: 'Google AI Essentials',
      org: 'Google',
      image: '/Certifications/Google ai.jpg',
      category: 'Certification',
    },
    {
      title: 'Google Fundamentals Certificate',
      org: 'Google',
      image: '/Certifications/Google Certificate.jpg',
      category: 'Certification',
    },
    {
      title: 'IEEE Conference Certificate',
      org: 'IEEE',
      image: '/Certifications/IEEE Certificate.pdf.png',
      category: 'Certification',
    },
    {
      title: 'Deloitte Technology Virtual Experience',
      org: 'Deloitte / Forage',
      image: '/Certifications/Deloitte.jpg',
      category: 'Virtual Internship',
    },
    {
      title: 'TATA Empowering Business Certificate',
      org: 'TATA / Forage',
      image: '/Certifications/TATA Forage  Empowering Business Certificate.jpg',
      category: 'Virtual Internship',
    },
    {
      title: 'TATA Data Analytics Certification',
      org: 'TATA / Forage',
      image: '/Certifications/TATA Forage Certificate.jpg',
      category: 'Virtual Internship',
    },
    {
      title: 'PBL Project Certification',
      org: 'D. Y. Patil College',
      image: '/Certifications/PBL CERTIFICATE .jpg',
      category: 'Certification',
    },
    {
      title: 'Adobe Certifications',
      org: 'Adobe',
      image: '/Certifications/adobe.jpg',
      category: 'Certification',
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollAmount = clientWidth * 0.75;
      carouselRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="certifications" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Title */}
      <div className="flex flex-col items-center justify-center text-center mb-16 space-y-2">
        <h4 className="text-xs uppercase font-semibold text-cyan-400 tracking-[0.25em]">
          ACCOMPLISHMENTS
        </h4>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          CERTIFICATIONS & VIRTUAL INTERNSHIPS
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mt-2" />
      </div>

      {/* Carousel Wrapper */}
      <div className="relative group px-2">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-[-15px] top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full border border-indigo-500/20 bg-space-950/80 backdrop-blur-md text-slate-400 hover:text-white hover:border-indigo-400 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)] opacity-0 group-hover:opacity-100 focus:opacity-100"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-[-15px] top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full border border-indigo-500/20 bg-space-950/80 backdrop-blur-md text-slate-400 hover:text-white hover:border-indigo-400 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)] opacity-0 group-hover:opacity-100 focus:opacity-100"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Horizontal Container */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-8"
        >
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[280px] sm:w-[320px] glass-premium rounded-2xl border border-indigo-500/10 hover:border-indigo-400/30 hover:shadow-[0_4px_25px_rgba(99,102,241,0.08)] transition-all duration-300 group/card cursor-pointer overflow-hidden flex flex-col justify-between"
              onClick={() => setSelectedImage(cert.image)}
            >
              {/* Card Image Thumbnail */}
              <div className="relative aspect-[4/3] bg-space-950 overflow-hidden border-b border-indigo-500/10">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500 filter brightness-[0.85] group-hover/card:brightness-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-950/50 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider bg-indigo-950/80 border border-indigo-500/20 text-cyan-400">
                  {cert.category}
                </div>
                {/* Overlay Hover Search Zoom */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 bg-space-950/40 backdrop-blur-[2px] transition-all duration-300">
                  <div className="p-2.5 rounded-full bg-indigo-600/80 border border-indigo-400/40 text-white shadow-lg">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Card Text Content */}
              <div className="p-5 text-left flex flex-col justify-between flex-grow">
                <div>
                  <span className="flex items-center gap-1 text-[10px] font-bold text-slate-500 tracking-widest uppercase">
                    <Award className="w-3.5 h-3.5 text-purple-400" />
                    {cert.org}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-slate-200 mt-2 leading-snug group-hover/card:text-white transition-colors">
                    {cert.title}
                  </h4>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400/90 mt-5 uppercase tracking-wider group-hover/card:text-cyan-300">
                  <span>VIEW CERTIFICATE</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal Overlay (Certificate Viewer) */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8" onClick={() => setSelectedImage(null)}>
            {/* Modal Box */}
            <div
              className="relative max-w-4xl max-h-[90vh] bg-space-950 border border-indigo-500/20 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.25)] flex flex-col justify-center items-center"
              onClick={(e) => e.stopPropagation()} // Prevent close on clicking modal itself
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-space-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all shadow-md"
                aria-label="Close viewer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image Frame */}
              <div className="p-2 sm:p-4 overflow-auto flex justify-center items-center">
                <img
                  src={selectedImage}
                  alt="Full Certificate Screen"
                  className="max-w-full max-h-[80vh] object-contain rounded shadow-lg filter brightness-95"
                />
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
