import React, { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import herosectionimage from "../assets/herosectionimage.png";

const HeroSection = () => {
  const texts = ['500+ PROJECTS', 'EXPERT TEAM', 'FORTUNE 500 CLIENTS'];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); 

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [texts]); // Include texts as a dependency to avoid stale closures

  return (
    <div
      className="relative h-[70vh] bg-cover bg-center z-0"
      style={{ backgroundImage: `url(${herosectionimage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-around items-center text-white">
        <h1 className="text-6xl font-bold mb-4">Why Coding Biceps?</h1>
        <div className="bg-richblue-100 px-4 py-2 rounded-full text-lg font-semibold">
          {texts[currentTextIndex]}
        </div>
        <div className="absolute bottom-10 animate-bounce">
          <FaChevronDown size={30} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
