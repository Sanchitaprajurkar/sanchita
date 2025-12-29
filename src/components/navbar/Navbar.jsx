import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null); // ✅ Track hover state

  const activeTheme = theme || {
    bg: "#F9F6F3",
    text: "#2C1810",
    accent: "#E879A6",
    subtext: "#8A7B6E"
  };

  const navLinks = [
    { name: 'Collections', href: '#projects' },
    { name: 'The Muse', href: '#about' },
    { name: 'Journal', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <nav className="fixed inset-0 pointer-events-none z-[100] p-6 md:p-12 flex justify-between items-start">
        {/* LEFT: The Edition Stamp */}
        <div className="pointer-events-auto flex flex-col gap-4">
          <div 
            style={{ borderColor: `${activeTheme.text}1A`, backgroundColor: `${activeTheme.bg}4D` }}
            className="w-14 h-14 border rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-700 cursor-help group"
          >
            <span style={{ color: activeTheme.text }} className="font-serif text-lg italic">S.</span>
            <span style={{ color: activeTheme.text }} className="absolute left-16 opacity-0 group-hover:opacity-60 transition-opacity text-[10px] tracking-[0.3em] uppercase whitespace-nowrap">
              Est. 2025
            </span>
          </div>
        </div>

        {/* CENTER: Branding */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-12 pointer-events-auto text-center">
          <p style={{ color: activeTheme.text }} className="font-sans text-[10px] tracking-[0.4em] uppercase opacity-40 mb-1">Portfolio</p>
          <h1 style={{ color: activeTheme.text }} className="font-serif text-2xl tracking-[0.2em] uppercase">Sanchita</h1>
        </div>

        {/* RIGHT: The Toggle */}
        <div className="pointer-events-auto">
          <button onClick={() => setIsOpen(!isOpen)} className="group flex flex-col items-end gap-1.5 p-2">
            <div style={{ backgroundColor: activeTheme.text }} className={`h-[1px] transition-all duration-500 ${isOpen ? 'w-8 rotate-45 translate-y-2' : 'w-8'}`} />
            <div style={{ backgroundColor: activeTheme.text }} className={`h-[1px] transition-all duration-500 ${isOpen ? 'opacity-0' : 'w-5'}`} />
            <div style={{ backgroundColor: activeTheme.text }} className={`h-[1px] transition-all duration-500 ${isOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-8'}`} />
            <span style={{ color: activeTheme.text }} className="text-[9px] tracking-[0.3em] uppercase opacity-60 mt-2 font-medium">
              {isOpen ? 'Close' : 'Menu'}
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
            style={{ backgroundColor: activeTheme.bg }}
            className="fixed inset-0 z-[90] flex flex-col items-center justify-center overflow-hidden"
          >
            <div style={{ color: activeTheme.text }} className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
              <h2 className="text-[30vw] font-serif italic whitespace-nowrap leading-none">Parisian</h2>
            </div>

            <ul className="relative z-10 flex flex-col items-center gap-6 md:gap-10">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                >
                  <a 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={() => setHoveredIndex(i)} // ✅ Set hover
                    onMouseLeave={() => setHoveredIndex(null)} // ✅ Clear hover
                    style={{ 
                      // ✅ If hovered, show theme accent. If not, show theme text.
                      color: hoveredIndex === i ? activeTheme.accent : activeTheme.text 
                    }}
                    className="group relative block font-serif text-5xl md:text-8xl transition-all duration-500"
                  >
                    <span 
                      style={{ color: activeTheme.text }}
                      className={`absolute -left-12 top-1/2 -translate-y-1/2 text-xs font-sans tracking-[0.2em] transition-all duration-500 ${hoveredIndex === i ? 'opacity-40' : 'opacity-0'}`}
                    >
                      0{i + 1}
                    </span>
                    <span className={`${hoveredIndex === i ? 'pl-4 italic' : 'pl-0'} transition-all duration-500`}>
                      {link.name}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="absolute bottom-12 flex flex-col items-center gap-4">
              <div style={{ backgroundColor: activeTheme.text }} className="h-12 w-[1px] opacity-20" />
              <p style={{ color: activeTheme.accent }} className="font-signature text-3xl">Sanchita Rajurkar</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;