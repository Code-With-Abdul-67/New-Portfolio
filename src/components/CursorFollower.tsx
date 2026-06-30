"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

export default function CursorFollower() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  const cursorX = useMotionValue(-9999);
  const cursorY = useMotionValue(-9999);

  const springConfig = { damping: 35, stiffness: 320, mass: 0.5 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  const tracked = useRef(new Set<Element>());

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (!mq.matches || isTouch) {
      setIsDesktop(false);
      return;
    }

    setIsDesktop(true);
    document.documentElement.classList.add("custom-cursor-active");

    const onMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    const addHover = () => setIsHovered(true);
    const removeHover = () => setIsHovered(false);

    const addListeners = (el: Element) => {
      if (tracked.current.has(el)) return;
      tracked.current.add(el);
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    };

    const refresh = () => {
      document
        .querySelectorAll('a, button, [role="button"], input, select, textarea')
        .forEach(addListeners);
    };

    refresh();
    const observer = new MutationObserver(refresh);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      tracked.current.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
      observer.disconnect();
    };
  }, []);

  if (isDesktop !== true || !isVisible) return null;

  return (
    <>
      <style>{`
        @media (pointer: coarse) {
          .cursor-follower { display: none !important; }
        }
      `}</style>

      {/* ── DEFAULT: glass purple ring (no hover) ── */}
      <AnimatePresence>
        {!isHovered && (
          <motion.div
            className="cursor-follower"
            key="default-ring"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.18 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              x: springX,
              y: springY,
              marginLeft: -18,
              marginTop: -18,
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "rgba(109, 40, 217, 0.08)",
              backdropFilter: "blur(4px) saturate(1.4)",
              WebkitBackdropFilter: "blur(4px) saturate(1.4)",
              border: "1.5px solid rgba(167, 139, 250, 0.55)",
              boxShadow:
                "0 0 10px rgba(109, 40, 217, 0.45), inset 0 0 8px rgba(167, 139, 250, 0.12)",
              pointerEvents: "none",
              zIndex: 999999,
            }}
          />
        )}
      </AnimatePresence>

      {/* ── HOVER: inversion circle — grows over clickable elements ── */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="cursor-follower"
            key="hover-invert"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              x: springX,
              y: springY,
              marginLeft: -18,
              marginTop: -18,
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "#8800efff",
              mixBlendMode: "difference",
              pointerEvents: "none",
              zIndex: 999999,
            }}
          />
        )}
      </AnimatePresence>

      {/* ── DOT: always visible, purple→blue gradient ── */}
      <motion.div
        className="cursor-follower"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: cursorX,
          y: cursorY,
          marginLeft: -3.5,
          marginTop: -3.5,
          width: 7,
          height: 7,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%)",
          boxShadow: "0 0 6px rgba(167, 139, 250, 0.8)",
          pointerEvents: "none",
          zIndex: 999999,
          mixBlendMode: isHovered ? "difference" : "normal",
        }}
      />
    </>
  );
}
