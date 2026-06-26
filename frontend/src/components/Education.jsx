import React, { useState } from "react";
import {
  GraduationCap,
  Award,
  Briefcase,
  Calendar,
  CheckCircle,
  X,
} from "lucide-react";
import { portfolioData } from "../data/kishandata";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport, staggerSlow } from "../lib/motion";
import { Sheet, SheetContent, SheetClose } from "./ui/sheet";

/* ===== Detail Bottom Sheet for Education/Experience ===== */
const DetailSheet = ({ item, type, open, onClose }) => {
  if (!item) return null;

  const labels = {
    education: { icon: GraduationCap, title: item.degree, org: item.institution },
    experience: { icon: Briefcase, title: item.title, org: item.company },
  };
  const info = labels[type] || labels.experience;

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
          {/* Type badge */}
          <div className="mb-4">
            <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.1] text-[10px] font-semibold text-white/60 uppercase tracking-wider">
              {type === "education" ? "Education" : "Experience"}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-black text-white mb-2 tracking-tight">
            {info.title}
          </h2>

          {/* Organization + Year */}
          <div className="flex flex-wrap items-center gap-2 text-white/30 text-sm mb-6">
            <span>{info.org}</span>
            <span className="text-white/10">·</span>
            <div className="flex items-center gap-1">
              <Calendar size={13} />
              <span>{item.period || item.year}</span>
            </div>
          </div>

          {/* Description */}
          {item.description && (
            <p className="text-white/35 text-sm md:text-base leading-relaxed mb-8 max-w-2xl">
              {item.description}
            </p>
          )}

          {/* GPA */}
          {type === "education" && item.gpa && (
            <div className="mb-6">
              <h4 className="text-xs font-semibold text-white/40 uppercase tracking-[0.15em] mb-2">
                GPA
              </h4>
              <span className="px-3 py-1.5 rounded-lg text-sm font-semibold text-white/60 bg-white/[0.04] border border-white/[0.06]">
                {item.gpa}
              </span>
            </div>
          )}

          {/* Highlights / Achievements */}
          {(item.highlights || item.achievements) && (
            <div>
              <h4 className="text-xs font-semibold text-white/40 uppercase tracking-[0.15em] mb-3">
                {type === "experience" ? "Achievements" : "Highlights"}
              </h4>
              <div className="space-y-2">
                {(item.highlights || item.achievements || []).map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-white/30">
                    <CheckCircle size={14} className="text-white/20 mt-0.5 flex-shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

/* ===== Timeline Node ===== */
const TimelineNode = ({ item, type, onSelect }) => {
  const Icon = type === "education" ? GraduationCap : Briefcase;

  return (
    <motion.div
      variants={fadeUp}
      onClick={() => onSelect(item, type)}
      className="group cursor-pointer relative pl-12 pb-10 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-[17px] top-3 bottom-0 w-px bg-white/[0.06] last:hidden group-last:hidden" />

      {/* Node dot */}
      <div className="absolute left-[9px] top-[5px] w-[18px] h-[18px] rounded-full bg-black border-2 border-white/[0.15] z-10 group-hover:border-white/40 transition-colors">
        <div className="w-[6px] h-[6px] rounded-full bg-white/[0.15] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:bg-white/40 transition-colors" />
      </div>

      {/* Card */}
      <div className="card-premium rounded-2xl p-5 transition-all duration-300 hover:scale-[1.02] hover:border-white/[0.15] cursor-pointer">
        <div className="flex items-start gap-3 mb-2">
          <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
            <Icon size={14} className="text-white/40" />
          </div>
          <div className="flex-1 min-w-0">
            {/* Year */}
            <span className="text-[10px] font-mono font-medium text-white/20 tracking-wider uppercase">
              {item.period || item.year}
            </span>
            {/* Title */}
            <h4 className="text-base font-bold text-white/90 mt-0.5">
              {type === "experience" ? item.title : item.degree}
            </h4>
            {/* Org */}
            <p className="text-white/30 text-xs mt-0.5">
              {item.company || item.institution}
            </p>
          </div>
          {/* Arrow */}
          <div className="flex-shrink-0 mt-1">
            <div className="w-7 h-7 rounded-full border border-white/[0.08] flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/[0.04] transition-all duration-300">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white/60 transition-colors">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Summary */}
        {item.description && (
          <p className="text-white/25 text-xs leading-relaxed ml-11 line-clamp-2">
            {item.description}
          </p>
        )}
      </div>
    </motion.div>
  );
};

const Education = () => {
  const { education, experience } = portfolioData;
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [sheetOpen, setSheetOpen] = useState(false);

  const sortedItems = [
    ...experience.map((exp) => ({ ...exp, _type: "experience" })),
    ...education.map((edu) => ({ ...edu, _type: "education" })),
  ].sort((a, b) => {
    const aYear = parseInt(a.year || a.period);
    const bYear = parseInt(b.year || b.period);
    return bYear - aYear;
  });

  const handleSelect = (item, type) => {
    setSelectedItem(item);
    setSelectedType(type);
    setSheetOpen(true);
  };

  return (
    <section id="education" className="relative py-28 px-4">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
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

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {sortedItems.map((item) => (
            <TimelineNode
              key={`${item._type}-${item.id}`}
              item={item}
              type={item._type}
              onSelect={handleSelect}
            />
          ))}
        </motion.div>
      </div>

      {/* Detail Sheet */}
      <DetailSheet
        item={selectedItem}
        type={selectedType}
        open={sheetOpen}
        onClose={() => setSheetOpen(false)}
      />
    </section>
  );
};

export default Education;