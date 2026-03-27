import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaAward } from 'react-icons/fa';

const Certificates = () => {
  const certificates = [
    {
      title: 'Full Stack MERN Web Development',
      issuer: 'Udemy',
      date: 'Obtained',
      description: 'Comprehensive certification covering front-to-back development using MongoDB, Express, React, and Node.js. Demonstrated ability to build, scale, and deploy robust web applications with modern architecture.',
      link: 'https://www.udemy.com/certificate/UC-6695b7df-c23f-4785-8cbd-23c5d7400fa0/',
    },
    {
      title: 'Programming In Java',
      issuer: 'Udemy',
      date: 'Obtained',
      description: 'Extensive coursework focusing on core Java programming principles, Object-Oriented design, multithreading, and advanced software development techniques.',
      link: 'https://www.udemy.com/certificate/UC-2792bbfe-d277-46b5-85c8-415ef717ea01/',
    },
    {
      title: 'Data Structures and Algorithms',
      issuer: 'PW Skills',
      date: 'Obtained',
      description: 'Rigorous training in core computer science fundamentals, including complex data structures, algorithmic optimization, and competitive problem-solving techniques.',
      link: 'https://pwskills.com/learn/certificate/8dd0c28c-0e4e-434c-882f-a652876e3dfd/',
    },
    {
      title: 'Advance Data Structure and Algorithm Training',
      issuer: 'Lovely Professional University (LPU)',
      date: 'Aug 20, 2025',
      description: 'Advanced institutional certification verifying deep technical proficiency in complex data structures, algorithmic design, and rigorous problem-solving at scale.',
      link: 'https://files.lpu.in/umsweb/skilldevcourse/SkillDevelopmentCertificates/12301704_887_20_08_2025.pdf?_gl=1*fa2qle*_gcl_au*MjAyMTM3NDMxMC4xNzcyMzAwNjU5LjU2NTA4NTE5MS4xNzcyODYyMDM2LjE3NzI4NjIwMzU.',
    }
  ];

  return (
    <section id="certificates" className="py-20 relative bg-dark-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My <span className="heading-gradient text-transparent bg-clip-text">Certifications</span></h2>
          <div className="w-20 h-1 bg-brand-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-8 rounded-2xl flex flex-col justify-between hover:border-brand-primary/50 transition-all group"
            >
              <div>
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary border border-brand-primary/20 group-hover:scale-110 transition-transform">
                     <FaAward size={28} />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400">
                    {cert.issuer}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{cert.title}</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>
              
              <a href={cert.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-white transition-colors mt-auto w-max group-hover:translate-x-2">
                Verify Credential <FaExternalLinkAlt size={12} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
