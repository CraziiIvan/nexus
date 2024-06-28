import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        error: "error .15s ease-out",
      },
      keyframes: {
        error: {
          "0%": { opacity: "0" },
          "100%": { opaciy: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
