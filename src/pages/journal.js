import React from 'react';
import {graphql} from 'gatsby';
import {Helmet} from 'react-helmet';
import LayoutDefault from '../layouts/layout-default';
import SectionTitleWings from '../components/sections/SectionTitleWings';
import SectionContent from '../components/sections/SectionContent';
import EpisodeItem from '../components/EpisodeItem';
import VerticalRule from '../components/VerticalRule';
import PodcastServices from '../components/PodcastServices';
import Newsletter from '../components/Newsletter';

export default function Episodes({data}) {
  console.log(data.site.siteMetadata.title);
  // Return filtered allMdx arr for expisodes only
  const journal = data.allMdx.edges.filter(
    ({node}) =>
      node.frontmatter.category === 'journal' && node.frontmatter.draft !== true
  );
  return (
    <LayoutDefault>
      <Helmet>
        <title>{`${data.site.siteMetadata.title} | Journal`}</title>
      </Helmet>
      <SectionTitleWings tag="h2">Journal</SectionTitleWings>
      <SectionContent className={'mb3'}>
        <div className="episode-list">
          {journal.map(({node}) => (
            <EpisodeItem props={node} key={node.id} />
          ))}
        </div>
      </SectionContent>
      <SectionContent>
        <PodcastServices />
      </SectionContent>
      <VerticalRule />
      <Newsletter />
      <VerticalRule />
    </LayoutDefault>
  );
}

// Check if frontmatter path, else slug
// node.frontmatter.path !== null ? node.frontmatter.path : node.fields.slug

export const query = graphql`
  query {
    site {
      siteMetadata {
        subTitle
        title
        url
      }
    }
    allMdx(sort: {order: DESC, fields: frontmatter___date}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            author
            category
            draft
            date(formatString: "DD MMMM, YYYY")
            format
            path
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
