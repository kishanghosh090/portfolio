import React, { useRef } from 'react';
import { GraduationCap, Award, Briefcase, CheckCircle, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/mock';
import { motion, useInView } from 'framer-motion';

const ExperienceCard = ({ exp, index }) => {
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
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <div className="flex items-start space-x-3">
          <div className="bg-white p-2 rounded-lg flex-shrink-0">
            <Briefcase size={18} className="text-black" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-1">{exp.title}</h4>
            <p className="text-gray-400 font-medium text-sm flex items-center gap-1.5">
              <MapPin size={14} />
              {exp.company}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-1.5 text-gray-500 text-xs mt-2 md:mt-0">
          <Calendar size={14} />
          <span>{exp.period}</span>
        </div>
      </div>
      <p className="text-gray-400 mb-3 text-sm">{exp.description}</p>
      <ul className="space-y-2">
        {exp.achievements.map((achievement, achIndex) => (
          <li
            key={achIndex}
            className="flex items-start space-x-2 text-xs text-gray-400"
          >
            <CheckCircle size={14} className="text-white mt-0.5 flex-shrink-0" />
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const EducationCard = ({ edu, index }) => {
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
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <div className="flex items-start space-x-3">
          <div className="bg-white p-2 rounded-lg flex-shrink-0">
            <GraduationCap size={18} className="text-black" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-1">{edu.degree}</h4>
            <p className="text-gray-400 font-medium text-sm flex items-center gap-1.5">
              <MapPin size={14} />
              {edu.institution}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-1.5 text-gray-500 text-xs mt-2 md:mt-0">
          <Calendar size={14} />
          <span>{edu.year}</span>
        </div>
      </div>
      {edu.gpa && (
        <p className="text-gray-400 font-medium mb-3 text-sm">GPA: <span className="text-white">{edu.gpa}</span></p>
      )}
      <ul className="space-y-2">
        {edu.highlights.map((highlight, hlIndex) => (
          <li
            key={hlIndex}
            className="flex items-start space-x-2 text-xs text-gray-400"
          >
            <CheckCircle size={14} className="text-white mt-0.5 flex-shrink-0" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const CertificationCard = ({ cert, index }) => {
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
      <div className="flex items-start space-x-3">
        <div className="bg-white p-2 rounded-lg flex-shrink-0">
          <Award size={18} className="text-black" />
        </div>
        <div>
          <h4 className="text-base font-bold text-white mb-1">{cert.name}</h4>
          <p className="text-gray-400 font-medium mb-1 text-sm">{cert.issuer}</p>
          <div className="flex items-center space-x-1.5 text-gray-500 text-xs">
            <Calendar size={12} />
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
    <section id="education" className="min-h-screen bg-black py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: -10 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Education & Experience
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            Academic background and professional journey
          </p>
        </motion.div>

        {/* Experience Section */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 mb-6">
            <Briefcase size={22} className="text-white" />
            <h3 className="text-xl md:text-2xl font-bold text-white">Experience</h3>
          </div>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 mb-6">
            <GraduationCap size={22} className="text-white" />
            <h3 className="text-xl md:text-2xl font-bold text-white">Education</h3>
          </div>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <EducationCard key={edu.id} edu={edu} index={index} />
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <Award size={22} className="text-white" />
            <h3 className="text-xl md:text-2xl font-bold text-white">Certifications</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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