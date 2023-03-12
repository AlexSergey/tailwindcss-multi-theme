module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#5c32a1',
        'for-primary': {
          100: '#a1a1a1',
          500: '#dedede',
          900: '#f5f5f5',
        },
      }
    },
  },
  plugins: [],
};
