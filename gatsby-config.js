require("dotenv").config();

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `TripVar`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: ["gatsby-plugin-postcss"],
  flags: {
    DEV_SSR: false, // Development'ta SSR'ı devre dışı bırak
  },
};
