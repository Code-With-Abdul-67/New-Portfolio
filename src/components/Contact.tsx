"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ background: "transparent", padding: "6rem 0" }}
    >
      <div
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}
        className="section-inner"
      >
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
              className="text-gradient"
              style={{
                fontSize: "clamp(3rem, 6vw, 6.5rem)",
                fontWeight: 900,
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
                color: "#6d28d9",
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
                fontSize: "1rem",
                color: "#ffffff",
                lineHeight: 1.8,
                marginBottom: "2.5rem",
                maxWidth: "32ch",
              }}
            >
              Open to freelance projects and new opportunities.
            </p>

            <motion.a
              href="mailto:codewithabdul67@gmail.com"
              className="glass-panel"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                borderRadius: "9999px",
                padding: "1rem 2rem",
                fontSize: "0.85rem",
                color: "#ffffff",
                textDecoration: "none",
                fontFamily: "var(--font-space-mono), monospace",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                boxShadow: "0 10px 30px rgba(109, 40, 217, 0.2)",

              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 40px rgba(109, 40, 217, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              EMAIL ME 
            </motion.a>
          </motion.div>

          {/* Right side */}
          <motion.div
            className="glass-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <motion.a
              href="https://www.linkedin.com/in/muhammad-abdul-baseer-08421b25b/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "2rem",
                borderRadius: "16px",
                textDecoration: "none",
              }}
              whileHover={{
                scale: 1.02,
              }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <span
                className="text-gradient"
                style={{
                  fontSize: "clamp(1.2rem, 2.5vw, 2rem)",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "-0.01em",
                }}
              >
                LINKEDIN
              </span>
              <div
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "50%",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
      

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontSize: "1.2rem", color: "#ffffff" }}>↗</span>
              </div>
            </motion.a>

            <motion.a
              href="https://github.com/Code-With-Abdul-67"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "2rem",
                borderRadius: "16px",
                textDecoration: "none",
              }}
              whileHover={{
                scale: 1.02,
              }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <span
                className="text-gradient"
                style={{
                  fontSize: "clamp(1.2rem, 2.5vw, 2rem)",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "-0.01em",
                }}
              >
                GITHUB
              </span>
              <div
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "50%",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  background: "rgba(255, 255, 255, 0.03)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontSize: "1.2rem", color: "#ffffff" }}>↗</span>
              </div>
            </motion.a>
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
