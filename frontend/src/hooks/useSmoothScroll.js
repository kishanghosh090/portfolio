import { useEffect } from "react";

export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (!element) return;

  element.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const useSmoothScroll = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);
};
