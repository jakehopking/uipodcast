const path = require(`path`);
const {createFilePath} = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({node, getNode, actions}) => {
  const {createNodeField} = actions;

  // General MDX pages
  if (node.internal.type === `Mdx` && node.frontmatter.category === `page`) {
    const slug = createFilePath({node, getNode, basePath: `content`});
    createNodeField({
      name: `slug`,
      node,
      value: slug,
    });
  }

  // Episode MDX pages
  else if (
    node.internal.type === `Mdx` &&
    node.frontmatter.category === `episode`
  ) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `content`,
    });
    createNodeField({
      name: `slug`,
      node,
      value: slug,
    });
  }
};

exports.createPages = async ({graphql, actions, reporter}) => {
  // Destructure the createPage function from the actions object
  const {createPage} = actions;

  const pages = await graphql(`
    query {
      allMdx(filter: {frontmatter: {category: {eq: "page"}}}) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);
  if (pages.errors) {
    reporter.panicOnBuild(
      '🚨  ERROR: Loading "createPages [default pages]" query'
    );
  }
  pages.data.allMdx.edges.forEach(({node}) => {
    createPage({
      path: node.frontmatter.path || node.fields.slug,
      component: path.resolve(`./src/templates/journal.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    });
  });

  const episodes = await graphql(`
    query {
      allMdx(filter: {frontmatter: {category: {eq: "episode"}}}) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  if (episodes.errors) {
    reporter.panicOnBuild(
      '🚨  ERROR: Loading "createPages [episodes pages]" query'
    );
  }
  // Create episode pages.
  // you'll call `createPage` for each episode
  episodes.data.allMdx.edges.forEach(({node}, index) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.frontmatter.path || node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/templates/episodes.js`),
      // You can use the values in this context in
      // our page layout component
      context: {id: node.id},
    });
  });
};
