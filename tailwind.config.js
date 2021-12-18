module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        navbar: '0 4px 16px 0px rgba(17, 17, 17, 0.04)',
      },
      colors: {
        'navbar-white': '#FFF8F0',
        'landing-white': '#F7F7FC',
        'greek-green': '#559360',
      },
      fontFamily: {
        maze: [
          'Reem Kufi',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  variants: {
    extend: {
      visibility: ['group-hover', 'group-focus'],
    },
  },
  plugins: [],
}
