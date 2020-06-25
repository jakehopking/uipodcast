import React from 'react';
import {graphql} from 'gatsby';
import {MDXProvider} from '@mdx-js/react';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import {Link} from 'gatsby';
import LayoutDefault from '../layouts/layout-default';
import SectionTitleWings from '../components/sections/SectionTitleWings';
import SectionContent from '../components/sections/SectionContent';
import PostHeading from '../components/PostHeading';
import Code from '../components/Code';
import Newsletter from '../components/Newsletter';
import VerticalRule from '../components/VerticalRule';

const shortcodes = {Link}; // Provide common components here

export default function DefaultTemplate({data: {mdx}, props}) {
  return (
    <LayoutDefault {...props}>
      <SectionTitleWings tag="h2">Journal</SectionTitleWings>
      <SectionContent className="journal">
        <PostHeading tag="h3">{`${mdx.frontmatter.title}`}</PostHeading>
        <MDXProvider
          components={{
            ...shortcodes,
            h1: (props) => <h1 {...props} className="" />,
            h2: (props) => <PostHeading {...props} tag="h3" />,
            h3: (props) => <h3 {...props} className="" />,
            h4: (props) => <h4 {...props} className="" />,
            h5: (props) => <h5 {...props} className="" />,
            h6: (props) => <h6 {...props} className="" />,
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
      </SectionContent>
      <VerticalRule />
      <Newsletter />
      <VerticalRule />
    </LayoutDefault>
  );
}

// export const pageQuery = graphql`
//   query PageQuery($id: String) {
//     mdx(id: {eq: $id}) {
//       id
//       body
//       frontmatter {
//         title
//       }
//     }
//   }
// `;

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: {slug: {eq: $slug}}) {
      body
      frontmatter {
        title
        tags
      }
    }
  }
`;
