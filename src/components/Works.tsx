"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Project {
  num: string;
  name: string;
  category: string;
  tech: string;
  live: string | null;
  github: string;
  image: string | null;
  emoji?: string;
}

const projects: Project[] = [
  {
    num: "01",
    name: "AI RESUME ANALYZER",
    category: "AI TOOL",
    tech: "NEXT.JS / TYPESCRIPT / GEMINI AI / PRISMA",
    live: "https://ai-resume-analayzer-iota.vercel.app/",
    github: "https://github.com/Code-With-Abdul-67/AI-Resume-Analayzer",
    image: "/projects/airesume.png",
  },
  {
    num: "02",
    name: "NEXT NOTES",
    category: "FULL STACK / AI",
    tech: "NEXT.JS / POSTGRESQL / GEMINI AI / NEXTAUTH",
    live: "https://next-notes-sable.vercel.app/",
    github: "https://github.com/Code-With-Abdul-67/Next-Notes",
    image: "/projects/nextnotes.png",
  },
  {
    num: "03",
    name: "NEXT WEATHER",
    category: "WEB APP",
    tech: "NEXT.JS / TAILWIND CSS / OPENWEATHERMAP API",
    live: "https://next-weather-sable.vercel.app/",
    github: "https://github.com/Code-With-Abdul-67/Next-Weather-App",
    image: "/projects/next-weather.png",
  },
  {
    num: "04",
    name: "PHONSINT",
    category: "PYTHON / OSINT",
    tech: "PYTHON 3",
    live: null,
    github: "https://github.com/Code-With-Abdul-67/PhonSint",
    image: "/projects/phonsint.png",
  },
  {
    num: "05",
    name: "NET SWITCH",
    category: "CLI TOOL",
    tech: "BASH",
    live: null,
    github: "https://github.com/Code-With-Abdul-67/Net-Switch",
    image: "/projects/netswitch.png",
  },
];

