import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';

const JourneyLedger = ({ theme }) => {
  const containerRef = useRef(null);
  const activeTheme = theme || { bg: "#F9F6F3", text: "#2C1810", accent: "#C6A2A1", subtext: "#8A7B6E" };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.section 
      ref={containerRef}
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="relative min-h-[150vh] py-32 px-6 md:px-20 overflow-hidden bg-transparent" 
      id="about"
    >
      {/* The Winding Path SVG */}
      <svg
        className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-full max-w-2xl pointer-events-none opacity-20"
        viewBox="0 0 100 800"
        fill="none"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M50 0 C 80 100, 20 200, 50 300 C 80 400, 20 500, 50 600 C 80 700, 50 800, 50 800"
          stroke={activeTheme.text}
          strokeWidth="0.5"
          strokeDasharray="4 4"
        />
        <motion.path
          d="M50 0 C 80 100, 20 200, 50 300 C 80 400, 20 500, 50 600 C 80 700, 50 800, 50 800"
          stroke={activeTheme.accent}
          strokeWidth="2"
          style={{ pathLength }}
        />
      </svg>

      <div className="max-w-5xl mx-auto flex flex-col gap-48 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-sans uppercase tracking-[0.4em] text-[10px] font-bold"
            style={{ color: activeTheme.accent }}
          >
            The Evolutionary Path
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-serif italic text-5xl md:text-7xl mt-4"
            style={{ color: activeTheme.text }}
          >
            My Journey
          </motion.h2>
        </div>

        {/* SUMMIT: B.Tech @ K.K. Wagh */}
        <Milestone 
          year="2023 — Present" 
          title="B.Tech in Computer Engineering" 
          subtitle="K.K. Wagh Institute (KKWIEER), Nashik"
          details="CGPA: 8.95 | Focused on AI (RAG), Full-Stack Systems, and Human-Centric UI/UX."
          align="right"
          isSummit
          activeTheme={activeTheme}
        />

        {/* BASE CAMP 2: HSC */}
        <Milestone 
          year="2022" 
          title="Higher Secondary Education (HSC)" 
          subtitle="Maharashtra State Board | 90.17%"
          details="Advanced focus on Mathematics and Physics. Developed logical foundations for engineering."
          align="left"
          activeTheme={activeTheme}
        />

        {/* BASE CAMP 1: SSC */}
        <Milestone 
          year="2020" 
          title="Secondary School (SSC)" 
          subtitle="94.60% | R. J. Chaware High School"
          details="Consistent academic excellence with a focus on science and technical drawing."
          align="right"
          activeTheme={activeTheme}
        />

        {/* THE ROOTS SECTION — single unified card */}
        <div className="mt-48 relative py-20 px-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="max-w-xl w-full mr-auto relative"
          >
            {/* Connector dot — matches Milestone style */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 bg-white z-20 hidden md:block -right-[calc(25%+2rem)]"
              style={{ borderColor: activeTheme.accent }}
            />

            <div
              className="p-8 md:p-12 rounded-sm shadow-2xl transition-all duration-500 relative overflow-hidden backdrop-blur-sm"
              style={{
                backgroundColor: `${activeTheme.bg}CC`,
                border: `1px solid ${activeTheme.text}1A`
              }}
            >
              {/* Label */}
              <span className="font-mono font-bold text-xs tracking-[0.3em] uppercase block mb-4" style={{ color: activeTheme.accent }}>
                [Early Roots]
              </span>

              <h3 className="text-3xl md:text-4xl font-serif leading-tight mb-2" style={{ color: activeTheme.text }}>
                The Roots
              </h3>
              <p className="text-sm uppercase tracking-widest font-medium opacity-50 mb-6" style={{ color: activeTheme.text }}>
                Primary Schools
              </p>

              <div className="border-t pt-6" style={{ borderColor: `${activeTheme.text}1A` }}>
                <p className="text-sm md:text-base font-light italic opacity-70 mb-8" style={{ color: activeTheme.subtext }}>
                  "The foundations that shaped curiosity"
                </p>

                <div className="flex flex-col gap-5">
                  {[
                    { name: "Damodar Patil Primary English", location: "Manora" },
                    { name: "Chintamani English Primary", location: "Manora" },
                    { name: "Vidyaniketan International English", location: "Digras" }
                  ].map((school, index) => (
                    <div key={index} className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-[10px] tracking-[0.2em] opacity-40" style={{ color: activeTheme.text }}>
                          0{index + 1}
                        </span>
                        <span className="font-serif text-base md:text-lg leading-snug" style={{ color: activeTheme.text }}>
                          {school.name}
                        </span>
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.25em] font-bold opacity-50 whitespace-nowrap" style={{ color: activeTheme.accent }}>
                        {school.location}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

const Milestone = ({ year, title, subtitle, details, align, isSummit, activeTheme }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: align === 'right' ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className={`flex flex-col ${align === 'right' ? 'items-end text-right ml-auto' : 'items-start text-left mr-auto'} max-w-xl w-full relative`}
    >
      {/* Connector Dot to Central Path */}
      <div 
        className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 bg-white z-20 hidden md:block
          ${align === 'right' ? '-left-[calc(25%+2rem)]' : '-right-[calc(25%+2rem)]'}`}
        style={{ borderColor: activeTheme.accent }}
      >
        {isSummit && (
          <span className="absolute inset-0 rounded-full bg-[#C6A2A1] animate-ping opacity-75" />
        )}
      </div>

      <div 
        className="p-8 md:p-12 rounded-sm shadow-2xl transition-all duration-500 relative overflow-hidden backdrop-blur-sm group"
        style={{ 
          backgroundColor: `${activeTheme.bg}CC`, // 80% background opacity
          border: `1px solid ${activeTheme.text}1A` 
        }}
      >
        {isSummit && (
          <span className="absolute top-4 right-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A2A1] animate-pulse" />
            <span className="text-[9px] font-mono font-bold tracking-[0.2em] uppercase opacity-60" style={{ color: activeTheme.text }}>Currently Scaling</span>
          </span>
        )}
        
        <span className="font-mono font-bold text-xs tracking-[0.3em] uppercase block mb-4" style={{ color: activeTheme.accent }}>[{year}]</span>
        <h3 className="text-3xl md:text-4xl font-serif leading-tight mb-2" style={{ color: activeTheme.text }}>{title}</h3>
        <p className="text-sm uppercase tracking-widest font-medium opacity-50 mb-6" style={{ color: activeTheme.text }}>{subtitle}</p>
        
        {details && (
          <p className="text-sm md:text-base leading-relaxed font-light opacity-80 border-t pt-6" style={{ color: activeTheme.subtext }}>
            {details}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default JourneyLedger;
