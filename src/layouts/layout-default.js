import React, {useEffect} from 'react';
import {css} from '@emotion/core';
import {useStaticQuery, Link, graphql} from 'gatsby';
import {IconContext} from 'react-icons';
import Header from '../components/Header';
import scrollTo from '../utils/ScrollTo';
// import { rhythm } from "../utils/typography"

import '../styles/main.scss';

export default function LayoutDefault({children}) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            subTitle
          }
        }
      }
    `
  );
  return (
    <IconContext.Provider value={{className: 'react-icons'}}>
      <div className="site-wrapper">
        <Header />
        <Link to={`/`}>
          <h3>{data.site.siteMetadata.title}</h3>
        </Link>
        <a onClick={() => scrollTo('#about')}>Scroll</a>
        <Link to={`/about/`}>About</Link>
        <main className="site-main">{children}</main>
      </div>
    </IconContext.Provider>
  );
}
