import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Server,
  Globe,
  Wrench,
  Code2,
} from "lucide-react";
import { portfolioData } from "../data/kishandata";
import { fadeUp, staggerContainer, viewport } from "../lib/motion";

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
  const { skills, exploring } = portfolioData;

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
      </div>
    </section>
  );
};

export default Skills;