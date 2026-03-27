import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Atelier = ({ theme }) => {
  const activeTheme = theme || { 
    bg: "#F9F6F3",
    text: "#2C1810",
    accent: "#C6A2A1",
    gold: "#D4AF37"
  };

  const [isOpen, setIsOpen] = useState(false);
  const [commandText, setCommandText] = useState("");
  const [showSkills, setShowSkills] = useState(false);

  // Auto-typing sequence when opened
  useEffect(() => {
    if (isOpen) {
      setShowSkills(false);
      let i = 0;
      const fullCommand = "./list --all-capabilities --verbose";
      const interval = setInterval(() => {
        setCommandText(fullCommand.slice(0, i));
        i++;
        if (i > fullCommand.length) {
          clearInterval(interval);
          setTimeout(() => setShowSkills(true), 300);
        }
      }, 30);
      return () => clearInterval(interval);
    }
  }, [isOpen]);

  // Global Keyboard Shortcut
  useEffect(() => {
    const handleKey = (e) => {
      // Check for either ` or ~ (tilde) mapping
      if (e.ctrlKey && (e.key === '`' || e.key === '~')) setIsOpen(prev => !prev);
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const categories = [
    { label: "// languages", skills: ["C++", "Java", "Python", "JS", "TS", "JavaScript"] },
    { label: "// ai_gen_ai", skills: ["Ollama", "RAG", "GenAI", "Prompt Engineering"] },
    { label: "// frontend", skills: ["React.js", "Tailwind CSS", "Figma"] },
    { label: "// backend_db", skills: ["Node.js", "Express", "MongoDB", "MySQL", "JWT"] },
    { label: "// core_cs", skills: ["DSA", "OOPs", "OS", "DBMS", "Computer Networks"] }
  ];

  return (
    <section className="py-24 px-6 flex flex-col items-center justify-center relative overflow-hidden min-h-[50vh]" style={{ backgroundColor: "transparent" }} id="craft">
      
      {/* 1. ON-PAGE PREVIEW (Recruiter doesn't have to do anything yet) */}
      <div className="text-center mb-10 max-w-2xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif italic mb-4" style={{ color: activeTheme.text }}>
          The Engineering <span className="opacity-40">Atelier</span>
        </h2>
        <p className="text-sm font-mono uppercase tracking-widest mb-12 opacity-60" style={{ color: activeTheme.text }}>
          Technical Stack & Core Competencies
        </p>

        {/* This "Fake" terminal prompt invites them to click */}
        <div 
          onClick={() => setIsOpen(true)}
          className="group cursor-pointer bg-[#1a1a1a] p-4 md:px-6 md:py-4 rounded-xl border border-dashed hover:border-solid inline-flex flex-col md:flex-row items-center gap-4 transition-all duration-300 active:scale-[0.97] shadow-xl hover:shadow-[0_0_30px_rgba(198,162,161,0.2)]"
          style={{ borderColor: activeTheme.accent }}
        >
          <div className="flex gap-1.5 self-start md:self-center">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <span className="font-mono text-xs md:text-sm text-white/80">
              $ <span className="text-white">./run_skills_manifest.sh</span>
            </span>
            <span 
              className="text-[10px] uppercase font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity mt-2 md:mt-0"
              style={{ color: activeTheme.accent }}
            >
              [ CLICK TO LAUNCH ]
            </span>
          </div>
        </div>
      </div>

      {/* 2. THE FULL IMMERSIVE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }} 
            animate={{ opacity: 1, backdropFilter: 'blur(16px)' }} 
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/90"
          >
            {/* Click outside to close map */}
            <div className="absolute inset-0 z-0" onClick={() => setIsOpen(false)} />

            {/* The "Deep Black" Terminal Window */}
            <motion.div 
              initial={{ scale: 0.95, y: 20, opacity: 0 }} 
              animate={{ scale: 1, y: 0, opacity: 1 }} 
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="w-full max-w-4xl h-[80vh] bg-[#050505]/80 backdrop-blur-xl border border-white/10 rounded-xl flex flex-col shadow-[0_0_100px_rgba(0,0,0,1)] relative z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Terminal Header */}
              <div className="px-5 py-4 border-b border-white/5 flex justify-between items-center bg-[#111]">
                <div className="text-[10px] md:text-xs font-mono text-white/40 uppercase tracking-[0.2em] flex items-center gap-3">
                  System_Access <span className="text-white/20">//</span> Skills.v1
                </div>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="px-2 py-1 bg-white/5 rounded text-white/40 hover:text-white text-[10px] font-mono hover:bg-white/10 transition-colors uppercase tracking-widest"
                >
                  [CLOSE_X]
                </button>
              </div>

              {/* Terminal Body */}
              <div className="p-6 md:p-10 font-mono text-xs md:text-sm overflow-y-auto custom-scrollbar flex-1 relative">
                {/* CRT Glow Effect Overlay */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-50 bg-[length:100%_2px,3px_100%]" />

                {/* The Prompt Output */}
                <div className="mb-10 text-sm md:text-base">
                  <span className="text-green-500 font-bold">➜</span> 
                  <span className="text-blue-400 ml-2 font-bold">~/portfolio</span> 
                  <span className="text-white ml-2">$ {commandText}</span>
                  <motion.span 
                    animate={{ opacity: [1, 0] }} 
                    transition={{ repeat: Infinity, duration: 0.8 }} 
                    className="inline-block w-2.5 h-4 md:h-5 bg-white ml-2 align-middle" 
                  />
                </div>

                <AnimatePresence>
                  {showSkills && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8"
                    >
                      {categories.map((cat, idx) => (
                        <motion.div 
                          key={idx} 
                          initial={{ opacity: 0, x: -10 }} 
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <h3 className="text-[11px] mb-4 uppercase tracking-widest opacity-40 text-white flex items-center gap-2">
                            <span className="w-4 h-[1px] bg-white/20"></span>
                            {cat.label}
                          </h3>
                          <div className="flex flex-wrap gap-2 md:gap-3 relative z-40">
                            {cat.skills.map((skill, sIdx) => (
                              <span 
                                key={sIdx} 
                                className="px-3 py-1.5 border border-white/10 text-[11px] md:text-xs rounded hover:border-white/40 hover:text-white transition-all duration-300 cursor-crosshair bg-white/5 backdrop-blur-md active:scale-90"
                                style={{ color: activeTheme.accent }}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Footer readout */}
              <div className="p-4 border-t border-white/5 text-[9px] md:text-[10px] font-mono text-white/30 flex justify-between uppercase tracking-widest bg-black/50">
                <span className="hidden sm:inline">LOC: 28.6139° N, 77.2090° E</span>
                <span className="w-full sm:w-auto text-center">CTRL + ~ TO TOGGLE</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Atelier;
