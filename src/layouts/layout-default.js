import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import Header from "../components/Header"
// import { rhythm } from "../utils/typography"

import "../styles/main.scss"

export default function LayoutDefault({ children }) {
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
  )
  return (
    <div className="site-wrapper">
      <Header />
      <Link to={`/`}>
        <h3>{data.site.siteMetadata.title}</h3>
      </Link>
      <Link
        to={`/about/`}
        css={css`
          float: right;
        `}
      >
        About
      </Link>
      {children}
    </div>
  )
}
