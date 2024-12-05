import React, { useState, useEffect } from 'react';
import Logo from "../assets/images/logo.svg";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

  // Check scroll position to apply glassmorphism effect
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`flex justify-between items-center px-8 py-4 font-sans
        ${isScrolled ? 'bg-white/20 backdrop-blur-md' : 'bg-transparent'} 
        text-white sticky top-0 z-50 transition-all duration-300`}
    >
      <div className="font-bold text-xl">
        <LazyLoadImage
          src={Logo}
          effect="blur"
          placeholderSrc={Logo}
          alt="Logo"
          className="w-28" // Adjust based on logo size
        />
      </div>

      {/* Desktop navigation links */}
      <ul className="hidden md:flex list-none gap-8 bg-transparent px-8 py-4 h-16 items-center rounded-full">
        <li><a href="/" className="text-xl hover:bg-white/20 py-2 px-4 rounded transition">Home</a></li>
        <li><a href="/#events" className="text-xl hover:bg-white/20 py-2 px-4 rounded transition">Events</a></li>
        <li><a href="/#clubs" className="text-xl hover:bg-white/20 py-2 px-4 rounded transition">Clubs</a></li>
        <li><a href="/#clans" className="text-xl hover:bg-white/20 py-2 px-4 rounded transition">Clans</a></li>
      </ul>

      {/* Mobile menu toggle */}
      <button 
        onClick={toggleMobileMenu} 
        className="md:hidden text-white focus:outline-none">
        <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`} />
      </button>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-black/70 text-white`}>
        <ul className="flex flex-col items-center py-4">
          <li><a href="/" className="py-2 px-4">Home</a></li>
          <li><a href="/#events" className="py-2 px-4">Events</a></li>
          <li><a href="/#clubs" className="py-2 px-4">Clubs</a></li>
          <li><a href="/#clans" className="py-2 px-4">Clans</a></li>
        </ul>
      </div>

      {/* Desktop social icons */}
      <div className="hidden md:flex gap-4">
        {['facebook', 'instagram', 'twitter', 'youtube'].map(platform => (
          <a 
            key={platform}
            href={`#${platform}`}
            className="text-2xl hover:text-red-500 transition">
            <i className={`fab fa-${platform}`} />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;