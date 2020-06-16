import React from 'react';
// import { css } from "@emotion/core"
import {Link, graphql} from 'gatsby';
// import { rhythm } from "../utils/typography"
import LayoutDefault from '../layouts/layout-default';
import SectionTitleWings from '../components/sections/SectionTitleWings';
import SectionContent from '../components/sections/SectionContent';
import TextColumns from '../components/textColumns/TextColumns';
import {FaArrowAltCircleRight} from 'react-icons/fa';

export default function Home({data}) {
  const episodes = data.allMdx.edges.filter(
    ({node}) => node.frontmatter.category === 'episode'
  );

  return (
    <LayoutDefault>
      <SectionTitleWings id="about" tag="h2">
        About
      </SectionTitleWings>
      <SectionContent className={'mb6'}>
        <TextColumns>
          <p className="lead first-letter first-letter text-justify font-sans font-weight-light">
            The <acronym title="User Interface">UI</acronym> Therapy podcast is
            about cutting through the cacophony of differing opinions about
            which method, framework or language is best. Instead I aim to
            provide listeners with clarity and simplicity by offering
            battle-tested use cases and recommendations that have their feet
            firmly rooted in simplicity and longevity. I also aim to interview
            leading developers, designers and other professionals who can share
            insights and processes applicable to our community and industry.
            Basically, despite my 20 years of professional experience, I find
            myself getting increasingly slowed down and fatigued by all the new
            ‘must use’ tooling and frameworks that keep springing up &mdash; I
            want to provide some help and group therapy for everyone who finds
            themselves increasingly paralysed by language, framework or
            methodology analysis. <br />
            &mdash;
            <em>
              <a
                href="https://hopking.io/"
                target="_blank"
                title="Visit Jake's personal website"
              >
                Jake Hopking
              </a>
            </em>
          </p>
        </TextColumns>
      </SectionContent>
      <SectionContent className={'mb6'}>
        <h4>{episodes.length} Episode</h4>
        {episodes.map(({node}) => (
          <div key={node.id}>
            <Link
              to={
                node.frontmatter.path !== null
                  ? node.frontmatter.path
                  : node.fields.slug
              }
            >
              <h3>
                {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </SectionContent>
      <SectionTitleWings>
        <a
          href="https://forms.gle/xAsyENsbhJbYg2wo6"
          className="btn btn--cta btn--inverse"
          target="_blank"
        >
          <div className="btn__text">Suggest an idea!</div>
          <FaArrowAltCircleRight className="btn__icon" />
        </a>
      </SectionTitleWings>
    </LayoutDefault>
  );
}

export const query = graphql`
  query {
    allMdx(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            path
            category
            date(formatString: "DD MMMM, YYYY")
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
