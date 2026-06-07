"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TICKER_ITEMS = [
  "NEXT.JS",
  "TAILWINDCSS",
  "POSTGRESQL",
  "FIGMA",
  "REACT",
  "HTML5",
  "CSS3",
  "PYTHON",
  "OSINT",
  "GIT",
  "TYPESCRIPT",
  "FRAMER MOTION",
  "BOOTSTRAP",
  "LINUX",
  "VS CODE",
  "NEXTAUTH",
];

const services = [
  {
    num: "01",
    name: "WEB DEVELOPMENT",
    description:
      "Building fast, responsive, and SEO-friendly websites using modern technologies like Next.js, React, and Tailwind CSS. From landing pages to complex web apps.",
    tags: [
      "Responsive Design",
      "Next.js & React",
      "API Integration",
      "Performance Setup",
    ],
  },
  {
    num: "02",
    name: "LOGO DESIGNING",
    description:
      "Crafting unique and memorable visual identities that capture your brand's essence. Professional logos that work perfectly across all digital and print media.",
    tags: ["Custom Concepts", "Vector Scaling", "Brand Guidelines"],
  },
  {
    num: "03",
    name: "UI DESIGNING",
    description:
      "Creating beautiful, intuitive, and user-centered interfaces. Focusing on user experience to ensure your product is both functional and aesthetically pleasing.",
    tags: ["Figma Prototypes", "Wireframing", "User Flows", "Design Systems"],
  },
  {
    num: "04",
    name: "PC BUILDING",
    description:
      "Expert PC building services tailored to your needs. From high-end gaming rigs to professional workstations, ensuring optimal performance and aesthetics.",
    tags: [
      "Parts Selection",
      "Cable Management",
      "OS Installation",
      "Testing & Benchmarking",
    ],
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  // Render exactly 2 copies — translateX(-50%) loops back to start seamlessly
  const copies = [0, 1];

  return (
    <section id="services" style={{ background: "transparent" }}>
      {/* Ticker strip */}
      <div
        className="glass-panel"
        style={{
          borderLeft: "none",
          borderRight: "none",
          borderRadius: "0px",
          padding: "0.85rem 0",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
        aria-hidden="true"
      >
        <div className="ticker-outer">
          {copies.map((c) => (
            <span key={c} className="ticker-set">
              {TICKER_ITEMS.map((item, index) => (
                <span
                  key={item}
                  className="ticker-item"
                  style={{ color: index % 2 === 0 ? "#ffc400" : "#ffffff" }}
                >
                  {item}
                  <span
                    className="ticker-dot"
                    style={{ color: index % 2 === 0 ? "#ffffff" : "#ffffff" }}
                  >
                    •
                  </span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <div
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "4rem 2rem" }}
      >
        {/* Heading row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: "3rem",
          }}
        >
          <div>
            <h2
              className="text-gradient"
              style={{
                fontSize: "clamp(3.5rem, 8vw, 8.5rem)",
                fontWeight: 900,
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
                color: "#6d28d9",
                textTransform: "uppercase",
                lineHeight: 0.88,
                letterSpacing: "-0.02em",
              }}
            >
              OFFER
            </h2>
          </div>

          <div
            className="glass-panel"
            style={{
              borderRadius: "9999px",
              padding: "0.5rem 1rem",
              fontSize: "0.6rem",
              color: "#a8a8a8",
              fontFamily: "var(--font-space-mono), monospace",
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
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              className="glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "2.5rem 2rem",
                cursor: "pointer",
              }}
              whileHover={{
                scale: 1.01,
                boxShadow: "0 10px 40px rgba(109, 40, 217, 0.1)",
              }}
              onClick={scrollToContact}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Top Row (Number, Title, and Arrow) */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2.5rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.8rem",
                      color: "#a8a8a8",
                      fontFamily: "var(--font-space-mono), monospace",
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
                      color: i % 2 === 0 ? "#ffc400" : "#ffffff",
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
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "50%",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    background:
                      hoveredIndex === i
                        ? "rgba(109, 40, 217, 0.2)"
                        : "rgba(255, 255, 255, 0.03)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "all 0.3s ease",
                    transform:
                      hoveredIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                  className="service-arrow"
                >
                  <span style={{ fontSize: "1.2rem", color: "#ffffff" }}>
                    ↗
                  </span>
                </div>
              </div>

              {/* Expandable Content Area */}
              <AnimatePresence>
                {hoveredIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <div
                      style={{
                        paddingTop: "2rem",
                        paddingLeft: "clamp(4.5rem, 6vw, 6.5rem)",
                        paddingRight: "1rem",
                      }}
                    >
                      <p
                        style={{
                          color: "#d1d5db",
                          fontSize: "1rem",
                          lineHeight: 1.6,
                          marginBottom: "1.5rem",
                          maxWidth: "800px",
                        }}
                      >
                        {s.description}
                      </p>

                      <div
                        style={{
                          display: "flex",
                          gap: "0.75rem",
                          flexWrap: "wrap",
                        }}
                      >
                        {s.tags.map((tag) => (
                          <span
                            key={tag}
                            style={{
                              padding: "0.4rem 1rem",
                              background: "rgba(255, 255, 255, 0.05)",
                              border: "1px solid rgba(255, 255, 255, 0.1)",
                              borderRadius: "9999px",
                              fontSize: "0.8rem",
                              color: "#abababff",
                              fontFamily: "var(--font-space-mono), monospace",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
