import React from "react";
import {
  GraduationCap,
  Award,
  Briefcase,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { portfolioData } from "../data/kishandata";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "../lib/motion";

const TimelineCard = ({ item, type }) => {
  const Icon = type === "education" ? GraduationCap : type === "experience" ? Briefcase : Award;

  return (
    <div className="group card-premium rounded-2xl p-6">
      <div className="flex items-start gap-4 mb-3">
        <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
          <Icon size={16} className="text-white/40" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-base font-bold text-white/90 mb-0.5">
            {type === "experience" ? item.title : item.degree}
          </h4>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-white/30 text-xs">
            <span className="font-medium">{item.company || item.institution}</span>
            <span className="text-white/10">·</span>
            <div className="flex items-center gap-1">
              <Calendar size={11} />
              <span>{item.period || item.year}</span>
            </div>
          </div>
        </div>
      </div>

      {type === "experience" && item.description && (
        <p className="text-white/35 text-sm leading-relaxed mb-3 ml-[52px]">
          {item.description}
        </p>
      )}

      {type === "education" && item.gpa && (
        <div className="flex items-center gap-2 mb-3 ml-[52px]">
          <span className="text-xs text-white/30">GPA:</span>
          <span className="text-xs font-semibold text-white/60 bg-white/[0.04] border border-white/[0.06] px-2 py-0.5 rounded-md">
            {item.gpa}
          </span>
        </div>
      )}

      {(item.highlights || item.achievements) && (
        <ul className="space-y-1.5 ml-[52px]">
          {(item.highlights || item.achievements || []).map((hl, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-xs text-white/30"
            >
              <CheckCircle size={12} className="text-white/20 mt-0.5 flex-shrink-0" />
              <span>{hl}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Education = () => {
  const { education, experience, certifications } = portfolioData;

  const allItems = [
    ...experience.map((exp) => ({ ...exp, type: "experience" })),
    ...education.map((edu) => ({ ...edu, type: "education" })),
  ].sort((a, b) => {
    const aYear = parseInt(a.year || a.period);
    const bYear = parseInt(b.year || b.period);
    return bYear - aYear;
  });

  return (
    <section id="education" className="relative py-28 px-4">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} className="mb-5">
            <span className="inline-block px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-white/40 text-xs font-medium tracking-[0.15em] uppercase">
              Background
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight"
          >
            Experience & Education
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-white/35 text-base max-w-2xl mx-auto font-light"
          >
            Academic background and professional journey
          </motion.p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[20px] md:left-[22px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent" />
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="space-y-4"
          >
            {allItems.map((item) => (
              <motion.div key={`${item.type}-${item.id}`} variants={fadeUp}>
                <TimelineCard item={item} type={item.type} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {certifications && certifications.length > 0 && certifications[0].name && certifications[0].name !== "coming soon" && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer}
            className="mt-16"
          >
            <motion.div variants={fadeUp} className="text-center mb-8">
              <h3 className="text-xl font-bold text-white">Certifications</h3>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {certifications.map((cert) => (
                <motion.div key={cert.id} variants={fadeUp} className="group card-premium rounded-2xl p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                      <Award size={16} className="text-white/40" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white/80">{cert.name}</h4>
                      {cert.issuer && (
                        <p className="text-white/30 text-xs mt-0.5">{cert.issuer}</p>
                      )}
                      {cert.year && (
                        <div className="flex items-center gap-1 text-white/25 text-xs mt-1">
                          <Calendar size={11} />
                          <span>{cert.year}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Education;