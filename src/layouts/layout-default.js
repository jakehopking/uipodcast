import React from 'react';
// import {css} from '@emotion/core';
import {IconContext} from 'react-icons';
import Head from '../components/Head';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import { rhythm } from "../utils/typography"

import '../styles/main.scss';

export default function LayoutDefault({children}) {
  return (
    <IconContext.Provider value={{className: 'react-icons'}}>
      <Head />
      <div className="site-wrapper" id="top">
        <Header />
        <main className="site-main">{children}</main>
        <Footer />
      </div>
    </IconContext.Provider>
  );
}
