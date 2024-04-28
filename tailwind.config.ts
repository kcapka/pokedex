import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'pokemon-red': 'rgba(235,51,35)',
        'pokemon-dark-red': 'rgba(188,38,26)',
        'pokemon-blue': 'rgba(114,185,249)',
        'pokemon-dark-blue': 'rgba(54,61,125)',
        'pokemon-yellow': 'rgba(251,221,75)',
        'pokemon-dark-yellow': 'rgba(177,160,64)',
        'pokemon-gray': 'rgb(204,210,203)',
        'pokemon-dark-gray': 'rgb(119.130,114)',
      }
    },
  },
  plugins: [],
} satisfies Config

