import React from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

import { portfolioData } from "../data/kishandata";
import { fadeUp, staggerContainer } from "../lib/motion";

import kishan from "./kishan.jpeg";

const Hero = () => {
  const { personal } = portfolioData;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center section-dark px-4"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-3xl w-full text-center"
      >
        <motion.div variants={fadeUp} className="mb-6">
          <div className="w-24 h-24 mx-auto mb-6 bg-slate-800 rounded-full flex items-center justify-center ring-2 ring-blue-900/40">
            <img
              src={`${kishan}`}
              alt=""
              className="w-24 h-24 mx-auto rounded-full object-cover"
            />
          </div>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-5xl md:text-6xl font-bold text-white mb-3"
        >
          {personal.name}
        </motion.h1>

        <motion.h2
          variants={fadeUp}
          className="text-xl md:text-2xl font-medium text-blue-300/70 mb-6"
        >
          {personal.title}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-base md:text-lg text-slate-500 max-w-xl mx-auto mb-8"
        >
          {personal.tagline}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-3 mb-6"
        >
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-5 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-colors duration-200 text-sm font-medium shadow-lg shadow-blue-600/20"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-5 py-2.5 bg-[#0a1020] text-white rounded-full hover:bg-[#111827] transition-colors duration-200 text-sm font-medium border border-blue-900/40"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
          <a
            href={personal.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-5 py-2.5 bg-[#0a1020] text-white rounded-full hover:bg-[#111827] transition-colors duration-200 text-sm font-medium border border-blue-900/40"
          >
            <SiLeetcode size={18} />
            <span>Leet Code</span>
          </a>

          <a
            href="/KISHAN RANA GHOSH-3.pdf"
            download="Kishan_Rana_Ghosh_Resume.pdf"
            className="flex items-center space-x-2 px-5 py-2.5 bg-transparent text-slate-300 border border-blue-800/50 rounded-full hover:bg-blue-950/40 transition-colors duration-200 text-sm font-medium"
          >
            <Download size={18} />
            <span>Resume</span>
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center space-x-2 text-slate-500 text-sm"
        >
          <Mail size={16} />
          <span>{personal.email}</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
