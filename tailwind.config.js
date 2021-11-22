//const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
  //mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class', also darkMode increases bundle size noticeably
  theme: {
    textIndent: {
      none: "0rem",
      xs: "1rem",
      sm: "2rem",
      md: "3rem",
      lg: "4rem",
    },
    textShadow: {
      default: "0 2px 5px rgba(0, 0, 0, 0.5)",
      lg: "0 2px 10px rgba(0, 0, 0, 0.5)",
    },
    extend: {
      screens: {
        xs: "360px",
        xsh: { raw: `(min-height: 360px)` },
        smh: { raw: `(min-height: 600px)` },
        mdh: { raw: `(min-height: 960px)` },
        lgh: { raw: `(min-height: 1280px)` },
        xlh: { raw: `(min-height: 1920px)` },
      },
      colors: {
        primary: colors.sky,
        secondary: colors.amber,
        accent: colors.indigo,
        background: colors.coolGray,
      },
    },
  },
  variants: {
    animation: ["responsive", "motion-safe", "motion-reduce"],
    textIndent: ["responsive"],
    extend: {},
  },
  plugins: [
    require("tailwindcss-typography")({
      // https://www.npmjs.com/package/tailwindcss-typography
      // all these options default to the values specified here
      ellipsis: true, // whether to generate ellipsis utilities
      hyphens: true, // whether to generate hyphenation utilities
      kerning: true, // whether to generate kerning utilities
      textUnset: true, // whether to generate utilities to unset text properties
      //componentPrefix: "c-", // the prefix to use for text style classes
    }),
    require("tailwindcss-rtl"),
    // Add custom plugins as such:
    plugin(({ addUtilities }) => {
      const extendTextTransform = {
        ".uppercase-first": {
          "&::first-letter": {
            textTransform: "uppercase",
          },
        },
        ".uppercase-firstOnly": {
          textTransform: "lowercase",
          "&::first-letter": {
            textTransform: "uppercase",
          },
        },
      };
      addUtilities(extendTextTransform, ["responsive"]);
    }),
  ],
};
