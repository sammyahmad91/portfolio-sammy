"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolio";

const colorMap = {
  signal: "text-signal border-signal/20 bg-signal/5",
  healthy: "text-healthy border-healthy/20 bg-healthy/5",
  neural: "text-neural border-neural/20 bg-neural/5",
  alert: "text-alert border-alert/20 bg-alert/5",
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-surface/30">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-neural">
            Tech Stack
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
            Tools of the trade
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-border/60 bg-panel/30 p-6 hover:border-border transition-colors duration-300"
            >
              <h3
                className={`inline-block rounded-md border px-2.5 py-1 font-mono text-xs uppercase tracking-wider mb-5 ${colorMap[cat.color]}`}
              >
                {cat.name}
              </h3>
              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li key={skill} className="text-base text-muted">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
