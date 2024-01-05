import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./posts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        salsa: ["var(--font-salsa)"],
        ["noto-serif"]: ["var(--font-noto-serif)"],
        ["noto-color-emoji"]: ["var(--font-noto-color-emoji)"],
      },
    },
  },
  darkMode: "class",
  plugins: [require('@tailwindcss/typography')],
};
export default config;
