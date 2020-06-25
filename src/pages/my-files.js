import React from 'react';
import {graphql} from 'gatsby';
import LayoutDefault from '../layouts/layout-default';
import SectionTitleWings from '../components/sections/SectionTitleWings';
import SectionContent from '../components/sections/SectionContent';

export default function MyFiles({data}) {
  return (
    <LayoutDefault>
      <SectionTitleWings tag="h2">My Site's Files</SectionTitleWings>
      <SectionContent className={'mb3'}>
        <table>
          <thead>
            <tr>
              <th>relativePath</th>
              <th>prettySize</th>
              <th>extension</th>
              <th>birthTime</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({node}, index) => (
              <tr key={index}>
                <td>{node.relativePath}</td>
                <td>{node.prettySize}</td>
                <td>{node.extension}</td>
                <td>{node.birthTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </SectionContent>
    </LayoutDefault>
  );
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          size
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`;
