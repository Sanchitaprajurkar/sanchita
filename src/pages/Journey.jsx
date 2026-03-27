import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import JourneyLedger from "../components/about/JourneyLedger";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Journey = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Share basic theme for Navbar/Footer consistency
  const theme = {
    bg: "#F9F6F3",
    text: "#2C1810",
    accent: "#b37f8c", 
    subtext: "#8A7B6E"
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Ensure we start at the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[#F9F6F3] min-h-screen">
      <Navbar theme={theme} onToggleAbout={() => {}} />
      
      <div className="pt-32">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <Link 
            to="/" 
            className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold text-[#2C1810]/50 hover:text-[#2C1810] transition-colors mb-20"
          >
            <span className="group-hover:-translate-x-2 transition-transform">←</span>
            Back to Home
          </Link>
        </div>

        <JourneyLedger theme={theme} />
      </div>

      <Footer theme={theme} />
    </main>
  );
};

export default Journey;
