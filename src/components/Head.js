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
            description
            keywords
            subTitle
            title
            url
            rss
          }
        }
      }
    `
  );

  const {
    author,
    keywords,
    description,
    subTitle,
    title,
    url,
    rss,
  } = data.site.siteMetadata;

  return (
    <Helmet>
      <title>{`${title} | ${subTitle}`}</title>
      <link rel="canonical" href={url} />

      <meta name="description" content={`${description}`} />
      <meta name="keywords" content={keywords} />
      <link type="application/rss+xml" rel="alternate" href={rss} />
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

      {`<!-- Global site tag (gtag.js) - Google Analytics -->`}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-100706005-3"
      ></script>
      {`<script>
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}; gtag('js', new Date()); gtag('config',
        'UA-100706005-3');
      </script>`}
    </Helmet>
  );
};

export default Head;
