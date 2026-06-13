import React from "react";
import {
  Code2,
  Smartphone,
  Database,
  TestTube2,
  Wrench,
  Layers,
  Star,
  Download,
  Github,
  Package,
  BookOpen,
} from "lucide-react";
import { portfolioData } from "../data/kishandata";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "../lib/motion";

const SkillCard = ({ skillGroup }) => {
  const iconMap = {
    Languages: Code2,
    "Android Frameworks": Smartphone,
    Architecture: Layers,
    "Tools & Libraries": Wrench,
    Testing: TestTube2,
    Other: Database,
  };

  const Icon = iconMap[skillGroup.category] || Code2;

  return (
    <motion.div variants={fadeUp} className="card-dark rounded-2xl p-5">
      <div className="flex items-center space-x-3 mb-4">
        <div className="bg-blue-600/90 p-2 rounded-lg">
          <Icon size={20} className="text-white" />
        </div>
        <h3 className="text-base font-semibold text-white">
          {skillGroup.category}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skillGroup.items.map((skill, skillIndex) => (
          <span
            key={skillIndex}
            className="px-3 py-1.5 bg-blue-950/40 text-slate-300 rounded-lg text-xs font-medium hover:bg-blue-900/40 transition-colors duration-200 cursor-default border border-blue-900/30"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <motion.div variants={fadeUp} className="card-dark rounded-2xl p-5">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-600/90 p-1.5 rounded-lg">
            <Smartphone size={16} className="text-white" />
          </div>
          <h4 className="text-lg font-bold text-white">{project.name}</h4>
        </div>
        <div className="flex items-center space-x-1 bg-blue-950/40 px-2 py-1 rounded-lg border border-blue-900/30">
          {project.rating === "npm" ? (
            <>
              <Package size={12} className="text-white" />
              <span className="text-white text-xs font-semibold">NPM</span>
            </>
          ) : (
            <>
              <Star size={12} className="text-white fill-white" />
              <span className="text-white text-xs font-semibold">
                {project.rating}
              </span>
            </>
          )}
        </div>
      </div>

      <p className="text-slate-400 mb-3 text-sm leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {project.tech.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="px-2 py-0.5 bg-blue-950/40 text-slate-400 rounded text-xs border border-blue-900/30"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 text-xs text-slate-500">
          <Download size={14} />
          <span className="font-medium">{project.downloads}</span>
        </div>

        {(project.githubLink ||
          project.npmLink ||
          project.documentationLink) && (
          <div className="flex items-center space-x-2">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-950/40 p-1.5 rounded-lg border border-blue-900/30 hover:bg-blue-900/40 transition-colors duration-200"
                title="View on GitHub"
              >
                <Github size={14} className="text-white" />
              </a>
            )}
            {project.npmLink && (
              <a
                href={project.npmLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-950/40 p-1.5 rounded-lg border border-blue-900/30 hover:bg-blue-900/40 transition-colors duration-200"
                title="View on NPM"
              >
                <Package size={14} className="text-white" />
              </a>
            )}
            {project.documentationLink && (
              <a
                href={project.documentationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-950/40 p-1.5 rounded-lg border border-blue-900/30 hover:bg-blue-900/40 transition-colors duration-200"
                title="View Documentation"
              >
                <BookOpen size={14} className="text-white" />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const { skills, projects } = portfolioData;

  return (
    <section id="skills" className="min-h-screen section-dark py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Skills & Expertise
          </h2>
          <p className="text-base text-slate-500 max-w-2xl mx-auto">
            Proficient in modern Android development technologies
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16"
        >
          {skills.map((skillGroup) => (
            <SkillCard key={skillGroup.id} skillGroup={skillGroup} />
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
          className="mt-12"
        >
          <motion.h3
            variants={fadeUp}
            className="text-2xl font-bold text-white mb-6 text-center"
          >
            Featured Projects
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
