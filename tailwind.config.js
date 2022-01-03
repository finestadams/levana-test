const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      ...colors,
      lavanaSidebarColor: '#d9d9d9',
      lavanaBlue: '#294d9a',
      lavanaDark: '#404040',
      lavanaGrey: '#757575'
    },
    extend: {}
  },
  plugins: []
};
