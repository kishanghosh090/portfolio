import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const mouseRef = useRef({ x: -100, y: -100 });
  const cursorPos = useRef({ x: -100, y: -100 });
  const followerPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Desktop only: enable only on screens >= 1024px
    const isDesktop = window.innerWidth >= 1024;
    if (!isDesktop) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let rafId = null;
    let isRunning = true;

    try {
      document.body.style.cursor = "none";
    } catch (_) {
      document.body.style.cursor = "auto";
      return;
    }

    const onMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseLeave = () => {
      cursor.style.opacity = "0";
      follower.style.opacity = "0";
    };

    const onMouseEnter = () => {
      cursor.style.opacity = "1";
      follower.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // Animate using RAF only — no React state
    const animate = () => {
      if (!isRunning) return;

      const { x, y } = mouseRef.current;

      // Inner dot: fast lerp
      cursorPos.current.x += (x - cursorPos.current.x) * 0.9;
      cursorPos.current.y += (y - cursorPos.current.y) * 0.9;

      // Outer ring: heavy lerp for premium feel
      followerPos.current.x += (x - followerPos.current.x) * 0.15;
      followerPos.current.y += (y - followerPos.current.y) * 0.15;

      cursor.style.transform = `translate3d(${cursorPos.current.x - 3}px, ${cursorPos.current.y - 3}px, 0)`;
      follower.style.transform = `translate3d(${followerPos.current.x - 15}px, ${followerPos.current.y - 15}px, 0)`;

      rafId = requestAnimationFrame(animate);
    };

    // Init positions
    cursorPos.current = { x: -100, y: -100 };
    followerPos.current = { x: -100, y: -100 };

    rafId = requestAnimationFrame(animate);

    return () => {
      isRunning = false;
      if (rafId) cancelAnimationFrame(rafId);
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  return (
    <>
      {/* Inner dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-[6px] h-[6px] bg-white rounded-full pointer-events-none"
        style={{
          zIndex: 999999,
          opacity: 0,
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      />
      {/* Outer ring */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-[30px] h-[30px] rounded-full pointer-events-none border border-white/20"
        style={{
          zIndex: 999998,
          opacity: 0,
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      />
      <style>{`
        @media (max-width: 1023px) {
          .custom-cursor { display: none !important; }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;