export default function Works() {
  const [activeIndex, setActiveIndex] = useState(0);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    projectRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(i);
          }
        },
        { threshold: 0.5 },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const active = projects[activeIndex];

  return (
    <section
      id="works"
      style={{ background: "transparent", padding: "6rem 0 0" }}
    >
      <div
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}
      >
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          <div>
            <h2
              className="text-gradient"
              style={{
                fontSize: "clamp(2.5rem, 8vw, 8.5rem)",
                fontWeight: 900,
                textTransform: "uppercase",
                lineHeight: 0.88,
                letterSpacing: "-0.02em",
              }}
            >
              SELECTED
            </h2>
            <h2
              className="text-gradient"
              style={{
                fontSize: "clamp(2.5rem, 8vw, 8.5rem)",
                fontWeight: 900,
                textTransform: "uppercase",
                lineHeight: 0.88,
                letterSpacing: "-0.02em",
              }}
            >
              WORKS
            </h2>
          </div>

          <div
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "9999px",
              padding: "0.5rem 1rem",
              fontSize: "0.6rem",
              color: "#666666",
              fontFamily: "var(--font-space-mono), monospace",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            CASE STUDIES · 0{projects.length} PROJECTS
          </div>
        </motion.div>

        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.06)",
            marginBottom: "0",
          }}
        />
      </div>

      {/* Two-column sticky layout */}
      <div
        className="works-layout"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2.5rem",
          display: "grid",
          gridTemplateColumns: "2fr 3fr",
          gap: "3rem",
          alignItems: "start",
        }}
      >
        {/* LEFT — Sticky info panel */}
        <div
          className="works-sticky-panel"
          style={{
            position: "sticky",
            top: "88px",
            paddingTop: "4rem",
            paddingBottom: "4rem",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
            >
              {/* Number */}
              <p
                style={{
                  fontSize: "0.65rem",
                  color: "#444444",
                  fontFamily: "var(--font-space-mono), monospace",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                {active.num} / {projects.length.toString().padStart(2, "0")}
              </p>

              {/* Category pill */}
              <div style={{ marginBottom: "1.25rem" }}>
                <span
                  style={{
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "9999px",
                    padding: "0.3rem 0.85rem",
                    fontSize: "0.6rem",
                    color: "#666666",
                    fontFamily: "var(--font-space-mono), monospace",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {active.category}
                </span>
              </div>

              {/* Project name */}
              <h3
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 3.25rem)",
                  fontWeight: 900,
                  color: "#6d28d9",
                  textTransform: "uppercase",
                  lineHeight: 0.95,
                  letterSpacing: "-0.02em",
                  marginBottom: "1.5rem",
                }}
              >
                {active.name}
              </h3>

              {/* Tech stack */}
              <p
                style={{
                  fontSize: "0.62rem",
                  color: "#444444",
                  fontFamily: "var(--font-space-mono), monospace",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  lineHeight: 1.9,
                  marginBottom: "1.5rem",
                }}
              >
                {active.tech}
              </p>

              {/* Divider */}
              <div
                style={{
                  borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                  marginBottom: "1.5rem",
                }}
              />

              {/* Links */}
              <div
                style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}
              >
                {active.live && (
                  <a
                    href={active.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-sheen"
                    style={{
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      borderRadius: "9999px",
                      padding: "0.45rem 1.1rem",
                      fontSize: "0.62rem",
                      color: "#ffffff",
                      textDecoration: "none",
                      fontFamily: "var(--font-space-mono), monospace",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    VIEW LIVE
                  </a>
                )}
                <a
                  href={active.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-sheen"
                  style={{
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "9999px",
                    padding: "0.45rem 1.1rem",
                    fontSize: "0.62rem",
                    color: "#666666",
                    textDecoration: "none",
                    fontFamily: "var(--font-space-mono), monospace",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  VIEW CODE
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT — Scrolling project cards */}
        <div className="works-right-panel">
          {projects.map((project, i) => (
            <div
              key={project.num}
              ref={(el) => {
                projectRefs.current[i] = el;
              }}
              style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "3rem 0",
              }}
            >
              <div
                className="glass-panel"
                style={{
                  borderRadius: "1.25rem",
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {/* Image or emoji placeholder */}
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "16/9",
                    background: "rgba(0, 0, 0, 0.2)",
                    borderRadius: "0.875rem",
                    overflow: "hidden",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                  }}
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  ) : (
                    <span style={{ fontSize: "5rem" }}>{project.emoji}</span>
                  )}
                </div>

                {/* Card bottom row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        marginBottom: "0.2rem",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "0.6rem",
                          color: "#888888",
                          fontFamily: "var(--font-space-mono), monospace",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                        }}
                      >
                        {project.num} //
                      </p>
                      <p
                        style={{
                          fontSize: "0.6rem",
                          color: "#6d28d9",
                          fontFamily: "var(--font-space-mono), monospace",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                        }}
                      >
                        {project.category}
                      </p>
                    </div>
                    <p
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "#ffffff",
                        textTransform: "uppercase",
                        letterSpacing: "0.02em",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {project.name}
                    </p>

                    {/* Mobile Only Details */}
                    <div
                      className="mobile-project-details"
                      style={{ display: "none" }}
                    >
                      <p
                        style={{
                          fontSize: "0.55rem",
                          color: "#666666",
                          fontFamily: "var(--font-space-mono), monospace",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          lineHeight: 1.6,
                        }}
                      >
                        {project.tech}
                      </p>
                    </div>
                  </div>

                  <a
                    href={project.live ?? project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-sheen"
                    style={{
                      border: "1px solid #333333",
                      borderRadius: "9999px",
                      padding: "0.45rem 1.1rem",
                      fontSize: "0.62rem",
                      color: "#888888",
                      textDecoration: "none",
                      fontFamily: "var(--font-space-mono), monospace",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    {project.live ? "VIEW LIVE ↗" : "VIEW CODE ↗"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .works-layout {
            grid-template-columns: 1fr !important;
            padding: 0 1.25rem !important;
            gap: 2rem !important;
          }
          .works-sticky-panel {
            display: none !important;
          }
          .works-right-panel > div {
            min-height: auto !important;
            padding: 1.5rem 0 !important;
          }
          .mobile-project-details {
            display: block !important;
          }
        }
        @media (max-width: 900px) {
          .works-header {
            padding: 0 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
