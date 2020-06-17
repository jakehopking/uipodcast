import React from 'react';
import {graphql, Link} from 'gatsby';
import LayoutDefault from '../layouts/layout-default';
import SectionContent from '../components/sections/SectionContent';

export default function Episodes({data}) {
  const episodes = data.allMdx.edges.filter(
    ({node}) => node.frontmatter.category === 'episode'
  );
  return (
    <LayoutDefault>
      {/* <h1>About {data.site.siteMetadata.title}</h1> */}
      <SectionContent className={'mb6'}>
        <h4>{episodes.length} Episode</h4>
        {episodes.map(({node}) => (
          <div key={node.id}>
            <Link
              to={
                node.frontmatter.path !== null
                  ? node.frontmatter.path
                  : node.fields.slug
              }
            >
              <h3>
                {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </SectionContent>
    </LayoutDefault>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            path
            category
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
