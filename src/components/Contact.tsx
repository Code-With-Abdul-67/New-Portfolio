"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const socialLinks = [
  {
    label: "LINKEDIN",
    href: "https://www.linkedin.com/in/muhammad-abdul-baseer-08421b25b/",
  },
  {
    label: "GITHUB",
    href: "https://github.com/Code-With-Abdul-67",
  },
];

type FormState = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormState>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");

    // Opens the default email client with pre-filled content
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:codewithabdul67@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    }, 600);
  };

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
              className="text-stroke"
              style={{
                fontSize: "clamp(3rem, 6vw, 6.5rem)",
                fontWeight: 900,
                textTransform: "uppercase",
                lineHeight: 0.88,
                letterSpacing: "-0.02em",
                marginBottom: "2.5rem",
                WebkitTextStroke: "1px rgba(255,255,255,0.18)",
                color: "transparent",
              }}
            >
              SOMETHING.
            </h2>

            <p
              style={{
                fontSize: "0.95rem",
                color: "#9e9e9e",
                lineHeight: 1.8,
                marginBottom: "2.5rem",
                maxWidth: "36ch",
              }}
            >
              Open to freelance projects, collaborations, and new full-time
              opportunities. Let&apos;s talk.
            </p>

            {/* Direct email link */}
            <motion.a
              href="mailto:codewithabdul67@gmail.com"
              className="glass-panel"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                borderRadius: "9999px",
                padding: "1rem 2rem",
                fontSize: "0.82rem",
                color: "#ffffff",
                textDecoration: "none",
                fontFamily: "var(--font-space-mono), monospace",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "2rem",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 40px rgba(109, 40, 217, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <span>✉</span>
              codewithabdul67@gmail.com
            </motion.a>

            {/* Social links */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1.25rem 1.75rem",
                    borderRadius: "1rem",
                    textDecoration: "none",
                  }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span
                    className="text-gradient"
                    style={{
                      fontSize: "clamp(1rem, 2vw, 1.5rem)",
                      fontWeight: 900,
                      textTransform: "uppercase",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {link.label}
                  </span>
                  <div
                    style={{
                      width: "2.25rem",
                      height: "2.25rem",
                      borderRadius: "50%",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      background: "rgba(255, 255, 255, 0.03)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span style={{ fontSize: "1rem", color: "#ffffff" }}>↗</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right side — contact form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass-card"
            style={{ padding: "2.5rem" }}
          >
            <p
              style={{
                fontSize: "0.6rem",
                color: "#555555",
                fontFamily: "var(--font-space-mono), monospace",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "1.75rem",
              }}
            >
              SEND A MESSAGE
            </p>

            {status === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  textAlign: "center",
                  padding: "3rem 1rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <span style={{ fontSize: "3rem" }}>✓</span>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#34d399",
                    fontFamily: "var(--font-space-mono), monospace",
                    letterSpacing: "0.1em",
                  }}
                >
                  EMAIL CLIENT OPENED
                </p>
                <p style={{ fontSize: "0.78rem", color: "#555555" }}>
                  Your message has been pre-filled. Just hit send!
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  style={{
                    marginTop: "0.5rem",
                    background: "none",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "9999px",
                    padding: "0.5rem 1.25rem",
                    color: "#aaaaaa",
                    fontSize: "0.62rem",
                    fontFamily: "var(--font-space-mono), monospace",
                    letterSpacing: "0.1em",
                    cursor: "pointer",
                    textTransform: "uppercase",
                  }}
                >
                  SEND ANOTHER
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    style={{
                      display: "block",
                      fontSize: "0.58rem",
                      color: "#555555",
                      fontFamily: "var(--font-space-mono), monospace",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      marginBottom: "0.5rem",
                    }}
                  >
                    NAME
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    style={{
                      width: "100%",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "0.75rem",
                      padding: "0.85rem 1rem",
                      color: "#ffffff",
                      fontSize: "0.85rem",
                      outline: "none",
                      fontFamily: "var(--font-jakarta), sans-serif",
                      transition: "border-color 0.3s",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(109,40,217,0.5)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.08)")
                    }
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    style={{
                      display: "block",
                      fontSize: "0.58rem",
                      color: "#555555",
                      fontFamily: "var(--font-space-mono), monospace",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      marginBottom: "0.5rem",
                    }}
                  >
                    EMAIL
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    style={{
                      width: "100%",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "0.75rem",
                      padding: "0.85rem 1rem",
                      color: "#ffffff",
                      fontSize: "0.85rem",
                      outline: "none",
                      fontFamily: "var(--font-jakarta), sans-serif",
                      transition: "border-color 0.3s",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(109,40,217,0.5)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.08)")
                    }
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    style={{
                      display: "block",
                      fontSize: "0.58rem",
                      color: "#555555",
                      fontFamily: "var(--font-space-mono), monospace",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      marginBottom: "0.5rem",
                    }}
                  >
                    MESSAGE
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    style={{
                      width: "100%",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "0.75rem",
                      padding: "0.85rem 1rem",
                      color: "#ffffff",
                      fontSize: "0.85rem",
                      outline: "none",
                      resize: "vertical",
                      fontFamily: "var(--font-jakarta), sans-serif",
                      transition: "border-color 0.3s",
                      minHeight: "120px",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(109,40,217,0.5)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.08)")
                    }
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    width: "100%",
                    padding: "1rem",
                    background:
                      "linear-gradient(135deg, rgba(109,40,217,0.4), rgba(59,130,246,0.3))",
                    border: "1px solid rgba(109,40,217,0.4)",
                    borderRadius: "0.75rem",
                    color: "#ffffff",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    fontFamily: "var(--font-space-mono), monospace",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    cursor: status === "sending" ? "wait" : "pointer",
                    transition: "opacity 0.3s",
                    opacity: status === "sending" ? 0.6 : 1,
                  }}
                >
                  {status === "sending" ? "OPENING EMAIL..." : "SEND MESSAGE →"}
                </motion.button>
              </form>
            )}
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
        input::placeholder, textarea::placeholder {
          color: #333333;
        }
      `}</style>
    </section>
  );
}
