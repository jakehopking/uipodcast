import React from 'react';
import {graphql} from 'gatsby';
import LayoutDefault from '../layouts/layout-default';

export default function Episodes({data}) {
  return (
    <LayoutDefault>
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
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
  }
`;
