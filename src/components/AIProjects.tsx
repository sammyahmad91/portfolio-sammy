"use client";

import { motion } from "framer-motion";
import { aiProjects } from "@/data/portfolio";

const accentStyles = {
  neural: {
    border: "border-neural/30 hover:border-neural/50",
    glow: "border-glow-neural",
    dot: "bg-neural",
    label: "text-neural",
    tag: "border-neural/20 bg-neural/5 text-neural/90",
  },
  signal: {
    border: "border-signal/30 hover:border-signal/50",
    glow: "border-glow-signal",
    dot: "bg-signal",
    label: "text-signal",
    tag: "border-signal/20 bg-signal/5 text-signal/90",
  },
  healthy: {
    border: "border-healthy/30 hover:border-healthy/50",
    glow: "",
    dot: "bg-healthy",
    label: "text-healthy",
    tag: "border-healthy/20 bg-healthy/5 text-healthy/90",
  },
};

export default function AIProjects() {
  return (
    <section id="ai-projects" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-neural/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl"
        >
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-neural">
            AI / ML Projects
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
            Intelligent systems that solve{" "}
            <span className="text-neural">real problems</span>
          </h2>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Production AI products — from semantic job matching and document
            intelligence to real-time fraud detection. Built end-to-end: data
            pipelines, model training, inference serving, and monitoring.
          </p>
        </motion.div>

        <div className="space-y-8">
          {aiProjects.map((project, i) => {
            const style = accentStyles[project.accent];
            return (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl border bg-panel/50 p-8 sm:p-10 transition-colors duration-300 ${style.border} ${style.glow}`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`h-2.5 w-2.5 rounded-full ${style.dot}`} />
                      <span className={`font-mono text-sm uppercase tracking-wider ${style.label}`}>
                        Featured Project
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold">{project.name}</h3>
                    <p className="mt-2 text-lg text-muted">{project.tagline}</p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-mono text-sm uppercase tracking-wider text-muted mb-3">
                      The Problem
                    </h4>
                    <p className="text-base text-muted leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-mono text-sm uppercase tracking-wider text-muted mb-3">
                      The Solution
                    </h4>
                    <p className="text-base text-ink/90 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-border/40 bg-surface/40 p-6 mb-8">
                  <h4 className="font-mono text-sm uppercase tracking-wider text-healthy mb-4">
                    Impact
                  </h4>
                  <ul className="space-y-3">
                    {project.impact.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-base text-ink/90 leading-relaxed"
                      >
                        <span className="text-healthy mt-0.5 shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-mono text-sm uppercase tracking-wider text-muted mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className={`rounded-full border px-3.5 py-1 font-mono text-sm ${style.tag}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
