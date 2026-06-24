"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid-pattern bg-[length:48px_48px] opacity-20" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-neural">
            Career Timeline
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
            AI engineering in production
          </h2>
          <p className="mt-4 text-lg text-muted">
            Seven years shipping ML pipelines, LLM systems, and the platform
            infrastructure that keeps them running.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-neural via-signal to-border hidden sm:block" />

          <div className="space-y-12">
            {experience.map((job, i) => (
              <motion.article
                key={job.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative sm:pl-10"
              >
                <div className="absolute left-0 top-2 hidden sm:block">
                  <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-neural bg-void">
                    <span className="h-1.5 w-1.5 rounded-full bg-neural" />
                  </span>
                </div>

                <div className="rounded-2xl border border-border/60 bg-panel/40 p-7 sm:p-9 hover:border-neural/20 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold">{job.role}</h3>
                      <p className="font-mono text-base text-neural mt-1">
                        {job.company}
                      </p>
                    </div>
                    <span className="font-mono text-sm text-muted whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {job.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-base text-muted leading-relaxed"
                      >
                        <span className="text-neural/50 mt-0.5 shrink-0">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-neural/20 bg-neural/5 px-3 py-1 font-mono text-xs uppercase tracking-wider text-neural/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
