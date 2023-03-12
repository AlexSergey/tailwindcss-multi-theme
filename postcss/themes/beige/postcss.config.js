module.exports = {
  parser: 'postcss-scss',
  plugins: [
    require('postcss-import'),
    require('tailwindcss')('postcss/themes/beige/tailwind.config.js'),
    ...require('../../postcss.plugins')(),
  ],
};
