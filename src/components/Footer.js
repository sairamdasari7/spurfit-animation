import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <div className="flex flex-row md:flex-row justify-between items-center">
          <div>
            <p><span className="text-pink-500">DESIGN WORKSHOP</span><span className="text-white"> | Learn to start your own apparel brand | </span><span className="text-purple-600">FEBRUARY 27th</span></p>
          </div>
          <div className="bg-black mt-2 md:mt-0">
            <button className="text-white px-4 py-2 rounded">Check it out</button>
          </div>
          <div className="bg-gray-500 mt-2 md:mt-0">
            <button className="text-white px-4 py-2 rounded">X</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
