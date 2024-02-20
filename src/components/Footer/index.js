import React, { useEffect } from 'react';
import { gsap } from 'gsap';

import './index.css';

const Footer = () => {
  useEffect(() => {
    gsap.from(".footer-item", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out"
    });
  }, []);

  return (
    <footer className="footer">
      <div className="container mx-auto text-center">
        <p className="text-sm footer-item">
          © 2024 Spur Fit. All rights reserved.
        </p>
        <div className="mt-2">
          <a href="/privacy-policy" className="text-gray-400 hover:text-white mr-4 footer-item">
            Privacy Policy
          </a>
          <a href="/terms-of-use" className="text-gray-400 hover:text-white footer-item">
            Terms of Use
          </a>
        </div>
        <div className="mt-4 footer-item">
          <a href="mailto:info@spurfit.com" className="text-gray-400 hover:text-white footer-item">
            info@spurfit.com
          </a>
        </div>
        <div className="mt-4 footer-item social-icons">
          <a href="https://twitter.com/spurfit" className="text-gray-400 hover:text-white mr-2">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://facebook.com/spurfit" className="text-gray-400 hover:text-white mr-2">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://instagram.com/spurfit" className="text-gray-400 hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="footer-item">
          <h4 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h4>
          <form className="flex justify-center items-center subscribe-form footer-item">
            <input type="email" placeholder="Enter your email" className="bg-gray-800 text-white px-4 py-2 rounded mr-2" />
            <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;