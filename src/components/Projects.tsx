"use client";

import { motion } from "framer-motion";
import { infraProjects } from "@/data/portfolio";

const accentStyles = {
  neural: "border-neural/30 hover:border-neural/50 group-hover:text-neural",
  signal: "border-signal/30 hover:border-signal/50 group-hover:text-signal",
  healthy: "border-healthy/30 hover:border-healthy/50 group-hover:text-healthy",
  alert: "border-alert/30 hover:border-alert/50 group-hover:text-alert",
};

const dotColors = {
  neural: "bg-neural",
  signal: "bg-signal",
  healthy: "bg-healthy",
  alert: "bg-alert",
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-surface/20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-signal">
            Platform Work
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
            Infrastructure & client projects
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl">
            Cloud and platform engineering for AI-powered products — the
            operational layer behind production ML systems.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {infraProjects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`group relative rounded-2xl border bg-panel/30 p-7 sm:p-8 transition-all duration-300 hover:bg-panel/50 ${accentStyles[project.accent]}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${dotColors[project.accent]}`}
                  />
                  <h3 className="text-xl sm:text-2xl font-semibold transition-colors">
                    {project.name}
                  </h3>
                </div>
                <span className="font-mono text-base text-muted group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  ↗
                </span>
              </div>

              <p className="text-base text-muted leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border/60 px-3 py-1 font-mono text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
