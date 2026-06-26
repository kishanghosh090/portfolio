import React from "react";
import { Github, Linkedin, Download, ChevronDown } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
import { portfolioData } from "../data/kishandata";
import { scrollToSection } from "../hooks/useSmoothScroll";

import kishan from "./kishan.jpeg";

const Hero = () => {
  const { personal } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const fadeUpItem = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: personal.github,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: personal.linkedin,
    },
    {
      icon: SiLeetcode,
      label: "LeetCode",
      href: personal.leetcode,
    },
    {
      icon: Download,
      label: "Resume",
      href: "/KISHAN RANA GHOSH-3.pdf",
      download: "Kishan_Rana_Ghosh_Resume.pdf",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 pt-32 pb-24 overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl w-full text-center relative z-10"
      >
        {/* Profile Image */}
        <motion.div variants={fadeUpItem} className="mb-10 flex justify-center">
          <div className="relative">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border border-white/[0.08] bg-black/50">
              <img
                src={kishan}
                alt="Kishan Rana Ghosh"
                className="w-full h-full object-cover rounded-full"
                loading="eager"
              />
            </div>
          </div>
        </motion.div>

        {/* Hero Title - Massive typography */}
        <motion.h1
          variants={fadeUpItem}
          className="select-none"
        >
          <span className="block text-[clamp(44px,14vw,160px)] font-black leading-[0.85] tracking-[-0.05em] text-white mb-2">
            KISHAN
          </span>
          <span className="block text-[clamp(44px,14vw,160px)] font-black leading-[0.85] tracking-[-0.05em] text-white/35">
            RANA GHOSH
          </span>
        </motion.h1>

        {/* Role Tag */}
        <motion.div variants={fadeUpItem} className="mt-6 mb-4">
          <span className="inline-block text-xs text-white/40 font-medium tracking-[0.2em] uppercase">
            {personal.title}
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={fadeUpItem}
          className="text-white/40 text-sm md:text-base max-w-xl mx-auto mb-12 leading-relaxed font-normal tracking-wide"
        >
          {personal.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUpItem}
          className="flex flex-wrap items-center justify-center gap-3 mb-16"
        >
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            const isResume = link.download;

            const extraProps = isResume
              ? { download: link.download, href: link.href }
              : { href: link.href, target: "_blank", rel: "noopener noreferrer" };

            return (
              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <a
                  {...extraProps}
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/[0.1] bg-white/[0.03] text-white/70 text-sm font-medium hover:bg-white/[0.07] hover:border-white/[0.18] hover:text-white transition-all duration-300"
                >
                  <Icon size={15} className="text-white/40" />
                  <span>{link.label}</span>
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Email */}
        <motion.div
          variants={fadeUpItem}
          className="flex items-center justify-center gap-2 text-white/25 text-xs"
        >
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <a
            href={`mailto:${personal.email}`}
            className="hover:text-white/50 transition-colors duration-200 tracking-wide"
          >
            {personal.email}
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToSection("skills")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/20 hover:text-white/40 transition-colors z-10"
        aria-label="Scroll to skills"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;