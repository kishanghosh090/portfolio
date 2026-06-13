import React, { useEffect, useRef } from "react";

const MAX_RIPPLES = 24;
const LERP = 0.12;

const CursorWater = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -200, y: -200 });
  const smoothRef = useRef({ x: -200, y: -200 });
  const ripplesRef = useRef([]);
  const lastRippleRef = useRef({ x: -200, y: -200 });
  const rafRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const spawnRipple = (x, y, strength = 1) => {
      if (ripplesRef.current.length >= MAX_RIPPLES) {
        ripplesRef.current.shift();
      }
      ripplesRef.current.push({
        x,
        y,
        radius: 4 + strength * 2,
        maxRadius: 28 + strength * 18,
        opacity: 0.35 + strength * 0.15,
        lineWidth: 1.2 + strength * 0.4,
      });
    };

    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      const dx = e.clientX - lastRippleRef.current.x;
      const dy = e.clientY - lastRippleRef.current.y;
      const dist = Math.hypot(dx, dy);

      if (dist > 6) {
        const steps = Math.min(Math.floor(dist / 10), 3);
        for (let i = 1; i <= steps; i++) {
          const t = i / (steps + 1);
          spawnRipple(
            lastRippleRef.current.x + dx * t,
            lastRippleRef.current.y + dy * t,
            Math.min(dist / 40, 1.2),
          );
        }
        lastRippleRef.current = { x: e.clientX, y: e.clientY };
      }
    };

    const onClick = (e) => {
      spawnRipple(e.clientX, e.clientY, 1.8);
      spawnRipple(e.clientX, e.clientY, 1.2);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("click", onClick);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      const smooth = smoothRef.current;
      const mouse = mouseRef.current;
      smooth.x += (mouse.x - smooth.x) * LERP;
      smooth.y += (mouse.y - smooth.y) * LERP;

      ripplesRef.current = ripplesRef.current.filter((ripple) => {
        ripple.radius += 0.9;
        ripple.opacity *= 0.965;
        ripple.lineWidth *= 0.992;

        if (ripple.radius >= ripple.maxRadius || ripple.opacity < 0.02) {
          return false;
        }

        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(96, 165, 250, ${ripple.opacity})`;
        ctx.lineWidth = ripple.lineWidth;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius * 0.85, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(56, 189, 248, ${ripple.opacity * 0.4})`;
        ctx.lineWidth = ripple.lineWidth * 0.6;
        ctx.stroke();

        return true;
      });

      const glow = ctx.createRadialGradient(
        smooth.x,
        smooth.y,
        0,
        smooth.x,
        smooth.y,
        36,
      );
      glow.addColorStop(0, "rgba(147, 197, 253, 0.35)");
      glow.addColorStop(0.35, "rgba(59, 130, 246, 0.15)");
      glow.addColorStop(1, "rgba(59, 130, 246, 0)");

      ctx.beginPath();
      ctx.arc(smooth.x, smooth.y, 36, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(smooth.x, smooth.y, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(191, 219, 254, 0.9)";
      ctx.fill();

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("click", onClick);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      aria-hidden="true"
    />
  );
};

export default CursorWater;
