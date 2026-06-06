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
      style={{ paddingTop: "64px", minHeight: "100vh", background: "#000000" }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "1.5rem 2.5rem",
          minHeight: "calc(100vh - 64px)",
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
            style={{
              background: "#111111",
              border: "1px solid #1a1a1a",
              borderRadius: "1.25rem",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              minHeight: "540px",
            }}
          >
            {/* Top row: badge + resume */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span
                style={{
                  border: "1px solid #2a2a2a",
                  borderRadius: "9999px",
                  padding: "0.3rem 0.85rem",
                  fontSize: "0.65rem",
                  color: "#666666",
                  letterSpacing: "0.08em",
                  fontFamily: "var(--font-geist-mono), monospace",
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
                  color: "#666666",
                  textDecoration: "none",
                  letterSpacing: "0.08em",
                  fontFamily: "var(--font-geist-mono), monospace",
                  textTransform: "uppercase",
                }}
              >
                VIEW RESUME ↗
              </a>
            </div>

            {/* Big name */}
            <div style={{ lineHeight: 0.88, flex: 1 }}>
              <h1
                style={{
                  fontSize: "clamp(4.5rem, 8vw, 9rem)",
                  fontWeight: 900,
                  color: "#ffffff",
                  textTransform: "uppercase",
                  letterSpacing: "-0.02em",
                  lineHeight: 0.88,
                }}
              >
                ABDUL
              </h1>
              <h1
                style={{
                  fontSize: "clamp(4.5rem, 8vw, 9rem)",
                  fontWeight: 900,
                  color: "#ffffff",
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
                color: "#444444",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontFamily: "var(--font-geist-mono), monospace",
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
                style={{
                  background: "#0d0d0d",
                  border: "1px solid #1a1a1a",
                  borderRadius: "0.875rem",
                  padding: "1rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.58rem",
                    color: "#444444",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-geist-mono), monospace",
                    marginBottom: "0.6rem",
                  }}
                >
                  CURRENT / STATUS
                </p>
                <div style={{ minHeight: "1.4rem", overflow: "hidden", marginBottom: "0.6rem" }}>
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
                    color: "#333333",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-geist-mono), monospace",
                  }}
                >
                  IT HELPDESK / QUICKSTART TECHNOLOGIES
                </p>
              </div>

              {/* Right sub-card: Stack */}
              <div
                style={{
                  background: "#0d0d0d",
                  border: "1px solid #1a1a1a",
                  borderRadius: "0.875rem",
                  padding: "1rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.58rem",
                    color: "#444444",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-geist-mono), monospace",
                    marginBottom: "0.6rem",
                  }}
                >
                  STACK
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                  {stackPills.map((p) => (
                    <span
                      key={p}
                      style={{
                        background: "#1a1a1a",
                        border: "1px solid #222222",
                        borderRadius: "9999px",
                        padding: "0.2rem 0.6rem",
                        fontSize: "0.6rem",
                        color: "#888888",
                        fontFamily: "var(--font-geist-mono), monospace",
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
                  fontFamily: "var(--font-geist-mono), monospace",
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
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-subcards {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
