import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Server,
  Globe,
  Wrench,
  Code2,
  Github,
  ExternalLink,
  BookOpen,
  Package,
} from "lucide-react";
import { portfolioData } from "../data/kishandata";
import { fadeUp, staggerContainer, viewport, staggerSlow } from "../lib/motion";

const SkillCard = ({ skillGroup, index }) => {
  const iconMap = {
    "Languages": Code2,
    "Android Frameworks & Libraries": Smartphone,
    "Web Frameworks & Libraries": Globe,
    "Architecture": Server,
    "Tools & Libraries": Wrench,
    "Testing": Server,
    "Other": Wrench,
  };
  const Icon = iconMap[skillGroup.category] || Code2;

  return (
    <motion.div
      variants={fadeUp}
      className="group"
    >
      <div className="relative card-premium rounded-2xl p-5 h-full">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
            <Icon size={16} className="text-white/40" />
          </div>
          <h3 className="text-sm font-semibold text-white/80 tracking-wide">
            {skillGroup.category}
          </h3>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {skillGroup.items.map((skill, skillIndex) => (
            <span
              key={skillIndex}
              className="px-2.5 py-1 rounded-lg text-xs font-medium border border-white/[0.06] bg-white/[0.02] text-white/40 transition-all duration-300 group-hover:bg-white/[0.04] group-hover:border-white/[0.1] group-hover:text-white/60"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  const links = [
    { key: "githubLink", icon: Github, label: "GitHub" },
    { key: "npmLink", icon: Package, label: "NPM" },
    { key: "documentationLink", icon: BookOpen, label: "Docs" },
    { key: "liveLink", icon: ExternalLink, label: "Live Demo" },
  ].filter((link) => project[link.key]);

  return (
    <motion.div
      variants={fadeUp}
      className="group card-premium rounded-2xl p-6 h-full flex flex-col"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
            <Smartphone size={16} className="text-white/40" />
          </div>
          <h4 className="text-base font-bold text-white/90">{project.name}</h4>
        </div>
        {(project.rating && project.rating !== "N/A") && (
          <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06]">
            <span className="text-[10px] font-semibold text-white/30 uppercase tracking-wider">
              {project.status || project.rating}
            </span>
          </div>
        )}
      </div>

      <p className="text-white/35 text-sm leading-relaxed mb-4 flex-grow">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.slice(0, 6).map((tech, techIndex) => (
          <span
            key={techIndex}
            className="px-2 py-0.5 bg-white/[0.02] border border-white/[0.05] text-white/30 rounded-md text-[11px] font-medium"
          >
            {tech}
          </span>
        ))}
        {project.tech.length > 6 && (
          <span className="px-2 py-0.5 text-white/20 text-[11px] font-medium">
            +{project.tech.length - 6}
          </span>
        )}
      </div>

      {links.length > 0 && (
        <div className="flex items-center gap-2 pt-3 border-t border-white/[0.06]">
          {links.map((link, idx) => {
            const LinkIcon = link.icon;
            return (
              <a
                key={idx}
                href={project[link.key]}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-200 text-[11px] font-medium text-white/30 hover:text-white/60"
              >
                <LinkIcon size={12} />
                <span>{link.label}</span>
              </a>
            );
          })}
        </div>
      )}
    </motion.div>
  );
};

const Skills = () => {
  const { skills, projects } = portfolioData;

  return (
    <section id="skills" className="relative py-28 px-4">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} className="mb-5">
            <span className="inline-block px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-white/40 text-xs font-medium tracking-[0.15em] uppercase">
              Expertise
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight"
          >
            Skills & Technologies
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-white/35 text-base max-w-2xl mx-auto font-light"
          >
            Proficient in modern mobile and backend development technologies
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 mb-24"
        >
          {skills.map((skillGroup) => (
            <SkillCard key={skillGroup.id} skillGroup={skillGroup} />
          ))}
        </motion.div>

        <motion.div
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerSlow}
        >
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-black text-white mb-3 tracking-tight">
              Featured Projects
            </h3>
            <p className="text-white/35 text-sm max-w-xl mx-auto font-light">
              Production-grade applications built with modern architectures
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;