"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React JS", level: 88 },
      { name: "HTML5 / CSS3", level: 95 },
      { name: "Bootstrap", level: 85 },
      { name: "Tailwind CSS", level: 82 },
    ],
  },
  {
    category: "Backend & DB",
    icon: "⚙️",
    skills: [
      { name: "Next.js", level: 80 },
      { name: "PostgreSQL", level: 72 },
      { name: "PHP / Laravel", level: 65 },
      { name: "MySQL", level: 70 },
    ],
  },
  {
    category: "CyberSecurity",
    icon: "🔐",
    skills: [
      { name: "OSINT", level: 80 },
      { name: "Wifi Pentesting", level: 75 },
      { name: "Network Security", level: 70 },
      { name: "Linux", level: 78 },
    ],
  },
];

const techBadges = [
  "React", "Next.js", "HTML5", "CSS3", "JavaScript",
  "Bootstrap", "Tailwind CSS", "PostgreSQL", "PHP", "Laravel",
  "MySQL", "Git", "GitHub", "Figma", "Linux", "VS Code",
  "Python", "OSINT",
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            What I Know
          </p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Skills</h2>
        </motion.div>

        {/* Skill cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {skillGroups.map((group, catIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.15 }}
              className="glass rounded-2xl p-6 border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="text-lg font-semibold text-purple-100">{group.category}</h3>
              </div>
              <div className="flex flex-col gap-5">
                {group.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIdx * 0.15 + skillIdx * 0.08 }}
                  >
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm text-purple-200/80">{skill.name}</span>
                      <span className="text-xs text-violet-400 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-violet-900/40 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: catIdx * 0.15 + skillIdx * 0.08, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-purple-300/60 text-sm mb-6">Technologies I work with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="glass px-4 py-2 rounded-full text-sm text-violet-300 border border-violet-500/20 cursor-default hover:border-violet-400/40 transition-all"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
