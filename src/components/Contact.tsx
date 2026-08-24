import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Send, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      // Reset success banner after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Title */}
      <div className="flex flex-col items-center justify-center text-center mb-16 space-y-2">
        <h4 className="text-xs uppercase font-semibold text-cyan-400 tracking-[0.25em]">
          GET IN TOUCH
        </h4>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          LET'S BUILD SOMETHING.
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mt-2" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Contact details */}
        <div className="lg:col-span-5 space-y-8 text-left">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-wide">
              Have an idea, project, collaboration, research discussion, or opportunity?
            </h3>
            <p className="text-base text-slate-400 leading-relaxed font-normal">
              Let's connect. I'm always open to discussing new projects, intelligent applications, academic research, or software integration opportunities.
            </p>
          </div>

          <div className="space-y-6 pt-4">
            {/* Email Card */}
            <a
              href="mailto:prithvi.ai.web@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl border border-indigo-500/10 bg-[#070321]/40 hover:border-cyan-400/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.05)] transition-all duration-300 group"
            >
              <div className="p-3 rounded-lg bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-500 tracking-wider">EMAIL ME</span>
                <span className="text-sm font-semibold text-slate-200 mt-0.5 group-hover:text-white transition-colors">
                  prithvi.ai.web@gmail.com
                </span>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href="tel:+918055617674"
              className="flex items-center gap-4 p-4 rounded-xl border border-indigo-500/10 bg-[#070321]/40 hover:border-cyan-400/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.05)] transition-all duration-300 group"
            >
              <div className="p-3 rounded-lg bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-500 tracking-wider">CALL ME</span>
                <span className="text-sm font-semibold text-slate-200 mt-0.5 group-hover:text-white transition-colors">
                  +91 8055617674
                </span>
              </div>
            </a>

            {/* Social Icons Row */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/prithviraj-shahapure"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full border border-indigo-500/10 bg-[#070321]/40 text-slate-400 hover:text-white hover:border-indigo-400 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/prithviraj-shahapure/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full border border-indigo-500/10 bg-[#070321]/40 text-slate-400 hover:text-white hover:border-indigo-400 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact form */}
        <div className="lg:col-span-7">
          <div className="glass-premium p-8 rounded-2xl border border-indigo-500/10 text-left relative">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="name" className="text-xs font-bold text-slate-400 tracking-wider">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="bg-[#05021a]/80 border border-indigo-500/10 focus:border-cyan-400 rounded-xl px-4 py-3 text-sm text-slate-200 outline-none transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] focus:shadow-[0_0_15px_rgba(6,182,212,0.1)]"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-slate-400 tracking-wider">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@example.com"
                    className="bg-[#05021a]/80 border border-indigo-500/10 focus:border-cyan-400 rounded-xl px-4 py-3 text-sm text-slate-200 outline-none transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] focus:shadow-[0_0_15px_rgba(6,182,212,0.1)]"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="subject" className="text-xs font-bold text-slate-400 tracking-wider">
                  SUBJECT
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What is this regarding?"
                  className="bg-[#05021a]/80 border border-indigo-500/10 focus:border-cyan-400 rounded-xl px-4 py-3 text-sm text-slate-200 outline-none transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] focus:shadow-[0_0_15px_rgba(6,182,212,0.1)]"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold text-slate-400 tracking-wider">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write your message here..."
                  className="bg-[#05021a]/80 border border-indigo-500/10 focus:border-cyan-400 rounded-xl px-4 py-3 text-sm text-slate-200 outline-none transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] focus:shadow-[0_0_15px_rgba(6,182,212,0.1)] resize-none"
                />
              </div>

              {/* Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:via-indigo-500 hover:to-cyan-400 text-white font-bold text-sm tracking-wider hover:shadow-[0_0_25px_rgba(99,102,241,0.45)] transition-all duration-300 border border-purple-500/20 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01]"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      SEND MESSAGE
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Success Message Banner */}
            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className="absolute inset-0 bg-[#070321]/95 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center p-6 text-center z-10"
                >
                  <CheckCircle className="w-16 h-16 text-cyan-400 mb-4 animate-bounce" />
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                  <p className="text-sm text-slate-400 max-w-sm">
                    Thank you for reaching out, Prithviraj. I will review your message and get back to you shortly.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
