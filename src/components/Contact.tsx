"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-surface/30">
      <div className="absolute inset-0 bg-grid-pattern bg-[length:48px_48px] opacity-20" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-neural">
            Contact
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
            Let&apos;s build something{" "}
            <span className="text-gradient-signal">intelligent</span>
          </h2>
          <p className="mt-5 text-lg text-muted max-w-xl mx-auto leading-relaxed">
            Open to senior AI Engineer, ML Platform, and MLOps roles. Whether
            you need someone to architect RAG systems, ship LLM products, or
            scale ML infrastructure — let&apos;s talk.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl rounded-2xl border border-border/60 bg-panel/40 p-8 sm:p-12"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <a
              href={`mailto:${profile.email}`}
              className="group flex flex-col gap-1.5 rounded-xl border border-border/60 bg-surface/60 p-6 hover:border-neural/30 transition-colors duration-300"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                Email
              </span>
              <span className="text-base text-neural group-hover:underline">
                {profile.email}
              </span>
            </a>

            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="group flex flex-col gap-1.5 rounded-xl border border-border/60 bg-surface/60 p-6 hover:border-neural/30 transition-colors duration-300"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                Phone
              </span>
              <span className="text-base text-ink group-hover:text-neural transition-colors">
                {profile.phone}
              </span>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-1.5 rounded-xl border border-border/60 bg-surface/60 p-6 hover:border-neural/30 transition-colors duration-300"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                GitHub
              </span>
              <span className="text-base text-ink group-hover:text-neural transition-colors">
                github.com/sammyahmad91
              </span>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-1.5 rounded-xl border border-border/60 bg-surface/60 p-6 hover:border-neural/30 transition-colors duration-300"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                LinkedIn
              </span>
              <span className="text-base text-ink group-hover:text-neural transition-colors">
                linkedin.com/in/sammy-ahmad
              </span>
            </a>
          </div>

          <div className="mt-8 text-center">
            <a
              href={`mailto:${profile.email}?subject=Let's connect`}
              className="inline-flex items-center gap-2 rounded-lg bg-neural px-8 py-3.5 font-mono text-base font-medium text-void hover:bg-neural/90 transition-all duration-300"
            >
              Send a message
              <span>→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
