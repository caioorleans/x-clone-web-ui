/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
    colors:{
      'xblue': '#1D9BF0',
      'black-font': '#0F1419',
      'white-font': '#E7E9EA',
      'light-gray-font': '#71767B',
      'dark-gray-font': '#536471',
      'xlight-gray-font':'#EFF3F4',
      'xdark-gray-font':'#2F3336',
      'gray-border': '#DADCE0',
      'btn-hover': '#E6E6E6',
      'blue-btn-hover': '#1B8CD8',
      'trs-btn-hover': '#E8F5FD',
      'trs-btn-dark-hover':'#031018',
      'black': '#000000',
      'white': '#fff'
    },
    fontFamily: {
      'chirp':['chirp']
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

