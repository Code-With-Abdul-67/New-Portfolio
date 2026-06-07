"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollower() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // default true, set false only on desktop

  useEffect(() => {
    const mobile =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(max-width: 768px)").matches ||
      window.matchMedia("(pointer: coarse)").matches;
    setIsMobile(mobile);
  }, []);

  // Mouse coordinates using Framer Motion values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Physics springs for butter smooth follower
  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (isMobile) return;

    // Add class to hide default cursor
    document.documentElement.classList.add("custom-cursor-active");

    const moveMouse = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", moveMouse);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Track hover states for links/buttons
    const addHoverClass = () => setIsHovered(true);
    const removeHoverClass = () => setIsHovered(false);

    const updateHoverListeners = () => {
      const clickables = document.querySelectorAll(
        'a, button, [role="button"], input, select, textarea',
      );
      clickables.forEach((el) => {
        el.addEventListener("mouseenter", addHoverClass);
        el.addEventListener("mouseleave", removeHoverClass);
      });
    };

    // Update listeners initially and on DOM mutations
    updateHoverListeners();
    const observer = new MutationObserver(updateHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", moveMouse);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      observer.disconnect();
    };
  }, [cursorX, cursorY, isVisible, isMobile]);

  if (!isVisible || isMobile) return null;

  return (
    <>
      {/* Outer follow ring */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: isHovered ? 64 : 36,
          height: isHovered ? 64 : 36,
          marginLeft: isHovered ? -32 : -18,
          marginTop: isHovered ? -32 : -18,
          borderRadius: "50%",
          border: "1.5px solid rgba(109, 40, 217, 0.4)",
          background: isHovered ? "rgba(109, 40, 217, 0.08)" : "transparent",
          boxShadow: isHovered ? "0 0 20px rgba(109, 40, 217, 0.2)" : "none",
          x: springX,
          y: springY,
          pointerEvents: "none",
          zIndex: 999999,
          mixBlendMode: "difference", // Essential for premium smart blending on different colored areas
        }}
        animate={{
          scale: isHovered ? 1.15 : 1,
          borderColor: isHovered
            ? "rgba(59, 130, 246, 0.8)"
            : "rgba(109, 40, 217, 0.4)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      />

      {/* Inner gradient dot */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: isHovered ? 12 : 8,
          height: isHovered ? 12 : 8,
          marginLeft: isHovered ? -6 : -4,
          marginTop: isHovered ? -6 : -4,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #6d28d9 0%, #3b82f6 100%)",
          x: cursorX,
          y: cursorY,
          pointerEvents: "none",
          zIndex: 999999,
          mixBlendMode: "difference", // Essential for premium smart blending on different colored areas
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
        }}
      />
    </>
  );
}
