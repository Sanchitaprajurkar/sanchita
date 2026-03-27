import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ctfEvents = [
  {
    id: "CTF-01",
    title: "Database Management System",
    issuer: "NPTEL",
    rank: "Score: 92% | Elite + Silver",
    img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&q=80", 
    link: "https://nptel.ac.in/"
  },
  {
    id: "CTF-02",
    title: "Intro to Career Skills in Data Analytics",
    issuer: "LinkedIn Learning",
    rank: "Completed",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    link: "https://www.linkedin.com/learning/"
  }
];

const CtfCertificationSection = ({ theme }) => {
  const activeTheme = theme || { bg: "#F9F6F3", text: "#2C1810", subtext: "#8A7B6E", accent: "#E879A6" };
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="certifications" className="py-32 px-6 md:px-20 relative overflow-hidden" style={{ backgroundColor: "transparent" }}>
      
      {/* Dynamic Background Noise (Subtle System Feel) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay animate-pulse bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-[10px] font-mono text-[#8A7B6E] uppercase tracking-[0.4em] block mb-4">
              [ SECURE_CREDENTIAL_STORAGE ]
            </span>
            <motion.h2 
              animate={{ color: activeTheme.text }}
              className="text-5xl md:text-7xl font-serif italic"
            >
              Technical Accreditations
            </motion.h2>
          </div>
          <div className="h-[1px] hidden md:block flex-1 mx-12 bg-[#2C1810]/10"></div>
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
             <span className="font-mono text-[9px] text-[#8A7B6E] uppercase tracking-widest">
               Systems Online
             </span>
          </div>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {ctfEvents.map((event, idx) => (
            <motion.a
              key={event.id}
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredId(event.id)}
              onMouseLeave={() => setHoveredId(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              className="group relative bg-[#FDFCF8] border border-[#2C1810]/5 rounded-2xl overflow-hidden grid grid-cols-12 gap-0 
              shadow-[0_4px_20px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.05)] 
              hover:shadow-[0_40px_80px_rgba(44,24,16,0.12)] 
              transition-all duration-500 active:scale-[0.98]"
            >
              {/* Idle "System State" Light Sweep */}
              <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2C1810]/[0.02] to-transparent -translate-x-full animate-[sweep_6s_infinite_linear]" />
              </div>

              {/* Left Side: The Rectangular Image/Certificate */}
              <div className="col-span-12 md:col-span-5 relative overflow-hidden h-56 md:h-full bg-stone-100">
                <motion.img 
                  src={event.img} 
                  alt={`${event.title}`}
                  className="w-full h-full object-cover transition-all duration-1000"
                  animate={{ 
                    filter: hoveredId === event.id ? "grayscale(0%) brightness(1) blur(0px)" : "grayscale(100%) brightness(0.8) blur(1px)",
                    scale: hoveredId === event.id ? 1.05 : 1
                  }}
                />
                <div className="absolute inset-0 bg-[#2C1810]/10 mix-blend-overlay"></div>
              </div>

              {/* Right Side: Event Details */}
              <div className="col-span-12 md:col-span-7 p-8 md:p-10 flex flex-col justify-between min-h-[280px] z-10">
                <div className="space-y-6">
                   <div className="flex justify-between items-center">
                     <p className="text-[10px] font-bold text-[#E879A6] uppercase tracking-[0.3em]">
                       {event.issuer}
                     </p>
                     
                     {/* Simplified Status Indicator (Removed Identity Core) */}
                     <div className="flex items-center gap-2">
                       <span className="relative flex h-1.5 w-1.5">
                         <motion.span 
                            animate={{ opacity: hoveredId === event.id ? [0.4, 1, 0.4] : 0.4 }}
                            transition={{ repeat: Infinity, duration: 1 }}
                            className="absolute inline-flex h-full w-full rounded-full bg-[#2C1810] opacity-75"
                         />
                         <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#2C1810]"></span>
                       </span>
                       <span className="text-[8px] font-mono text-[#2C1810]/40 uppercase tracking-widest">
                         VERIFIED_CREDENTIAL
                       </span>
                     </div>
                   </div>

                   <motion.h3 
                    animate={{ color: hoveredId === event.id ? "#E879A6" : "#2C1810" }}
                    className="text-2xl md:text-3xl font-bold leading-tight font-serif"
                   >
                     {event.title}
                   </motion.h3>
                </div>

                <div className="mt-12 pt-8 border-t border-black/[0.03] flex justify-between items-end">
                    <motion.div
                      animate={{ opacity: hoveredId === event.id ? 1 : 0.6, y: hoveredId === event.id ? 0 : 5 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                    >
                        <p className="text-[9px] font-mono text-[#8A7B6E] uppercase tracking-widest mb-1 font-bold">Verification</p>
                        <p className="text-sm font-bold text-[#2C1810]">{event.rank}</p>
                    </motion.div>
                    
                    <motion.div 
                      animate={{ 
                        backgroundColor: hoveredId === event.id ? "#2C1810" : "transparent",
                        color: hoveredId === event.id ? "#FFFFFF" : "#2C1810"
                      }}
                      className="w-12 h-12 rounded-full border border-[#2C1810]/10 flex items-center justify-center transition-all shadow-sm"
                    >
                       <span className="text-lg">↗</span>
                    </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        @keyframes sweep {
          0% { transform: translateX(-150%) skewX(-45deg); }
          50% { transform: translateX(150%) skewX(-45deg); }
          100% { transform: translateX(100%) skewX(-45deg); }
        }
      `}</style>
    </section>
  );
};

export default CtfCertificationSection;
