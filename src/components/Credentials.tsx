"use client";

import { motion } from "framer-motion";
import { certifications, education } from "@/data/portfolio";

export default function Credentials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-sm uppercase tracking-[0.2em] text-signal">
              Certifications
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold mb-8">Verified expertise</h2>
            <ul className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.li
                  key={cert}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 rounded-lg border border-border/60 bg-panel/30 p-5"
                >
                  <span className="mt-0.5 font-mono text-sm text-healthy">✓</span>
                  <span className="text-base">{cert}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="font-mono text-sm uppercase tracking-[0.2em] text-neural">
              Education
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold mb-8">Academic foundation</h2>
            <div className="rounded-2xl border border-neural/20 bg-panel/40 p-8 border-glow-neural">
              <h3 className="text-xl sm:text-2xl font-semibold">{education.degree}</h3>
              <p className="font-mono text-base text-neural mt-2">
                {education.school}
              </p>
              <p className="font-mono text-sm text-muted mt-4">
                {education.period}
              </p>
              <p className="mt-6 text-base text-muted leading-relaxed">
                {education.note}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
