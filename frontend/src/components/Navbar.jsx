import React, { useState, useEffect } from "react";
import { Home, Code, GraduationCap, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { scrollToSection } from "../hooks/useSmoothScroll";
import { navEnter } from "../lib/motion";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "skills", label: "Skills", icon: Code },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "education", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
  };

  return (
    <motion.nav
      initial={navEnter.initial}
      animate={navEnter.animate}
      className="fixed bottom-6 inset-x-3 z-50 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:inset-auto sm:max-w-lg"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="bg-[#0a1020]/90 backdrop-blur-xl border border-blue-900/40 rounded-full shadow-lg shadow-blue-950/40 px-2 sm:px-4 py-2">
        <ul className="flex items-center justify-between w-full">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} className="flex-1 flex justify-center">
                <button
                  onClick={() => handleNavClick(item.id)}
                  aria-label={item.label}
                  aria-current={isActive ? "true" : "false"}
                  className={`w-full max-w-[76px] sm:max-w-none min-w-0 flex items-center justify-center space-x-0 sm:space-x-2 px-2 sm:px-4 py-2 rounded-full transition-colors duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-[#050810] ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                      : "text-slate-400 hover:bg-blue-950/50 hover:text-blue-200"
                  }`}
                >
                  <Icon size={20} className="text-current" />
                  <span className="text-sm font-medium hidden md:inline">
                    {item.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
