import React from 'react';
import {graphql} from 'gatsby';
import LayoutDefault from '../layouts/layout-default';
import SectionTitleWings from '../components/sections/SectionTitleWings';
import SectionContent from '../components/sections/SectionContent';
import EpisodeItem from '../components/EpisodeItem';
import VerticalRule from '../components/VerticalRule';
import PodcastServices from '../components/PodcastServices';
import Newsletter from '../components/Newsletter';

export default function Episodes({data}) {
  // Return filtered allMdx arr for expisodes only
  const episodes = data.allMdx.edges.filter(
    ({node}) => node.frontmatter.category === 'episode'
  );
  return (
    <LayoutDefault>
      <SectionTitleWings tag="h2">Episodes</SectionTitleWings>
      <SectionContent className={'mb3'}>
        <div className="episode-list">
          {episodes.map(({node}) => (
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
    allMdx(sort: {order: DESC, fields: frontmatter___date}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            category
            date(formatString: "DD MMMM, YYYY")
            episodeNo
            format
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
