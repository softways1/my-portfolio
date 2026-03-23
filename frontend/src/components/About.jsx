import React from 'react';
import { motion } from 'framer-motion';
import { FaNodeJs, FaJs, FaJava, FaDocker, FaGitAlt, FaGithub, FaLaptopCode } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTypescript, SiMysql } from 'react-icons/si';

const About = () => {
  const skills = [
    { name: 'Core Java', icon: <FaJava className="text-red-500" size={40} /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" size={40} /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" size={40} /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" size={40} /> },
    { name: 'Express', icon: <SiExpress className="text-gray-300" size={40} /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-400" size={40} /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-400" size={40} /> },
    { name: 'DSA', icon: <FaLaptopCode className="text-purple-400" size={40} /> },
    { name: 'Git', icon: <FaGitAlt className="text-orange-500" size={40} /> },
    { name: 'GitHub', icon: <FaGithub className="text-white" size={40} /> },
    { name: 'Docker', icon: <FaDocker className="text-blue-500" size={40} /> }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16 mt-8" id="about">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Skill <span className="text-brand-primary">Set</span></h2>
            <div className="w-20 h-1 bg-brand-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5, scale: 1.05 }}
                className="glass-card flex flex-col items-center justify-center p-6 text-center w-36 md:w-44"
              >
                {skill.icon}
                <span className="mt-4 text-sm font-medium text-gray-300">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
