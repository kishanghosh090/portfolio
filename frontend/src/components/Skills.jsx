import React from 'react';
import { Code2, Smartphone, Database, TestTube2, Wrench, Layers, Star, Download, TrendingUp } from 'lucide-react';
import { portfolioData } from '../data/mock';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const SkillCard = ({ skillGroup, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const iconMap = {
    'Languages': Code2,
    'Android Frameworks': Smartphone,
    'Architecture': Layers,
    'Tools & Libraries': Wrench,
    'Testing': TestTube2,
    'Other': Database
  };

  const Icon = iconMap[skillGroup.category] || Code2;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 hover:shadow-2xl transition-all duration-300 border border-purple-500/30 hover:border-purple-500/60 glow-purple group"
    >
      <div className="flex items-center space-x-3 mb-4">
        <div className="bg-gradient-to-br from-purple-600 to-purple-500 p-3 rounded-lg glow-purple">
          <Icon size={24} className="text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
          {skillGroup.category}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skillGroup.items.map((skill, skillIndex) => (
          <motion.span
            key={skillIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="px-3 py-1.5 bg-purple-500/10 text-purple-300 rounded-lg text-sm font-medium border border-purple-500/30 hover:border-purple-400 hover:bg-purple-500/20 transition-all duration-200 cursor-pointer"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-xl p-6 border border-purple-500/30 hover:border-purple-500/60 hover:shadow-2xl transition-all duration-300 glow-purple"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-br from-purple-600 to-purple-500 p-2 rounded-lg">
            <Smartphone size={20} className="text-white" />
          </div>
          <h4 className="text-xl font-bold text-white">{project.name}</h4>
        </div>
        <div className="flex items-center space-x-1 bg-gradient-to-r from-purple-600 to-purple-500 px-3 py-1 rounded-lg glow-purple">
          <Star size={14} className="text-white fill-white" />
          <span className="text-white text-sm font-semibold">{project.rating}</span>
        </div>
      </div>
      
      <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs font-medium border border-purple-500/40"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center space-x-2 text-gray-400">
          <Download size={16} className="text-purple-400" />
          <span className="font-semibold text-purple-400">{project.downloads}</span>
          <span>downloads</span>
        </div>
        <div className="flex items-center space-x-1 text-green-400">
          <TrendingUp size={16} />
          <span className="text-xs">Trending</span>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const { skills, projects } = portfolioData;
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="skills" className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: -30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            >
              <Code2 size={40} className="text-purple-500" />
            </motion.div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Proficient in modern Android development technologies and best practices
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skills.map((skillGroup, index) => (
            <SkillCard key={skillGroup.id} skillGroup={skillGroup} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-8">
            <Star size={28} className="text-purple-500" />
            <h3 className="text-3xl font-bold gradient-text text-center">
              Featured Projects
            </h3>
            <Star size={28} className="text-purple-500" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
