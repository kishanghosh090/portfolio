import React, { useState } from "react";
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
  X,
  ChevronRight,
} from "lucide-react";
import { portfolioData } from "../data/kishandata";
import { fadeUp, staggerContainer, viewport, staggerSlow } from "../lib/motion";
import { Sheet, SheetContent, SheetClose } from "./ui/sheet";

const SkillCard = ({ skillGroup }) => {
  const iconMap = {
    "Mobile Development": Smartphone,
    "Backend Development": Server,
    "Frontend Development": Globe,
    "Databases": Server,
    "Languages": Code2,
    "Tools & DevOps": Wrench,
  };
  const Icon = iconMap[skillGroup.category] || Code2;

  return (
    <motion.div variants={fadeUp} className="group">
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

/* ===== Project Detail Bottom Sheet ===== */
const ProjectSheet = ({ project, open, onClose }) => {
  if (!project) return null;

  return (
    <Sheet open={open} onOpenChange={(v) => { if (!v) onClose(); }}>
      <SheetContent
        side="bottom"
        className="bg-black/95 border-t border-white/[0.08] text-white overflow-y-auto"
        style={{
          height: "80vh",
          maxHeight: "80vh",
          borderRadius: "24px 24px 0 0",
          padding: "32px 28px",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <SheetClose className="absolute right-6 top-6 w-8 h-8 rounded-full bg-white/[0.06] flex items-center justify-center hover:bg-white/[0.1] transition-all z-10 border border-white/[0.08]">
          <X size={14} className="text-white/50" />
        </SheetClose>

        <div className="max-w-3xl mx-auto pt-4">
          {/* Tag */}
          {project.status && (
            <div className="mb-4">
              <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.1] text-[10px] font-semibold text-white/60 uppercase tracking-wider">
                {project.status}
              </span>
            </div>
          )}

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
            {project.name}
          </h2>

          {/* Description */}
          <p className="text-white/35 text-sm md:text-base leading-relaxed mb-8 max-w-2xl">
            {project.description}
          </p>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div className="mb-8">
              <h4 className="text-xs font-semibold text-white/40 uppercase tracking-[0.15em] mb-3">
                Features
              </h4>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {project.features.map((f, i) => (
                  <span key={i} className="text-white/30 text-sm flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-white/20 flex-shrink-0" />
                    {f}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          {project.tech && project.tech.length > 0 && (
            <div className="mb-8">
              <h4 className="text-xs font-semibold text-white/40 uppercase tracking-[0.15em] mb-3">
                Technology
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1.5 rounded-lg text-xs font-medium border border-white/[0.06] bg-white/[0.02] text-white/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Links */}
          <div className="flex flex-wrap gap-3 pt-2">
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.1] bg-white/[0.03] text-white/60 text-sm font-medium hover:bg-white/[0.06] hover:text-white transition-all">
                <Github size={15} /> GitHub
              </a>
            )}
            {project.documentationLink && (
              <a href={project.documentationLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.1] bg-white/[0.03] text-white/60 text-sm font-medium hover:bg-white/[0.06] hover:text-white transition-all">
                <BookOpen size={15} /> Docs
              </a>
            )}
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.1] bg-white/[0.03] text-white/60 text-sm font-medium hover:bg-white/[0.06] hover:text-white transition-all">
                <ExternalLink size={15} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

/* ===== Featured Project Card (Venthen) ===== */
const FeaturedProjectCard = ({ project, onSelect }) => {
  return (
    <motion.div
      variants={fadeUp}
      onClick={() => onSelect(project)}
      className="group cursor-pointer card-premium rounded-2xl p-8 md:p-10 transition-all duration-300 hover:scale-[1.01] hover:border-white/[0.15]"
    >
      <div className="flex items-start justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.1] text-[10px] font-semibold text-white/60 uppercase tracking-wider">
              {project.status || project.rating}
            </span>
          </div>
          <h3 className="text-2xl md:text-4xl font-black text-white mb-2 tracking-tight">
            {project.name}
          </h3>
          <p className="text-white/30 text-sm md:text-base font-light">
            {project.description.length > 120
              ? project.description.slice(0, 120) + "..."
              : project.description}
          </p>
        </div>
        <div className="flex-shrink-0 mt-2">
          <div className="w-10 h-10 rounded-full border border-white/[0.1] flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/[0.04] transition-all duration-300">
            <ChevronRight size={18} className="text-white/40 group-hover:text-white/70 transition-colors" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ===== Small Project Card ===== */
const ProjectCard = ({ project, index, onSelect }) => {
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      variants={fadeUp}
      onClick={() => onSelect(project)}
      className="group cursor-pointer card-premium rounded-2xl px-6 py-5 transition-all duration-300 hover:scale-[1.02] hover:border-white/[0.15]"
      style={{ height: "auto", minHeight: "100px" }}
    >
      <div className="flex items-center gap-5">
        {/* Number */}
        <div className="flex-shrink-0 w-10 text-center">
          <span className="text-xs font-medium text-white/20 font-mono tracking-wider">
            {num}
          </span>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h4 className="text-base font-bold text-white/90 mb-0.5">
            {project.name}
          </h4>
          <p className="text-white/30 text-xs leading-relaxed line-clamp-1">
            {project.description}
          </p>
        </div>

        {/* Arrow */}
        <div className="flex-shrink-0">
          <div className="w-8 h-8 rounded-full border border-white/[0.08] flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/[0.04] transition-all duration-300">
            <ChevronRight size={14} className="text-white/30 group-hover:text-white/60 transition-colors" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ===== Currently Exploring ===== */
const ExploringSection = ({ exploring }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={viewport}
    variants={fadeUp}
    className="mb-24"
  >
    <div className="text-center mb-8">
      <span className="inline-block px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-white/40 text-xs font-medium tracking-[0.15em] uppercase">
        Currently Exploring
      </span>
    </div>
    <div className="flex flex-wrap justify-center gap-2">
      {exploring.map((item, i) => (
        <span
          key={i}
          className="px-3 py-1.5 rounded-lg text-xs font-medium border border-white/[0.06] bg-white/[0.02] text-white/40"
        >
          {item}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const { skills, projects, exploring } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);
  const [sheetOpen, setSheetOpen] = useState(false);

  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    setSheetOpen(true);
  };

  return (
    <section id="skills" className="relative py-28 px-4">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Skills Section Header */}
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

        {/* Skills Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-24"
        >
          {skills.map((skillGroup) => (
            <SkillCard key={skillGroup.id} skillGroup={skillGroup} />
          ))}
        </motion.div>

        {/* Currently Exploring */}
        <ExploringSection exploring={exploring} />

        {/* Projects */}
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

          {/* Featured */}
          {featuredProject && (
            <motion.div variants={fadeUp} className="mb-5">
              <FeaturedProjectCard
                project={featuredProject}
                onSelect={handleSelectProject}
              />
            </motion.div>
          )}

          {/* Other Projects */}
          <motion.div variants={staggerContainer} className="space-y-3">
            {otherProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onSelect={handleSelectProject}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Sheet */}
      <ProjectSheet
        project={selectedProject}
        open={sheetOpen}
        onClose={() => setSheetOpen(false)}
      />
    </section>
  );
};

export default Skills;