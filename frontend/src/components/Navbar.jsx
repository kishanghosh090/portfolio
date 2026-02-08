import React, { useState, useEffect } from 'react';
import { Home, Code, GraduationCap, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="bg-[#1a1a1a] backdrop-blur-xl border border-gray-800 rounded-full shadow-2xl px-4 py-2">
        <ul className="flex items-center space-x-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ease-out ${
                    isActive
                      ? 'bg-white text-black'
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <Icon size={18} />
                  <span className="text-sm font-medium hidden md:inline">{item.label}</span>
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