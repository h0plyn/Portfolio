require('dotenv').config();

module.exports = {
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_KEY,
        disableLiveReload: false,
        previewMode: true,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
  ],
};
