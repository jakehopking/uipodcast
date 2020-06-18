import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {Helmet} from 'react-helmet';
import socialImage from '../images/logo-square.jpg';

const Head = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            image
            keywords
            subTitle
            title
            url
          }
        }
      }
    `
  );

  const {
    author,
    keywords,
    image,
    subTitle,
    title,
    url,
  } = data.site.siteMetadata;

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={url} />

      <meta name="description" content={`${title} | ${subTitle}`} />
      <meta name="keywords" content={keywords} />

      <meta name="author" content={author} />
      {`<!-- Open Graph -->`}
      <meta property="og:title" content={`${title} Podcast`} />
      <meta property="og:description" content={`${title} | ${subTitle}`} />
      <meta property="og:image" content={`${url}${socialImage}`} />
      <meta property="og:url" content={url} />
      {`<!-- Twitter -->`}
      <meta name="twitter:title" content={`${title} Podcast`} />
      <meta name="twitter:description" content={subTitle} />
      <meta name="twitter:image" content={`${url}${socialImage}`} />
      <meta name="twitter:card" content="summary" />
    </Helmet>
  );
};

export default Head;
