"use client";

import { motion } from "framer-motion";
import { metrics } from "@/data/portfolio";

const accentMap = {
  healthy: "text-healthy border-healthy/20",
  signal: "text-signal border-signal/20",
  alert: "text-alert border-alert/20",
  neural: "text-neural border-neural/20",
};

export default function Metrics() {
  return (
    <section id="metrics" className="relative border-y border-border/50 bg-surface/50">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-xl border bg-panel/30 p-7 ${accentMap[metric.accent]}`}
            >
              <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-muted mb-3">
                {metric.label}
              </p>
              <p className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${accentMap[metric.accent].split(" ")[0]}`}>
                {metric.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
