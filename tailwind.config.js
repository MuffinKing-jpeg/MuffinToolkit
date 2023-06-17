/** @type {import('tailwindcss').Config} */

module.exports = {
  important: true,
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
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
        accent: {
          900: "#FBD0D9",
          800: "#F7A2B3",
          700: "#F2738C",
          600: "#EE4466",
          500: "#EA1540",
          470: "#DC143C",
          400: "#BB1133",
          300: "#8C0D26",
          200: "#5E081A",
          100: "#2F040D",
        },
        "dark-navbar": "#1E1F22",
        "dark-navbar-text": "#FFFFFF",
        "light-navbar": "#E3E5E8",
        "light-navbar-text": "#060607",
        "dark-main": "#313338",
        "dark-secondary": "#FFFFFF",
        "light-main": "#F8F8FC",
        "light-secondary": "#060607",
        "field-dark": "#383A40",
        "field-light": "#EBEDEF"
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
    require("@tailwindcss/typography"),
  ],
};
