import React from "react"
// import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
// import { rhythm } from "../utils/typography"
import LayoutDefault from "../layouts/layout-default"

export default function Home({ data }) {
  const episodes = data.allMdx.edges.filter(
    ({ node }) => node.frontmatter.category === "episode"
  )

  return (
    <LayoutDefault>
      <div>
        <h4>{episodes.length} Episode</h4>
        {episodes.map(({ node }) => (
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
      </div>
    </LayoutDefault>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
`
