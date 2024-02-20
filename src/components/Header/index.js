// Header.js
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

import './index.css';

const Header = () => {
  useEffect(() => {
 
    gsap.from(".header-item", {
      opacity: 0,
      y: -50,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out"
    });
  }, []);

  return (
    <header className="header">
      <h1 className="text-2xl font-bold header-item">Spur Fit</h1>
      <p className="text-sm header-item">Your Fitness Journey Starts Here</p>
    </header>
  );
};

export default Header;