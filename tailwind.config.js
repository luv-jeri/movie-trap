module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        react: "url('../public/react.svg')",
      }),
    },
    backdropFilter: {
      none: 'none',
      blur: 'blur(20px)',
    },

    fontFamily: {
      head: ['Raleway'],
      cursive: ['Yellowtail'],
      azonix: ['Azonix'],
      cobaissi: ['Cobaissi'],
      kiona: ['Kiona'],
      dancing: ['Dancing Script'],
      pacifico: ['Pacifico'],
      bitter: ['Bitter'],
      poppins: ['Poppins'],
      quattrocento: ['Quattrocento'],
      josefin: ['Josefin Sans'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-filters'),
    require('tailwind-scrollbar-hide'),
  ],
};
