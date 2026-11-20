/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#05080F',
          deep: '#030509',
          surface: '#080D1A',
          card: '#0E1626',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        biolum: {
          cyan: '#38BDF8',
          cyanGlow: '#0284C7',
          amber: '#F59E0B',
          amberGlow: '#D97706',
          emerald: '#10B981',
          violet: '#8B5CF6',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(56, 189, 248, 0.2))' },
          '50%': { opacity: '0.9', filter: 'drop-shadow(0 0 25px rgba(56, 189, 248, 0.5))' },
        },
      },
    },
  },
  plugins: [],
};
