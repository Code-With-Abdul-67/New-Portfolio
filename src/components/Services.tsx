"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "🌐",
    title: "Web Development",
    description:
      "Building fast, responsive, and SEO-friendly websites using modern technologies like Next.js, React, and Tailwind CSS. From landing pages to complex web apps.",
    features: ["Responsive Design", "Next.js & React", "API Integration", "Performance Setup"],
    gradient: "from-violet-600/20 to-fuchsia-600/20",
  },
  {
    icon: "✏️",
    title: "Logo Designing",
    description:
      "Crafting unique and memorable visual identities that capture your brand's essence. Professional logos that work perfectly across all digital and print media.",
    features: ["Custom Concepts", "Vector Scaling", "Brand Guidelines", "Multiple Formats"],
    gradient: "from-purple-600/20 to-violet-600/20",
  },
  {
    icon: "🎨",
    title: "UI Designing",
    description:
      "Creating beautiful, intuitive, and user-centered interfaces. Focusing on user experience to ensure your product is both functional and aesthetically pleasing.",
    features: ["Figma Prototypes", "Wireframing", "User Flows", "Design Systems"],
    gradient: "from-fuchsia-600/20 to-pink-600/20",
  },
  {
    icon: "🖥️",
    title: "PC Building",
    description:
      "Expert PC building services tailored to your needs. From high-end gaming rigs to professional workstations, ensuring optimal performance and aesthetics.",
    features: ["Parts Selection", "Cable Management", "OS Installation", "Testing & Benchmarking"],
    gradient: "from-indigo-600/20 to-purple-600/20",
  },
];

export default function Services() {
  const handleContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            What I Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Professional Services</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-purple-200/50 text-center max-w-xl mx-auto mb-16"
        >
          I offer a wide range of digital services to help you build, design, and optimize
          your online presence and hardware.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300 overflow-hidden group"
            >
              {/* Top gradient strip */}
              <div className={`h-1.5 bg-gradient-to-r ${service.gradient.replace("/20", "")}`} />

              <div className="p-7">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-2xl shrink-0`}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purple-100 group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <p className="text-purple-200/60 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Feature tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feat) => (
                    <span
                      key={feat}
                      className="bg-violet-900/30 border border-violet-500/20 text-violet-300 text-xs px-3 py-1 rounded-full"
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                <motion.button
                  onClick={handleContact}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-sm font-medium px-6 py-2.5 rounded-full border-0 hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Book Service
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
