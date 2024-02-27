/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';

export default {
  content: ['./index.html', './public/**/*.js', './public/**/*.svg'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('/public/assets/hero-bg.jpeg')",
      },
      maxWidth: {
        '8xl': '90rem',
      },
      fontSize: {
        '8xl': '5.5rem',
      },
      screens: {
        xs: '480px',
        // xlg: '900px',
        ...defaultTheme.screens,
      },
      colors: {
        "port-yellow":"#ffb400",
        cyan: colors.cyan,
        emerald: colors.emerald,
        ...defaultTheme.colors,
      },
    },
  },
  plugins: [],
};
