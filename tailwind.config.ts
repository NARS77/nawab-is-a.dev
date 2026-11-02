import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0B0C0E",
          subtle: "#111317",
          elevated: "#171A21",
          card: "#13161C",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          medium: "rgba(255, 255, 255, 0.14)",
          strong: "rgba(255, 255, 255, 0.24)",
        },
        accent: {
          DEFAULT: "#E59866", // Warm engineering terracotta / amber
          subtle: "rgba(229, 152, 102, 0.12)",
          signal: "#10B981", // Understated live indicator green
        },
        content: {
          primary: "#F3F4F6",
          secondary: "#9CA3AF",
          muted: "#6B7280",
          dim: "#4B5563",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
        mono: [
          '"JetBrains Mono"',
          '"SF Mono"',
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          "monospace",
        ],
      },
      letterSpacing: {
        tighter: "-0.035em",
        tight: "-0.02em",
        normal: "0",
        wide: "0.03em",
        wider: "0.08em",
        widest: "0.15em",
      },
    },
  },
  plugins: [],
};

export default config;
