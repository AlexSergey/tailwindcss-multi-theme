module.exports = {
  parser: 'postcss-scss',
  plugins: [
    require('postcss-import'),
    require('tailwindcss')('postcss/themes/purple/tailwind.config.js'),
    ...require('../../postcss.plugins')(),
  ],
};
