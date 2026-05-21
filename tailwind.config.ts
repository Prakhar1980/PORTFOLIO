import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui"]
      },
      colors: {
        obsidian: "#04060a",
        signal: "#49f5d7",
        volt: "#ffe86a",
        magma: "#ff5a7a",
        cobalt: "#5f8cff"
      },
      boxShadow: {
        glow: "0 0 40px rgba(73, 245, 215, 0.28)",
        amber: "0 0 34px rgba(255, 232, 106, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
