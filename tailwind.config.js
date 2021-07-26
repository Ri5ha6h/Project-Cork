module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      nunito: 'Nunito',
    },
    extend: {
      colors: {
        primary: '#4361ee',
        secondary: '#0e1726',
        accent: '#888ea8',
        logo: '#e0e6ed',
        search: 'rgba(81, 83, 101, 0.28)',
        setting: '#1b2e4b',
        dropdown: '#3b3f5c',
      },
      boxShadow: {
        '3xl': '0 10px 20px -10px rgba(37, 99, 235, 0.6)',
      },
      opacity: {
        15: '0.15',
      },
      fill: {
        login: 'rgba(27, 85, 226, 0.23921568627450981)',
      },
      spacing: {
        3.5: '0.875rem',
        8.5: '2.125rem',
        12.5: '3.125rem',
        13.3: '3.3125rem',
        26.6: '6.625rem',
        58: '14.375rem',
        92.5: '23.125rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
