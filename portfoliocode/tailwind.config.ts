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
        leftHero: {
          '0%': {
            transform: 'translateX(0) translateY(0)',
          },
          '25%': {
            transform: 'translateX(50px) translateY(40px)',
          },
          '75%': {
            transform: 'translateX(80px) translateY(20px)',
          },
          '100%': {
            transform: 'translateX(0) translateY(0)',
          },
        },
        rightHero: {
          '0%': {
            transform: 'translateX(0) translateY(0)',
          },
          '25%': {
            transform: 'translateX(100px) translateY(40px)',
          },
          '75%': {
            transform: 'translateX(40px) translateY(20px)',
          },
          '100%': {
            transform: 'translateX(0) translateY(0)',
          },
        },
      },
      animation: {
        'left-hero': 'leftHero 10s ease-in-out infinite',
        'right-hero': 'rightHero 20s ease-in-out infinite'
      },
    },
  },
  plugins: [],
} satisfies Config;
