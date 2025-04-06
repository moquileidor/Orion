/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'space-black': '#0B0B0F',
        'deep-space': '#151520',
        'electric': '#4B0082',
        'electric-light': '#9370DB',
        'accent-gold': '#FFD700',
        'accent-silver': '#E6E8E6',
        'metallic': '#C0C0C0',
        'pure-white': '#FFFFFF',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'stars': 'url("/fondo.jpg")',
      },
    },
  },
  plugins: [],
} 