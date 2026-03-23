import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl font-bold heading-gradient">&lt;Portfolio /&gt;</span>
        </a>
        <div className="hidden md:flex gap-8 items-center text-sm font-medium tracking-wide">
          <a href="#about" className="hover:text-brand-primary transition-colors">Skill Set</a>
          <a href="#projects" className="hover:text-brand-primary transition-colors">Projects</a>
          <a href="#certificates" className="hover:text-brand-primary transition-colors">Certificates</a>
          <a href="#contact" className="hover:text-brand-primary transition-colors">Contact</a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
