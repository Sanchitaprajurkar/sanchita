import React, { useState, useEffect } from "react";
import Hero from "../components/hero/Hero"; 
import AboutSection from "../components/about/JourneyLedger"; 
import Atelier from "../components/skills/Atelier";
import ProjectGallery from "../components/work/ProjectGallery";

import LeadershipSection from "../components/leadership/LeadershipSection";
import AchievementsSection from "../pages/achievements/Achievements";
import CtfCertificationSection from "../components/certifications/CtfCertificationSection";
import Footer from "../components/footer/Footer";

const Home = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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

  return (
    <main className="bg-[#F9F6F3] min-h-screen">
      <Hero mousePos={mousePos} />
      
      <AboutSection mousePos={mousePos} />
      
      <Atelier />

      <ProjectGallery />

      <LeadershipSection />

      <AchievementsSection />

      <CtfCertificationSection />

      <Footer />
    </main>
  );
};

export default Home;