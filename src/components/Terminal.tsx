"use client";

import { useEffect, useState } from "react";

type Line =
  | { kind: "command"; text: string }
  | { kind: "output"; text: string; tone?: "ok" | "muted" };

const lines: Line[] = [
  { kind: "command", text: "python train.py --model llama-3-8b --lora" },
  { kind: "output", text: "Loading dataset… 128k samples", tone: "muted" },
  { kind: "output", text: "QLoRA ▸ epoch 3/3   loss 0.214", tone: "muted" },
  { kind: "output", text: "✓ adapter saved → s3://models/career-engine", tone: "ok" },
  { kind: "command", text: "mlflow models serve -m runs:/a1b2/model" },
  { kind: "output", text: "✓ registered · stage: Production", tone: "ok" },
  { kind: "command", text: "vllm serve --tensor-parallel-size 4" },
  { kind: "output", text: "✓ inference up · 2M req/day · p99 47ms", tone: "ok" },
  { kind: "command", text: "kubectl get pods -l app=inference" },
  { kind: "output", text: "inference-api-7f9   3/3 Running   99.99%", tone: "muted" },
];

function toneClass(line: Line): string {
  if (line.kind === "command") return "text-ink";
  if (line.tone === "ok") return "text-healthy";
  return "text-muted";
}

export default function Terminal() {
  // lineIndex: how many lines are fully revealed.
  // charCount: chars typed of the current in-progress command.
  const [lineIndex, setLineIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced) return; // static render path handles this

    // Finished the whole script: hold, then restart.
    if (lineIndex >= lines.length) {
      const restart = setTimeout(() => {
        setLineIndex(0);
        setCharCount(0);
      }, 1800);
      return () => clearTimeout(restart);
    }

    const current = lines[lineIndex];

    // Output lines appear instantly after a short beat.
    if (current.kind === "output") {
      const t = setTimeout(() => setLineIndex((n) => n + 1), 260);
      return () => clearTimeout(t);
    }

    // Command lines type char-by-char.
    if (charCount < current.text.length) {
      const t = setTimeout(() => setCharCount((c) => c + 1), 26);
      return () => clearTimeout(t);
    }

    // Command fully typed: pause, then advance and reset char counter.
    const t = setTimeout(() => {
      setLineIndex((n) => n + 1);
      setCharCount(0);
    }, 420);
    return () => clearTimeout(t);
  }, [reduced, lineIndex, charCount]);

  // How many lines to render, and the partial text of the typing command.
  const revealed = reduced ? lines.length : lineIndex;
  const typing =
    !reduced && lineIndex < lines.length && lines[lineIndex].kind === "command"
      ? { text: lines[lineIndex].text.slice(0, charCount) }
      : null;

  return (
    <div
      aria-hidden="true"
      className="relative w-full max-w-lg mx-auto rounded-2xl border border-border/60 bg-panel/40 backdrop-blur-sm overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern bg-[length:24px_24px] opacity-40 pointer-events-none" />

      <div className="relative flex items-center gap-2 border-b border-border/60 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-alert/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-signal/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-healthy/70" />
        <span className="ml-2 font-mono text-xs text-muted">~/ml-platform — zsh</span>
        <span className="ml-auto font-mono text-xs text-healthy">● live</span>
      </div>

      <div className="relative min-h-[220px] p-4 font-mono text-xs sm:text-sm leading-relaxed">
        {lines.slice(0, revealed).map((line, i) => (
          <div key={i} className={toneClass(line)}>
            {line.kind === "command" ? (
              <span>
                <span className="text-neural">❯ </span>
                {line.text}
              </span>
            ) : (
              <span className="pl-4">{line.text}</span>
            )}
          </div>
        ))}

        {typing && (
          <div className="text-ink">
            <span className="text-neural">❯ </span>
            {typing.text}
            <span className="inline-block w-[0.55em] -mb-[0.1em] h-[1.1em] bg-neural animate-pulse-slow align-middle" />
          </div>
        )}
      </div>
    </div>
  );
}
