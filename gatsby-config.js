const dotenv = require("dotenv");
if (process.env.ENVIRONMENT !== "production") {
  dotenv.config();
}

const { spaceId, accessToken,GTA } = process.env;


module.exports = {
  siteMetadata: {
    title: `Vote Jim Harvey`,
    author: `Jim Harvey`,
    description: `Vote Jim Harvey is my a Campaign website for getting to know Jim Harvey from Ogden Utah.`,
    siteUrl: `https://www.votejimharvey.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },

    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `endorsments`,
        path: `${__dirname}/src/images/endorsments`,
      },

    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId,
        accessToken
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicons/favicon-32x32.png`,
        icons: [
          {
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],// This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {

        trackingId: GTA,

      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
