const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      sans: '\'Rubik\', \'Yantramanav\',\'Oxygen\', sans-serif',
      body: '\'Oxygen\', sans-serif;',
      mono: 'ui-monospace, monospace'
    },
    screens: {
      "2xs": "320px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1728px",
    },
    variables: {
      DEFAULT: {
        transition: {
          main: "500ms",
          secondary: "700ms"
        },
        sizes: {
          border: {
            main: "1rem"
          }
        }
      }
    },
    extend: {
      colors: {
        "dark-navbar": "#1E1F22",
        "dark-navbar-text": "#FFFFFF",
        "light-navbar": "#E3E5E8",
        "light-navbar-text": "#060607",
        "dark-main": "#313338",
        "dark-secondary": "#FFFFFF",
        "light-main": "#F8F8FC",
        "light-secondary": "#060607",
        "field-dark": "#4e5059",
        "field-light": "#d4d8d9",
        accent: colors.sky,
        warning: colors.amber,
        danger: colors.rose,
        success: colors.emerald
      },
      spacing: {
        navbarClosed: '5rem',
        navbarOpened: '16rem',
        navbarClosedMobile: '2.5rem'
      },
      borderRadius: {
        roundEdge: 'var(--sizes-border-main)'
      },
    },
  },


  plugins: [
    require('@mertasan/tailwindcss-variables'),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography")
  ],
};
