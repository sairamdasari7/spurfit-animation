import React, { useEffect } from 'react';
import { gsap } from 'gsap';

import './index.css';

const MainContent = () => {
  useEffect(() => {
  
    gsap.from(".main-content-item", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out"
    });
  }, []);

  return (
    <div className="main-content-container">
      <div className="main-content">
        <h2 className="text-xl font-semibold mb-2 main-content-item">Welcome to Spur Fit!</h2>
        <p className="text-gray-700 main-content-item">
          Whether you're a seasoned athlete or just starting your fitness journey, we've got you covered. Explore our workout plans, nutrition tips, and community support.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600 main-content-item">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default MainContent;