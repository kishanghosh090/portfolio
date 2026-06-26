import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToSection } from "../hooks/useSmoothScroll";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = useMemo(
    () => [
      { id: "home", label: "Home", num: "01" },
      { id: "skills", label: "Skills", num: "02" },
      { id: "education", label: "Education", num: "03" },
      { id: "projects", label: "Projects", num: "04" },
      { id: "contact", label: "Contact", num: "05" },
    ],
    []
  );

  const mobileItems = [
    { id: "home", label: "Home", icon: "\u{1F3E0}" },
    { id: "skills", label: "Skills", icon: "\u26A1" },
    { id: "education", label: "Education", icon: "\u{1F393}" },
    { id: "projects", label: "Projects", icon: "\u{1F4C1}" },
    { id: "contact", label: "Contact", icon: "\u2709" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((n) => n.id);
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      setIsScrolled(window.scrollY > 50);

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
  }, [navItems]);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
  };

  return (
    <>
      {/* ===== Desktop Nav ===== */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 hidden md:block px-8"
        style={{ paddingTop: "24px" }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className="text-white text-base font-semibold tracking-tight hover:opacity-70 transition-opacity"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            KISHAN
          </button>

          {/* Navigation Links */}
          <div
            className="flex items-center"
            style={{ gap: "36px" }}
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="relative group"
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "11px",
                    letterSpacing: "0.15em",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    color: isActive
                      ? "rgba(255,255,255,1)"
                      : "rgba(255,255,255,0.65)",
                    transition: "color 0.2s ease",
                  }}
                >
                  <span className="opacity-50" style={{ fontWeight: 400 }}>
                    {item.num}/
                  </span>
                  <span className="ml-[2px]">{item.label}</span>
                  {/* Active underline */}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-[3px] left-0 right-0 h-[1px] bg-white"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {/* Hover line (inactive) */}
                  <span className="absolute -bottom-[3px] left-0 right-0 h-[1px] bg-white/50 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </button>
              );
            })}
          </div>
        </div>
      </motion.nav>

      {/* ===== Mobile Bottom Dock ===== */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
            delay: 0.5,
          }}
          className="pointer-events-auto"
          style={{
            marginBottom: "20px",
            height: "60px",
            padding: "0 8px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            background: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "30px",
          }}
        >
          {mobileItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="flex flex-col items-center justify-center gap-[2px] transition-all duration-200"
                style={{
                  opacity: isActive ? 1 : 0.5,
                  width: "52px",
                  height: "48px",
                  borderRadius: "20px",
                  background: isActive
                    ? "rgba(255,255,255,0.08)"
                    : "transparent",
                  transform: isActive ? "scale(1)" : "scale(0.95)",
                  transition: "all 0.2s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                <span
                  style={{
                    fontSize: "16px",
                    lineHeight: 1,
                    filter: isActive ? "none" : "grayscale(1) contrast(0.5)",
                    transition: "filter 0.2s ease",
                  }}
                >
                  {item.icon}
                </span>
                <span
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "8px",
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    color: isActive
                      ? "rgba(255,255,255,1)"
                      : "rgba(255,255,255,0.5)",
                    transition: "color 0.2s ease",
                  }}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

export default Navbar;