import React, { useRef } from 'react';
import { GraduationCap, Award, Briefcase, CheckCircle, Calendar, MapPin, Trophy } from 'lucide-react';
import { portfolioData } from '../data/mock';
import { motion, useInView } from 'framer-motion';

const ExperienceCard = ({ exp, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-purple-500/30 hover:border-purple-500/60 hover:shadow-2xl transition-all duration-300 glow-purple"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <div className="flex items-start space-x-4">
          <div className="bg-gradient-to-br from-purple-600 to-purple-500 p-3 rounded-lg glow-purple flex-shrink-0">
            <Briefcase size={24} className="text-white" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-white mb-1">{exp.title}</h4>
            <p className="text-purple-400 font-semibold flex items-center gap-2">
              <MapPin size={16} />
              {exp.company}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-gray-400 text-sm mt-2 md:mt-0">
          <Calendar size={16} className="text-purple-400" />
          <span>{exp.period}</span>
        </div>
      </div>
      <p className="text-gray-300 mb-4">{exp.description}</p>
      <ul className="space-y-2">
        {exp.achievements.map((achievement, achIndex) => (
          <motion.li
            key={achIndex}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.4, delay: index * 0.1 + achIndex * 0.1 }}
            className="flex items-start space-x-2 text-sm text-gray-300"
          >
            <CheckCircle size={16} className="text-purple-400 mt-0.5 flex-shrink-0" />
            <span>{achievement}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

const EducationCard = ({ edu, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-xl p-6 border border-purple-500/30 hover:border-purple-500/60 hover:shadow-2xl transition-all duration-300 glow-purple"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <div className="flex items-start space-x-4">
          <div className="bg-gradient-to-br from-purple-600 to-purple-500 p-3 rounded-lg glow-purple flex-shrink-0">
            <GraduationCap size={24} className="text-white" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
            <p className="text-purple-400 font-semibold flex items-center gap-2">
              <MapPin size={16} />
              {edu.institution}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-gray-400 text-sm mt-2 md:mt-0">
          <Calendar size={16} className="text-purple-400" />
          <span>{edu.year}</span>
        </div>
      </div>
      {edu.gpa && (
        <div className="flex items-center space-x-2 mb-3">
          <Trophy size={18} className="text-purple-400" />
          <p className="text-gray-300 font-medium">GPA: <span className="text-purple-400">{edu.gpa}</span></p>
        </div>
      )}
      <ul className="space-y-2">
        {edu.highlights.map((highlight, hlIndex) => (
          <motion.li
            key={hlIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.4, delay: index * 0.1 + hlIndex * 0.1 }}
            className="flex items-start space-x-2 text-sm text-gray-300"
          >
            <CheckCircle size={16} className="text-purple-400 mt-0.5 flex-shrink-0" />
            <span>{highlight}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

const CertificationCard = ({ cert, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, rotate: 1 }}
      className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-purple-500/30 hover:border-purple-500/60 hover:shadow-2xl transition-all duration-300 glow-purple"
    >
      <div className="flex items-start space-x-4">
        <div className="bg-gradient-to-br from-purple-600 to-purple-500 p-3 rounded-lg glow-purple flex-shrink-0">
          <Award size={24} className="text-white" />
        </div>
        <div>
          <h4 className="text-lg font-bold text-white mb-2">{cert.name}</h4>
          <p className="text-purple-400 font-semibold mb-1">{cert.issuer}</p>
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <Calendar size={14} className="text-purple-400" />
            <p>{cert.year}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Education = () => {
  const { education, certifications, experience } = portfolioData;
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="education" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900/10 py-20 px-4">
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
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <GraduationCap size={40} className="text-purple-500" />
            </motion.div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Education & Experience
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Academic background and professional journey
          </p>
        </motion.div>

        {/* Experience Section */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <Briefcase size={28} className="text-purple-500" />
            <h3 className="text-2xl md:text-3xl font-bold gradient-text">Experience</h3>
          </div>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <GraduationCap size={28} className="text-purple-500" />
            <h3 className="text-2xl md:text-3xl font-bold gradient-text">Education</h3>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <EducationCard key={edu.id} edu={edu} index={index} />
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <div className="flex items-center space-x-3 mb-8">
            <Award size={28} className="text-purple-500" />
            <h3 className="text-2xl md:text-3xl font-bold gradient-text">Certifications</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard key={cert.id} cert={cert} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
