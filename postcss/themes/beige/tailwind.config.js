module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#e3cece',
        'for-primary': {
          100: '#cffafe',
          500: '#06b6d4',
          900: '#164e63',
        },
      }
    },
  },
  plugins: [],
};
