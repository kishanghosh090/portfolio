import React, { useEffect, useRef, useCallback } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const lightRef = useRef(null);
  const mouseRef = useRef({ x: -100, y: -100 });
  const cursorPos = useRef({ x: -100, y: -100 });
  const followerPos = useRef({ x: -100, y: -100 });
  const rafRef = useRef(null);
  const isHoveringRef = useRef(false);
  const hoverTargetRef = useRef(null);

  const lerp = useCallback((start, end, factor) => {
    return start + (end - start) * factor;
  }, []);

  useEffect(() => {
    // Check for touch device
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    const light = lightRef.current;
    if (!cursor || !follower || !light) return;

    // Hide default cursor
    document.body.style.cursor = "none";

    const onMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseLeave = () => {
      cursor.style.opacity = "0";
      follower.style.opacity = "0";
      light.style.opacity = "0";
    };

    const onMouseEnter = () => {
      cursor.style.opacity = "1";
      follower.style.opacity = "1";
      light.style.opacity = "1";
    };

    const handleHoverStart = (e) => {
      const target = e.target;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("glass-btn") ||
        target.classList.contains("glass-btn-primary") ||
        target.getAttribute("role") === "button";

      if (isInteractive) {
        isHoveringRef.current = true;
        hoverTargetRef.current = target;
        follower.classList.add("cursor-hover");
      }
    };

    const handleHoverEnd = () => {
      isHoveringRef.current = false;
      hoverTargetRef.current = null;
      follower.classList.remove("cursor-hover");
    };

    // Magnetic effect for buttons
    const handleMagneticMove = (e) => {
      const target = e.target.closest("a, button, [role='button']");
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;

      const strength = Math.min(
        Math.max(
          (rect.width / 2 - Math.abs(distX)) / (rect.width / 2),
          0
        ),
        1
      );

      const maxMove = 6;
      const moveX = distX * strength * (maxMove / (rect.width / 2));
      const moveY = distY * strength * (maxMove / (rect.height / 2));

      target.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    const handleMagneticReset = (e) => {
      const target = e.target.closest("a, button, [role='button']");
      if (target) {
        target.style.transform = "translate(0px, 0px)";
      }
    };

    // Add event listeners for hover effects
    document.addEventListener("mouseover", handleHoverStart);
    document.addEventListener("mouseout", handleHoverEnd);

    // Magnetic button effects
    document.addEventListener("mouseover", (e) => {
      const target = e.target.closest("a, button, [role='button']");
      if (target) {
        target.addEventListener("mousemove", handleMagneticMove);
        target.addEventListener("mouseleave", handleMagneticReset, { once: true });
      }
    });

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    const animate = () => {
      const { x, y } = mouseRef.current;

      // Cursor (inner dot) - instant follow
      cursorPos.current.x = lerp(cursorPos.current.x, x, 0.9);
      cursorPos.current.y = lerp(cursorPos.current.y, y, 0.9);
      cursor.style.transform = `translate(${cursorPos.current.x - 3}px, ${cursorPos.current.y - 3}px)`;

      // Follower (outer ring) - lag behind
      followerPos.current.x = lerp(followerPos.current.x, x, 0.12);
      followerPos.current.y = lerp(followerPos.current.y, y, 0.12);
      follower.style.transform = `translate(${followerPos.current.x - 16}px, ${followerPos.current.y - 16}px)`;

      // Light follow
      light.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,255,255,0.04), transparent 40%)`;

      rafRef.current = requestAnimationFrame(animate);
    };

    // Initialize positions
    cursorPos.current = { x: -100, y: -100 };
    followerPos.current = { x: -100, y: -100 };

    animate();

    return () => {
      document.body.style.cursor = "";
      document.removeEventListener("mouseover", handleHoverStart);
      document.removeEventListener("mouseout", handleHoverEnd);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [lerp]);

  return (
    <>
      {/* Inner dot - instant */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-[6px] h-[6px] bg-white rounded-full pointer-events-none z-[99999]"
        style={{
          opacity: 0,
          transition: "opacity 0.3s ease",
          willChange: "transform",
        }}
      />
      {/* Outer ring - smooth follower */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[99998] border border-white/20"
        style={{
          opacity: 0,
          transition: "opacity 0.3s ease, width 0.3s ease, height 0.3s ease, border-color 0.3s ease, background 0.3s ease",
          willChange: "transform",
        }}
      />
      {/* Light follow effect */}
      <div
        ref={lightRef}
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{
          transition: "background 0.1s ease",
          willChange: "background",
        }}
      />
      <style>{`
        .cursor-hover {
          width: 48px !important;
          height: 48px !important;
          border-color: rgba(255,255,255,0.3) !important;
          background: rgba(255,255,255,0.04) !important;
          margin-left: -8px !important;
          margin-top: -8px !important;
        }
        @media (pointer: coarse) {
          .custom-cursor { display: none !important; }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;