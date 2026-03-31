/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Libre Baskerville', 'Georgia', 'serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        hero: ['clamp(2.75rem, 6vw, 5rem)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'display-lg': ['3rem', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        display: ['2.4rem', { lineHeight: '1.12', letterSpacing: '-0.02em' }],
        'display-sm': ['1.6rem', { lineHeight: '1.28', letterSpacing: '-0.015em' }],
      },
      borderRadius: {
        'ds-sm': 'var(--radius-sm)',
        'ds-md': 'var(--radius-md)',
        'ds-lg': 'var(--radius-lg)',
        'ds-xl': 'var(--radius-xl)',
        'ds-2xl': 'var(--radius-2xl)',
        'ds-3xl': 'var(--radius-3xl)',
      },
      boxShadow: {
        glow: 'var(--shadow-glow)',
        'glow-strong': 'var(--shadow-glow-strong)',
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      maxWidth: {
        container: 'var(--container-max)',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-links': 'rgb(var(--color-accent))',
            '--tw-prose-bold': 'rgb(var(--color-text))',
            '--tw-prose-headings': 'rgb(var(--color-text))',
            '--tw-prose-body': 'rgb(var(--color-text-muted))',
            '--tw-prose-quotes': 'rgb(var(--color-text-muted))',
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addBase }) {
      addBase({
        'h1, h2, h3, h4, h5, h6': {
          fontFamily: 'Libre Baskerville, Georgia, serif',
        },
      });
    },
  ],
};
