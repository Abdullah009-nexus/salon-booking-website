/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0c0c0c',
        surface: '#161616',
        ivory: '#f5f1eb',
        muted: '#888888',
        subtle: '#bbbbbb',
        gold: '#c9a96e',
        border: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, rgba(12,12,10,0.10) 0%, rgba(12,12,10,0.55) 55%, rgba(12,12,10,0.90) 100%)',
      },
    }
  },
  plugins: []
};
