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
    rss: `https://feeds.buzzsprout.com/1180283.rss`,
    siteUrl: `https://uitherapy.fm`,
    subTitle: `The podcast for designers, developers and independent thinkers`,
    title: `UI Therapy`,
    url: `https://uitherapy.fm`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-100706005-3`,
        head: true,
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Merriweather\:300,300i,400,400i,700,700i`,
          `Source Sans\:200,300,300i,400i,600,600i,700`,
          `Open Sans Condensed\:300,300i,700,700i`,
        ],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: `${__dirname}/src/layouts/layout-default.js`,
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              disableBgImageOnAlpha: true,
              backgroundColor: 'transparent',
              quality: 85,
            },
          },
          // {
          //   resolve: `@weknow/gatsby-remark-twitter`,
          //   options: {
          //     // debug: true,
          //     align: `center`,
          //     theme: `dark`,
          //   },
          // },
        ],
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'journal',
        path: `${__dirname}/src/content/journal/`,
        // path: path.join(__dirname, `src`, `content`, `episodes`),
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        exclude: [`/my-files/`],
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-instagram`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-twitter`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
  ],
};
