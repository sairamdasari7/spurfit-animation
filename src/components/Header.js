// Header.js
import React from "react";

const Header = () => {
  return (
    <header className="bg-purple-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Spur Fit</h1>
        <nav>
          <a href="#" className="text-gray-300 hover:text-white px-4">
            Emotions
          </a>
          <a href="#" className="text-gray-300 hover:text-white px-4">
            Manifesto
          </a>
          <a href="#" className="text-gray-300 hover:text-white px-4">
            Self-improvement test
          </a>
          <a href="#" className="text-gray-300 hover:text-white px-4">
            Work With Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
