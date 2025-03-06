import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sfRegular: [
  				'sfRegular'
  			],
  			sfSemiBold: [
  				'sfSemiBold'
  			],
  			sfBold: [
  				'sfBold'
  			]
  		},
  		keyframes: {
  			leftHero: {
  				'0%': {
  					transform: 'translateX(0) translateY(0)'
  				},
  				'25%': {
  					transform: 'translateX(50px) translateY(40px)'
  				},
  				'75%': {
  					transform: 'translateX(80px) translateY(20px)'
  				},
  				'100%': {
  					transform: 'translateX(0) translateY(0)'
  				}
  			},
  			rightHero: {
  				'0%': {
  					transform: 'translateX(0) translateY(0)'
  				},
  				'25%': {
  					transform: 'translateX(100px) translateY(40px)'
  				},
  				'75%': {
  					transform: 'translateX(40px) translateY(20px)'
  				},
  				'100%': {
  					transform: 'translateX(0) translateY(0)'
  				}
  			},
  			meteor: {
  				'0%': {
  					transform: 'rotate(var(--angle)) translateX(0)',
  					opacity: '1'
  				},
  				'70%': {
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'rotate(var(--angle)) translateX(-500px)',
  					opacity: '0'
  				}
  			}
  		},
  		animation: {
  			'left-hero': 'leftHero 10s ease-in-out infinite',
  			'right-hero': 'rightHero 20s ease-in-out infinite',
  			meteor: 'meteor 5s linear infinite'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
