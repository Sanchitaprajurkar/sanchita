import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null); // ✅ Track hover state
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY < window.innerHeight * 0.6);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeTheme = theme || {
    bg: "#F9F6F3",
    text: "#2C1810",
    accent: "#E879A6",
    subtext: "#8A7B6E"
  };

  const navLinks = [
    { name: 'Work', href: '/work' },
    { name: 'Journey', href: '/journey' },
    { name: 'Atelier', href: '/#craft' },
    { name: 'Philosophy', href: '/#philosophy' },
    { name: 'Leadership', href: '/#leadership' },
    { name: 'Achievements', href: '/achievements' },
    { name: 'Certifications', href: '/#certifications' },
    { name: 'Contact', href: '/#contact' }
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

        {/* CENTER: Branding — visible only at scroll top (in navbar context) */}
        <motion.div
          animate={{ opacity: atTop ? 1 : 0, y: atTop ? 0 : -10 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          style={{ pointerEvents: atTop ? 'auto' : 'none' }}
          className="hidden md:block absolute left-1/2 -translate-x-1/2 top-12 text-center"
        >
          <p style={{ color: activeTheme.text }} className="font-sans text-[10px] tracking-[0.4em] uppercase opacity-40 mb-1">Portfolio</p>
          <h1 style={{ color: activeTheme.text }} className="font-serif text-2xl tracking-[0.2em] uppercase">Sanchita</h1>
        </motion.div>

        {/* RIGHT: The Toggle */}
        <div className="pointer-events-auto">
          <button onClick={() => setIsOpen(!isOpen)} className="group flex flex-col items-end gap-1.5 p-2">
            <div style={{ backgroundColor: "#C6A3A2" }} className={`h-[1px] transition-all duration-500 ${isOpen ? 'w-8 rotate-45 translate-y-2' : 'w-8'}`} />
            <div style={{ backgroundColor: "#C6A3A2" }} className={`h-[1px] transition-all duration-500 ${isOpen ? 'opacity-0' : 'w-5'}`} />
            <div style={{ backgroundColor: "#C6A3A2" }} className={`h-[1px] transition-all duration-500 ${isOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-8'}`} />
            <span style={{ color: activeTheme.text }} className="text-[7px] tracking-[0.3em] uppercase opacity-60 mt-2 font-medium">
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

            <ul className="relative z-10 flex flex-col items-center gap-2 md:gap-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (i * 0.05), ease: [0.23, 1, 0.32, 1] }}
                >
                  <Link 
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={() => setHoveredIndex(i)} 
                    onMouseLeave={() => setHoveredIndex(null)} 
                    className="group relative block font-serif text-2xl md:text-3xl transition-all duration-500 active:scale-95 px-4"
                  >
                    <div className="flex items-center gap-4">
                      <span 
                        style={{ color: activeTheme.text }}
                        className={`text-[8px] md:text-[10px] font-sans tracking-[0.3em] font-medium transition-all duration-500 ${hoveredIndex === i ? 'opacity-100 translate-x-0' : 'opacity-20 -translate-x-2'}`}
                      >
                        0{i + 1}
                      </span>
                      <span 
                        style={{ 
                          color: hoveredIndex === i ? activeTheme.accent : activeTheme.text 
                        }}
                        className={`transition-all duration-700 uppercase tracking-[0.1em] ${hoveredIndex === i ? 'italic' : ''}`}
                      >
                        {link.name}
                      </span>
                    </div>

                    {/* Animated Underline Hook */}
                    <AnimatePresence>
                      {hoveredIndex === i && (
                        <motion.div 
                          layoutId="nav-underline"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          exit={{ scaleX: 0 }}
                          className="absolute bottom-0 left-0 right-0 h-[1px] origin-left"
                          style={{ backgroundColor: activeTheme.accent }}
                        />
                      )}
                    </AnimatePresence>
                  </Link>
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