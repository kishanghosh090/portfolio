import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { portfolioData } from '../data/mock';
import { motion } from 'framer-motion';

const Hero = () => {
  const { personal } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl w-full text-center"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <div className="w-24 h-24 mx-auto mb-6 bg-white rounded-full flex items-center justify-center">
            <span className="text-3xl font-bold text-black">AC</span>
          </div>
        </motion.div>
        
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl font-bold text-white mb-3"
        >
          {personal.name}
        </motion.h1>
        
        <motion.h2
          variants={itemVariants}
          className="text-xl md:text-2xl font-medium text-gray-400 mb-6"
        >
          {personal.title}
        </motion.h2>
        
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-gray-500 max-w-xl mx-auto mb-8"
        >
          {personal.tagline}
        </motion.p>
        
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-3 mb-6"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-5 py-2.5 bg-white text-black rounded-full hover:bg-gray-200 transition-all duration-300 text-sm font-medium"
          >
            <Github size={18} />
            <span>GitHub</span>
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-5 py-2.5 bg-[#1a1a1a] text-white rounded-full hover:bg-[#2a2a2a] transition-all duration-300 text-sm font-medium border border-gray-800"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </motion.a>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-5 py-2.5 bg-transparent text-white border border-gray-700 rounded-full hover:bg-[#1a1a1a] transition-all duration-300 text-sm font-medium"
          >
            <Download size={18} />
            <span>Resume</span>
          </motion.button>
        </motion.div>
        
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center space-x-2 text-gray-500 text-sm"
        >
          <Mail size={16} />
          <span>{personal.email}</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;