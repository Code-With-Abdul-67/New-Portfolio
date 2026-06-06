"use client";

import { motion } from "framer-motion";

const abdulLetters = [
  { char: "A", rotate: -2 },
  { char: "B", rotate: 1.5 },
  { char: "D", rotate: -1 },
  { char: "U", rotate: 2 },
  { char: "L", rotate: -1.5 },
];

const baseerLetters = [
  { char: "B", rotate: 1 },
  { char: "A", rotate: -2 },
  { char: "S", rotate: 1.5 },
  { char: "E", rotate: -1 },
  { char: "E", rotate: 2 },
  { char: "R", rotate: -1.5 },
];

export default function Footer() {
  return (
    <footer style={{ background: "#000000", borderTop: "1px solid #1a1a1a" }}>

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
          <div className="footer-name" style={{ display: "flex", lineHeight: 0.85 }}>
            {abdulLetters.map((l, i) => (
              <span
                key={i}
                style={{
                  fontSize: "clamp(5rem, 13vw, 14rem)",
                  fontWeight: 900,
                  color: "#ffffff",
                  textTransform: "uppercase",
                  display: "inline-block",
                  transform: `rotate(${l.rotate}deg)`,
                  letterSpacing: "-0.03em",
                }}
              >
                {l.char}
              </span>
            ))}
          </div>

          {/* BASEER — offset right */}
          <div style={{ display: "flex", lineHeight: 0.85, paddingLeft: "5%" }}>
            {baseerLetters.map((l, i) => (
              <span
                key={i}
                style={{
                  fontSize: "clamp(5rem, 13vw, 14rem)",
                  fontWeight: 900,
                  color: "#6d28d9",
                  textTransform: "uppercase",
                  display: "inline-block",
                  transform: `rotate(${l.rotate}deg)`,
                  letterSpacing: "-0.03em",
                }}
              >
                {l.char}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid #1a1a1a", padding: "1.5rem 0" }}>
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
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: "0.62rem",
              color: "#444444",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            © 2026 ABDUL BASEER
          </span>

          <span
            style={{
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: "0.62rem",
              color: "#444444",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            FULL STACK DEVELOPER
          </span>

          <span
            style={{
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: "0.62rem",
              color: "#444444",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            KARACHI, PK
          </span>
        </div>
      </div>
    </footer>
  );
}
