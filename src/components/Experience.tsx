import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';

interface TimelineItem {
  type: 'education' | 'experience';
  title: string;
  subtitle: string;
  location: string;
  date: string;
  description: string[];
}

export const Experience: React.FC = () => {
  const educationItems: TimelineItem[] = [
    {
      type: 'education',
      title: 'B.Tech in Artificial Intelligence & Machine Learning',
      subtitle: 'D. Y. Patil College of Engineering and Technology',
      location: 'Kolhapur, Maharashtra',
      date: '2023 - 2027 (Expected)',
      description: [
        'Specializing in Artificial Intelligence and Machine Learning algorithms, Data Structures, and Software Engineering.',
        'Actively engaged in project-based learning and research publications.'
      ],
    },
    {
      type: 'education',
      title: '12th (HSC) - Higher Secondary Certificate',
      subtitle: 'Chhatrapati Shahu Vidyalaya & Junior College',
      location: 'Kolhapur, Maharashtra',
      date: '2021 - 2023',
      description: [
        'Completed higher secondary education in the Science stream with a strong focus on Mathematics and Physics.'
      ],
    },
    {
      type: 'education',
      title: '10th (SSC) - Secondary School Certificate',
      subtitle: 'Chhatrapati Shahu Vidyalaya',
      location: 'Kolhapur, Maharashtra',
      date: '2020 - 2021',
      description: [
        'Completed secondary school education with academic foundations in Mathematics, Science, and general subjects.'
      ],
    }
  ];

  const experienceItems: TimelineItem[] = [
    {
      type: 'experience',
      title: 'Chief Student Coordinator',
      subtitle: 'Training & Placement Cell (T&P Cell)',
      location: 'D. Y. Patil College of Engineering and Technology',
      date: 'Currently',
      description: [
        'Leading coordination of recruitment drives, company interactions, and placement events.',
        'Organizing professional skill development programs, mock placement rounds, and technical workshops.',
        'Bridging communications between students and recruiters to streamline hiring processes.'
      ],
    },
    {
      type: 'experience',
      title: 'AI-ML Virtual Internship',
      subtitle: 'EduSkills / Corporate Training Program',
      location: 'Virtual',
      date: 'Completed',
      description: [
        'Gained hands-on experience in machine learning pipelines, data processing, and predictive model deployment.',
        'Explored cloud-based AI services and integrated algorithms to solve practical problems.'
      ],
    },
    {
      type: 'experience',
      title: 'CISCO Virtual Internship',
      subtitle: 'Cisco Networking Academy',
      location: 'Virtual',
      date: 'Completed',
      description: [
        'Trained on core networking architectures, routing protocols, and cybersecurity foundations.',
        'Acquired skills in packet tracing, router/switch configuration, and network defense strategies.'
      ],
    },
    {
      type: 'experience',
      title: 'Project-Based Learning (PBL) Program',
      subtitle: 'D. Y. Patil College of Engineering and Technology',
      location: 'Kolhapur, Maharashtra',
      date: 'Completed',
      description: [
        'Collaborating in teams to conceptualize, design, and deploy full-stack applications and AI-driven platforms.',
        'Practicing agile development methodologies and source code management.'
      ],
    }
  ];

  return (
    <section id="experience" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Title */}
      <div className="flex flex-col items-center justify-center text-center mb-16 space-y-2">
        <h4 className="text-xs uppercase font-semibold text-cyan-400 tracking-[0.25em]">
          MY JOURNEY
        </h4>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          EXPERIENCE & EDUCATION
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mt-2" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Education Timeline */}
        <div className="flex flex-col space-y-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/20 text-purple-400">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white tracking-wide">EDUCATION</h3>
          </div>

          <div className="relative pl-6 border-l-2 border-purple-500/25 space-y-8">
            {educationItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-33px] top-1.5 w-4.5 h-4.5 rounded-full bg-space-950 border-2 border-purple-500 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                </div>

                {/* Timeline Card */}
                <div className="glass-premium p-6 rounded-2xl border border-indigo-500/10 hover:border-purple-400/30 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h4 className="text-lg font-bold text-white leading-tight">
                      {item.title}
                    </h4>
                    <span className="flex items-center gap-1.5 text-[11px] font-semibold text-purple-400 bg-purple-950/30 px-2.5 py-1 rounded-full border border-purple-500/10">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </span>
                  </div>
                  <h5 className="text-sm font-semibold text-slate-300">
                    {item.subtitle}
                  </h5>
                  <div className="flex items-center gap-1 text-xs text-slate-400 mt-1 mb-4">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.location}</span>
                  </div>
                  <ul className="list-disc pl-4 space-y-2 text-sm text-slate-400 leading-relaxed text-left">
                    {item.description.map((desc, dIdx) => (
                      <li key={dIdx}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="flex flex-col space-y-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-500/20 text-cyan-400">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white tracking-wide">EXPERIENCE & TRAINING</h3>
          </div>

          <div className="relative pl-6 border-l-2 border-cyan-500/25 space-y-8">
            {experienceItems.map((item, idx) => {
              const isPlaceholder = item.title.includes('Open Position');
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[-33px] top-1.5 w-4.5 h-4.5 rounded-full bg-space-950 border-2 border-cyan-400 flex items-center justify-center">
                    <div className={`w-1.5 h-1.5 rounded-full ${isPlaceholder ? 'bg-cyan-500 animate-ping' : 'bg-cyan-400'}`} />
                  </div>

                  {/* Timeline Card */}
                  <div
                    className={`glass-premium p-6 rounded-2xl border transition-all duration-300 ${
                      isPlaceholder
                        ? 'border-dashed border-cyan-500/30 bg-[#070321]/20 hover:border-cyan-400/50'
                        : 'border-indigo-500/10 hover:border-cyan-400/30'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className={`text-lg font-bold leading-tight ${isPlaceholder ? 'text-cyan-400' : 'text-white'}`}>
                        {item.title}
                      </h4>
                      <span className={`flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full border ${
                        isPlaceholder
                          ? 'text-cyan-400 bg-cyan-950/20 border-cyan-500/10 animate-pulse'
                          : 'text-cyan-400 bg-cyan-950/30 border-cyan-500/10'
                      }`}>
                        <Calendar className="w-3 h-3" />
                        {item.date}
                      </span>
                    </div>
                    <h5 className="text-sm font-semibold text-slate-300">
                      {item.subtitle}
                    </h5>
                    <div className="flex items-center gap-1 text-xs text-slate-400 mt-1 mb-4">
                      <MapPin className="w-3.5 h-3.5 text-purple-400" />
                      <span>{item.location}</span>
                    </div>
                    <ul className="list-disc pl-4 space-y-2 text-sm text-slate-400 leading-relaxed text-left">
                      {item.description.map((desc, dIdx) => (
                        <li key={dIdx} className={isPlaceholder ? 'text-cyan-400/70 font-medium' : ''}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
