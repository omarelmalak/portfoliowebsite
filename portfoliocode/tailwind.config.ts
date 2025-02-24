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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sfRegular: ['sfRegular'],
        sfSemiBold: ['sfSemiBold'],
        sfBold: ['sfBold']
      },
      keyframes: {
        tornado: {
          '0%': { transform: 'rotate(0deg) translate(0, 0)' },
          '50%': { transform: 'rotate(180deg) translate(0, 0)' },
          '100%': { transform: 'rotate(360deg) translate(0, 0)' },
        },
      },
      animation: {
        tornado: 'tornado 1s ease-in-out',
      },
    },
  },
  plugins: [],
} satisfies Config;
