"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import SystemDiagram from "./SystemDiagram";
import Terminal from "./Terminal";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[length:48px_48px] opacity-30" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-neural/8 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-signal/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
                {profile.location}
              </span>
              <span className="h-px w-8 bg-border" />
              <span className="font-mono text-sm text-neural">
                {profile.yearsExperience}+ years in AI & ML
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95]"
            >
              {profile.name.split(" ").map((word, i) => (
                <span key={word} className="block">
                  {i === 1 ? (
                    <span className="text-gradient-signal">{word}</span>
                  ) : (
                    word
                  )}
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 text-xl sm:text-2xl text-ink max-w-lg leading-relaxed font-medium"
            >
              {profile.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-2 font-mono text-base text-muted"
            >
              {profile.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-5 text-lg text-muted max-w-lg leading-relaxed"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#ai-projects"
                className="group inline-flex items-center gap-2 rounded-lg bg-neural px-6 py-3.5 font-mono text-base font-medium text-void hover:bg-neural/90 transition-all duration-300"
              >
                View AI projects
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3.5 font-mono text-base text-muted hover:border-neural/40 hover:text-neural transition-all duration-300"
              >
                Get in touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-12 flex items-center gap-6"
            >
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-muted hover:text-neural transition-colors"
              >
                github/sammyahmad91
              </a>
              <span className="text-border">|</span>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-muted hover:text-neural transition-colors"
              >
                linkedin/sammy-ahmad
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            <SystemDiagram />
            <Terminal />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#metrics"
          className="flex flex-col items-center gap-2 text-muted hover:text-neural transition-colors"
          aria-label="Scroll down"
        >
          <span className="font-mono text-xs uppercase tracking-widest">
            scroll
          </span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-neural"
          >
            ↓
          </motion.span>
        </a>
      </motion.div>
    </section>
  );
}
