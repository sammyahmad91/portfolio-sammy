"use client";

import { motion } from "framer-motion";

const nodes = [
  { id: "ingest", label: "Data Ingest", x: 60, y: 80, color: "#FB923C" },
  { id: "kafka", label: "Kafka", x: 180, y: 50, color: "#22D3EE" },
  { id: "train", label: "GPU Train", x: 300, y: 80, color: "#A78BFA" },
  { id: "registry", label: "Model Registry", x: 420, y: 50, color: "#A78BFA" },
  { id: "infer", label: "Inference", x: 540, y: 80, color: "#34D399" },
  { id: "monitor", label: "Observability", x: 300, y: 180, color: "#22D3EE" },
];

const edges = [
  ["ingest", "kafka"],
  ["kafka", "train"],
  ["train", "registry"],
  ["registry", "infer"],
  ["infer", "monitor"],
  ["monitor", "kafka"],
  ["train", "monitor"],
];

function getNode(id: string) {
  return nodes.find((n) => n.id === id)!;
}

export default function SystemDiagram() {
  return (
    <div className="relative w-full aspect-[4/3] max-w-lg mx-auto">
      <div className="absolute inset-0 rounded-2xl border border-border/60 bg-panel/40 backdrop-blur-sm overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-[length:24px_24px] opacity-50" />

        <div className="absolute top-3 left-4 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-healthy animate-pulse-slow" />
          <span className="font-mono text-xs uppercase tracking-widest text-muted">
            ml.pipeline.status
          </span>
        </div>

        <div className="absolute top-3 right-4 font-mono text-xs text-healthy">
          ALL SYSTEMS NOMINAL
        </div>

        <svg
          viewBox="0 0 600 260"
          className="absolute inset-0 w-full h-full p-4"
          aria-hidden="true"
        >
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {edges.map(([from, to], i) => {
            const a = getNode(from);
            const b = getNode(to);
            return (
              <g key={`${from}-${to}`}>
                <motion.line
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  stroke="rgba(34, 211, 238, 0.15)"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
                />
                <motion.circle
                  r="3"
                  fill="#22D3EE"
                  filter="url(#glow)"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    cx: [a.x, b.x],
                    cy: [a.y, b.y],
                  }}
                  transition={{
                    duration: 2.5,
                    delay: 1 + i * 0.4,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: "linear",
                  }}
                />
              </g>
            );
          })}

          {nodes.map((node, i) => (
            <motion.g
              key={node.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
            >
              <rect
                x={node.x - 40}
                y={node.y - 16}
                width="80"
                height="32"
                rx="6"
                fill="rgba(18, 24, 32, 0.9)"
                stroke={node.color}
                strokeWidth="1"
                strokeOpacity="0.4"
              />
              <text
                x={node.x}
                y={node.y + 4}
                textAnchor="middle"
                fill={node.color}
                fontSize="11"
                fontFamily="monospace"
              >
                {node.label}
              </text>
            </motion.g>
          ))}
        </svg>

        <div className="absolute bottom-3 left-4 right-4 flex justify-between font-mono text-xs text-muted">
          <span>data.layer</span>
          <span className="text-neural">ai.ml.pipeline</span>
          <span>uptime: 99.99%</span>
        </div>
      </div>
    </div>
  );
}
