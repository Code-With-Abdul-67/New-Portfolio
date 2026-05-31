"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const floatingOrbs = [
  { size: 200, x: "5%",  y: "20%", delay: 0,   color: "rgba(124,58,237,0.15)" },
  { size: 160, x: "70%", y: "10%", delay: 1,   color: "rgba(192,132,252,0.12)" },
  { size: 180, x: "60%", y: "60%", delay: 2,   color: "rgba(232,121,249,0.1)" },
  { size: 120, x: "15%", y: "65%", delay: 0.5, color: "rgba(139,92,246,0.12)" },
];

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden isolate"
    >
      {/* Floating orbs */}
      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
            filter: "blur(40px)",
          }}
          animate={{ y: [0, -20, 0], x: [0, 10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 6 + i, repeat: Infinity, delay: orb.delay, ease: "easeInOut" }}
        />
      ))}

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(167,139,250,0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(167,139,250,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex justify-center"
        >
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-violet-500/50 glow-purple shrink-0">
            <Image
              src="https://code-with-abdul.vercel.app/_next/image?url=%2Fprofile.jpeg&w=384&q=75"
              alt="Abdul Baseer"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </motion.div>

        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 flex justify-center"
        >
          <span className="glass px-4 py-1.5 rounded-full text-xs text-violet-300 border border-violet-500/30 font-medium">
            ✨ Available for work
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 leading-tight"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text glow-text">Abdul Baseer</span>
        </motion.h1>

        {/* Roles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm sm:text-base md:text-xl text-purple-200/60 mb-4 font-light flex flex-wrap justify-center gap-x-2 gap-y-1"
        >
          <span>Front End Developer</span>
          <span className="text-violet-500">·</span>
          <span>UI Designer</span>
          <span className="text-violet-500">·</span>
          <span>Wifi Pentester</span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-purple-200/50 max-w-lg mx-auto mb-10 leading-relaxed text-sm sm:text-base"
        >
          Building digital experiences with passion and precision. Crafting modern,
          responsive web apps and intuitive UI designs.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 justify-center mb-8"
        >
          <motion.button
            onClick={() => handleScroll("#projects")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold px-8 py-3 rounded-full border-0 glow-purple hover:opacity-90 transition-opacity cursor-pointer text-sm sm:text-base w-full sm:w-auto"
          >
            View Projects
          </motion.button>
          <motion.button
            onClick={() => handleScroll("#services")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="glass border border-violet-500/40 text-violet-300 hover:bg-violet-900/30 rounded-full px-8 py-3 transition-all cursor-pointer text-sm sm:text-base font-medium w-full sm:w-auto"
          >
            Explore Services
          </motion.button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex justify-center gap-4"
        >
          <motion.a
            href="https://github.com/Code-With-Abdul-67"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, scale: 1.1 }}
            className="glass w-10 h-10 rounded-full border border-violet-500/25 flex items-center justify-center text-purple-300 hover:text-white hover:border-violet-400/50 transition-all"
            aria-label="GitHub"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/muhammad-abdul-baseer-08421b25b/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, scale: 1.1 }}
            className="glass w-10 h-10 rounded-full border border-violet-500/25 flex items-center justify-center text-purple-300 hover:text-white hover:border-violet-400/50 transition-all"
            aria-label="LinkedIn"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </motion.a>
          <motion.a
            href="mailto:codewithabdul67@gmail.com"
            whileHover={{ y: -3, scale: 1.1 }}
            className="glass w-10 h-10 rounded-full border border-violet-500/25 flex items-center justify-center text-purple-300 hover:text-white hover:border-violet-400/50 transition-all"
            aria-label="Email"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-violet-500/40 flex items-start justify-center pt-2 cursor-pointer"
            onClick={() => handleScroll("#about")}
          >
            <div className="w-1 h-2 rounded-full bg-violet-400" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
