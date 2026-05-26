/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Forest green primary
        forest: {
          50: '#f3f7f4',
          100: '#e3ece5',
          200: '#c6d9cb',
          300: '#9ebca7',
          400: '#6e987c',
          500: '#4d7a5c',
          600: '#386046',
          700: '#2c4d39',
          800: '#243e2f',
          900: '#1e3328',
          950: '#0f1d17',
        },
        // Cream surfaces
        cream: {
          50: '#fdfcf8',
          100: '#faf7ee',
          200: '#f3edd7',
          300: '#e9deb5',
        },
        // Ink — text + neutral
        ink: {
          900: '#1a1a1a',
          800: '#2a2a2a',
          700: '#3d3d3d',
          600: '#525252',
          500: '#6b6b6b',
          400: '#9a9a9a',
          300: '#c2c2c2',
        },
        // Rust accent — used sparingly for editorial moments
        rust: {
          50: '#fbf3ef',
          100: '#f5e0d4',
          200: '#e8bda6',
          300: '#d8957a',
          400: '#c4623d',
          500: '#a84e2d',
          600: '#8a3e23',
        },
      },
      fontFamily: {
        // Inter throughout — workhorse geometric sans, what the site shipped with originally
        display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        // Mono for tabular data + eyebrow labels
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // Display scale — uses clamp for fluid sizing, tighter tracking for sans-serif
        'display-1': ['clamp(2.5rem, 5.5vw + 0.5rem, 4.75rem)', { lineHeight: '1.02', letterSpacing: '-0.035em' }],
        'display-2': ['clamp(2rem, 4vw + 0.5rem, 3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-3': ['clamp(1.75rem, 2.75vw + 0.5rem, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'display-4': ['clamp(1.375rem, 1.75vw + 0.5rem, 1.875rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        // Body scale
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.65' }],
        'body-sm': ['0.9375rem', { lineHeight: '1.6' }],
        // Eyebrow labels
        'eyebrow': ['0.6875rem', { lineHeight: '1', letterSpacing: '0.18em' }],
      },
      maxWidth: {
        prose: '68ch',
        narrow: '52ch',
      },
      spacing: {
        section: 'clamp(4rem, 10vw, 8rem)',
        'section-sm': 'clamp(2.5rem, 6vw, 5rem)',
      },
      borderWidth: {
        hairline: '0.5px',
      },
      animation: {
        'reveal': 'reveal 0.8s cubic-bezier(0.2, 0.9, 0.3, 1) both',
        'reveal-delayed': 'reveal 0.8s cubic-bezier(0.2, 0.9, 0.3, 1) 0.15s both',
      },
      keyframes: {
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
