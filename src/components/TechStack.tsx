"use client";

import { motion } from "framer-motion";

const techGroups = [
  {
    category: "FRONTEND",
    color: "#a78bfa",
    techs: [
      { name: "Next.js", level: 90 },
      { name: "React", level: 88 },
      { name: "TypeScript", level: 82 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 78 },
    ],
  },
  {
    category: "BACKEND & DB",
    color: "#ffc400",
    techs: [
      { name: "Node.js / API Routes", level: 82 },
      { name: "PostgreSQL", level: 78 },
      { name: "Prisma ORM", level: 80 },
      { name: "NextAuth.js", level: 75 },
      { name: "REST APIs", level: 88 },
    ],
  },
  {
    category: "TOOLS & OTHER",
    color: "#34d399",
    techs: [
      { name: "Git & GitHub", level: 90 },
      { name: "Figma", level: 80 },
      { name: "Python", level: 72 },
      { name: "Linux / Bash", level: 75 },
      { name: "Gemini AI / LLMs", level: 78 },
    ],
  },
];

function SkillBar({
  name,
  level,
  color,
  delay,
}: {
  name: string;
  level: number;
  color: string;
  delay: number;
}) {
  return (
    <div style={{ marginBottom: "1.1rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "0.35rem",
        }}
      >
        <span
          style={{
            fontSize: "0.72rem",
            color: "#cccccc",
            fontFamily: "var(--font-space-mono), monospace",
            letterSpacing: "0.06em",
          }}
        >
          {name}
        </span>
        <span
          style={{
            fontSize: "0.62rem",
            color: color,
            fontFamily: "var(--font-space-mono), monospace",
          }}
        >
          {level}%
        </span>
      </div>
      <div
        style={{
          height: "3px",
          background: "rgba(255,255,255,0.06)",
          borderRadius: "9999px",
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
          style={{
            height: "100%",
            background: `linear-gradient(90deg, ${color}99, ${color})`,
            borderRadius: "9999px",
            boxShadow: `0 0 8px ${color}55`,
          }}
        />
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section
      id="techstack"
      style={{ background: "transparent", padding: "6rem 0" }}
    >
      <div
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}
        className="section-inner"
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginBottom: "3.5rem",
          }}
        >
          <div>
            <h2
              className="text-gradient"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 6.5rem)",
                fontWeight: 900,
                textTransform: "uppercase",
                lineHeight: 0.9,
                letterSpacing: "-0.02em",
              }}
            >
              TECH
            </h2>
            <h2
              className="text-stroke"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 6.5rem)",
                fontWeight: 900,
                textTransform: "uppercase",
                lineHeight: 0.9,
                letterSpacing: "-0.02em",
                WebkitTextStroke: "1px rgba(255,255,255,0.18)",
                color: "transparent",
              }}
            >
              STACK
            </h2>
          </div>

          <div
            className="glass-panel"
            style={{
              borderRadius: "9999px",
              padding: "0.5rem 1.1rem",
              fontSize: "0.6rem",
              color: "#a8a8a8",
              fontFamily: "var(--font-space-mono), monospace",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              marginBottom: "0.4rem",
            }}
          >
            TOOLS I WORK WITH
          </div>
        </motion.div>

        {/* Grid of skill groups */}
        <div
          className="techstack-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
        >
          {techGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.12 }}
              className="glass-panel"
              style={{
                borderRadius: "1.25rem",
                padding: "2rem 1.75rem",
              }}
            >
              {/* Category label */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  marginBottom: "1.75rem",
                }}
              >
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: group.color,
                    boxShadow: `0 0 8px ${group.color}88`,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: "0.6rem",
                    color: group.color,
                    fontFamily: "var(--font-space-mono), monospace",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                  }}
                >
                  {group.category}
                </span>
              </div>

              {/* Skill bars */}
              {group.techs.map((tech, ti) => (
                <SkillBar
                  key={tech.name}
                  name={tech.name}
                  level={tech.level}
                  color={group.color}
                  delay={gi * 0.12 + ti * 0.08}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .techstack-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 600px) and (max-width: 900px) {
          .techstack-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
