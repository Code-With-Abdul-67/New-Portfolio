"use client";

import { motion } from "framer-motion";

const TICKER_ITEMS = [
  "NEXT.JS", "TAILWINDCSS", "POSTGRESQL", "FIGMA", "REACT",
  "HTML5", "CSS3", "PYTHON", "OSINT", "GIT", "TYPESCRIPT",
  "FRAMER MOTION", "BOOTSTRAP", "LINUX", "VS CODE", "NEXTAUTH",
];

const services = [
  { num: "01", name: "WEB DEVELOPMENT" },
  { num: "02", name: "UI/UX DESIGNING" },
  { num: "03", name: "CYBERSECURITY / PENTESTING" },
  { num: "04", name: "LOGO DESIGNING" },
  { num: "05", name: "PC BUILDING" },
];

export default function Services() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  // Render exactly 2 copies — translateX(-50%) loops back to start seamlessly
  const copies = [0, 1];

  return (
    <section id="services" style={{ background: "#000000" }}>

      {/* Ticker strip */}
      <div
        style={{
          background: "#0a0a0a",
          borderTop: "1px solid #1a1a1a",
          borderBottom: "1px solid #1a1a1a",
          padding: "0.85rem 0",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
        aria-hidden="true"
      >
        <div className="ticker-outer">
          {copies.map((c) => (
            <span key={c} className="ticker-set">
              {TICKER_ITEMS.map((item) => (
                <span key={item} className="ticker-item">
                  {item}
                  <span className="ticker-dot">•</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "6rem 2.5rem" }}>

        {/* Heading row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: "3rem",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "clamp(3.5rem, 8vw, 8.5rem)",
                fontWeight: 900,
                color: "#ffffff",
                textTransform: "uppercase",
                lineHeight: 0.88,
                letterSpacing: "-0.02em",
              }}
            >
              WHAT I
            </h2>
            <h2
              style={{
                fontSize: "clamp(3.5rem, 8vw, 8.5rem)",
                fontWeight: 900,
                color: "#222222",
                textTransform: "uppercase",
                lineHeight: 0.88,
                letterSpacing: "-0.02em",
              }}
            >
              OFFER
            </h2>
          </div>

          <div
            style={{
              border: "1px solid #222222",
              borderRadius: "9999px",
              padding: "0.5rem 1rem",
              fontSize: "0.6rem",
              color: "#444444",
              fontFamily: "var(--font-geist-mono), monospace",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              alignSelf: "flex-start",
              marginTop: "0.75rem",
            }}
          >
            SKILLS &amp; SERVICES
          </div>
        </motion.div>

        {/* Service rows */}
        <div style={{ borderTop: "1px solid #1a1a1a" }}>
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "1.75rem 0.75rem",
                borderBottom: "1px solid #1a1a1a",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
              whileHover={{ backgroundColor: "#0a0a0a" }}
              onClick={scrollToContact}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
                <span
                  style={{
                    fontSize: "0.65rem",
                    color: "#444444",
                    fontFamily: "var(--font-geist-mono), monospace",
                    letterSpacing: "0.1em",
                    minWidth: "2rem",
                  }}
                >
                  {s.num}
                </span>
                <span
                  style={{
                    fontSize: "clamp(1.75rem, 3.5vw, 3.25rem)",
                    fontWeight: 900,
                    color: "#ffffff",
                    textTransform: "uppercase",
                    letterSpacing: "-0.01em",
                    lineHeight: 1,
                  }}
                >
                  {s.name}
                </span>
              </div>

              {/* Arrow in small circle */}
              <div
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "50%",
                  border: "1px solid #333333",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <span style={{ fontSize: "1rem", color: "#666666" }}>↗</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
