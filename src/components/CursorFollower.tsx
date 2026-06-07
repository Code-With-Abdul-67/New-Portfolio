"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollower() {
  const [isHovered, setIsHovered] = useState(false);
  // Start hidden — only reveal after the first real mousemove on a fine-pointer device
  const [isVisible, setIsVisible] = useState(false);
  // null = not yet determined
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  const tracked = useRef(new Set<Element>());

  useEffect(() => {
    // Only enable on devices with a fine pointer (real mouse)
    // pointer: coarse = touchscreen, pointer: fine = mouse/trackpad
    const mq = window.matchMedia("(pointer: fine)");
    const hasFinePointer = mq.matches;

    // Also bail if this is a touch device regardless of pointer media query
    const isTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (!hasFinePointer || isTouch) {
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

    // Hover tracking
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
    // intentionally run once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Don't render anything until we've confirmed it's a desktop pointer device
  // and the user has moved their mouse at least once
  if (isDesktop !== true || !isVisible) return null;

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
          mixBlendMode: "difference",
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
          mixBlendMode: "difference",
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
        }}
      />
    </>
  );
}
