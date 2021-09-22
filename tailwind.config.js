const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  darkMode: "class",
  purge: [
    "./pages/**/*.tsx",
    "./pages/**/*.js",
    "./components/**/*.tsx",
    "./components/**/*.js",
    "./components/**/*.css",
    "./components/**/*.scss",
    "./styles/**/*.scss",
    "./utils/**/*.ts",
    "./styles/jit-hack.txt",
  ],

  theme: {
    nightwind: {
      colorClasses: ["gradient", "placeholder"],
      typography: true,
      colors: {
        white: "#141618",
        black: "gray.50",
        sky: {
          50: "#012338",
        },
      },
    },
    extend: {
      screens: {
        xs: "560px",
      },
      colors: {
        gray: colors.coolGray,
        sky: colors.sky,
        cyan: colors.cyan,
        random1: {
          300: "var(--color1)",
          600: "var(--darkColor1)",
        },
        random2: {
          300: "var(--color2)",
          600: "var(--darkColor2)",
        },
      },
      zIndex: {
        "-10": "-10",
      },
      animation: {
        "spin-slow": "spin 30s linear infinite",
        "ping-slow": "ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.black"),
            h1: {
              color: theme("colors.black"),
              fontWeight: "900",
            },
            h2: {
              color: theme("colors.black"),
              fontWeight: "900",
            },
            h3: {
              color: theme("colors.black"),
            },
            blockquote: {
              borderLeftColor: theme("colors.random2.600"),
            },
            "blockquote p:first-of-type::before": false,
            "blockquote p:last-of-type::after": false,
          },
        },
      }),
    },
  },
  variants: {
    nightwind: ["group-hover", "focus", "disabled"],
  },

  plugins: [require("@tailwindcss/typography"), require("nightwind")],
}
