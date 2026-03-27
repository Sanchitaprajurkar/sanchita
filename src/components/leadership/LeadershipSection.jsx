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
    logo: ECellLogo
  },
  {
    id: 2,
    title: "Technical Team",
    org: "TEDx KKWIEER",
    year: "2026 – Present",
    desc: "Leading web development for the 'Sankalp' theme and digital branding.",
    logo: TEDxLogo
  },
  {
    id: 3,
    title: "Core Member | CSI",
    org: "CSI KKWIEER",
    year: "2024 – Present",
    desc: "Organizing 'From Campus to Corporate 4.0' and e-Yantra competitions.",
    logo: CSILogo
  },
  {
    id: 4,
    title: "Member | ISTE",
    org: "ISTE KKWIEER",
    year: "2024 – Present",
    desc: "Engaging in technical coding competitions and national level hackathons.",
    logo: ISTELogo
  }
];

const LeadershipSection = () => {
  const [index, setIndex] = useState(0);
  const active = positions[index];
  const titleParts = active.title.split('|');

  return (
    <section id="leadership">
    <AnimatePresence mode="wait">
      {active.id === 1 ? (
        <motion.div 
          key="ecell"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="min-h-[90vh] flex flex-col justify-center items-center px-6 md:px-12 relative overflow-hidden font-sans py-32 bg-[#050505]"
        >
          {/* 1. DYNAMIC ENERGY TRAILS */}
          <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
            <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], x: [-50, 50, -50] }} transition={{ duration: 20, repeat: Infinity }} className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] blur-[150px] rounded-full" style={{ background: `linear-gradient(45deg, #E67112, #D82D75)` }} />
            <motion.div animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0], y: [-50, 50, -50] }} transition={{ duration: 25, repeat: Infinity }} className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] blur-[130px] rounded-full" style={{ background: `linear-gradient(45deg, #8A358A, #2A508D)` }} />
            
            {/* SPARKLES OVERLAY */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full opacity-0"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{ opacity: [0, Math.random() * 0.5 + 0.2, 0], scale: [0, 1.5, 0] }}
                transition={{ duration: Math.random() * 2 + 1, repeat: Infinity, delay: Math.random() * 2 }}
              />
            ))}
          </div>

          <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-12 items-center z-10 pt-10">
            {/* LEFT: Text Content */}
            <div className="flex flex-col gap-8 order-2 md:order-1 items-center md:items-start text-center md:text-left">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="w-full flex flex-col items-center md:items-start">
                <p className="font-mono tracking-[0.6em] text-gray-500 text-xs uppercase mb-4">
                  {active.year}
                </p>
                <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] text-white">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E67112] to-[#D82D75] uppercase">{titleParts[0].trim()}</span>
                  <br /> <span className="uppercase">{titleParts[1] ? titleParts[1].trim() : active.org}</span>
                </h2>
                <div className="flex items-center gap-6 mt-10">
                   <div className="h-[2px] w-16 bg-gradient-to-r from-orange-500 to-transparent" />
                   <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#D82D75]">Inspire . Innovate . Ignite</p>
                </div>
                <p className="mt-8 text-xl md:text-2xl font-light text-gray-400 max-w-md leading-relaxed">
                  "{active.desc}"
                </p>

                {/* E-CELL LOGO NAV  */}
                <div className="flex gap-4 md:gap-6 mt-8 items-center">
                  {positions.map((pos, i) => (
                    <motion.button
                      key={pos.id}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIndex(i)}
                      className={`w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden outline-none transition-all duration-500 flex items-center justify-center border
                        ${index === i 
                          ? 'border-[#E67112] bg-[#E67112]/10 p-1 scale-110 shadow-[0_0_20px_rgba(230,113,18,0.4)] z-20 grayscale-0' 
                          : 'bg-white/5 border-white/10 hover:border-white/30 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 z-10'}`}
                    >
                      <div className="w-full h-full rounded-full overflow-hidden bg-white/10 backdrop-blur-md">
                        <img src={pos.logo} alt="thumb" className="w-full h-full object-contain p-2" />
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* RIGHT: Ignition Dish */}
            <div className="flex justify-center items-center order-1 md:order-2 w-full relative">
              <motion.div initial={{ scale: 0.8, rotate: -45, opacity: 0 }} animate={{ scale: 1, rotate: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 100, damping: 20 }} className="relative w-64 h-64 md:w-[480px] md:h-[480px] flex items-center justify-center">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute inset-[8%] md:inset-[5%] rounded-full border border-white/5 border-t-orange-500/40 border-b-purple-500/40" />
                <motion.div whileHover={{ scale: 1.03 }} className="absolute inset-[15%] md:inset-[18%] bg-white rounded-full flex items-center justify-center overflow-hidden z-10" style={{ boxShadow: "0 0 100px rgba(230,113,18,0.15)" }}>
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D82D75] to-transparent pointer-events-none" />
                  <img src={active.logo} alt="E-Cell Logo" className="w-full h-full object-contain p-6 md:p-10 relative z-10 mix-blend-multiply drop-shadow-sm" />
                </motion.div>
                <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-[20%] right-[15%] w-6 h-6 md:w-8 md:h-8 rounded-full blur-xl opacity-60 bg-[#E67112]" />
                <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute bottom-[25%] left-[10%] w-4 h-4 md:w-6 md:h-6 rounded-full blur-lg opacity-40 bg-[#8A358A]" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      ) : active.id === 2 ? (
        <motion.div 
          key="sankalp"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="min-h-[90vh] flex flex-col justify-center items-center px-6 md:px-12 relative overflow-hidden font-sans py-32 bg-[#0A0A0A]"
        >
          {/* THE DYNAMIC BACKGROUND SHARD (The 'Sankalp' Energy) */}
          <div className="absolute top-0 right-0 w-full h-full z-0 pointer-events-none">
            {/* Deep Red Radial Glow behind the logo area */}
            <div 
              className="absolute top-1/2 left-3/4 -translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-20 blur-[120px]"
              style={{ background: `radial-gradient(circle, #EE001E 0%, transparent 70%)` }}
            />
            {/* Subtle Grid Pattern for 'Technical' feel */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
          </div>

          <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-12 items-center z-10 pt-10">
            {/* LEFT: Black Void Typography */}
            <div className="flex flex-col gap-8 order-2 md:order-1 items-center md:items-start text-center md:text-left">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full flex flex-col items-center md:items-start"
              >
                <p className="font-mono tracking-[0.6em] text-gray-500 text-xs uppercase mb-4">
                  {active.year}
                </p>
                <h2 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter text-white uppercase italic">
                  {titleParts[0].trim()} <br /> 
                  <span style={{ color: "#EE001E" }}>{titleParts[1] ? titleParts[1].trim() : "Team"}</span>
                </h2>
                <div className="h-1 w-24 bg-white mt-8" />
              </motion.div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl md:text-3xl leading-relaxed text-gray-400 font-serif italic max-w-md border-l border-gray-800 pl-6 md:pl-8 text-left"
              >
                "{active.desc}"
              </motion.p>

              {/* SANKALP LOGO NAV */}
              <div className="flex gap-4 md:gap-6 mt-4 items-center">
                {positions.map((pos, i) => (
                  <motion.button
                    key={pos.id}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIndex(i)}
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden outline-none transition-all duration-500 flex items-center justify-center border
                      ${index === i 
                        ? 'border-[#EE001E] bg-[#EE001E]/10 p-1 scale-110 shadow-[0_0_20px_rgba(238,0,30,0.5)] z-20 grayscale-0' 
                        : 'bg-white/5 border-white/10 hover:border-white/30 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 z-10'}`}
                  >
                    <div className="w-full h-full rounded-full overflow-hidden bg-white/10 backdrop-blur-md">
                      <img src={pos.logo} alt="thumb" className="w-full h-full object-contain p-2" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* RIGHT: The Dish (Sankalp Style) */}
            <div className="flex justify-center items-center order-1 md:order-2 w-full relative">
              <motion.div
                initial={{ scale: 0.8, rotate: -45, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="relative w-64 h-64 md:w-[480px] md:h-[480px] flex items-center justify-center"
              >
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[10%] rounded-full border border-white/5 border-t-[#EE001E]/40"
                />
                <div 
                  className="absolute inset-[18%] md:inset-[20%] bg-white rounded-full flex items-center justify-center overflow-hidden z-10"
                  style={{ boxShadow: "0 0 100px rgba(238,0,30,0.15)" }}
                >
                  <img src={active.logo} alt="TEDx Logo" className="w-full h-full object-contain p-6 md:p-10 filter mix-blend-multiply drop-shadow-sm" />
                  <div className="absolute inset-2 md:inset-4 rounded-full border border-black/5 pointer-events-none" />
                </div>
                <motion.div animate={{ y: [0, -10, 0], rotate: [45, 60, 45] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[20%] right-[15%] md:top-[15%] md:right-[20%] w-5 h-5 md:w-8 md:h-8 bg-[#EE001E] rotate-45 opacity-80" />
                <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-[25%] left-[10%] md:bottom-[20%] md:left-[15%] w-3 h-3 md:w-5 md:h-5 bg-white/20 rounded-full" />
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-10 left-6 md:left-12 flex items-center gap-4 opacity-30 pointer-events-none">
            <span className="text-white font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase">{active.org}</span>
            <div className="w-8 md:w-16 h-[1px] bg-white" />
          </div>
        </motion.div>
      ) : active.id === 3 ? (
        <motion.div 
          key="csi"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="min-h-[90vh] flex flex-col justify-center items-center px-6 md:px-12 relative overflow-hidden font-sans py-32 bg-[#001B44]"
        >
          {/* THE 'DIGITAL FLUID' BACKGROUND */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Glowing Mesh Gradient */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute top-[-10%] left-[-10%] w-[80%] h-[80%] rounded-full blur-[120px]"
              style={{ background: `radial-gradient(circle, #0076DC 0%, transparent 70%)` }}
            />
            {/* Subtle Circuit Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#50AEFF_1px,transparent_1px)] [background-size:30px_30px]" />
          </div>

          <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-12 items-center z-10 pt-10">
            {/* LEFT: Text Content */}
            <div className="flex flex-col gap-8 order-2 md:order-1 items-center md:items-start text-center md:text-left">
              <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="w-full flex flex-col items-center md:items-start">
                <p className="font-mono tracking-[0.5em] text-xs font-bold mb-4 opacity-70 text-[#50AEFF] uppercase">
                  {active.year}
                </p>
                <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] text-white uppercase">
                  {titleParts[0].trim().split(' ')[0]} <br /> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0076DC] to-[#50AEFF]">
                    {titleParts[0].trim().split(' ').slice(1).join(' ')}
                  </span>
                </h2>
                <div className="flex items-center gap-4 mt-8">
                  <div className="h-[3px] w-16 md:w-24 rounded-full shadow-[0_0_15px_#50AEFF] bg-[#50AEFF]" />
                  <span className="font-bold text-xs md:text-sm uppercase tracking-widest text-white/40">
                    {active.org}
                  </span>
                </div>
              </motion.div>

              <motion.p 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                className="text-xl md:text-2xl font-light text-blue-100/60 max-w-md leading-relaxed border-l-[3px] pl-6 md:pl-8 border-[#50AEFF]/30 text-left"
              >
                "{active.desc}"
              </motion.p>

              {/* CSI LOGO NAV (Deep Tech Style) */}
              <div className="flex gap-4 md:gap-6 mt-4 items-center">
                {positions.map((pos, i) => (
                  <motion.button
                    key={pos.id}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIndex(i)}
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden outline-none transition-all duration-500 flex items-center justify-center border backdrop-blur-md
                      ${index === i 
                        ? 'border-[#50AEFF] bg-[#0076DC]/20 p-1 scale-110 shadow-[0_0_20px_rgba(80,174,255,0.4)] z-20 grayscale-0' 
                        : 'bg-white/5 border-white/10 hover:border-white/30 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 z-10'}`}
                  >
                    <div className="w-full h-full rounded-full overflow-hidden bg-white/10">
                      <img src={pos.logo} alt="thumb" className="w-full h-full object-contain p-2 drop-shadow-md" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* RIGHT: The Dish (Deep Tech Style) */}
            <div className="flex justify-center items-center order-1 md:order-2 w-full relative">
              <motion.div
                initial={{ scale: 0.8, rotate: -45, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="relative w-64 h-64 md:w-[480px] md:h-[480px] flex items-center justify-center"
              >
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute inset-[8%] md:inset-[5%] rounded-full border border-white/5 border-t-[#50AEFF]/50" />
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="absolute inset-[15%] md:inset-[18%] bg-white rounded-full flex items-center justify-center overflow-hidden z-10"
                  style={{ boxShadow: "0 0 80px rgba(80,174,255,0.2)" }}
                >
                  <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_20%_20%,_transparent_0%,_rgba(0,52,153,0.05)_100%)] pointer-events-none" />
                  <img src={active.logo} alt="CSI Logo" className="w-full h-full object-contain p-6 md:p-10 filter drop-shadow-xl relative z-10" />
                </motion.div>
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-[20%] right-[25%] w-4 h-4 md:w-5 md:h-5 rounded-full shadow-[0_0_10px_#50AEFF] bg-[#50AEFF]"  />
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} className="absolute bottom-[20%] left-[15%] w-3 h-3 md:w-4 md:h-4 rounded-full opacity-20 bg-[#003499]" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div 
          key="iste"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="min-h-[90vh] flex flex-col justify-center items-center px-6 md:px-12 relative overflow-hidden font-sans py-32 bg-[#0A024E]"
        >
          {/* 1. THE "SMOOTHIE" BACKGROUND SWIRL */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Soft Indigo Aura - Top Right */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute -top-[10%] -right-[10%] w-[70%] h-[70%] rounded-full blur-[150px]"
              style={{ background: `radial-gradient(circle, #6366f1 0%, transparent 70%)` }}
            />
            {/* Subtle grid to maintain 'Technical' feel */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:50px_50px]" />
          </div>

          <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 items-center z-10 pt-10 mx-auto">
            
            {/* 2. TYPOGRAPHY (White & Blue Highlights) */}
            <div className="flex flex-col gap-8 order-2 md:order-1 items-center md:items-start text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full flex flex-col items-center md:items-start"
              >
                <p className="font-mono tracking-[0.5em] text-blue-400 text-xs font-bold mb-4 uppercase">
                  {active.year}
                </p>
                
                <h2 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] text-white uppercase break-all md:break-normal">
                  {titleParts[0].trim().split(' ')[0]} <br /> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-400">
                    {titleParts[1] ? titleParts[1].trim() : active.org}
                  </span>
                </h2>

                <div className="flex items-center gap-4 mt-6">
                  <div className="h-[3px] w-20 rounded-full bg-[#6366f1]" />
                  <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-white/40">Technical Education</span>
                </div>
                
                <p className="mt-8 text-xl lg:text-2xl font-light text-blue-100/60 max-w-md leading-relaxed border-l-2 border-white/10 pl-6 md:pl-8 text-left italic">
                  "{active.desc}"
                </p>

                {/* ISTE LOGO NAV (Restored) */}
                <div className="flex gap-4 md:gap-6 mt-8 items-center">
                  {positions.map((pos, i) => (
                    <motion.button
                      key={pos.id}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIndex(i)}
                      className={`w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden outline-none transition-all duration-500 flex items-center justify-center border backdrop-blur-md
                        ${index === i 
                          ? 'border-[#6366f1] bg-[#6366f1]/20 p-1 scale-110 shadow-[0_0_20px_rgba(99,102,241,0.4)] z-20 grayscale-0' 
                          : 'bg-white/5 border-white/10 hover:border-white/30 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 z-10'}`}
                    >
                      <div className="w-full h-full rounded-full overflow-hidden bg-white/10">
                        <img src={pos.logo} alt="thumb" className="w-full h-full object-contain p-2 drop-shadow-md" />
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* 3. THE "DISH" (Clean, No-Ring Version) */}
            <div className="flex justify-center items-center order-1 md:order-2 w-full relative">
              <div className="relative flex justify-center items-center">
                
                {/* Subtle Outer Pulse Glow (Replacing the Ring) */}
                <motion.div 
                  animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.2, 0.1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute w-[110%] h-[110%] rounded-full bg-[#6366f1] pointer-events-none"
                />

                {/* The White Plate */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  initial={{ scale: 0.8, y: 30, opacity: 0 }} 
                  animate={{ scale: 1, y: 0, opacity: 1 }} 
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className="relative w-64 h-64 md:w-[480px] md:h-[480px] bg-white rounded-full flex items-center justify-center p-12 md:p-20 shadow-[0_50px_100px_rgba(0,0,0,0.4)] overflow-hidden"
                >
                  {/* Subtle inner shadow for 'Bowl' depth */}
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_2px_20px_rgba(0,0,0,0.05)] pointer-events-none" />
                  
                  <img 
                    src={active.logo} 
                    alt="ISTE" 
                    className="w-full h-full object-contain relative z-10 filter drop-shadow-xl mix-blend-multiply" 
                  />

                  {/* The "Garnish" Dots (Scattered like the smoothie image) */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-[20%] right-[25%] w-3 h-3 md:w-5 md:h-5 rounded-full bg-[#6366f1] shadow-[0_0_15px_#6366f1]" 
                  />
                  <div className="absolute bottom-[25%] left-[15%] w-2 h-2 md:w-3 md:h-3 bg-[#1e1b4b] rounded-full opacity-30" />
                </motion.div>
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </section>
  );
};

export default LeadershipSection;
