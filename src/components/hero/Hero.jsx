import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import heroBg from "../../assets/hero/hero-bg.jpg";

// --- THEME DEFINITIONS ---
const themes = {
  day: {
    bg: "#F9F6F3",
    text: "#2C1810",
    accent: "#b37f8c",
    subtext: "#8A7B6E",
    imgOpacity: 1,
    imgFilter: "sepia(0%) brightness(1)",
    overlay: "rgba(249, 246, 251, 0)",
    particleGold: "#D4AF37",
    blendMode: "multiply"
  },
  night: {
    bg: "#121212", 
    text: "#F5F5F5",
    accent: "#D4AF37", 
    subtext: "#A0A0A0",
    imgOpacity: 0.6, 
    imgFilter: "sepia(20%) brightness(0.6) contrast(1.2)", 
    overlay: "rgba(18, 18, 18, 0.4)",
    particleGold: "#C5A059",
    blendMode: "screen"
  }
};

const PerfumeParticle = ({ particle, mousePos, theme }) => (
  <motion.g
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 0.8, 0.4, 0],
      scale: [0.5, 1.2, 1],
      x: particle.baseX + (mousePos.x * particle.speed),
      y: [
        particle.baseY + (mousePos.y * particle.speed),
        particle.baseY + (mousePos.y * particle.speed) - 40 
      ],
      rotate: [particle.rotation, particle.rotation + 45],
    }}
    transition={{ duration: particle.duration, delay: particle.delay, repeat: Infinity, ease: "linear" }}
  >
    <text
      fontFamily="'Dancing Script', cursive"
      fontSize={particle.size}
      fill="url(#perfumeGradient)"
      textAnchor="middle"
      className="select-none pointer-events-none"
      style={{
        filter: `drop-shadow(0 2px 4px ${theme.accent}44)`,
        mixBlendMode: theme.blendMode
      }}
    >
      {particle.letter}
    </text>
  </motion.g>
);

const Hero = () => {
  // --- STATE FOR THEME ---
  const [isNight, setIsNight] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const perfumeRef = useRef([]);

  const theme = isNight ? themes.night : themes.day;


  // 1. Particles Setup
  useEffect(() => {
    const nameStr = "SanchitaRajurkarEmilyInParis"; 
    perfumeRef.current = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      baseX: Math.random() * (window.innerWidth * 0.8), 
      baseY: Math.random() * (window.innerHeight * 0.8),
      letter: nameStr[i % nameStr.length],
      size: Math.random() * 20 + 16,
      speed: Math.random() * 2 + 1,
      duration: Math.random() * 6 + 4,
      delay: Math.random() * 5,
      rotation: Math.random() * 360
    }));

    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX - window.innerWidth / 2) / 60,
        y: (e.clientY - window.innerHeight / 2) / 60
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // 2. Theme is set to Light (Day) by default as initialized.
  
  return (
    <motion.section 
      animate={{ backgroundColor: theme.bg }}
      transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
      className="relative min-h-screen overflow-hidden font-sans cursor-default"
    >
      <Navbar theme={theme} />


      {/* --- PERFUME CANVAS --- */}
      <svg className="absolute inset-0 z-10 pointer-events-none w-full h-full">
        <defs>
          <radialGradient id="perfumeGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={theme.accent} />
            <stop offset="100%" stopColor={theme.particleGold} stopOpacity="0.2" /> 
          </radialGradient>
        </defs>
        {perfumeRef.current.map((p) => (
          <PerfumeParticle key={p.id} particle={p} mousePos={mousePos} theme={theme} />
        ))}
      </svg>

      {/* --- BLENDED IMAGE LAYER --- */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ 
            x: mousePos.x * -1, 
            y: mousePos.y * -1,
            opacity: theme.imgOpacity,
            filter: theme.imgFilter 
          }}
          transition={{ duration: 1.5 }}
          className="absolute right-0 bottom-0 w-full h-full md:w-[70%] bg-no-repeat bg-right-bottom bg-contain"
          style={{
            backgroundImage: `url(${heroBg})`,
            WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 90%)",
            maskImage: "linear-gradient(to left, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 90%)",
          }}
        />
        <motion.div 
          animate={{ backgroundColor: theme.overlay }}
          className="absolute inset-0 z-10 pointer-events-none transition-colors duration-1000"
        />
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-20 min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-16 w-full">
          
          {/* Main Toggle Switch */}
          <div className="mb-12 flex items-center gap-4">
            <span className="text-[10px] tracking-widest uppercase" style={{ color: theme.text, opacity: isNight ? 0.3 : 1 }}>Bonjour</span>
            <button 
              onClick={() => setIsNight(!isNight)}
              className="w-12 h-6 rounded-full border border-current flex items-center px-1 relative transition-colors duration-500"
              style={{ color: theme.text }}
            >
              <motion.div animate={{ x: isNight ? 24 : 0 }} className="w-4 h-4 rounded-full bg-current" />
            </button>
            <span className="text-[10px] tracking-widest uppercase" style={{ color: theme.text, opacity: isNight ? 1 : 0.3 }}>Bonsoir</span>
          </div>

          {/* Text Content */}
          <div className="max-w-5xl">
            <motion.h1 
              animate={{ color: theme.text }}
              className="font-serif text-5xl sm:text-7xl md:text-[10rem] tracking-tighter leading-[0.85] md:leading-[0.8]"
            >
              Sanchita <br /> 
              <span className="sm:ml-16 md:ml-32 italic font-light transition-colors duration-1000" style={{ color: theme.accent }}>Rajurkar</span>
            </motion.h1>

            <motion.div 
              animate={{ backgroundColor: theme.text }} 
              className="h-[1px] my-10 w-32 opacity-20" 
            />

            <div className="flex flex-col md:flex-row md:items-center gap-6 flex-wrap">
              <motion.p 
                animate={{ color: theme.subtext }}
                className="text-sm max-w-[280px] leading-relaxed font-light uppercase tracking-[0.2em]"
              >
                {isNight ? "Parisian nights & digital heights." : "Artisan digital experiences based in India."}
              </motion.p>
              
              <div className="flex items-center gap-4 flex-wrap">
                <a 
                  href="#work"
                  style={{ borderColor: `${theme.text}33`, color: theme.text }}
                  className="group relative overflow-hidden px-10 py-4 rounded-full border transition-all duration-500"
                >
                  <motion.div animate={{ backgroundColor: theme.text }} className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <span className="relative z-10 text-[11px] uppercase tracking-[0.3em] group-hover:invert">Explore Work</span>
                </a>

                <Link 
                  to="/journey"
                  style={{ color: theme.subtext }}
                  className="text-[11px] uppercase tracking-[0.3em] hover:opacity-100 opacity-60 transition-opacity duration-300 underline underline-offset-4 decoration-current/30"
                >
                  View My Journey
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.1)]" />
    </motion.section>
  );
};

export default Hero;