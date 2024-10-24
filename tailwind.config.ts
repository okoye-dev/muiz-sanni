import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "440px",
      },
      colors: {
        bg: "#13121A",
        gray: {
          white: "#F0F0F0",
        },
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
