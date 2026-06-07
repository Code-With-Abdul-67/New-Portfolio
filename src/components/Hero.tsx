"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const cyclingTexts = [
  "IT Help Desk @ Quickstart",
  "Building Web Apps...",
  "Designing UIs...",
  "Shipping Products...",
];

const stackPills = ["Next.js", "React", "PostgreSQL", "+ More"];

export default function Hero() {
  const [cycleIdx, setCycleIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCycleIdx((i) => (i + 1) % cyclingTexts.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      style={{
        paddingTop: "80px",
        minHeight: "100vh",
        background: "transparent",
      }}
    >
      <div
        className="hero-section-inner"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "1.5rem 1.5rem",
          minHeight: "calc(100vh - 80px)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "3fr 2fr",
            gap: "1.25rem",
            width: "100%",
          }}
        >
          {/* ── LEFT CARD ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="glass-panel hero-left-card"
            style={{
              borderRadius: "1.25rem",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              minHeight: "540px",
            }}
          >
            {/* Top row: badge + resume */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  border: "1px solid #6d28d9",
                  borderRadius: "9999px",
                  padding: "0.3rem 0.85rem",
                  fontSize: "0.65rem",
                  color: "#ffc400",
                  letterSpacing: "0.08em",
                  fontFamily: "var(--font-space-mono), monospace",
                  textTransform: "uppercase",
                }}
              >
                ABDUL BASEER / DEV
              </span>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sheen"
                style={{
                  border: "1px solid #2a2a2a",
                  borderRadius: "9999px",
                  padding: "0.3rem 0.85rem",
                  fontSize: "0.65rem",
                  color: "#ffffff",
                  textDecoration: "none",
                  letterSpacing: "0.08em",
                  fontFamily: "var(--font-space-mono), monospace",
                  textTransform: "uppercase",
                }}
              >
                VIEW RESUME
              </a>
            </div>

            {/* Big name */}
            <div style={{ lineHeight: 0.88, flex: 1 }}>
              <h1
                className="text-gradient hero-name-text"
                style={{
                  fontSize: "clamp(4.5rem, 8vw, 9rem)",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "-0.02em",
                  lineHeight: 0.88,
                }}
              >
                ABDUL
              </h1>
              <h1
                className="hero-name-text"
                style={{
                  fontSize: "clamp(4.5rem, 8vw, 9rem)",
                  fontWeight: 900,
                  color: "#6d28d9",
                  textTransform: "uppercase",
                  letterSpacing: "-0.02em",
                  lineHeight: 0.88,
                }}
              >
                BASEER
              </h1>
            </div>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "0.65rem",
                color: "#9e9e9e",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontFamily: "var(--font-space-mono), monospace",
                lineHeight: 1.7,
              }}
            >
              FULL STACK DEVELOPER BUILDING MODERN WEB APPS,
              <br />
              AI-POWERED TOOLS, AND DIGITAL EXPERIENCES.
            </p>

            {/* Bottom two sub-cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.875rem",
                marginTop: "auto",
              }}
              className="hero-subcards"
            >
              {/* Left sub-card: Current Status */}
              <div
                className="glass-panel"
                style={{
                  borderRadius: "0.875rem",
                  padding: "1rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.58rem",
                    color: "#ffffff",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-space-mono), monospace",
                    marginBottom: "0.6rem",
                  }}
                >
                  CURRENT / STATUS
                </p>
                <div
                  style={{
                    minHeight: "1.4rem",
                    overflow: "hidden",
                    marginBottom: "0.6rem",
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={cycleIdx}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        fontSize: "0.78rem",
                        color: "#ffffff",
                        fontWeight: 600,
                      }}
                    >
                      {cyclingTexts[cycleIdx]}
                    </motion.p>
                  </AnimatePresence>
                </div>
                <p
                  style={{
                    fontSize: "0.55rem",
                    color: "#9e9e9e",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-space-mono), monospace",
                  }}
                >
                  IT HELPDESK / QUICKSTART TECHNOLOGIES
                </p>
              </div>

              {/* Right sub-card: Stack */}
              <div
                className="glass-panel"
                style={{
                  borderRadius: "0.875rem",
                  padding: "1rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.58rem",
                    color: "#ffffff",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-space-mono), monospace",
                    marginBottom: "0.6rem",
                  }}
                >
                  STACK
                </p>
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}
                >
                  {stackPills.map((p) => (
                    <span
                      key={p}
                      style={{
                        background: "#1a1a1a",
                        border: "1px solid #222222",
                        borderRadius: "9999px",
                        padding: "0.2rem 0.6rem",
                        fontSize: "0.6rem",
                        color:
                          p === "Next.js"
                            ? "#22c55e"
                            : p === "React"
                              ? "#3b82f6"
                              : p === "PostgreSQL"
                                ? "#facc15"
                                : "#ffffff",
                        fontFamily: "var(--font-space-mono), monospace",
                      }}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT CARD — Photo ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="hero-photo-card"
            style={{
              border: "1px solid #1a1a1a",
              borderRadius: "1.25rem",
              overflow: "hidden",
              position: "relative",
              minHeight: "540px",
            }}
          >
            <Image
              src="/profile.jpg"
              alt="Abdul Baseer"
              fill
              className="object-cover object-top"
              priority
            />

            {/* Bottom overlay badge */}
            <div
              style={{
                position: "absolute",
                bottom: "1.25rem",
                left: "50%",
                transform: "translateX(-50%)",
                background: "rgba(0,0,0,0.85)",
                border: "1px solid #2a2a2a",
                borderRadius: "9999px",
                padding: "0.55rem 1.4rem",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                whiteSpace: "nowrap",
              }}
            >
              <span
                style={{
                  fontSize: "0.58rem",
                  color: "#555555",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-space-mono), monospace",
                }}
              >
                STATUS
              </span>
              <span className="status-dot" />
              <span
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 900,
                  color: "#ffffff",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                OPEN FOR WORK
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-section-inner {
            padding: 1rem !important;
            min-height: auto !important;
            align-items: flex-start !important;
          }
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          .hero-left-card {
            min-height: auto !important;
            padding: 1.25rem !important;
          }
          .hero-subcards {
            grid-template-columns: 1fr 1fr !important;
          }
          .hero-photo-card {
            min-height: 260px !important;
          }
          .hero-name-text {
            font-size: clamp(3rem, 18vw, 5.5rem) !important;
          }
        }
        @media (max-width: 400px) {
          .hero-subcards {
            grid-template-columns: 1fr !important;
          }
          .hero-name-text {
            font-size: clamp(2.5rem, 18vw, 4rem) !important;
          }
        }
      `}</style>
    </section>
  );
}
