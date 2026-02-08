import React from 'react';
import { Code2, Smartphone, Database, TestTube2, Wrench, Layers, Star, Download } from 'lucide-react';
import { portfolioData } from '../data/mock';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const SkillCard = ({ skillGroup, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className="bg-[#0f0f0f] rounded-2xl p-5 hover:bg-[#1a1a1a] transition-colors duration-200 border border-gray-900 animate-card"
    >
      <div className="flex items-center space-x-3 mb-4">
        <div className="bg-white p-2 rounded-lg">
          <Icon size={20} className="text-black" />
        </div>
        <h3 className="text-base font-semibold text-white">
          {skillGroup.category}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skillGroup.items.map((skill, skillIndex) => (
          <span
            key={skillIndex}
            className="px-3 py-1.5 bg-[#1a1a1a] text-gray-300 rounded-lg text-xs font-medium hover:bg-[#252525] transition-colors duration-150 cursor-pointer border border-gray-800"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className="bg-[#0f0f0f] rounded-2xl p-5 border border-gray-900 hover:border-gray-800 hover:bg-[#1a1a1a] transition-all duration-200 animate-card"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          <div className="bg-white p-1.5 rounded-lg">
            <Smartphone size={16} className="text-black" />
          </div>
          <h4 className="text-lg font-bold text-white">{project.name}</h4>
        </div>
        <div className="flex items-center space-x-1 bg-[#1a1a1a] px-2 py-1 rounded-lg border border-gray-800">
          <Star size={12} className="text-white fill-white" />
          <span className="text-white text-xs font-semibold">{project.rating}</span>
        </div>
      </div>
      
      <p className="text-gray-400 mb-3 text-sm leading-relaxed">{project.description}</p>
      
      <div className="flex flex-wrap gap-1.5 mb-3">
        {project.tech.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="px-2 py-0.5 bg-[#1a1a1a] text-gray-400 rounded text-xs border border-gray-800"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex items-center space-x-2 text-xs text-gray-500">
        <Download size={14} />
        <span className="font-medium">{project.downloads}</span>
        <span>downloads</span>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const { skills, projects } = portfolioData;
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="skills" className="min-h-screen bg-black py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: -10 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Skills & Expertise
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            Proficient in modern Android development technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {skills.map((skillGroup, index) => (
            <SkillCard key={skillGroup.id} skillGroup={skillGroup} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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