import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
title: 'Scalable Movie Booking & Ticketing Backend',
points: [
'Architected a high-concurrency backend system for movie discovery, theater management, and seat reservations.',
'Implemented a robust booking engine with transaction management to handle simultaneous seat selections and prevent double-booking.',
'Developed comprehensive CRUD services for Movies, Cinemas, and Shows with complex relational mapping.',
'Built a secure User and Auth module featuring role-based access control (RBAC) for Customers and Admins.',
'Integrated automated mailing services for booking confirmations and ticket delivery.',
'Designed a modular and extensible codebase following clean architecture principles for easy feature scaling.',
'Deployed the service as a production-ready system suitable for real-world full-stack portfolios.'
],
tech: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'Nodemailer', 'JavaScript'],
githubUrl: '#'
},
    {
      title: 'OIDC-Compatible Authentication Microservice',
      points: [
        'Designed and developed a standards-compliant authentication service implementing OAuth 2.0 and OIDC.',
        'Built secure user authentication and identity management workflows (signup, login, session handling).',
        'Implemented JWT-based auth system with refresh tokens and JWKS for key rotation.',
        'Developed secure Authorization Code + PKCE flows for public clients.',
        'Applied security hardening (token validation, secure storage, replay protection).',
        'Integrated observability using OpenTelemetry for logging, tracing, and monitoring.',
        'Containerized and deployed using Docker in a production-ready setup.'
      ],
      tech: ['Node.js', 'TypeScript', 'OAuth 2.0', 'OIDC', 'JWT', 'Docker', 'OpenTelemetry'],
      githubUrl: '#'
    },
    {
      title: 'Advanced Authorization System (Zanzibar-Inspired)',
      points: [
        'Built a fine-grained authorization engine inspired by Zanzibar (Google).',
        'Designed relationship-based access control (ReBAC) using tuple-based models.',
        'Implemented recursive graph traversal for real-time permission resolution.',
        'Optimized performance with caching strategies and efficient policy evaluation.',
        'Ensured scalability for high-throughput authorization checks across services.',
        'Integrated seamlessly with microservices and API layers.'
      ],
      tech: ['Node.js', 'TypeScript', 'Graph Traversal', 'Redis', 'Microservices'],
      githubUrl: '#'
    },
    {
      title: 'Scalable Backend APIs – Form Builder SaaS',
      points: [
        'Developed a scalable backend system for a dynamic form builder SaaS platform.',
        'Implemented schema-driven validation using Zod for flexible form creation.',
        'Built end-to-end type-safe APIs using tRPC.',
        'Designed efficient MongoDB schemas for large-scale form responses.',
        'Engineered high-throughput ingestion pipelines for real-time submissions.',
        'Managed project using monorepo architecture (Turborepo).',
        'Added authentication, authorization, and rate limiting for API security.',
        'Generated interactive API documentation using OpenAPI/Scalar.'
      ],
      tech: ['Node.js', 'TypeScript', 'tRPC', 'Zod', 'MongoDB', 'Turborepo', 'OpenAPI'],
      githubUrl: '#'
    },
    {
      title: 'Airbnb Clone (Full Stack Application)',
      points: [
        'Built a full-stack rental platform with user authentication and property listing features.',
        'Implemented CRUD operations, booking flows, and search/filter functionality.',
        'Designed responsive UI and integrated with backend services.',
        'Developed secure JWT-based authentication system.'
      ],
      tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'JWT', 'REST APIs'],
      githubUrl: '#'
    },
    {
      title: 'Zerodha Clone (MERN Stack Trading Platform)',
      points: [
        'Developed a stock trading platform with portfolio tracking and order management.',
        'Built RESTful APIs for trading operations and user account management.',
        'Implemented real-time data handling and dashboard features.',
        'Deployed scalable backend infrastructure on AWS.'
      ],
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'AWS'],
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-dark-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-brand-secondary">Projects</span></h2>
          <div className="w-20 h-1 bg-brand-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-8 rounded-2xl flex flex-col h-full hover:border-brand-secondary/50 transition-colors"
            >
              <h3 className="text-2xl font-bold text-white mb-6">{project.title}</h3>
              
              <ul className="list-disc list-outside ml-5 text-gray-400 text-sm md:text-base leading-relaxed flex-grow mb-8 space-y-2">
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              
              <div className="mb-6">
                <h4 className="text-white text-sm font-semibold mb-3 tracking-wider uppercase">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-semibold px-3 py-1.5 bg-white/10 rounded-lg text-brand-secondary border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
