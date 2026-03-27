import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Real organization logos
import ECellLogo from '../../assets/ecellkkwieer.jpg';
import CSILogo from '../../assets/csi_kkwieer_logo.jpg';
import TEDxLogo from '../../assets/tedxkkwieer_logo.jpg';
import ISTELogo from '../../assets/iste logo.webp';

const positions = [
  {
    id: 1,
    title: "President | E-Cell",
    org: "KKWIEER",
    year: "2025 – Present",
    desc: "Mentoring student teams for NEC E-Cell, IIT Bombay and fostering startup culture.",
    logo: ECellLogo,
    accent: "#C6A3A2"
  },
  {
    id: 2,
    title: "Technical Team",
    org: "TEDx KKWIEER",
    year: "2026 – Present",
    desc: "Leading web development for the 'Sankalp' theme and digital branding.",
    logo: TEDxLogo,
    accent: "#C6A3A2"
  },
  {
    id: 3,
    title: "Core Member | CSI",
    org: "CSI KKWIEER",
    year: "2024 – Present",
    desc: "Organizing 'From Campus to Corporate 4.0' and e-Yantra competitions.",
    logo: CSILogo,
    accent: "#C6A3A2"
  },
  {
    id: 4,
    title: "Member | ISTE",
    org: "ISTE KKWIEER",
    year: "2024 – Present",
    desc: "Engaging in technical coding competitions and national level hackathons.",
    logo: ISTELogo,
    accent: "#C6A3A2"
  }
];

const LeadershipSection = () => {
  const [index, setIndex] = useState(0);
  const active = positions[index];
  const titleParts = active.title.split('|');

  // Global Theme Colors
  const theme = {
    bg: "#F9F6F3",
    text: "#2C1810",
    subtext: "#8A7B6E",
    accent: active.accent
  };

  return (
    <section id="leadership" className="min-h-screen py-32 px-6 md:px-20 relative overflow-hidden" style={{ backgroundColor: theme.bg }}>
      
      {/* Decorative Branding Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-full text-center opacity-[0.03] select-none">
        <h2 className="text-[35vw] font-serif italic whitespace-nowrap leading-none grayscale font-black">
          {active.org.split(' ')[0]}
        </h2>
      </div>

      {/* Radiant Glow for Color POP */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] pointer-events-none opacity-20"
        style={{ background: `radial-gradient(circle at center, ${theme.accent}1A 0%, transparent 70%)` }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <style>
          {`@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');`}
        </style>
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8 border-b border-black/5 pb-10">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold" style={{ color: theme.subtext }}>
              Profiles of Influence
            </span>
            <h2 
              className="text-6xl md:text-8xl mt-4" 
              style={{ color: "#C6A3A2", fontFamily: "'Great Vibes', cursive" }}
            >
              Leadership <span style={{ color: theme.text, opacity: 0.3 }} className="font-serif italic">&</span> Responsibility
            </h2>
          </div>

          <div className="flex gap-4">
            {positions.map((pos, i) => (
              <button 
                key={pos.id}
                onClick={() => setIndex(i)}
                className={`w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border transition-all duration-300 backdrop-blur-sm
                  ${index === i ? 'scale-110 shadow-xl border-[#C6A3A2]' : 'border-black/10 opacity-40 hover:opacity-100 grayscale hover:grayscale-0'}
                active:scale-95`}
                style={{ backgroundColor: `${theme.bg}CC` }}
              >
                <img src={pos.logo} alt={pos.org} className="w-full h-full object-contain p-2 md:p-3" />
              </button>
            ))}
          </div>
        </div>

        {/* Content Cross-Fade */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={active.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center"
          >
            
            {/* Left: Editorial Details */}
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-4 mb-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold py-1 px-3 border border-[#C6A3A2] rounded-full" style={{ color: "#C6A3A2" }}>
                  {active.year}
                </span>
                <div className="h-[1px] flex-1 opacity-20" style={{ backgroundColor: theme.text }} />
              </div>

              <h3 className="font-serif text-5xl md:text-8xl tracking-tighter leading-none mb-10" style={{ color: theme.text }}>
                <span className="italic block mb-2" style={{ color: "#C6A3A2" }}>{titleParts[0].trim()}</span>
                <span className="opacity-40">{titleParts[1] ? titleParts[1].trim() : active.org}</span>
              </h3>

              <div className="relative p-10 md:p-14 border border-black/5 rounded-sm" style={{ backgroundColor: `${theme.bg}80` }}>
                <div className="absolute -top-6 -left-6 w-12 h-12 flex items-center justify-center font-serif italic text-6xl opacity-10">"</div>
                <p className="text-xl md:text-3xl font-serif italic leading-relaxed opacity-80" style={{ color: theme.text }}>
                  {active.desc}
                </p>
                
                <div className="mt-12 flex items-center gap-4">
                  <div className="w-12 h-[1px]" style={{ backgroundColor: theme.accent }} />
                  <span className="text-[10px] uppercase tracking-[0.4em] font-bold" style={{ color: theme.subtext }}>
                    {active.org} Mandate
                  </span>
                </div>
              </div>
            </div>

            {/* Right: The Iconic "Plate" Presentation */}
            <div className="flex justify-center items-center order-1 md:order-2">
              <div className="relative group">
                {/* Rotating Rings (Minimalist) */}
                <motion.div 
                  animate={{ rotate: 360 }} 
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-10 rounded-full border border-dashed border-black/10" 
                />
                
                {/* The Logo Plate */}
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className="w-48 h-48 sm:w-64 sm:h-64 md:w-[340px] md:h-[340px] bg-white rounded-full flex items-center justify-center p-8 md:p-14 shadow-[0_30px_80px_rgba(44,24,16,0.08)] relative z-10"
                >
                  <img 
                    src={active.logo} 
                    alt={active.org} 
                    className="w-full h-full object-contain filter group-hover:scale-110 transition-transform duration-1000" 
                    style={{ mixBlendMode: 'multiply' }}
                  />
                  
                  {/* Subtle Glow beneath the logo matching the theme accent */}
                  <div 
                    className="absolute inset-[20%] blur-[80px] rounded-full opacity-10 pointer-events-none"
                    style={{ backgroundColor: theme.accent }}
                  />
                </motion.div>

                {/* Satellite Details */}
                <motion.div 
                  animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute top-0 right-0 py-px px-4 border border-black/10 rounded-full backdrop-blur-md z-20"
                  style={{ backgroundColor: `${theme.bg}CC`, color: theme.text }}
                >
                  <span className="text-[9px] uppercase tracking-widest font-black opacity-60 italic">Core Mandate</span>
                </motion.div>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
      
      {/* Dynamic Background Accents */}
      <div 
        className="absolute top-0 right-0 w-[50%] h-[50%] blur-[150px] rounded-full opacity-5 pointer-events-none transition-colors duration-1000"
        style={{ backgroundColor: theme.accent }}
      />
    </section>
  );
};

export default LeadershipSection;
