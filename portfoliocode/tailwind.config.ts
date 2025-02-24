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
      animation: {
        'move-around': 'moveAround 10s ease-in-out infinite',
      },
      keyframes: {
        moveAround: {
          '0%': { transform: 'translate(-50%, -50%)' },
          '25%': { transform: 'translate(50%, -50%)' },
          '50%': { transform: 'translate(50%, 50%)' },
          '75%': { transform: 'translate(-50%, 50%)' },
          '100%': { transform: 'translate(-50%, -50%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
