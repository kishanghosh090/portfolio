import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToSection } from "../hooks/useSmoothScroll";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "education", "contact"];
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
  }, []);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
      style={{ paddingTop: "env(safe-area-inset-top, 16px)" }}
    >
      {/* Desktop */}
      <div className="hidden md:flex items-center">
        <div
          className={`flex items-center px-1.5 py-1 rounded-full backdrop-blur-2xl border transition-all duration-500 ${
            isScrolled
              ? "bg-black/80 border-white/[0.1] shadow-xl shadow-black/50"
              : "bg-black/50 border-white/[0.06]"
          }`}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                aria-label={item.label}
                aria-current={isActive ? "true" : "false"}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-[#555] hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-0 bg-white/[0.08] rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden w-full flex justify-center">
        <div
          className={`flex items-center justify-between px-4 py-3 rounded-full backdrop-blur-2xl border transition-all duration-500 max-w-[90%] w-full ${
            isScrolled
              ? "bg-black/80 border-white/[0.1] shadow-xl shadow-black/50"
              : "bg-black/50 border-white/[0.06]"
          }`}
        >
          <span className="text-sm font-semibold text-white tracking-wider ml-1">
            KRG
          </span>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="relative w-8 h-8 flex items-center justify-center"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-5 h-4 relative flex flex-col justify-center gap-1">
              <motion.span
                animate={isMobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                className="block h-[1.5px] w-5 bg-white/60 rounded-full"
              />
              <motion.span
                animate={isMobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-[1.5px] w-5 bg-white/60 rounded-full"
              />
              <motion.span
                animate={isMobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                className="block h-[1.5px] w-5 bg-white/60 rounded-full"
              />
            </div>
          </button>
        </div>

        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.96 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-20 left-4 right-4 bg-black/90 backdrop-blur-2xl border border-white/[0.08] rounded-2xl shadow-2xl shadow-black/60 overflow-hidden"
            >
              <div className="p-2">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-white/[0.08] text-white"
                          : "text-gray-500 hover:text-white hover:bg-white/[0.03]"
                      }`}
                    >
                      {isActive && (
                        <span className="w-1 h-1 rounded-full bg-white/70" />
                      )}
                      <span className={!isActive ? "ml-[5px]" : ""}>
                        {item.label}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;