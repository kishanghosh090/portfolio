import React from 'react';
import { GraduationCap, Award, Briefcase } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Education = () => {
  const { education, certifications, experience } = portfolioData;

  return (
    <section id="education" className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <GraduationCap size={40} className="text-[#3DDC84]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Education & Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Academic background and professional journey
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 mb-8">
            <Briefcase size={28} className="text-[#3DDC84]" />
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Experience</h3>
          </div>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div
                key={exp.id}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h4>
                    <p className="text-[#3DDC84] font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 text-sm mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-gray-700">
                      <span className="text-[#3DDC84] mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 mb-8">
            <GraduationCap size={28} className="text-[#3DDC84]" />
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Education</h3>
          </div>
          <div className="space-y-6">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{edu.degree}</h4>
                    <p className="text-[#3DDC84] font-semibold">{edu.institution}</p>
                  </div>
                  <span className="text-gray-500 text-sm mt-2 md:mt-0">{edu.year}</span>
                </div>
                {edu.gpa && (
                  <p className="text-gray-700 font-medium mb-3">GPA: {edu.gpa}</p>
                )}
                <ul className="space-y-2">
                  {edu.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-gray-700">
                      <span className="text-[#3DDC84] mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <div className="flex items-center space-x-2 mb-8">
            <Award size={28} className="text-[#3DDC84]" />
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Certifications</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h4>
                <p className="text-[#3DDC84] font-semibold mb-1">{cert.issuer}</p>
                <p className="text-gray-500 text-sm">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
