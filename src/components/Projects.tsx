"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = ["All", "Web App", "AI", "Tool", "Python"];

const projects = [
  {
    title: "AI Resume Analyzer",
    description:
      "Upload your resume (PDF) and let AI automatically analyze and optimize it. Features ATS scoring based on 2026 hiring standards, smart AI rewrite, and actionable line-by-line feedback.",
    tags: ["Next.js", "TypeScript", "Gemini AI", "Prisma", "Tailwind CSS"],
    category: "AI",
    image: "/projects/ai-resume.png",
    imageEmoji: "🤖",
    imageSub: "Powered by Gemini & Next.js",
    imageGradient: "from-violet-900/60 via-fuchsia-900/40 to-indigo-900/60",
    live: "https://ai-resume-analayzer-iota.vercel.app/",
    github: "https://github.com/Code-With-Abdul-67/AI-Resume-Analayzer",
    featured: true,
  },
  {
    title: "NEXT Notes",
    description:
      "Full-stack notes app with Secret Vault, Recycle Bin, Gemini AI assistant, smart search, note colors, auto-save, and NextAuth authentication.",
    tags: ["Next.js", "TypeScript", "Gemini AI", "Prisma", "PostgreSQL", "NextAuth"],
    category: "AI",
    image: "/projects/next-notes.png",
    imageEmoji: "📝",
    imageSub: "Full-stack · AI-powered · Secure",
    imageGradient: "from-indigo-900/60 via-violet-900/40 to-purple-900/60",
    live: "https://next-notes-sable.vercel.app/",
    github: "https://github.com/Code-With-Abdul-67/Next-Notes",
    featured: true,
  },
    {
    title: "Next Weather",
    description:
      "A Next JS based weather application that provides real-time weather updates.",
    tags: ["Next.js", "Tailwind CSS", "OpenWeatherMap API"],
    category: "Web App",
    image: "https://code-with-abdul.vercel.app/_next/image?url=%2Fprojects%2Fproject-img5.png&w=640&q=75",
    imageEmoji: null,
    imageSub: null,
    imageGradient: null,
    live: "https://next-weather-sable.vercel.app/",
    github: "https://github.com/Code-With-Abdul-67/Next-Weather-App",
    featured: true,
  },
  {
    title: "PhonSint",
    description:
      "A Phone OSINT tool to hunt down and gather info about Phone Numbers based on Python.",
    tags: ["Python 3"],
    category: "Python",
    image: "https://code-with-abdul.vercel.app/_next/image?url=%2Fprojects%2Fproject-img1.png&w=640&q=75",
    imageEmoji: null,
    imageSub: null,
    imageGradient: null,
    live: null,
    github: "https://github.com/Code-With-Abdul-67/PhonSint",
    featured: false,
  },
  {
    title: "Health Heaven",
    description: "A Health Care Website Project.",
    tags: ["HTML5", "CSS3", "JS"],
    category: "Web App",
    image: "https://code-with-abdul.vercel.app/_next/image?url=%2Fprojects%2Fproject-img2.png&w=640&q=75",
    imageEmoji: null,
    imageSub: null,
    imageGradient: null,
    live: "https://health-heaven-77.vercel.app/",
    github: "https://github.com/Code-With-Abdul-67/Health-Heavn",
    featured: false,
  },
  {
    title: "Skin-Essence Website",
    description: "A Skin & Beauty Care Website Project.",
    tags: ["HTML5", "CSS3"],
    category: "Web App",
    image: "https://code-with-abdul.vercel.app/_next/image?url=%2Fprojects%2Fproject-img3.png&w=640&q=75",
    imageEmoji: null,
    imageSub: null,
    imageGradient: null,
    live: "https://skin-essence-beauty-care.vercel.app/",
    github: "https://github.com/Code-With-Abdul-67/Skin-Essence-Beauty-Care",
    featured: false,
  },
  {
    title: "Net Switch",
    description: "A Network Adapter Mode Switcher.",
    tags: ["Bash"],
    category: "Tool",
    image: "https://code-with-abdul.vercel.app/_next/image?url=%2Fprojects%2Fproject-img4.png&w=640&q=75",
    imageEmoji: null,
    imageSub: null,
    imageGradient: null,
    live: null,
    github: "https://github.com/Code-With-Abdul-67/Net-Switch",
    featured: false,
  },

];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            What I&apos;ve Built
          </p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Projects</h2>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer border-0 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-900/40"
                  : "glass text-purple-300/70 border border-violet-500/20 hover:border-violet-400/40 hover:text-purple-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className={`relative glass rounded-2xl border transition-all duration-300 group overflow-hidden flex flex-col ${
                  project.featured
                    ? "border-violet-400/40 shadow-lg shadow-violet-900/30"
                    : "border-violet-500/20 hover:border-violet-500/40"
                }`}
              >
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-3 right-3 z-10">
                    <span className="text-xs bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-2.5 py-1 rounded-full font-medium shadow-lg">
                      ✨ Featured
                    </span>
                  </div>
                )}

                {/* Project image */}
                <div className="relative h-44 overflow-hidden bg-violet-900/20">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${project.imageGradient} flex flex-col items-center justify-center gap-2`}>
                      <span className="text-4xl">{project.imageEmoji}</span>
                      <span className="text-xs text-violet-300/60 font-medium tracking-wide uppercase">{project.imageSub}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Card body */}
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <h3 className="text-lg font-semibold text-purple-100 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-purple-200/55 text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-violet-900/40 border border-violet-500/25 text-violet-300 text-xs px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card footer */}
                <div className="px-5 pb-5 flex gap-3">
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-xs font-medium flex-1 rounded-full py-2 text-center hover:opacity-90 transition-opacity"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <span className="bg-violet-900/20 text-purple-400/40 text-xs flex-1 rounded-full py-2 text-center border border-violet-500/10 cursor-not-allowed">
                      No Demo
                    </span>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-violet-500/30 text-violet-300 text-xs flex-1 rounded-full py-2 text-center hover:bg-violet-900/30 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
