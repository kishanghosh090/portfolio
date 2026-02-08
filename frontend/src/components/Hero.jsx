import React from 'react';
import { Github, Linkedin, Mail, Download, Sparkles, Code2, Cpu } from 'lucide-react';
import { portfolioData } from '../data/mock';
import { motion } from 'framer-motion';

const Hero = () => {
  const { personal } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900/20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full text-center relative z-10"
      >
        {/* Avatar with floating icons */}
        <motion.div variants={itemVariants} className="mb-8 relative">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400 rounded-full flex items-center justify-center shadow-2xl glow-purple-lg relative"
          >
            <span className="text-5xl font-bold text-white">AC</span>
          </motion.div>
          
          {/* Floating icons around avatar */}
          <motion.div
            animate={floatingAnimation}
            className="absolute top-0 left-1/2 -ml-40 text-purple-400"
          >
            <Code2 size={32} />
          </motion.div>
          <motion.div
            animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
            className="absolute top-0 right-1/2 -mr-40 text-purple-400"
          >
            <Cpu size={32} />
          </motion.div>
        </motion.div>
        
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-white mb-4"
        >
          {personal.name}
        </motion.h1>
        
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl md:text-3xl font-semibold gradient-text mb-6 flex items-center justify-center gap-2">
            <Sparkles size={28} className="text-purple-400" />
            {personal.title}
            <Sparkles size={28} className="text-purple-400" />
          </h2>
        </motion.div>
        
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8"
        >
          {personal.tagline}
        </motion.p>
        
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 mb-8"
        >
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 shadow-lg border border-purple-500/30"
          >
            <Github size={20} />
            <span>GitHub</span>
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-lg hover:from-purple-500 hover:to-purple-400 transition-all duration-300 shadow-lg glow-purple"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </motion.a>
          
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-6 py-3 bg-transparent text-purple-400 border-2 border-purple-500 rounded-lg hover:bg-purple-500/10 transition-all duration-300 shadow-lg"
          >
            <Download size={20} />
            <span>Resume</span>
          </motion.button>
        </motion.div>
        
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center space-x-2 text-gray-400"
        >
          <Mail size={18} className="text-purple-400" />
          <span className="text-sm">{personal.email}</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;