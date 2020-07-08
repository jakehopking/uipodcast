import React from 'react';
import {graphql} from 'gatsby';
import {MDXProvider} from '@mdx-js/react';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import {Link} from 'gatsby';
import {Helmet} from 'react-helmet';
import ReactPlayer from 'react-player';
import LayoutDefault from '../layouts/layout-default';
import SectionTitleWings from '../components/sections/SectionTitleWings';
import SectionContent from '../components/sections/SectionContent';
import PostHeading from '../components/PostHeading';
import Code from '../components/Code';
import Newsletter from '../components/Newsletter';
import VerticalRule from '../components/VerticalRule';
import PodcastServices from '../components/PodcastServices';

const shortcodes = {Link}; // Provide common components here

export default function EpisodeTemplate({data: {mdx, site}}) {
  return (
    <LayoutDefault>
      <Helmet>
        <title>{`${mdx.frontmatter.title} | ${site.siteMetadata.title} Podcast Episode ${mdx.frontmatter.episodeNo}`}</title>
        <meta property="og:audio" content={`${mdx.frontmatter.podcastUrl}`} />
        <meta property="og:audio:type" content="audio/mp3" />
        <meta
          property="og:title"
          content={`${mdx.frontmatter.title} - ${site.siteMetadata.title}  Podcast Episode ${mdx.frontmatter.episodeNo}`}
        />
        <meta
          property="og:description"
          content={`${site.siteMetadata.title} | ${site.siteMetadata.subTitle}`}
        />
        <meta property="og:type" content="music.song" />
        <meta
          property="og:url"
          content={`${site.siteMetadata.url}${mdx.frontmatter.path}`}
        />
        {`<!-- Twitter -->`}
        <meta
          name="twitter:title"
          content={`${mdx.frontmatter.title} - ${site.siteMetadata.title}  Podcast Episode ${mdx.frontmatter.episodeNo}`}
        />
        <meta
          name="twitter:description"
          content={`${site.siteMetadata.title} | ${site.siteMetadata.subTitle}`}
        />
      </Helmet>
      <SectionTitleWings tag="h2">{`Episode ${mdx.frontmatter.episodeNo}`}</SectionTitleWings>
      <SectionContent>
        <PostHeading tag="h3" className="mt0">
          Play
        </PostHeading>
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
      <SectionContent className="episode post">
        <MDXProvider
          components={{
            ...shortcodes,
            h1: (props) => <h1 {...props} className="" />,
            h2: (props) => <PostHeading {...props} tag="h3" />,
            h3: (props) => <h3 {...props} className="" />,
            h4: (props) => <h4 {...props} className="" />,
            h5: (props) => <h5 {...props} className="" />,
            h6: (props) => <h6 {...props} className="" />,
            table: (props) => (
              <div className="table-container">
                <table {...props} className="" />
              </div>
            ),
            pre: ({children: {props}}) => {
              if (props.mdxType === 'code') {
                return (
                  <Code
                    codeString={props.children.trim()}
                    language={
                      props.className &&
                      props.className.replace('language-', '')
                    }
                    {...props}
                  />
                );
              }
            },
          }}
        >
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
        <hr style={{marginTop: '40px'}} />
        <p className="mt3 text-center">
          If you can, please support the show:{' '}
          <a
            href="https://www.patreon.com/uitherapy"
            target="_blank"
            rel="noreferrer"
          >
            https://www.patreon.com/uitherapy
          </a>
        </p>
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

export const pageQuery = graphql`
  query EpisodeQuery($id: String) {
    site {
      siteMetadata {
        subTitle
        title
        url
      }
    }
    mdx(id: {eq: $id}) {
      id
      body
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        episodeNo
        podcastUrl
        path
        tags
        title
      }
      excerpt
    }
  }
`;
