"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 16 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.92 }}
          style={{
            position: "fixed",
            bottom: "1.75rem",
            right: "1.75rem",
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            background: "rgba(12, 10, 18, 0.85)",
            border: "1px solid rgba(109, 40, 217, 0.5)",
            boxShadow: "0 0 20px rgba(109, 40, 217, 0.25)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 9999,
            color: "#a78bfa",
            fontSize: "1.1rem",
            lineHeight: 1,
          }}
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}
