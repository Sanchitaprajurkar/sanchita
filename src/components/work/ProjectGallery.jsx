import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: "Mann Match Yourself",
    url: "mannmatchyourself.com",
    category: "E-commerce • Full Stack",
    type: "Professional",
    techStack: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"],
    description: "Built a complete women’s ethnic wear platform with optimized shopping flows, secure checkout, and inventory management.",
    img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80",
    layout: "large",
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
    layout: "small",
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
    layout: "small",
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
    layout: "small",
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
    layout: "small",
    stack: "React.js • Node.js • MongoDB"
  }
];

const ProjectGallery = () => {
  const [filter, setFilter] = useState('all'); // 'all', 'Professional', 'Personal'
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredProject, setHoveredProject] = useState(null);

  const activeTheme = { bg: "#F9F6F3", text: "#2C1810", subtext: "#8A7B6E", accent: "#C6A2A1" };

  // Mouse tracking for floating tech-stack pointer
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const visibleProjects = filter === 'all' 
    ? projects : projects.filter(p => p.type === tabToProjectTab(filter));

  // Wording Mapper
  function tabToProjectTab(tab) {
    if (tab === 'Professional') return 'Professional';
    if (tab === 'Personal') return 'Personal';
    return 'all';
  }

  return (
    <>
      <motion.section 
        className="py-32 px-6 md:px-20 min-h-screen relative overflow-hidden bg-transparent" 
        id="work"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-0">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="font-sans uppercase tracking-[0.2em] text-[10px] font-bold text-[#8A7B6E]"
              >
                Recent Portfolio
              </motion.span>
              <h2 className="font-serif text-5xl md:text-6xl mt-4 text-[#2C1810]">
                Featured Projects
              </h2>
            </div>

            {/* The Professional Toggle Switch */}
            <div className="flex gap-2 bg-[#F0EDE9] p-1.5 rounded-xl shadow-inner border border-black/5">
              {['all', 'Professional', 'Personal'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-6 py-2.5 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all rounded-lg ${
                    filter === tab 
                      ? 'bg-white text-[#2C1810] shadow-md' 
                      : 'text-[#2C1810]/40 hover:text-[#2C1810]'
                  }`}
                >
                  {tab === 'all' ? 'All Works' : tab}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start"
          >
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, idx) => (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                  className={`${project.layout === 'large' && filter === 'all' ? 'md:col-span-8' : 'md:col-span-4'}`}
                >
                  {/* Image Container */}
                  <div 
                    className="group relative overflow-hidden rounded-sm bg-stone-200 cursor-none shadow-xl hover:shadow-2xl transition-all duration-500"
                    onMouseEnter={() => setHoveredProject(project)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <motion.img 
                      src={project.img} 
                      alt={project.title}
                      className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                      style={{ aspectRatio: project.layout === 'large' && filter === 'all' ? '16/10' : '4/5' }}
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#2C1810]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-8 text-center">
                       <p className="text-white/60 font-mono text-[9px] uppercase tracking-[0.4em] mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                         {project.category}
                       </p>
                       <a 
                         href={project.url}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="border border-white/20 text-white font-sans text-[10px] uppercase tracking-widest px-8 py-3.5 hover:bg-white hover:text-[#2C1810] transition-all"
                       >
                         View Details
                       </a>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="mt-8 space-y-3">
                    <div className="flex items-center gap-4">
                       <span className="w-10 h-[1px] bg-[#2C1810]/10"></span>
                       <p className="text-[#C6A2A1] font-sans text-[10px] uppercase tracking-[0.4em] font-bold">
                         {project.type}
                       </p>
                    </div>
                    <h3 className="text-3xl font-serif text-[#2C1810] hover:italic transition-all duration-300">
                      {project.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Navigation Button to Next Page */}
          <div className="mt-32 flex justify-center">
            <Link 
              to="/work"
              className="px-12 py-5 border border-[#2C1810] text-[#2C1810] font-sans text-xs uppercase tracking-[0.4em] font-black hover:bg-[#2C1810] hover:text-white transition-all duration-500"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Floating Tech Stack Tooltip Pointer */}
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
              <span className="text-white text-[10px] font-mono tracking-widest uppercase py-0.5">
                {hoveredProject.stack}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectGallery;
