import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Hero = () => {
  const { personal } = portfolioData;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <div className="max-w-4xl w-full text-center">
        <div className="mb-6">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-[#3DDC84] to-[#2BB968] rounded-full flex items-center justify-center shadow-xl">
            <span className="text-5xl font-bold text-white">AC</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
          {personal.name}
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold text-[#3DDC84] mb-6">
          {personal.title}
        </h2>
        
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          {personal.tagline}
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3 bg-[#0077B5] text-white rounded-lg hover:bg-[#006399] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          
          <button className="flex items-center space-x-2 px-6 py-3 bg-white text-gray-900 border-2 border-gray-300 rounded-lg hover:border-[#3DDC84] hover:text-[#3DDC84] transition-all duration-300 shadow-md hover:shadow-lg">
            <Download size={20} />
            <span>Resume</span>
          </button>
        </div>
        
        <div className="flex items-center justify-center space-x-6 text-gray-600">
          <div className="flex items-center space-x-2">
            <Mail size={18} />
            <span className="text-sm">{personal.email}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
