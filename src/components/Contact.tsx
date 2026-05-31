"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: "📧",
    label: "Email",
    value: "codewithabdul67@gmail.com",
    href: "mailto:codewithabdul67@gmail.com",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "muhammad-abdul-baseer",
    href: "https://www.linkedin.com/in/muhammad-abdul-baseer-08421b25b/",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "Code-With-Abdul-67",
    href: "https://github.com/Code-With-Abdul-67",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const inputClass =
    "w-full bg-violet-900/20 border border-violet-500/25 rounded-xl px-4 py-3 text-purple-100 placeholder:text-purple-400/40 text-sm focus:outline-none focus:border-violet-400 transition-colors";

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            Let&apos;s Talk
          </p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Get In Touch</h2>
          <p className="text-purple-200/50 mt-4 max-w-md mx-auto">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div>
              <h3 className="text-xl font-semibold text-purple-100 mb-2">
                Let&apos;s build something great together
              </h3>
              <p className="text-purple-200/55 leading-relaxed">
                I&apos;m currently open to freelance projects and full-time opportunities.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {contactInfo.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 glass rounded-xl p-4 border border-violet-500/20 hover:border-violet-400/40 transition-all group"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="text-xs text-purple-400/70 font-medium">{item.label}</p>
                    <p className="text-purple-200/80 text-sm group-hover:text-purple-100 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-4 border border-green-500/20 flex items-center gap-3"
            >
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              <p className="text-green-300/80 text-sm">
                Available for new projects — response within 24h
              </p>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-strong rounded-2xl border border-violet-500/20 p-6">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-purple-300/70 text-xs font-medium">Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-purple-300/70 text-xs font-medium">Email</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-purple-300/70 text-xs font-medium">Subject</label>
                  <input
                    type="text"
                    placeholder="Project inquiry"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    required
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-purple-300/70 text-xs font-medium">Message</label>
                  <textarea
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    rows={5}
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={sending}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold rounded-full py-3 border-0 glow-purple hover:opacity-90 transition-opacity mt-2 disabled:opacity-60 cursor-pointer"
                >
                  {sending ? "Sending..." : sent ? "✅ Message Sent!" : "Send Message"}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
