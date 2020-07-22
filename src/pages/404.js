import React from 'react';
import {Link, graphql} from 'gatsby';
import {Helmet} from 'react-helmet';
import scrollTo from '../utils/scrollTo';
import LayoutDefault from '../layouts/layout-default';
import SectionTitleWings from '../components/sections/SectionTitleWings';
import PostHeading from '../components/PostHeading';
import SectionContent from '../components/sections/SectionContent';
import EpisodeItem from '../components/EpisodeItem';
import VerticalRule from '../components/VerticalRule';
import PodcastServices from '../components/PodcastServices';
import Newsletter from '../components/Newsletter';

export default function Episodes({data}) {
  // Return filtered allMdx arr for expisodes only
  const episodes = data.allMdx.edges
    .filter(({node}) => node.frontmatter.category === 'episode')
    .slice(0, 5);
  return (
    <LayoutDefault>
      <Helmet>
        <title>UI Therapy Podcast | 404 Page not found</title>
      </Helmet>
      <SectionTitleWings tag="h2">😭 404: Page not found 😭</SectionTitleWings>
      <SectionContent className={'mb3'}>
        <PostHeading tag="h4">
          Sorry, but this page could not be found!
        </PostHeading>
        <p>However, please don't allow that to make this a wasted journey.</p>
        <p>
          May I kindly suggest that you signup for my{' '}
          <a href="#newsletter">newsletter</a>, and I promise to send you some
          cool stuff that will make this page's inconvenience a little less
          painful.
        </p>
        <p>Or how about listening to one of my smashing episodes? 👇</p>
        <PostHeading tag="h3">Episodes</PostHeading>
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
