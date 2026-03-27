import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: "Mann Match Yourself",
    url: "mannmatchyourself.com",
    category: "E-commerce • Full Stack",
    type: "Professional",
    techStack: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"],
    description: "Built a complete women’s ethnic wear platform with optimized shopping flows, secure checkout, and inventory management.",
    img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80",
    stack: "React • Node.js • MongoDB"
  },
  {
    title: "PVR Shahu Motors",
    url: "github.com/Sanchitaprajurkar/pvr-shahu-motors",
    category: "Automotive • CRM",
    type: "Professional",
    techStack: ["React.js", "Tailwind CSS", "Framer Motion"],
    description: "A professional frontend solution for an automotive service provider, focusing on high-conversion UI.",
    img: "https://images.unsplash.com/photo-1562141989-c5c79ac8f576?auto=format&fit=crop&q=80",
    stack: "React • UI/UX • CRM"
  },
  {
    title: "Maitri Bot",
    url: "GitHub / Telegram",
    category: "AI • Healthcare",
    type: "Personal",
    techStack: ["LLaMA 3", "Ollama", "Node.js", "Python"],
    description: "Developed an AI assistant for maternal health using RAG to ensure responses are grounded in verified medical documents.",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
    stack: "LLaMA 3 • Ollama • Python"
  },
  {
    title: "BridgeLink",
    url: "bridgelink.in",
    category: "Networking • EdTech",
    type: "Personal",
    techStack: ["React.js", "TypeScript", "Firebase", "Firestore"],
    description: "Mentorship platform with role-based auth, event scheduling, and virtual meetups to connect students with alumni.",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80",
    stack: "React • TypeScript • Firebase"
  },
  {
    title: "INDIC",
    url: "indic.in.net",
    category: "Language • Gamified",
    type: "Personal",
    techStack: ["React.js", "Node.js", "MongoDB", "JWT"],
    description: "Gamified Hindi learning platform featuring AI character tracing and secure progress tracking.",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80",
    stack: "React.js • Node.js • MongoDB"
  },
  {
    title: "Sorting Algorithm Visualiser",
    url: "github.com/Sanchitaprajurkar/SORTING-ALGORITHM-VISUALISER",
    category: "Data Structures • UI",
    type: "Personal",
    techStack: ["JavaScript", "HTML", "CSS"],
    description: "Interactive visualization of sorting algorithms to easily observe standard arrays in action.",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80",
    stack: "Vanilla JS • Algorithms"
  },
  {
    title: "PredictorGuru",
    url: "github.com/Sanchitaprajurkar/Predictor-Guru",
    category: "Data Analytics • ML",
    type: "Personal",
    techStack: ["Python", "Scikit-Learn", "Numpy"],
    description: "Predictive analysis tool for various scenarios using historical modeling.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    stack: "Python • Scikit-Learn • Data"
  },
  {
    title: "Color Code Converter",
    url: "github.com/Sanchitaprajurkar/color-canvas",
    category: "Frontend Utility",
    type: "Personal",
    techStack: ["React.js", "CSS", "UI/UX"],
    description: "Utility for seamlessly converting color codes between different formats.",
    img: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&q=80",
    stack: "React • UI/UX • Utility"
  }
];

const Work = () => {
  const [filter, setFilter] = useState('all');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const visibleProjects = filter === 'all' 
    ? projects : projects.filter(p => p.type === filter);

  return (
    <>
      <section id="achievements" className="min-h-screen bg-[#F9F6F3] py-24 px-6 md:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          {/* Back Navigation */}
          <Link 
            to="/" 
            className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold text-[#2C1810]/50 hover:text-[#2C1810] transition-colors mb-20"
          >
            <span className="group-hover:-translate-x-2 transition-transform">←</span>
            Back to Home
          </Link>

          <header className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-10">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#C6A2A1] block mb-4">Complete Archives</span>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif italic text-[#2C1810]">All Projects</h1>
            </div>

            <div className="flex gap-2 bg-[#F0EDE9] p-1.5 rounded-xl shadow-inner border border-black/5 overflow-x-auto max-w-full">
              {['all', 'Professional', 'Personal'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-4 md:px-6 py-2 md:py-2.5 text-[9px] md:text-xs font-bold uppercase tracking-widest transition-all rounded-lg whitespace-nowrap ${
                    filter === tab 
                      ? 'bg-white text-[#2C1810] shadow-md' 
                      : 'text-[#2C1810]/40 hover:text-[#2C1810]'
                  }`}
                >
                  {tab === 'all' ? 'Everything' : tab}
                </button>
              ))}
            </div>
          </header>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
          >
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project) => (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col group"
                >
                  <div 
                    className="relative aspect-[4/5] bg-stone-200 overflow-hidden cursor-pointer md:cursor-none rounded-sm shadow-xl"
                    onMouseEnter={() => setHoveredProject(project)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <motion.img 
                      src={project.img} 
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#2C1810]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                       <a 
                         href={project.url}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="bg-white text-[#2C1810] font-sans text-[10px] uppercase font-bold tracking-widest px-8 py-3.5 hover:bg-[#C6A2A1] hover:text-white transition-all shadow-xl"
                       >
                         Exploration Details
                       </a>
                    </div>
                  </div>
                  <div className="mt-8 space-y-2">
                    <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#C6A2A1]">{project.type}</p>
                    <h2 className="text-3xl font-serif text-[#2C1810]">{project.title}</h2>
                    <p className="text-[#8A7B6E] text-sm leading-relaxed">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Reusable Pointer for consistency */}
      <AnimatePresence>
        {hoveredProject && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 450, damping: 25 }}
            className="fixed pointer-events-none z-[9999] px-4 py-2 bg-[#2C1810]/95 backdrop-blur-md rounded-full border border-white/10 shadow-2xl hidden md:block"
            style={{ 
              left: mousePos.x + 25, 
              top: mousePos.y + 25 
            }}
          >
            <div className="flex items-center gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white text-[10px] font-mono tracking-widest uppercase">
                {hoveredProject.stack}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Work;
