import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      const response = await fetch(`${BASE_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 rounded-full mix-blend-screen filter blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In <span className="heading-gradient text-transparent bg-clip-text">Touch</span></h2>
          <div className="w-20 h-1 bg-brand-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-8"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Let's build something amazing together!</h3>
            <p className="text-gray-400">Feel free to reach out for a coffee chat or if you have a great project in mind. I am currently open to new opportunities.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-dark-surface rounded-full flex items-center justify-center text-brand-primary border border-white/5">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Email</p>
                  <p className="text-white font-medium">aman.singh@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-dark-surface rounded-full flex items-center justify-center text-brand-secondary border border-white/5">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Location</p>
                  <p className="text-white font-medium">India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl space-y-6 border border-white/10">
              <div>
                <label flexhtmlfor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label flexhtmlfor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label flexhtmlfor="message" className="block text-sm font-medium text-gray-400 mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  rows="4" 
                  className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors resize-none"
                  placeholder="Hello Aman, I would like to discuss..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && <p className="text-green-400 text-center text-sm mt-4">Message sent successfully!</p>}
              {status === 'error' && <p className="text-red-400 text-center text-sm mt-4">Failed to send message. Make sure the backend limit isn't reached.</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
