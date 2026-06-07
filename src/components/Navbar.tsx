"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "WORK", href: "#works" },
  { label: "SERVICES", href: "#services" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "ABOUT", href: "#capabilities" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (!target) return;

    const targetY = target.getBoundingClientRect().top + window.scrollY - 64;
    const startY = window.scrollY;
    const distance = targetY - startY;
    const duration = Math.min(Math.max(Math.abs(distance) * 0.4, 600), 1400);
    let startTime: number | null = null;

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, startY + distance * easeInOutCubic(progress));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -16, x: "-50%" }}
        animate={{ opacity: 1, y: 0, x: "-50%" }}
        transition={{ duration: 0.5 }}
        className="nav-root"
      >
        <div className="nav-inner">
          {/* Logo */}
          <a href="#home" onClick={(e) => handleClick(e, "#home")} className="nav-logo">
            <span className="nav-logo-bold">ABDUL</span>
            <span className="nav-logo-dim">&nbsp;/ DEV</span>
          </a>

          {/* Center nav links — desktop only */}
          <div className="nav-links">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="nav-link"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="nav-right">
            {/* Contact button with sheen */}
            <a
              href="#contact"
              onClick={(e) => handleClick(e, "#contact")}
              className="btn-sheen nav-contact"
            >
              CONTACT ↗
            </a>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className="nav-hamburger"
            >
              <span className={`ham-bar ${menuOpen ? "ham-top-open" : ""}`} />
              <span className={`ham-bar ${menuOpen ? "ham-mid-open" : ""}`} />
              <span className={`ham-bar ${menuOpen ? "ham-bot-open" : ""}`} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            className="nav-mobile-drawer"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="nav-mobile-link"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <span className="nav-mobile-num">0{i + 1}</span>
                {link.label}
              </motion.a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleClick(e, "#contact")}
              className="btn-sheen nav-mobile-contact"
            >
              CONTACT ↗
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        /* ─── Navbar base ─── */
        .nav-root {
          position: fixed;
          top: 1rem; left: 50%;
          transform: translateX(-50%);
          width: calc(100% - 2rem);
          max-width: 1280px;
          z-index: 100;
          background: rgba(10, 10, 18, 0.45);
          backdrop-filter: blur(20px) saturate(140%);
          -webkit-backdrop-filter: blur(20px) saturate(140%);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 9999px;
          box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.4);
        }
        .nav-inner {
          padding: 0 2rem;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }

        /* ─── Logo ─── */
        .nav-logo {
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 2px;
          flex-shrink: 0;
        }
        .nav-logo-bold {
          font-weight: 900;
          color: #6d28d9;
          font-size: 0.88rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .nav-logo-dim {
          font-weight: 400;
          color: #555555;
          font-size: 0.88rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        /* ─── Desktop nav links ─── */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }
        .nav-link {
          color: #666666;
          text-decoration: none;
          font-size: 0.72rem;
          font-weight: 400;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: color 0.2s;
        }
        .nav-link:hover { color: #ffffff; }

        /* ─── Right section ─── */
        .nav-right {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-shrink: 0;
        }

        /* ─── Contact pill ─── */
        .nav-contact {
          border: 1px solid #ffffff;
          border-radius: 9999px;
          padding: 0.38rem 1.1rem;
          color: #ffffff;
          text-decoration: none;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        /* ─── Hamburger — hidden on desktop ─── */
        .nav-hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          flex-direction: column;
          gap: 5px;
        }
        .ham-bar {
          width: 22px;
          height: 1.5px;
          background: #ffffff;
          display: block;
          transition: transform 0.25s, opacity 0.25s;
        }
        .ham-top-open { transform: rotate(45deg) translateY(4.5px); }
        .ham-mid-open { opacity: 0; }
        .ham-bot-open { transform: rotate(-45deg) translateY(-4.5px); }

        /* ─── Mobile drawer ─── */
        .nav-mobile-drawer {
          position: fixed;
          top: 5rem; left: 1rem; right: 1rem;
          background: rgba(10, 10, 18, 0.85);
          backdrop-filter: blur(20px) saturate(140%);
          -webkit-backdrop-filter: blur(20px) saturate(140%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1.5rem;
          box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.5);
          z-index: 99;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .nav-mobile-link {
          color: #888888;
          text-decoration: none;
          font-size: 1.4rem;
          font-weight: 900;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 0;
          border-bottom: 1px solid #111111;
          transition: color 0.2s;
        }
        .nav-mobile-link:hover { color: #ffffff; }
        .nav-mobile-num {
          font-size: 0.6rem;
          color: #333333;
          font-family: var(--font-space-mono), monospace;
          letter-spacing: 0.12em;
          flex-shrink: 0;
        }
        .nav-mobile-contact {
          margin-top: 1.5rem;
          align-self: flex-start;
          border: 1px solid #ffffff;
          border-radius: 9999px;
          padding: 0.55rem 1.4rem;
          color: #ffffff;
          text-decoration: none;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        /* ─── Responsive breakpoint ─── */
        @media (max-width: 768px) {
          .nav-inner { padding: 0 1.25rem; }
          .nav-links  { display: none !important; }
          .nav-contact { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }

        /* ─── Sheen button ─── */
        .btn-sheen {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: color 0.2s, border-color 0.2s, background 0.2s;
        }
        .btn-sheen::after {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent 0%,
            rgba(255, 255, 255, 0.18) 50%,
            transparent 100%
          );
          transform: skewX(-15deg);
          transition: left 0s;
          pointer-events: none;
        }
        .btn-sheen:hover::after {
          left: 160%;
          transition: left 0.5s ease;
        }
        .btn-sheen:hover {
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.6) !important;
        }
      `}</style>
    </>
  );
}
