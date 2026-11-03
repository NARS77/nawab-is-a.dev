import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["var(--font-grotesk)", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        none: "0px",
        DEFAULT: "0px",
        sm: "0px",
        md: "0px",
        lg: "0px",
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.03em",
        normal: "0",
        wide: "0.04em",
        wider: "0.08em",
        widest: "0.15em",
      },
      borderWidth: {
        DEFAULT: "1px",
        "2": "2px",
        "3": "3px",
        "4": "4px",
      },
    },
  },
  plugins: [],
};

export default config;
