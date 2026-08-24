import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { CosmicBackground } from './components/CosmicBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Projects } from './components/Projects';
import { Research } from './components/Research';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Scroll Progress Bar logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Threshold offset

      if (window.scrollY < 100) {
        setActiveSection('hero');
        return;
      }

      // Check which section is currently in view
      const sections = ['about', 'skills', 'experience', 'projects', 'research', 'contact'];
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen text-slate-100 bg-[#030014] select-none">
      {/* Dynamic Scroll Progress Bar at the top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#7042f8] origin-left z-50 shadow-[0_0_10px_#7042f8]"
        style={{ scaleX }}
      />

      {/* Cosmic background canvas and glows */}
      <CosmicBackground />

      {/* Sticky navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Single Page Sections */}
      <main className="relative z-10 w-full">
        {/* HERO SECTION */}
        <Hero />

        {/* ABOUT ME SECTION */}
        <About />

        {/* SKILLS / TECHNOLOGY SECTION */}
        <Skills />

        {/* EXPERIENCE & EDUCATION SECTION */}
        <Experience />

        {/* CERTIFICATIONS & VIRTUAL INTERNSHIPS SECTION */}
        <Certifications />

        {/* PROJECTS SECTION */}
        <Projects />

        {/* RESEARCH SECTION */}
        <Research />

        {/* CONTACT SECTION */}
        <Contact />
      </main>

      {/* FOOTER SECTION */}
      <Footer />
    </div>
  );
}

export default App;
