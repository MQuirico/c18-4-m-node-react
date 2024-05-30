const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],

  theme: {
    extend: {
      //Config Global Colors
      colors: {
        yellow: 'rgba(214, 186, 0, 1)',
        darkPurple: 'rgba(18, 9, 26, 1)',
        lightPurple: 'rgba(164, 155, 155, 0.14)',
        grey: 'rgba(164, 155, 155, 1)',
        aura: 'rgba(0, 0, 0, 0.3)',
      },
      fontFamily: {
        'marce': ['Marcellus SC', 'serif'],
      },
    },
  },
};
