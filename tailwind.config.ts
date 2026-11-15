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
        accent: {
          cyan: "#00f0ff",
          blue: "#388bff",
          purple: "#9b5cff",
        },
      },
      boxShadow: {
        glow: "0 0 48px rgba(0, 240, 255, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
