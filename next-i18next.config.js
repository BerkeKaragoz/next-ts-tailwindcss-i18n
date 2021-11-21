module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "tr"],
  },
  defaultNS: "common",
  react: { useSuspense: false }, //TEMP
  reloadOnPrerender: process.env.NODE_ENV !== "production", // DEVELOPMENT-ONLY, IMPORTANT!
};
