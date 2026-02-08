import React from 'react';
import { Code2 } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Skills = () => {
  const { skills, projects } = portfolioData;

  return (
    <section id="skills" className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Code2 size={40} className="text-[#3DDC84]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proficient in modern Android development technologies and best practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.id}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-white text-gray-700 rounded-lg text-sm font-medium border border-gray-200 hover:border-[#3DDC84] hover:text-[#3DDC84] transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-bold text-gray-900">{project.name}</h4>
                  <div className="flex items-center space-x-1 bg-[#3DDC84] px-2 py-1 rounded-lg">
                    <span className="text-white text-sm font-semibold">⭐ {project.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-[#3DDC84]/10 text-[#3DDC84] rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="text-sm text-gray-500">
                  <span className="font-semibold">{project.downloads}</span> downloads
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
