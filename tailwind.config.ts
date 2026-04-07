import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f7f3ec",
        foreground: "#1f1b17",
        muted: "#6e665e",
        line: "#d8d1c6",
        panel: "#fbf8f2",
      },
      fontFamily: {
        serif: ["var(--font-serif)"],
        sans: ["var(--font-sans)"],
      },
      boxShadow: {
        soft: "0 20px 60px rgba(63, 52, 40, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;

