import React from 'react';
import { motion } from 'framer-motion';

const Philosophy = ({ theme }) => {
  const activeTheme = theme || { bg: "#F9F6F3", text: "#2C1810", subtext: "#8A7B6E", accent: "#b37f8c", champagneGold: "#D4AF37" };

  return (
    <motion.section 
      animate={{ backgroundColor: "transparent" }}
      transition={{ duration: 0.8 }}
      className="py-32 relative overflow-hidden" 
      id="philosophy"
    >
    {/* Floating Dust Mote Decoration */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div 
        animate={{ y: [-20, 20], opacity: [0.2, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-1/4 left-1/4 w-1 h-1 bg-champagneGold rounded-full blur-[1px]" 
      />
      <motion.div 
        animate={{ y: [20, -20], opacity: [0.3, 0.6] }}
        transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", delay: 1 }}
        className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-champagneGold rounded-full blur-[1px]" 
      />
    </div>

    {/* Sanskrit Watermark */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-serif text-[40vw] text-sage opacity-[0.03] rotate-12 translate-y-20">
            कला
        </span>
    </div>

    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
      <h3 className="font-serif italic text-3xl text-dustyRose mb-8">The Fusion of Logic & Soul</h3>
      <p className="font-serif text-2xl md:text-4xl leading-relaxed text-charcoal">
        I believe that code is just the <span className="italic font-semibold text-dustyRose">grammar</span>, 
        but design is the <span className="italic font-semibold text-dustyRose">poetry</span>. 
        Whether I’m training a local SLM or building an ethnic e-commerce experience, my goal is 
        to create technology that feels as <span className="underline decoration-champagneGold underline-offset-8">human</span> as it is functional.
      </p>
    </div>
    </motion.section>
  );
};

export default Philosophy;
