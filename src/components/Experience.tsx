"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    num: "01",
    period: "PRESENT",
    role: "IT HELP DESK",
    company: "QUICKSTART TECHNOLOGIES",
    current: true,
    bullets: [
      "Ticket management on JIRA",
      "Identity & access via Okta",
      "AWS cloud infrastructure",
      "IronCircle platform operations",
    ],
  },
  {
    num: "02",
    period: "2022 – PRESENT",
    role: "FULL STACK DEVELOPER",
    company: "FREELANCE",
    bullets: [
      "HTML5, CSS3, JS, Bootstrap",
      "Next.js & React",
      "PostgreSQL & Tailwind CSS",
      "Git / GitHub",
    ],
  },
  {
    num: "03",
    period: "2024 – 2025",
    role: "APTECH PAKISTAN (ACCPAi)",
    company: "APTECH COMPUTER EDUCATION",
    current: false,
    bullets: ["UI/UX Design with Figma", "PHP / MySQL / Laravel"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
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
            YEARS OF
          </h2>
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
            PROFESSIONAL
          </h2>
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
            EXPERIENCE.
          </h2>
        </motion.div>

        {/* Timeline entries */}
        <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}>
          {timeline.map((entry, i) => (
            <motion.div
              key={entry.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              style={{
                padding: "2.5rem 0.5rem",
                borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
              }}
            >
              {/* Top label row */}
              <p
                style={{
                  fontSize: "0.62rem",
                  color: "#ffffff",
                  fontFamily: "var(--font-space-mono), monospace",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                {entry.current && (
                  <span
                    className="status-dot"
                    style={{ width: "6px", height: "6px" }}
                  />
                )}
                {entry.num} /// {entry.period}
              </p>

              {/* Role */}
              <h3
                style={{
                  fontSize: "clamp(1.5rem, 3.5vw, 2.75rem)",
                  fontWeight: 900,
                  color: "#ffc400",
                  textTransform: "uppercase",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                }}
              >
                {entry.role}
              </h3>

              {/* Company */}
              <p
                style={{
                  fontSize: "0.62rem",
                  color: "#abababff",
                  fontFamily: "var(--font-space-mono), monospace",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "1.25rem",
                }}
              >
                {entry.company}
              </p>

              {/* Bullets in two columns */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                  gap: "0.5rem 2rem",
                }}
              >
                {entry.bullets.map((b) => (
                  <div
                    key={b}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      fontSize: "0.82rem",
                      color: "#ffffff",
                    }}
                  >
                    <span
                      style={{
                        width: "16px",
                        height: "1px",
                        background: "rgba(255, 255, 255, 0.15)",
                        flexShrink: 0,
                      }}
                    />
                    {b}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
