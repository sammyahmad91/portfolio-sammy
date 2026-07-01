import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#0A0A0B",
        surface: "#121213",
        panel: "#18181A",
        border: "#2A2A2C",
        muted: "#7C7C82",
        signal: "#E0A24A",
        neural: "#8A8A90",
        healthy: "#6E9E7A",
        alert: "#C98A4B",
        ink: "#EAE7E2",
      },
      fontFamily: {
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "flow": "flow 3s ease-in-out infinite",
        "scan": "scan 8s linear infinite",
      },
      keyframes: {
        flow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
