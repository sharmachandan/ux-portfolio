/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Syne', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.25rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'display': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'display-sm': ['1.25rem', { lineHeight: '1.3' }],
      },
      boxShadow: {
        glow: '0 0 24px rgb(56 189 248 / 0.15)',
      },
      borderRadius: {
        'ds-sm': 'var(--radius-sm)',
        'ds-md': 'var(--radius-md)',
        'ds-lg': 'var(--radius-lg)',
        'ds-xl': 'var(--radius-xl)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addBase }) {
      addBase({
        'h1, h2, h3, h4, h5, h6': {
          fontFamily: 'Syne, system-ui, sans-serif',
        },
      });
    },
  ],
};
