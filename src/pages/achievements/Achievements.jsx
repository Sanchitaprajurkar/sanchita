import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTrophy, FaCertificate, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

// Correct image imports — relative paths (required for Render/Linux)
import NASAImage from "../../assets/NASA.jpg";
import InnoveraImage from "../../assets/NASA.jpg";
import PythonImage from "../../assets/NASA.jpg";
import FounderImage from "../../assets/NASA.jpg";
import VolunteerImage from "../../assets/NASA.jpg";
import ecellImage from "../../assets/NASA.jpg";
import csiImage from "../../assets/NASA.jpg";
import footerrose from "../../assets/footerrose.jpg";

const Achievements = () => {
  const [stage, setStage] = useState(0); // 0: Stack, 1: Fan, 2: Horizontal Scroll
  const [selectedItem, setSelectedItem] = useState(null);

  const achievements = [
    {
      id: "1",
      title: "Global Finalist",
      subtitle: "NASA Space Apps 2024",
      type: "Competition",
      icon: <FaTrophy />,
      image: NASAImage,
      fullTitle: "Global Finalist - NASA Space Apps Challenge 2024",
      description: "Competed globally in the NASA Space Apps Challenge, delivering an innovative solution that stood out on the international stage among thousands of participants.",
      linkedin: "https://www.linkedin.com/posts/sanchita-rajurkar-840180297_nasa-spaceapps-hackathon-activity-7249832317622312961-4Vrm",
    },
    {
      id: "2",
      title: "Winner",
      subtitle: "Innov-era Hackathon",
      type: "Hackathon",
      icon: <FaTrophy />,
      image: InnoveraImage,
      fullTitle: "Winner at Innov-era Hackathon",
      description: "Secured first place at the Innov-era Hackathon by collaborating effectively under pressure and developing a highly impactful, technically sound prototype.",
      linkedin: "https://www.linkedin.com/posts/sanchita-rajurkar-840180297_hackathon-innovation-teamwork-activity-7303815823628939265-vAqJ",
    },
    {
      id: "3",
      title: "Python Winner",
      subtitle: "Mini Project Comp",
      type: "Technical",
      icon: <FaTrophy />,
      image: PythonImage,
      fullTitle: "Winner in Python Mini Project Competition",
      description: "Awarded first place for showcasing advanced algorithmic thinking and clean, optimized code in the highly competitive Python Mini Project Competition.",
      linkedin: "https://www.linkedin.com/posts/sanchita-rajurkar-840180297_hello-connections-thrilled-to-share-activity-7247288494287384576-vvpR",
    },
    {
      id: "4",
      title: "Core Team",
      subtitle: "E-Cell KKWIEER",
      type: "Leadership",
      icon: <FaCertificate />,
      image: ecellImage,
      fullTitle: "E-Cell KKWIEER Core Team Member",
      description: "Represented E-Cell KKWIEER as part of the core team for the National Entrepreneurship Challenge 2025 by IIT Bombay. Collaborated to promote innovation and strategic execution.",
      linkedin: "https://www.linkedin.com/posts/ecell-kkwieer_nec2025-iitbombay-nationalentrepreneurshipchallenge-activity-7356583522519674880-rkry",
    },
    {
      id: "5",
      title: "Core Committee",
      subtitle: "CSI KKWIEER",
      type: "Teamwork",
      icon: <FaCertificate />,
      image: csiImage,
      fullTitle: "Core Committee Member CSI KKWIEER",
      description: "Selected as a Core Committee Member of the Computer Society of India for the 2025–26 term, actively driving technical community initiatives and organizing extensive student engagement events.",
      linkedin: "https://www.linkedin.com/posts/sanchita-rajurkar-840180297_csi-kkwieer-corecommittee-activity-7365045828790472704-JhBS",
    },
    {
      id: "6",
      title: "Startup Course",
      subtitle: "Professional Dev",
      type: "Certification",
      icon: <FaCertificate />,
      image: FounderImage,
      fullTitle: "Completed Startup Course by Sudhir Kadam",
      description: "Successfully completed an intensive startup curriculum providing deep insights into entrepreneurship, venture building, and market-fit strategies.",
      linkedin: "https://www.linkedin.com/posts/sanchita-rajurkar-840180297_innovation-entrepreneurship-startupjourney-activity-7308514628098039808-3-t7",
    },
    {
      id: "7",
      title: "Volunteering",
      subtitle: "AI in Education",
      type: "Social",
      icon: <FaCertificate />,
      image: VolunteerImage,
      fullTitle: "Volunteering - AI in Education",
      description: "Dedicated time at the World Education Fair advocating for the ethical and highly impactful integration of Artificial Intelligence tools within modern educational frameworks.",
      linkedin: "https://www.linkedin.com/posts/sanchita-rajurkar-840180297_education-aiineducation-worldeducationfair-activity-7312514621423120385-LJqn",
    },
  ];

  // Logic for absolute stacked (Stage 0) vs fanned (Stage 1)
  const getCardStyle = (index, total) => {
    if (stage === 0) return { x: 0, y: 0, rotate: index * 3 - 9, scale: 1 };
    
    // Stage 1: Fan out
    const isMobile = window.innerWidth < 768;
    const spreadMultiplier = isMobile ? 80 : 150; 
    const spread = (index - (total - 1) / 2) * spreadMultiplier;
    
    const rotation = (index - (total - 1) / 2) * (isMobile ? 3 : 6);
    return { x: spread, y: index % 2 === 0 ? 10 : -10, rotate: rotation, scale: isMobile ? 0.8 : 0.95 };
  };

  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-x-hidden py-32 px-4">

      {/* 1. Header Section */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');`}
      </style>
      <motion.div 
        animate={{ y: stage > 0 ? -30 : 0, opacity: selectedItem ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="text-center z-10 mb-8 md:mb-16 md:mb-24 w-full relative"
      >
        <h2 
          className="text-5xl sm:text-7xl md:text-8xl text-[#C6A2A1]" 
          style={{ fontFamily: "'Great Vibes', cursive", textShadow: "0 4px 15px rgba(0,0,0,0.05)" }}
        >
          Achievement
        </h2>
      </motion.div>

      {/* 2. The Interactive Stack / Carousel */}
      <motion.div 
        layout
        className={`w-full max-w-[100vw] transition-all duration-700 mx-auto ${
          stage === 2 
            ? "flex overflow-x-auto items-center px-[10vw] gap-6 md:gap-8 py-16 md:py-20 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" 
            : "relative h-[400px] md:h-[450px] flex items-center justify-center mb-8"
        }`}
      >
        <AnimatePresence>
          {achievements.map((item, index) => (
            <motion.div
              layout
              key={item.id}
              layoutId={`card-${item.id}`} // The "Magic" Shared Layout ID
              onClick={() => {
                if (stage === 0) setStage(1);
                else if (stage === 1) setStage(2);
                else setSelectedItem(item); // Stage 2: modal
              }}
              initial={false}
              animate={
                stage === 2 
                  ? { y: index % 2 === 0 ? -25 : 25, rotate: 0, scale: 1 } 
                  : getCardStyle(index, achievements.length)
              }
              whileHover={stage > 0 && !selectedItem ? { 
                y: stage === 2 ? (index % 2 === 0 ? -35 : 15) : -20, 
                scale: stage === 2 ? 1.02 : 0.98,
                borderColor: "#D4AF37", // Glows Champagne Gold on hover
                boxShadow: "0 20px 40px rgba(44, 24, 16, 0.1)",
                zIndex: 100 
              } : {}}
              transition={{ type: "spring", stiffness: 220, damping: 25 }}
              className={`${
                stage === 2 ? "relative flex-shrink-0 snap-center" : "absolute"
              } w-64 h-[350px] md:w-72 md:h-[420px] rounded-[32px] cursor-pointer overflow-hidden border-[1px] border-[#2C1810]/10 bg-[#FDFCF8] shadow-sm flex flex-col group`}
              style={{ zIndex: stage > 0 ? 20 - Math.abs(index - 3) : achievements.length - index }}
            >
              {/* Top Section: Image Area */}
              <div className="h-3/5 w-full overflow-hidden relative grayscale-[30%] group-hover:grayscale-0 transition-all duration-700">
                <img 
                  src={item.image} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt={item.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FDFCF8] via-transparent to-transparent opacity-90" />
              </div>

              {/* Bottom Section: Uniform Typography */}
              <div className="h-2/5 p-5 md:p-6 flex flex-col justify-between items-start bg-[#FDFCF8] z-10">
                <div className="text-left w-full">
                  <span className="text-[9px] tracking-[0.4em] uppercase text-[#8A7B6E] font-bold mb-1 block">
                    {item.type}
                  </span>
                  <h4 className="text-lg md:text-xl font-serif text-[#2C1810] leading-tight mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[#8A7B6E] text-[10px] uppercase font-sans tracking-wide">
                    {item.subtitle}
                  </p>
                </div>
                
                <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-[#2C1810]/40 group-hover:text-[#B68D8D] transition-colors mt-auto">
                  View Details <span>→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* 3. Controls */}
      <AnimatePresence>
        {!selectedItem && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: 20 }}
            className="z-20 mt-4"
          >
            <button 
              onClick={() => {
                if (stage === 0) setStage(1);
                else if (stage === 1) setStage(2);
                else setStage(0);
              }}
              className={`px-10 py-4 rounded-full font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs transition-all duration-300 shadow-xl
                ${stage > 0 
                  ? "bg-transparent border border-[#2C1810] text-[#2C1810] hover:bg-[#2C1810] hover:text-[#FDFCF8]" 
                  : "bg-[#2C1810] text-[#FDFCF8] hover:bg-[#C6A2A1] hover:-translate-y-1 hover:shadow-2xl"
                }
              `}
            >
              {stage === 0 && "Expand Deck"}
              {stage === 1 && "View Gallery"}
              {stage === 2 && "Collapse Deck"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. Full-Screen Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 pointer-events-none">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-[#F9F6F3]/90 backdrop-blur-2xl pointer-events-auto"
            />

            {/* Modal Content */}
            <motion.div 
              layoutId={`card-${selectedItem.id}`} // Matches the card ID for the shared layout zoom effect
              className="relative bg-[#FDFCF8] w-full max-w-5xl h-[85vh] md:h-[75vh] rounded-[2rem] md:rounded-[3rem] shadow-[0_30px_60px_rgba(44,24,16,0.15)] overflow-hidden flex flex-col md:flex-row pointer-events-auto"
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden group p-2 md:p-6">
                <div className="w-full h-full rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden relative">
                  <img 
                    src={selectedItem.image} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                    alt={selectedItem.fullTitle}
                  />
                  <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.1)] pointer-events-none" />
                </div>
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-6 left-6 md:top-10 md:left-10 bg-white/40 backdrop-blur-md p-3 rounded-full text-[#2C1810] hover:bg-[#2C1810] hover:text-white transition-all shadow-lg"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2 h-1/2 md:h-full p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-[#FDFCF8] overflow-y-auto">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <div className="flex items-center gap-4 mb-6 text-[#D4AF37]">
                    <span className="text-[10px] tracking-[0.4em] uppercase text-[#D4AF37] font-black">
                      ⬥ {selectedItem.type} ⬥
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-serif italic text-[#2C1810] mb-6 leading-tight">
                    {selectedItem.fullTitle}
                  </h2>
                  <p className="text-[#2C1810]/70 text-sm md:text-base leading-relaxed mb-10 font-sans max-w-md">
                    {selectedItem.description}
                  </p>
                  
                  <a 
                    href={selectedItem.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-[#2C1810] rounded-full text-[10px] font-black tracking-widest uppercase text-[#2C1810] hover:bg-[#2C1810] hover:text-white transition-all w-fit group"
                  >
                    View Project <FaExternalLinkAlt className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Achievements;