import React, { useState } from 'react';
import Logo from "../assets/images/logo.svg";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Navbar = () => {
  // State for mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 bg-transparent text-white font-sans">
      <div className="font-bold text-xl">
        <LazyLoadImage
          src={Logo}
          effect="blur"
          placeholderSrc={Logo}
          alt="Logo"
          className="w-24" // Adjust based on logo size
        />
      </div>

      {/* Desktop navigation links */}
      <ul className="hidden md:flex list-none gap-8 rounded-full bg-white/10 px-8 py-4 h-16 items-center">
        <li><a href="#home" className="hover:bg-white/20 py-2 px-4 rounded transition duration-300">Home</a></li>
        <li><a href="#events" className="hover:bg-white/20 py-2 px-4 rounded transition duration-300">Events</a></li>
        <li><a href="#clubs" className="hover:bg-white/20 py-2 px-4 rounded transition duration-300">Clubs</a></li>
        <li><a href="#clans" className="hover:bg-white/20 py-2 px-4 rounded transition duration-300">Clans</a></li>
      </ul>

      {/* Mobile menu toggle */}
      <div className="md:hidden flex items-center">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="text-white">
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-black/70 text-white`}>
        <ul className="flex flex-col items-center py-4">
          <li><a href="#home" className="py-2 px-4">Home</a></li>
          <li><a href="#events" className="py-2 px-4">Events</a></li>
          <li><a href="#clubs" className="py-2 px-4">Clubs</a></li>
          <li><a href="#clans" className="py-2 px-4">Clans</a></li>
        </ul>
      </div>

      {/* Desktop social icons */}
      <div className="hidden md:flex gap-4">
        <a href="#facebook" className="text-lg hover:text-red-500 transition"><i className="fab fa-facebook"></i></a>
        <a href="#instagram" className="text-lg hover:text-red-500 transition"><i className="fab fa-instagram"></i></a>
        <a href="#twitter" className="text-lg hover:text-red-500 transition"><i className="fab fa-twitter"></i></a>
        <a href="#youtube" className="text-lg hover:text-red-500 transition"><i className="fab fa-youtube"></i></a>
      </div>
    </nav>
  );
};

export default Navbar;
