import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode, FaDownload } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-secondary/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <span className="text-brand-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Welcome to my portfolio</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <br />
            <span className="heading-gradient">Aman Kumar Singh</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
            I am a Computer Science student and full-stack developer specializing in building scalable backend services and robust web applications using the MERN stack.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12">
            <a href="#projects" className="btn-primary flex items-center justify-center gap-2">
              View Projects
            </a>
            <a href="/resume.pdf" download className="btn-outline flex items-center justify-center gap-2 group">
              <FaDownload className="group-hover:-translate-y-1 transition-transform" /> Download Resume
            </a>
          </div>
          <div className="flex gap-6 justify-center md:justify-start">
            <a href="https://github.com/softways1" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
              <FaGithub size={28} />
            </a>
            <a href="https://www.linkedin.com/in/amankrrsingh" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0077b5] transition-colors transform hover:scale-110">
              <FaLinkedin size={28} />
            </a>
            <a href="https://leetcode.com/u/freestyler_1/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#ffa116] transition-colors transform hover:scale-110">
              <FaCode size={28} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-primary to-brand-secondary p-1 hover:scale-105 transition-transform duration-500">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-dark-bg bg-dark-surface">
                <img 
                  src="/myimage.png" 
                  alt="Aman Kumar Singh" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
