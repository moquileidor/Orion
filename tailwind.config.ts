import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        electric: '#9333EA', // Morado eléctrico principal
        'electric-yellow': '#FFE53D', // Amarillo eléctrico brillante
        'electric-light': '#B355FF',
        'electric-purple': {
          light: '#B355FF', // Morado más claro para efectos
          DEFAULT: '#9333EA', // El morado base
          dark: '#7928CA', // Morado más oscuro para profundidad
        },
        'electric-gold': {
          light: '#FFE53D', // Amarillo brillante
          DEFAULT: '#FFD700', // Dorado eléctrico
          dark: '#B8860B', // Dorado más oscuro
        },
        metallic: '#71717A',
        'accent-silver': '#E5E7EB',
        'pure-white': '#FFFFFF',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 8s linear infinite',
        'cosmic-pulse': 'cosmicPulse 4s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { opacity: '0.1' },
          '50%': { opacity: '0.5' },
        },
        cosmicPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(147, 51, 234, 0.5), 0 0 40px rgba(255, 229, 61, 0.3)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(147, 51, 234, 0.7), 0 0 50px rgba(255, 229, 61, 0.5)',
            transform: 'scale(1.05)'
          },
        },
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(to bottom right, rgba(147, 51, 234, 0.15), rgba(255, 229, 61, 0.1))',
      },
    },
  },
  plugins: [],
}

export default config 