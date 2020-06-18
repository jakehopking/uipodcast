import React from 'react';
import {graphql, Link} from 'gatsby';
import LayoutDefault from '../layouts/layout-default';
import SectionTitleWings from '../components/sections/SectionTitleWings';
import SectionContent from '../components/sections/SectionContent';

export default function Episodes({data}) {
  const episodes = data.allMdx.edges.filter(
    ({node}) => node.frontmatter.category === 'episode'
  );
  return (
    <LayoutDefault>
      {/* <h1>About {data.site.siteMetadata.title}</h1> */}
      <SectionTitleWings tag="h2">Episodes</SectionTitleWings>
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
    allMdx(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            category
            date(formatString: "DD MMMM, YYYY")
            path
            podcastUrl
            tags
            title
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
