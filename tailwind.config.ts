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
        bg: "#F4F5F7",
        accent: { DEFAULT: "#F94D00", hover: "#D94400", light: "#FFF0EA" },
        ink: { DEFAULT: "#0F172A", 2: "#475569", 3: "#94A3B8" },
        card: "#FFFFFF",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 0 0 1px rgba(99,179,237,0.25), 0 4px 24px rgba(0,0,0,0.07)",
        "card-hover": "0 0 0 2px rgba(249,77,0,0.25), 0 8px 36px rgba(0,0,0,0.12)",
        accent: "0 4px 20px rgba(249,77,0,0.35)",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        wave: {
          "0%,100%": { transform: "rotate(0deg)" },
          "20%": { transform: "rotate(-10deg)" },
          "40%": { transform: "rotate(12deg)" },
          "60%": { transform: "rotate(-8deg)" },
          "80%": { transform: "rotate(8deg)" },
        },
        blink: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0" } },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        wave: "wave 2s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;
