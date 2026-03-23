import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-dark-border py-8 text-center text-gray-500 text-sm">
      <div className="max-w-7xl mx-auto px-6">
        <p>&copy; {new Date().getFullYear()} Aman Kumar Singh. All Rights Reserved.</p>
        <p className="mt-2 text-xs">Built with modern MERN stack features and Framer Motion.</p>
      </div>
    </footer>
  );
};

export default Footer;
