/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Forest green primary, off-white surface, deep ink for text
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
        cream: {
          50: '#fdfcf8',
          100: '#faf7ee',
          200: '#f3edd7',
          300: '#e9deb5',
        },
        ink: {
          900: '#1a1a1a',
          800: '#2a2a2a',
          700: '#3d3d3d',
          600: '#525252',
          500: '#6b6b6b',
          400: '#9a9a9a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
      },
      maxWidth: {
        prose: '68ch',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
          },
        },
      },
    },
  },
  plugins: [],
};
