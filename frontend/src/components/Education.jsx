import React from "react";
import {
  GraduationCap,
  Award,
  Briefcase,
  CheckCircle,
  Calendar,
  MapPin,
} from "lucide-react";
import { portfolioData } from "../data/kishandata";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "../lib/motion";

const ExperienceCard = ({ exp }) => {
  return (
    <motion.div variants={fadeUp} className="card-dark rounded-2xl p-5">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <div className="flex items-start space-x-3">
          <div className="bg-blue-600/90 p-2 rounded-lg flex-shrink-0">
            <Briefcase size={18} className="text-white" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-1">{exp.title}</h4>
            <p className="text-slate-400 font-medium text-sm flex items-center gap-1.5">
              <MapPin size={14} />
              {exp.company}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-1.5 text-slate-500 text-xs mt-2 md:mt-0">
          <Calendar size={14} />
          <span>{exp.period}</span>
        </div>
      </div>
      <p className="text-slate-400 mb-3 text-sm">{exp.description}</p>
      <ul className="space-y-2">
        {exp.achievements.map((achievement, achIndex) => (
          <li
            key={achIndex}
            className="flex items-start space-x-2 text-xs text-slate-400"
          >
            <CheckCircle
              size={14}
              className="text-blue-400 mt-0.5 flex-shrink-0"
            />
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const EducationCard = ({ edu }) => {
  return (
    <motion.div variants={fadeUp} className="card-dark rounded-2xl p-5">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <div className="flex items-start space-x-3">
          <div className="bg-blue-600/90 p-2 rounded-lg flex-shrink-0">
            <GraduationCap size={18} className="text-white" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-1">{edu.degree}</h4>
            <p className="text-slate-400 font-medium text-sm flex items-center gap-1.5">
              <MapPin size={14} />
              {edu.institution}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-1.5 text-slate-500 text-xs mt-2 md:mt-0">
          <Calendar size={14} />
          <span>{edu.year}</span>
        </div>
      </div>
      {edu.gpa && (
        <p className="text-slate-400 font-medium mb-3 text-sm">
          GPA: <span className="text-white">{edu.gpa}</span>
        </p>
      )}
      <ul className="space-y-2">
        {edu.highlights.map((highlight, hlIndex) => (
          <li
            key={hlIndex}
            className="flex items-start space-x-2 text-xs text-slate-400"
          >
            <CheckCircle
              size={14}
              className="text-blue-400 mt-0.5 flex-shrink-0"
            />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const CertificationCard = ({ cert }) => {
  return (
    <motion.div variants={fadeUp} className="card-dark rounded-2xl p-5">
      <div className="flex items-start space-x-3">
        <div className="bg-blue-600/90 p-2 rounded-lg flex-shrink-0">
          <Award size={18} className="text-white" />
        </div>
        <div>
          <h4 className="text-base font-bold text-white mb-1">{cert.name}</h4>
          <p className="text-slate-400 font-medium mb-1 text-sm">
            {cert.issuer}
          </p>
          <div className="flex items-center space-x-1.5 text-slate-500 text-xs">
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

  return (
    <section id="education" className="min-h-screen section-dark py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Education & Experience
          </h2>
          <p className="text-base text-slate-500 max-w-2xl mx-auto">
            Academic background and professional journey
          </p>
        </motion.div>

        <div className="mb-12">
          <div className="flex items-center space-x-2 mb-6">
            <Briefcase size={22} className="text-blue-400" />
            <h3 className="text-xl md:text-2xl font-bold text-white">
              Experience
            </h3>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="space-y-4"
          >
            {experience.map((exp) => (
              <ExperienceCard key={exp.id} exp={exp} />
            ))}
          </motion.div>
        </div>

        <div className="mb-12">
          <div className="flex items-center space-x-2 mb-6">
            <GraduationCap size={22} className="text-blue-400" />
            <h3 className="text-xl md:text-2xl font-bold text-white">
              Education
            </h3>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="space-y-4"
          >
            {education.map((edu) => (
              <EducationCard key={edu.id} edu={edu} />
            ))}
          </motion.div>
        </div>

        <div>
          <div className="flex items-center space-x-2 mb-6">
            <Award size={22} className="text-blue-400" />
            <h3 className="text-xl md:text-2xl font-bold text-white">
              Certifications
            </h3>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {certifications.map((cert) => (
              <CertificationCard key={cert.id} cert={cert} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
