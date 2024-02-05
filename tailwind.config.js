const defaultTheme = require('tailwindcss/defaultTheme');

const plugin = require('tailwindcss/plugin');

const radialGradientPlugin = plugin(
  function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        // map to bg-radient-[*]
        'bg-radient': (value) => ({
          'background-image': `radial-gradient(${value},var(--tw-gradient-stops))`,
        }),
      },
      { values: theme('radialGradients') },
    );
  },
  {
    theme: {
      radialGradients: _presets(),
    },
  },
);

/**
 * utility class presets
 */
function _presets() {
  const shapes = ['circle', 'ellipse'];
  const pos = {
    c: 'center',
    t: 'top',
    b: 'bottom',
    l: 'left',
    r: 'right',
    tl: 'top left',
    tr: 'top right',
    bl: 'bottom left',
    br: 'bottom right',
  };
  let result = {};
  for (const shape of shapes)
    for (const [posName, posValue] of Object.entries(pos)) result[`${shape}-${posName}`] = `${shape} at ${posValue}`;

  return result;
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [radialGradientPlugin],
  theme: {
    colors: {
      blue: '#3294F8',
      'base-title': '#E7EDF4',
      'base-subtitle': '#C4D4E3',
      'base-text': '#AFC2D4',
      'base-span': '#7B96B2',
      'base-label': '#3A536B',
      'base-border': '#1C2F41',
      'base-post': '#112131',
      'base-profile': '#0B1B2B',
      'base-background': '#071422',
      'base-input': '#040F1A',
    },
    fontWeight: {
      normal: 400,
      bold: 700,
    },
    lineHeight: '160%',
    fontSize: {
      xs: '12pt',
      sm: '14pt',
      md: '16pt',
      lg: '18pt',
      xl: '20pt',
      xxl: '24pt',
    },
    borderColor: {
      current: '#1C2F41',
    },
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
