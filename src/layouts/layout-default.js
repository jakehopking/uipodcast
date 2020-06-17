import React from 'react';
// import {css} from '@emotion/core';
import {useStaticQuery, graphql} from 'gatsby';
import {IconContext} from 'react-icons';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
      <div className="site-wrapper" id="top">
        <Header />
        <main className="site-main">{children}</main>
        <Footer />
      </div>
    </IconContext.Provider>
  );
}
