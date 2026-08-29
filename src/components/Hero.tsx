"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const cyclingTexts = [
  "Platform Support @ Quickstart",
  "Building Web Apps...",
  "Designing UIs...",
  "Shipping Products...",
  "Integrating AI Tools...",
];

export default function Hero() {
  const [cycleIdx, setCycleIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCycleIdx((i) => (i + 1) % cyclingTexts.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  const scrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector("#works") as HTMLElement | null;
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
  };

  return (
    <section
      id="home"
      style={{ paddingTop: "80px", minHeight: "100vh", background: "transparent" }}
    >
      <div
        className="hero-section-inner"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "1.5rem",
          minHeight: "calc(100vh - 80px)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="hero-grid glass-panel"
          style={{
            display: "grid",
            gridTemplateColumns: "3fr 2fr",
            width: "100%",
            borderRadius: "1.25rem",
            overflow: "hidden",
            padding: "0.5rem",
          }}
        >
          {/* ── LEFT CARD ── */}
          <div
            className="hero-left-card"
            style={{
              padding: "2rem 2.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              minHeight: "520px",
            }}
          >
            {/* Top row: badges */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
              <span style={{
                border: "1px solid #6d28d9",
                borderRadius: "9999px",
                padding: "0.3rem 0.85rem",
                fontSize: "0.62rem",
                color: "#ffc400",
                letterSpacing: "0.1em",
                fontFamily: "var(--font-space-mono), monospace",
                textTransform: "uppercase",
              }}>
                PLATFORM SUPPORT ENGINEER & FULLSTACK DEVELOPER
              </span>
              <span style={{
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "9999px",
                padding: "0.3rem 0.85rem",
                fontSize: "0.62rem",
                color: "#cccccc",
                letterSpacing: "0.1em",
                fontFamily: "var(--font-space-mono), monospace",
                textTransform: "uppercase",
              }}>
                📍 KARACHI, PK
              </span>
            </div>

            {/* Big name */}
            <div>
              <h1 className="text-gradient hero-name-text" style={{
                fontSize: "clamp(4.5rem, 8vw, 9rem)",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
                lineHeight: 0.88,
                display: "block",
              }}>
                ABDUL
              </h1>
              <h1 className="text-gradient" style={{
                fontSize: "clamp(4.5rem, 8vw, 9rem)",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
                lineHeight: 0.88,
                display: "block",
              }}>
                BASEER
              </h1>
            </div>

            {/* OPEN FOR WORK */}
            <div>
              <div style={{
                background: "rgba(2, 191, 71, 0.08)",
                border: "1px solid rgba(2, 191, 71, 0.3)",
                borderRadius: "9999px",
                padding: "0.4rem 1rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
              }}>
                <span className="status-dot" />
                <span style={{
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  color: "#4ade80",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-space-mono), monospace",
                }}>
                  OPEN FOR WORK
                </span>
              </div>
            </div>

            {/* CTA buttons */}
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sheen"
                style={{
                  border: "1px solid rgba(109,40,217,0.5)",
                  borderRadius: "9999px",
                  padding: "0.6rem 1.4rem",
                  fontSize: "0.68rem",
                  color: "#ffffff",
                  textDecoration: "none",
                  letterSpacing: "0.1em",
                  fontFamily: "var(--font-space-mono), monospace",
                  textTransform: "uppercase",
                  background: "rgba(109,40,217,0.12)",
                }}
              >
                VIEW RESUME ↗
              </a>
              <a
                href="#works"
                onClick={scrollToWork}
                className="btn-sheen"
                style={{
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "9999px",
                  padding: "0.6rem 1.4rem",
                  fontSize: "0.68rem",
                  color: "#aaaaaa",
                  textDecoration: "none",
                  letterSpacing: "0.1em",
                  fontFamily: "var(--font-space-mono), monospace",
                  textTransform: "uppercase",
                }}
              >
                VIEW WORK →
              </a>
            </div>

            {/* Bottom sub-cards */}
            <div
              className="hero-subcards"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.875rem",
                marginTop: "auto",
              }}
            >
              {/* Status card */}
              <div className="glass-panel" style={{
                borderRadius: "0.875rem",
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "110px",
              }}>
                <p style={{ fontSize: "0.52rem", color: "#555555", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "var(--font-space-mono), monospace" }}>
                  CURRENT / STATUS
                </p>
                <div style={{ overflow: "hidden" }}>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={cycleIdx}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3 }}
                      style={{ fontSize: "0.78rem", color: "#ffffff", fontWeight: 600 }}
                    >
                      {cyclingTexts[cycleIdx]}
                    </motion.p>
                  </AnimatePresence>
                </div>
                <p style={{ fontSize: "0.48rem", color: "#444444", letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "var(--font-space-mono), monospace" }}>
                  JR. PLATFORM SUPPORT SPECIALIST / QUICKSTART TECHNOLOGIES
                </p>
              </div>

            </div>
          </div>

          {/* ── RIGHT CARD — Photo ── */}
          <div
            className="hero-photo-card"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem 1.5rem",
            }}
          >
            {/* Fixed-size photo container — 70% wide, explicit height */}
            <div style={{
              position: "relative",
              width: "80%",
              height: "480px",
              borderRadius: "0.875rem",
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <Image
                src="/profile.png"
                alt="Abdul Baseer"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Gradient overlay */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: "40%",
                background: "linear-gradient(to top, rgba(3,3,7,0.9) 0%, transparent 100%)",
                pointerEvents: "none",
              }} />         
            </div>
          </div>

        </motion.div>
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
          }
          .hero-left-card {
            min-height: auto !important;
            padding: 1.25rem !important;
            gap: 1rem !important;
          }
          .hero-subcards {
            grid-template-columns: 1fr 1fr !important;
          }
          .hero-photo-card {
            padding: 1rem !important;
          }
          .hero-photo-card > div {
            width: 85% !important;
            height: 280px !important;
          }
          .hero-name-text {
            font-size: clamp(3.2rem, 18vw, 5.5rem) !important;
          }
        }
        @media (max-width: 420px) {
          .hero-subcards {
            grid-template-columns: 1fr !important;
          }
          .hero-name-text {
            font-size: clamp(2.8rem, 18vw, 4rem) !important;
          }
        }
      `}</style>
    </section>
  );
}
