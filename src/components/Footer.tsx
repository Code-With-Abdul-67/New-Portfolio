"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer
      style={{
        background: "transparent",
        borderTop: "1px solid rgba(255, 255, 255, 0.06)",
      }}
    >
      {/* Giant display name */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "5rem 2.5rem 3rem",
          overflow: "hidden",
        }}
        className="footer-inner"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          aria-label="Abdul Baseer"
        >
          {/* ABDUL */}
          <div style={{ lineHeight: 0.85, display: "flex", flexDirection: "column" }}>
            <h1
              className="text-gradient"
              style={{
                fontSize: "clamp(5rem, 13vw, 14rem)",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "-0.03em",
                margin: 0,
              }}
            >
              ABDUL
            </h1>
            <h1
              className="text-gradient"
              style={{
                fontSize: "clamp(5rem, 13vw, 14rem)",
                fontWeight: 900,
                color: "#6d28d9",
                textTransform: "uppercase",
                letterSpacing: "-0.03em",
                margin: 0,
                paddingLeft: "5%",
              }}
            >
              BASEER
            </h1>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.06)",
          padding: "1.5rem 0",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 2.5rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: "0.62rem",
              color: "#9e9e9e",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            © 2026 ABDUL BASEER
          </span>

          <span
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: "0.62rem",
              color: "#9e9e9e",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            FULL STACK DEVELOPER
          </span>

          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <span
              style={{
                fontFamily: "var(--font-space-mono), monospace",
                fontSize: "0.62rem",
                color: "#9e9e9e",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              KARACHI, PK
            </span>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#555555",
                fontSize: "0.8rem",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(109,40,217,0.5)";
                e.currentTarget.style.color = "#a78bfa";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.color = "#555555";
              }}
            >
              ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
