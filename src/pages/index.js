import React from 'react';
// import { css } from "@emotion/core"
import {Link, graphql} from 'gatsby';
import ReactPlayer from 'react-player';
// import { rhythm } from "../utils/typography"
import LayoutDefault from '../layouts/layout-default';
import SectionTitleWings from '../components/sections/SectionTitleWings';
import SectionContent from '../components/sections/SectionContent';
import TextColumns from '../components/textColumns/TextColumns';
import VerticalRule from '../components/VerticalRule';
import PostHeading from '../components/PostHeading';
import Newsletter from '../components/Newsletter';
import PodcastServices from '../components/PodcastServices';
import EpisodeItem from '../components/EpisodeItem';
import ButtonAnchor from '../components/ButtonAnchor';

import scrollTo from '../utils/scrollTo';
import {
  FaArrowAltCircleRight,
  FaInstagram,
  FaFacebookSquare,
  FaEnvelopeOpen,
  FaTwitter,
  FaBookOpen,
  FaPodcast,
} from 'react-icons/fa';

export default function Home({data}) {
  // Filter all Mdx for category of 'episode'
  const episodes = data.allMdx.edges.filter(
    ({node}) => node.frontmatter.category === 'episode'
  );
  const latestEpisode = episodes[0].node;
  // Destructure podcast url, title and post url from frontmatter
  const {podcastUrl, title, path, date} = episodes[0].node.frontmatter;

  return (
    <LayoutDefault type="index">
      <SectionTitleWings id="listen" tag="h2">
        Listen
      </SectionTitleWings>

      <SectionContent>
        <PostHeading tag="h3" className="mt0">
          Latest episode
        </PostHeading>
        <EpisodeItem props={latestEpisode} />
        <ReactPlayer
          controls
          url={podcastUrl}
          width="100%"
          height="50px"
          wrapper="react-player"
          style={{marginBottom: '20px', marginTop: '20px'}}
        />
        <ButtonAnchor
          className="btn--round btn--inverse mx-auto"
          tag={Link}
          to={'/episodes/'}
          icon={<FaPodcast />}
        >
          View all episodes
        </ButtonAnchor>
      </SectionContent>
      <SectionContent>
        <PodcastServices />
      </SectionContent>
      <SectionTitleWings id="about" tag="h2">
        About
      </SectionTitleWings>
      <SectionContent className={'mb6'}>
        <TextColumns>
          <p className=" first-letter first-letter text-justify font-weight-light">
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
                rel="noreferrer"
                title="Visit Jake's personal website"
              >
                Jake Hopking
              </a>
            </em>
          </p>
        </TextColumns>
      </SectionContent>
      <SectionTitleWings id="connect" tag="h2">
        Connect
      </SectionTitleWings>
      <SectionContent className={'mb6'}>
        <ul className="social">
          <li className="social__item">
            <a
              href="https://twitter.com/uitherapy"
              target="_blank"
              rel="noreferrer"
              title="Twitter"
            >
              <FaTwitter />
            </a>
          </li>
          <li className="social__item">
            <a
              href="https://instagram.com/uitherapy"
              target="_blank"
              rel="noreferrer"
              title="Instagram"
            >
              <FaInstagram />
            </a>
          </li>
          <li className="social__item">
            <a
              onClick={() => scrollTo('#suggest')}
              title="Not sure I want a Facebook page. Let me know if you think it might be valuable..."
            >
              <FaFacebookSquare />
            </a>
          </li>
          <li className="social__item">
            <a href="mailto:show@uitherapy.fm" title="Email the show">
              <FaEnvelopeOpen />
            </a>
          </li>
        </ul>
      </SectionContent>
      <SectionTitleWings>
        <a
          href="https://forms.gle/xAsyENsbhJbYg2wo6"
          className="btn btn--cta btn--inverse"
          target="_blank"
          rel="noreferrer"
        >
          <div className="btn__text">Suggest an idea!</div>
          <FaArrowAltCircleRight className="btn__icon" />
        </a>
      </SectionTitleWings>
      <SectionContent>
        <article>
          <p className="lead-plus text-center  font-weight-light">
            Do you have an idea for the show, can you think of some industry
            experts that would benefit the design and developer community to
            learn from or perhaps you’d like to appear as a guest yourself!
            Maybe even you'd like to co-host the show? Whatever the idea, I
            would LOVE to hear it!
          </p>
        </article>
      </SectionContent>
      <VerticalRule />
      <Newsletter />
      <VerticalRule />
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
            category
            date(formatString: "DD MMMM, YYYY")
            episodeNo
            format
            podcastUrl
            path
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
