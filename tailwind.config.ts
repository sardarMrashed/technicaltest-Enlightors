import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lama:"#F35C7A",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },

  },
  plugins: [],
} satisfies Config;
