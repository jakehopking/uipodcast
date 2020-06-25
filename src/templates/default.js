import React from 'react';
import {graphql} from 'gatsby';
import {MDXProvider} from '@mdx-js/react';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import {Link} from 'gatsby';
import LayoutDefault from '../layouts/layout-default';
import SectionTitleWings from '../components/sections/SectionTitleWings';
import SectionContent from '../components/sections/SectionContent';

const shortcodes = {Link}; // Provide common components here

export default function DefaultTemplate({data: {mdx}, props}) {
  return (
    <LayoutDefault {...props}>
      <SectionTitleWings tag="h2">{`${mdx.frontmatter.title}`}</SectionTitleWings>
      <SectionContent className="page">
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </SectionContent>
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
