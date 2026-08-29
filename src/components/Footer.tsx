"use client";

import { motion } from "framer-motion";

export default function Footer() {

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
        }}
        className="footer-inner"
      >
        <div style={{ lineHeight: 0.85, display: "flex", flexDirection: "column" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
            style={{ display: "flex", overflow: "hidden" }}
          >
            {"ABDUL".split("").map((char, i) => (
              <motion.h1
                key={i}
                className="text-gradient"
                variants={{
                  hidden: { opacity: 0, y: "100%" },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
                }}
                style={{
                  fontSize: "clamp(5rem, 13vw, 14rem)",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "-0.03em",
                  margin: 0,
                }}
              >
                {char}
              </motion.h1>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
            }}
            style={{ display: "flex", overflow: "hidden", paddingLeft: "5%" }}
          >
            {"BASEER".split("").map((char, i) => (
              <motion.h1
                key={i}
                className="text-gradient"
                variants={{
                  hidden: { opacity: 0, y: "100%" },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
                }}
                style={{
                  fontSize: "clamp(5rem, 13vw, 14rem)",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "-0.03em",
                  margin: 0,
                }}
              >
                {char}
              </motion.h1>
            ))}
          </motion.div>
        </div>
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
          </div>
        </div>
      </div>
    </footer>
  );
}
