// const path = require(`path`);
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    author: `Jake Hopking`,
    description: `The UI Therapy podcast is about cutting through the cacophony of differing opinions about which method, framework or language is best. Instead I aim to provide listeners with clarity and simplicity by offering battle-tested use cases and recommendations that have their feet firmly rooted in simplicity and longevity. I also aim to interview leading developers, designers and other professionals who can share insights and processes applicable to our community and industry. Basically, despite my 20 years of professional experience, I find myself getting increasingly slowed down and fatigued by all the new ‘must use’ tooling and frameworks that keep springing up — I want to provide some help and group therapy for everyone who finds themselves increasingly paralysed by language, framework or methodology analysis.`,
    keywords: `user interface, podcast, design, development, programming, coding, code, ui, user experience, ux, framework, interviews, expertise`,
    subTitle: `The podcast for designers, developers and independent thinkers`,
    title: `UI Therapy`,
    url: `https://uitherapy.fm`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: `${__dirname}/src/layouts/layout-default.js`,
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
        path: `${__dirname}/src/images/`,
        // path: path.join(__dirname, `src`, `images`),
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
        path: `${__dirname}/src/content/episodes/`,
        // path: path.join(__dirname, `src`, `content`, `episodes`),
      },
    },
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
