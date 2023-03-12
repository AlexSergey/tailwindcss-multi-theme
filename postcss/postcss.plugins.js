const cssnano = require('cssnano')({
  preset: 'default',
});

const autoprefixer = require('autoprefixer');

module.exports = () => {
  if (process.env.NODE_ENV === 'production') {
    return [autoprefixer, cssnano];
  }
  return [autoprefixer];
};
