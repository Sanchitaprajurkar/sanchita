import React from 'react';
import { motion } from 'framer-motion';
import footerRose from '../../assets/footerrose.jpg';
import { FiMail, FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi';

const Footer = ({ theme }) => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      id="contact"
      animate={{ 
        backgroundColor: "#C4A2A2", // Much lighter rose/champagne background
        borderTopColor: "#2C18101A" // 10% opacity
      }}
      transition={{ duration: 0.8 }}
      className="pt-24 pb-12 px-6 md:px-20 border-t rounded-t-[3rem] relative overflow-hidden"
    >
      {/* Background Pattern Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-fixed bg-cover bg-center mix-blend-soft-light" 
        style={{ backgroundImage: `url(${footerRose})` }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-12 md:gap-24 h-full">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Brand & Mantra */}
          <div className="flex flex-col">
            <motion.span 
              className="font-sans uppercase tracking-[0.4em] text-[10px] block mb-6 text-[#8A7B6E]"
            >
              Let's build the future
            </motion.span>
            <motion.h2 
              className="font-serif italic text-5xl md:text-7xl leading-tight text-transparent bg-clip-text bg-gradient-to-tr from-[#996515] via-[#D4AF37] to-[#F1E5AC] drop-shadow-sm pb-2"
            >
              Awaiting your <br /> 
              digital story.
            </motion.h2>
            <p className="mt-8 text-sm md:text-base font-light text-[#2C1810] opacity-80 max-w-md leading-relaxed">
              Engineering high-impact, user-centered AI and Full-Stack solutions.
            </p>
            
            <div className="mt-16 flex flex-wrap gap-8 text-[#2C1810]">
              <a href="mailto:rajurkarsanchita@gmail.com" className="hover:text-[#D4AF37] transition-colors p-2" aria-label="Email">
                <FiMail className="text-2xl" />
              </a>
              <a href="https://www.linkedin.com/in/sanchita-rajurkar-840180297/" className="hover:text-[#D4AF37] transition-colors p-2" aria-label="LinkedIn">
                <FiLinkedin className="text-2xl" />
              </a>
              <a href="https://github.com/Sanchitaprajurkar" className="hover:text-[#D4AF37] transition-colors p-2" aria-label="GitHub">
                <FiGithub className="text-2xl" />
              </a>
              <a href="https://www.instagram.com/sanchitasrajurkar/?hl=en" className="hover:text-[#D4AF37] transition-colors p-2" aria-label="Instagram">
                <FiInstagram className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Right Side: Navigation & Status */}
          <div className="flex flex-col md:items-end w-full">
            <div className="flex flex-col md:flex-row gap-16 md:gap-24 text-left md:text-right mb-12 w-full md:w-auto md:justify-end">
              
              {/* Projects */}
              <div className="flex flex-col">
                <p className="font-sans text-[10px] uppercase tracking-[0.3em] mb-4 text-[#996515] drop-shadow-sm">
                  Projects
                </p>
                <div className="flex flex-col gap-3 text-[#2C1810] text-sm">
                  <a href="#" className="hover:text-[#D4AF37] transition-colors">Maitri Bot (RAG-Driven AI)</a>
                  <a href="#" className="hover:text-[#D4AF37] transition-colors">BridgeLink</a>
                  <a href="#" className="hover:text-[#D4AF37] transition-colors">INDIC</a>
                </div>
              </div>

              {/* Currently */}
              <div className="flex flex-col">
                <p className="font-sans text-[10px] uppercase tracking-[0.3em] mb-4 text-[#996515] drop-shadow-sm">
                  Currently
                </p>
                <div className="flex flex-col gap-3 text-[#2C1810] text-sm md:items-end font-light">
                  <p>Full-Stack Developer Intern @ <span className="font-semibold italic">Web Crafts Solution</span></p>
                  <p>President @ <span className="font-semibold italic">E-Cell, KKWIEER</span></p>
                </div>
              </div>

            </div>

            {/* The Signature */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12 md:mt-24 font-signature text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-tr from-[#996515] via-[#D4AF37] to-[#F1E5AC] drop-shadow-sm w-full md:w-auto text-left md:text-right"
            >
              Sanchita Rajurkar
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          animate={{ borderTopColor: "#2C18101A" }} 
          className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="font-sans text-[9px] uppercase tracking-widest text-[#8A7B6E]">
            © {currentYear} Sanchita Rajurkar — All Rights Reserved.
          </p>
          <div className="flex gap-4 items-center">
             <div className="w-2 h-2 rounded-full animate-pulse bg-[#D4AF37]" />
             <p className="font-sans text-[9px] uppercase tracking-widest text-[#8A7B6E]">
               Available for Collaborations
             </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
