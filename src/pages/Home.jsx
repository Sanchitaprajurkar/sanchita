import React, { useState, useEffect } from "react";
import Hero from "../components/Hero/Hero"; // Adjust path to your Hero file
import AboutSection from "../components/about/AboutSection"; 
import profilePic from "../assets/hero/profile-pic.jpg"; // Centralize the image import

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
    <main>
      <Hero mousePos={mousePos} />
      
      {/* CRITICAL: Pass the props here. 
         If AboutSection.jsx is in src/components/about/ 
      */}
      <AboutSection mousePos={mousePos} profilePic={profilePic} />
      
      {/* Other sections like Work, Contact, etc. */}
    </main>
  );
};

export default Home;