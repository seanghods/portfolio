/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'index.html'],
  theme: {
    extend: {
      fontFamily: {
        body: ["'DM Sans'", 'sans-serif'],
      },
      keyframes: {
        // edge drifts across the greens (teal → emerald → grass) while hovered
        borderGlow: {
          '0%, 100%': {
            borderColor: 'rgb(45 212 191 / 0.85)',
            boxShadow: '0 0 24px -6px rgb(45 212 191 / 0.28)',
          },
          '50%': {
            borderColor: 'rgb(74 222 128 / 0.85)',
            boxShadow: '0 0 24px -6px rgb(74 222 128 / 0.28)',
          },
        },
      },
      animation: {
        'border-glow': 'borderGlow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
