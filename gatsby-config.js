const path = require(`path`);
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    author: `Jake Hopking`,
    keywords: `user interface, podcast, design, development, programming, coding, code, ui, user experience, ux, framework, interviews, expertise`,
    image: `${__dirname}/src/images/logo-square.jpg`,
    subTitle: `The podcast for designers, developers and independent thinkers`,
    title: `UI Therapy`,
    url: `https://uitherapy.fm`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: path.resolve('./src/layouts/layout-default.js'),
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    // Add a collection called "episodes" that looks
    // for files in episodes/
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'episodes',
        path: path.join(__dirname, `src`, `content`, `episodes`),
      },
    },
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-100706005-3`,
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
  ],
};
