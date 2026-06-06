"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ background: "#000000", padding: "6rem 0" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }} className="section-inner">
        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              style={{
                fontSize: "clamp(3rem, 6vw, 6.5rem)",
                fontWeight: 900,
                color: "#ffffff",
                textTransform: "uppercase",
                lineHeight: 0.88,
                letterSpacing: "-0.02em",
              }}
            >
              LET&apos;S BUILD
            </h2>
            <h2
              style={{
                fontSize: "clamp(3rem, 6vw, 6.5rem)",
                fontWeight: 900,
                color: "#2a2a2a",
                textTransform: "uppercase",
                lineHeight: 0.88,
                letterSpacing: "-0.02em",
                marginBottom: "2.5rem",
              }}
            >
              SOMETHING.
            </h2>

            <p
              style={{
                fontSize: "0.9rem",
                color: "#666666",
                lineHeight: 1.8,
                marginBottom: "2rem",
                maxWidth: "32ch",
              }}
            >
              Open to freelance projects and new opportunities.
            </p>

            <a
              href="mailto:codewithabdul67@gmail.com"
              className="btn-sheen"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                border: "1px solid #ffffff",
                borderRadius: "9999px",
                padding: "0.65rem 1.5rem",
                fontSize: "0.72rem",
                color: "#ffffff",
                textDecoration: "none",
                fontFamily: "var(--font-geist-mono), monospace",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              EMAIL ME ↗
            </a>
          </motion.div>

          {/* Right side */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ borderTop: "1px solid #1a1a1a" }}
          >
            <a
              href="https://www.linkedin.com/in/muhammad-abdul-baseer-08421b25b/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "2rem 0",
                borderBottom: "1px solid #1a1a1a",
                textDecoration: "none",
                transition: "padding-left 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.paddingLeft = "0.5rem")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.paddingLeft = "0")}
            >
              <span
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                  fontWeight: 900,
                  color: "#ffffff",
                  textTransform: "uppercase",
                  letterSpacing: "-0.01em",
                }}
              >
                LINKEDIN
              </span>
              <span style={{ fontSize: "1.5rem", color: "#555555" }}>↗</span>
            </a>

            <a
              href="https://github.com/Code-With-Abdul-67"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "2rem 0",
                borderBottom: "1px solid #1a1a1a",
                textDecoration: "none",
                transition: "padding-left 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.paddingLeft = "0.5rem")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.paddingLeft = "0")}
            >
              <span
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                  fontWeight: 900,
                  color: "#ffffff",
                  textTransform: "uppercase",
                  letterSpacing: "-0.01em",
                }}
              >
                GITHUB
              </span>
              <span style={{ fontSize: "1.5rem", color: "#555555" }}>↗</span>
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
