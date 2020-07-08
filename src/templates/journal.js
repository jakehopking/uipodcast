import React from 'react';
import {graphql} from 'gatsby';
import {MDXProvider} from '@mdx-js/react';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import {Link} from 'gatsby';
import {Helmet} from 'react-helmet';
import Img from 'gatsby-image';
import LayoutDefault from '../layouts/layout-default';
import SectionTitleWings from '../components/sections/SectionTitleWings';
import SectionContent from '../components/sections/SectionContent';
import PostHeading from '../components/PostHeading';
import Code from '../components/Code';
import Newsletter from '../components/Newsletter';
import VerticalRule from '../components/VerticalRule';
import PodcastServices from '../components/PodcastServices';

const shortcodes = {Link}; // Provide common components here

export default function DefaultTemplate({data: {mdx, site}, props}) {
  let postImage = mdx.frontmatter.postImage.childImageSharp.fluid;
  return (
    <LayoutDefault {...props}>
      <Helmet>
        <title>{`${mdx.frontmatter.title} | ${site.siteMetadata.title} | Journal`}</title>
        <meta
          property="og:title"
          content={`${mdx.frontmatter.title} - ${site.siteMetadata.title} Journal`}
        />
        <meta
          property="og:description"
          content={`${site.siteMetadata.title} | ${site.siteMetadata.subTitle}`}
        />
        {`<!-- Twitter -->`}
        <meta
          name="twitter:title"
          content={`${mdx.frontmatter.title} - ${site.siteMetadata.title} | Journal`}
        />
        <meta
          name="twitter:description"
          content={`${site.siteMetadata.title} | ${site.siteMetadata.subTitle}`}
        />
      </Helmet>
      <SectionTitleWings tag="h2">Journal</SectionTitleWings>
      <SectionContent className="journal post">
        <div className="journal__heading">
          <Img fluid={postImage} className="journal__heading-image" />
          <h2 className="journal__heading-title colour-white">
            {mdx.frontmatter.title}
          </h2>
          <p className="journal__heading-date">
            {mdx.frontmatter.date} by <em>{mdx.frontmatter.author}</em>
          </p>
        </div>
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
        <hr />
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
  query($slug: String!) {
    site {
      siteMetadata {
        subTitle
        title
        url
      }
    }
    mdx(fields: {slug: {eq: $slug}}) {
      body
      frontmatter {
        author
        date(formatString: "DD MMMM, YYYY")
        tags
        title
        postImage {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 85) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
