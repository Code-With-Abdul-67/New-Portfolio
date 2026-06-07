"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    num: "01",
    category: "WEB DEVELOPMENT",
    titleLine1: "FULL STACK.",
    description:
      "Building modern web apps with Next.js, React, PostgreSQL and Tailwind CSS.",
  },
  {
    num: "02",
    category: "IT OPERATIONS",
    titleLine1: "HELPDESK.",
    titleLine2: "SUPPORT.",
    description: "JIRA, Okta, AWS, and IronCircle platform management.",
  },
    {
    num: "03",
    category: "AI INTEGRATION",
    titleLine1: "SMART.",
    titleLine2: "AUTOMATION.",
    description: "AI-powered apps with Gemini API, Prisma, and LLM tooling.",
  },
  {
    num: "04",
    category: "CYBERSECURITY",
    titleLine1: "SECURE.",
    titleLine2: "BY DESIGN.",
    description: "OSINT, Wifi Pentesting, and network security assessments.",
  },
  {
    num: "05",
    category: "UI/UX DESIGN",
    titleLine1: "BEAUTIFUL.",
    titleLine2: "INTERFACES.",
    description:
      "Crafting intuitive interfaces with Figma prototypes and design systems.",
  },
  {
    num: "06",
    category: "DEPLOYMENT",
    titleLine1: "SHIP.",
    titleLine2: "WITH CONFIDENCE.",
    description: "Vercel deployments, Git workflows, and CI/CD basics.",
  },
];

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      style={{ background: "transparent", padding: "6rem 0" }}
    >
      <div
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}
        className="section-inner"
      >
        {/* Big 3-line heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "3.5rem" }}
        >
          <h2
            className="text-gradient"
            style={{
              fontSize: "clamp(3rem, 7vw, 7rem)",
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
            }}
          >
            BUILDING
          </h2>
          {/* Stroke / outlined text line */}
          <h2
            className="text-stroke"
            style={{
              fontSize: "clamp(3rem, 7vw, 7rem)",
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              WebkitTextStroke: "1px rgba(255,255,255,0.18)",
              color: "transparent",
            }}
          >
            DIGITAL
          </h2>
          <h2
            style={{
              fontSize: "clamp(3rem, 7vw, 7rem)",
              fontWeight: 900,
              color: "#6d28d9",
              textTransform: "uppercase",
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
            }}
          >
            EXPERIENCES.
          </h2>
        </motion.div>

        {/* 3-column grid */}
        <div
          className="caps-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            border: "1px solid rgba(255, 255, 255, 0.06)",
            borderRadius: "1rem",
            overflow: "hidden",
          }}
        >
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="glass-panel caps-cell"
              style={{
                padding: "2rem 1.75rem",
                borderRadius: "0px",
                border: "none !important",
                borderRight:
                  (i + 1) % 3 !== 0
                    ? "1px solid rgba(255, 255, 255, 0.06)"
                    : "none",
                borderBottom:
                  i < capabilities.length - 3
                    ? "1px solid rgba(255, 255, 255, 0.06)"
                    : "none",
              }}
            >
              {/* Small label */}
              <p
                style={{
                  fontSize: "0.58rem",
                  color: "#abababff",
                  fontFamily: "var(--font-space-mono), monospace",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "1.25rem",
                }}
              >
                {cap.num} /// {cap.category}
              </p>

              {/* Title */}
              <div style={{ marginBottom: "1rem" }}>
                <h3
                  style={{
                    fontSize: "clamp(1.1rem, 1.8vw, 1.6rem)",
                    fontWeight: 900,
                    color: "#702ea2",
                    textTransform: "uppercase",
                    lineHeight: 1.05,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {cap.titleLine1 === "FULL STACK." ? (
                    <>
                      <span style={{ color: "#ffc400" }}>FULLSTACK.</span>
                    </>
                  ) : (
                    cap.titleLine1
                  )}
                </h3>
                {cap.titleLine2 && (
                  <h3
                    style={{
                      fontSize: "clamp(1.1rem, 1.8vw, 1.6rem)",
                      fontWeight: 900,
                      color: "#ffc400",
                      textTransform: "uppercase",
                      lineHeight: 1.05,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {cap.titleLine2}
                  </h3>
                )}
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#ffffff",
                  lineHeight: 1.7,
                }}
              >
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .caps-grid {
            grid-template-columns: 1fr !important;
          }
          .caps-cell {
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.06) !important;
          }
          .caps-cell:last-child {
            border-bottom: none !important;
          }
        }
        @media (min-width: 601px) and (max-width: 900px) {
          .caps-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .caps-cell {
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.06) !important;
          }
          .caps-cell:nth-child(odd) {
            border-right: 1px solid rgba(255,255,255,0.06) !important;
          }
          .caps-cell:last-child, .caps-cell:nth-last-child(2):nth-child(odd) {
            border-bottom: none !important;
          }
        }
      `}</style>
    </section>
  );
}
