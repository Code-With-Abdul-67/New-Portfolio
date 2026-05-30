"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    icon: "🎨",
    title: "Frontend",
    skills: ["React JS", "Bootstrap", "HTML5", "CSS3"],
  },
  {
    icon: "⚙️",
    title: "Backend",
    skills: ["Next JS", "PostgreSQL", "Tailwind CSS"],
  },
  {
    icon: "🔐",
    title: "CyberSecurity",
    skills: ["OSINT", "Wifi Pentesting", "Network Security"],
  },
  {
    icon: "🛠️",
    title: "Tools & Others",
    skills: ["Git / GitHub", "Figma", "Linux", "VS Code"],
  },
];

const experience = [
  {
    role: "IT Help Desk",
    company: "Quickstart Technologies",
    period: "Present",
    skills: [
      "Ticket management on JIRA",
      "Identity & access management via Okta",
      "Cloud infrastructure support on AWS",
      "IronCircle platform operations",
    ],
    current: true,
  },
  {
    role: "Full Stack Developer",
    company: null,
    period: "2022 – Present",
    skills: ["HTML5, CSS3, JS and Bootstrap", "Next.JS", "PostgreSQL", "Tailwind CSS", "Git, GitHub"],
    current: false,
  },
  {
    role: "Enrolled in ACCPAi from Aptech",
    company: null,
    period: "2024 – 2025",
    skills: ["UI/UX Design with Figma", "Full-stack with PHP, MySQL, Laravel"],
    current: false,
  },
];

const education = [
  {
    degree: "Bachelor of Business and Information Technology (BBIT)",
    institution: "Virtual University of Pakistan",
    year: "Currently Enrolled",
    current: true,
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "SM Public Academy Campus 5",
    year: "Graduated in 2020",
    current: false,
  },
  {
    degree: "Bachelor of Science in Pre Engineering",
    institution: "Govt. Degree Boys Science & Commerce College",
    year: "Graduated in 2023",
    current: false,
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            Who I Am
          </p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">About Me</h2>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl border border-violet-500/20 p-8 mb-12 text-center max-w-3xl mx-auto"
        >
          <p className="text-purple-200/70 leading-relaxed text-lg">
            I&apos;m a passionate <span className="text-violet-300 font-medium">Front End Developer</span> with
            expertise in building modern, responsive, and user-centric web applications. I strive for
            excellence and love learning new technologies.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-purple-100 text-center mb-8"
          >
            Skills &amp; Expertise
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl border border-violet-500/20 p-5 hover:border-violet-400/40 transition-all"
              >
                <div className="text-3xl mb-3">{cat.icon}</div>
                <h4 className="text-purple-100 font-semibold mb-3">{cat.title}</h4>
                <ul className="flex flex-col gap-1.5">
                  {cat.skills.map((skill) => (
                    <li key={skill} className="text-purple-300/65 text-sm flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-violet-500 shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience + Education */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-purple-100 mb-6 flex items-center gap-2">
              <span className="text-violet-400">💼</span> My Experience
            </h3>
            <div className="flex flex-col gap-5">
              {experience.map((exp, i) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`glass rounded-xl p-5 relative pl-8 before:absolute before:left-4 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-violet-500/50 before:to-transparent transition-all ${
                    exp.current
                      ? "border border-violet-400/40 shadow-lg shadow-violet-900/20"
                      : "border border-violet-500/20"
                  }`}
                >
                  <div className={`absolute left-3.5 top-5 w-2 h-2 rounded-full ${exp.current ? "bg-fuchsia-400" : "bg-violet-500"}`}>
                    {exp.current && (
                      <span className="absolute inset-0 rounded-full bg-fuchsia-400 animate-ping opacity-75" />
                    )}
                  </div>
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <div>
                      <h4 className="text-purple-100 font-semibold">{exp.role}</h4>
                      {exp.company && (
                        <p className="text-fuchsia-400/80 text-xs font-medium mt-0.5">{exp.company}</p>
                      )}
                    </div>
                    {exp.current && (
                      <span className="text-xs bg-fuchsia-500/20 border border-fuchsia-500/30 text-fuchsia-300 px-2.5 py-0.5 rounded-full font-medium shrink-0">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-violet-400 text-xs font-medium mt-1 mb-2">{exp.period}</p>
                  <ul className="flex flex-col gap-1">
                    {exp.skills.map((s) => (
                      <li key={s} className="text-purple-300/60 text-sm flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-violet-500/60 shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-purple-100 mb-6 flex items-center gap-2">
              <span className="text-violet-400">🎓</span> My Education
            </h3>
            <div className="flex flex-col gap-5">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`glass rounded-xl p-5 transition-all ${
                    edu.current
                      ? "border border-violet-400/40 shadow-lg shadow-violet-900/20"
                      : "border border-violet-500/20"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <h4 className="text-purple-100 font-semibold leading-snug">{edu.degree}</h4>
                    {edu.current && (
                      <span className="text-xs bg-fuchsia-500/20 border border-fuchsia-500/30 text-fuchsia-300 px-2.5 py-0.5 rounded-full font-medium shrink-0">
                        Current
                      </span>
                    )}
                  </div>
                  {edu.institution && (
                    <p className="text-fuchsia-400/80 text-xs font-medium mt-1">{edu.institution}</p>
                  )}
                  <p className="text-violet-400 text-xs font-medium mt-1.5">{edu.year}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
