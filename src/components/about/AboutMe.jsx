import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutMe = ({ theme }) => {
  const activeTheme = theme || { 
    bg: "#F9F6F3", 
    text: "#2C1810", 
    accent: "#b37f8c", 
    subtext: "#8A7B6E" 
  };

  return (
    <section className="py-24 px-6 md:px-20 relative overflow-hidden" style={{ backgroundColor: activeTheme.bg }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Editorial Bio */}
        <div className="relative">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] uppercase tracking-[0.5em] mb-6 block"
            style={{ color: activeTheme.accent }}
          >
            Behind the Engineering
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-7xl italic leading-tight mb-8"
            style={{ color: activeTheme.text }}
          >
            Architecting <br />
            <span style={{ color: activeTheme.accent }}>Intelligence.</span>
          </motion.h2>

          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "60px", md: "80px" }}
            viewport={{ once: true }}
            className="h-[1px] mb-8 md:mb-12 opacity-20"
            style={{ backgroundColor: activeTheme.text }}
          />

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-base md:text-xl font-light leading-relaxed max-w-xl italic opacity-80"
            style={{ color: activeTheme.text }}
          >
            "Computer Engineering student specializing in AI-powered applications, RAG-based systems, and scalable full-stack development. Built real-world solutions using Python, React.js, Node.js, JavaScript, MongoDB, and REST APIs, with strong foundations in data structures, OOP, DBMS, and computer networks."
          </motion.p>
        </div>

        {/* Right Side: Philosophy & Mindset */}
        <div className="flex flex-col gap-8 md:gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-6 md:p-12 border border-current/10 backdrop-blur-sm relative"
            style={{ color: activeTheme.text, backgroundColor: `${activeTheme.bg}80` }}
          >
            <div className="absolute -top-4 -left-4 w-12 h-12 flex items-center justify-center font-serif italic text-3xl opacity-20">"</div>
            <p className="text-lg md:text-2xl font-serif leading-relaxed mb-6 md:mb-8">
              Brings an owner’s mindset, first-principles thinking, and a strong focus on building high-impact, user-centered engineering solutions.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 opacity-30" style={{ backgroundColor: activeTheme.text }} />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-40">Core Philosophy</span>
            </div>
          </motion.div>

          {/* CTA: View Journey */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Link 
              to="/journey"
              className="group inline-flex items-center gap-6 md:gap-8 px-8 md:px-12 py-4 md:py-5 rounded-full border transition-all duration-500 relative overflow-hidden active:scale-95"
              style={{ borderColor: `${activeTheme.text}33`, color: activeTheme.text }}
            >
              <motion.div 
                className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-700 -z-10" 
                style={{ backgroundColor: activeTheme.text }}
              />
              <span className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-bold group-hover:invert transition-all duration-700">View My Journey</span>
              <span className="group-hover:translate-x-2 transition-transform duration-700 group-hover:invert">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Gradient Background Blur */}
      <div 
        className="absolute -right-[10%] -bottom-[10%] w-[40%] h-[40%] blur-[120px] rounded-full opacity-10 pointer-events-none"
        style={{ backgroundColor: activeTheme.accent }}
      />
    </section>
  );
};

export default AboutMe;
