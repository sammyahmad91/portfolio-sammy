"use client";

import { motion } from "framer-motion";
import { summary, aiExpertise } from "@/data/portfolio";

export default function Expertise() {
  return (
    <section id="expertise" className="relative py-24 sm:py-32 bg-surface/30">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-3xl"
        >
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-neural">
            Core Expertise
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
            {aiExpertise.headline}
          </h2>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            {aiExpertise.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-neural/25 bg-panel/50 p-8 sm:p-10 border-glow-neural mb-16"
        >
          <p className="text-lg text-ink/90 leading-relaxed">{summary.ai}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {aiExpertise.capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl border border-border/60 bg-panel/40 p-7 hover:border-neural/30 transition-colors duration-300"
            >
              <h4 className="font-mono text-base text-neural mb-5">{cap.title}</h4>
              <ul className="space-y-3">
                {cap.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-base text-muted leading-relaxed"
                  >
                    <span className="text-neural/60 mt-1 shrink-0">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="font-mono text-sm uppercase tracking-widest text-muted mb-5">
            AI / ML Stack
          </p>
          <div className="flex flex-wrap gap-2.5">
            {aiExpertise.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-neural/20 bg-neural/5 px-4 py-1.5 font-mono text-sm text-neural/90"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl border border-border/50 bg-panel/20 p-7 sm:p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-signal/10 font-mono text-sm text-signal">
              OPS
            </span>
            <div>
              <h3 className="text-xl font-semibold">Platform Engineering Foundation</h3>
              <p className="text-sm text-muted mt-0.5">
                The infrastructure layer that makes AI production-ready
              </p>
            </div>
          </div>
          <p className="text-base text-muted leading-relaxed">{summary.devops}</p>
        </motion.div>
      </div>
    </section>
  );
}
