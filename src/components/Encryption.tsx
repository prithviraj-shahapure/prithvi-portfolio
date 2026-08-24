import React from 'react';
import { motion } from 'framer-motion';

export const Encryption: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[600px] sm:min-h-screen w-full h-full overflow-hidden py-20 z-20">
      {/* Title */}
      <div className="absolute w-auto h-auto top-10 sm:top-20 z-[25] px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-[40px] font-medium text-center text-gray-200 leading-tight"
        >
          Performance{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            &amp;
          </span>{' '}
          Security
        </motion.div>
      </div>

      {/* Lock Element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col items-center justify-center translate-y-[-20px] sm:translate-y-[-50px] z-[20] w-auto h-auto mt-28 sm:mt-0"
      >
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto relative">
          {/* Lock Top (shackle) - moves up on hover */}
          <img
            alt="Lock top"
            loading="lazy"
            width="50"
            height="50"
            className="translate-y-5 transition-all duration-300 group-hover:translate-y-1.5 select-none pointer-events-none"
            src="/lock-top.png"
          />
          {/* Lock Main body */}
          <img
            alt="Lock main"
            loading="lazy"
            width="70"
            height="70"
            className="z-10 select-none pointer-events-none filter drop-shadow-[0_0_15px_rgba(112,66,248,0.4)]"
            src="/lock-main.png"
          />
        </div>

        {/* Floating Capsule */}
        <div className="Welcome-box px-[15px] py-[4px] z-[20] my-[20px] border border-[#7042F88B] opacity-[0.9] shadow-[0_0_15px_rgba(112,66,248,0.2)]">
          <h1 className="Welcome-text text-[12px] font-bold tracking-widest uppercase">Encryption</h1>
        </div>
      </motion.div>

      {/* Slogan */}
      <div className="absolute z-[25] bottom-10 sm:bottom-[30px] px-[5px] text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
          className="cursive text-lg sm:text-[20px] font-medium text-gray-300 leading-snug"
        >
          Secure your data and systems with end-to-end encryption.
        </motion.div>
      </div>

      {/* Video Background Layer */}
      <div className="w-full h-full absolute inset-0 z-[-10] flex items-center justify-center bg-cover pointer-events-none">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="none"
          className="w-full h-full object-cover opacity-25"
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
      </div>
    </section>
  );
};
