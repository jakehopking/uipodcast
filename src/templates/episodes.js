import React from 'react';
import {graphql} from 'gatsby';
import {MDXProvider} from '@mdx-js/react';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import {Link} from 'gatsby';
import ReactPlayer from 'react-player';
import LayoutDefault from '../layouts/layout-default';
import SectionTitleWings from '../components/sections/SectionTitleWings';
import SectionContent from '../components/sections/SectionContent';
import Newsletter from '../components/Newsletter';
import VerticalRule from '../components/VerticalRule';

const shortcodes = {Link}; // Provide common components here

export default function EpisodeTemplate({data: {mdx}}) {
  return (
    <LayoutDefault>
      <SectionTitleWings tag="h2">{`Episode ${mdx.frontmatter.episodeNo}`}</SectionTitleWings>
      <SectionContent>
        <h4 className="font-weight-light mt0" style={{lineHeight: 1.6}}>
          {mdx.frontmatter.title}
          <em style={{opacity: 0.4}}> &mdash; {mdx.frontmatter.date}</em>
        </h4>
        <ReactPlayer
          controls
          url={mdx.frontmatter.podcastUrl}
          width="100%"
          height="50px"
          wrapper="react-player"
          style={{marginBottom: '20px'}}
        />
      </SectionContent>
      <SectionContent>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </SectionContent>
      <Newsletter />
      <VerticalRule />
    </LayoutDefault>
  );
}

export const pageQuery = graphql`
  query EpisodeQuery($id: String) {
    mdx(id: {eq: $id}) {
      id
      body
      frontmatter {
        episodeNo
        title
        podcastUrl
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`;
