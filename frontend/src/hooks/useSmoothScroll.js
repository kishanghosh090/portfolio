import { useEffect, useRef } from "react";
import Lenis from "lenis";

export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const isMobile = window.innerWidth < 768;

  if (isMobile) {
    element.scrollIntoView({ behavior: "instant", block: "start" });
  } else {
    // Use Lenis instance for smooth scroll if available
    const lenis = window.__lenis;
    if (lenis) {
      lenis.scrollTo(element, { offset: 0, duration: 1.2, immediate: false });
    } else {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
};

export const useSmoothScroll = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      // Native browser scrolling on mobile
      document.documentElement.style.scrollBehavior = "auto";
      return;
    }

    // Desktop: enable Lenis smooth scrolling
    document.documentElement.style.scrollBehavior = "auto";

    const lenis = new Lenis({
      duration: 1.2,
      lerp: 0.08,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1,
      infinite: false,
      orientation: "vertical",
      gestureOrientation: "vertical",
    });

    // Store on window for scrollToSection access
    window.__lenis = lenis;

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return lenisRef;
};