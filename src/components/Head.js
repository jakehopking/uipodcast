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
      <meta property="og:image" content={`${url}${socialImage}?00001`} />
      <meta property="og:url" content={url} />
      {`<!-- Twitter -->`}
      <meta name="twitter:title" content={`${title} Podcast`} />
      <meta name="twitter:description" content={subTitle} />
      <meta name="twitter:image" content={`${url}${socialImage}?00001`} />
      <meta name="twitter:card" content="summary" />

      {`<!-- Google Tag Manager -->`}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-100706005-3"
      ></script>

      {`<!-- Google Analytics -->`}
      <script>
        {`(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-100706005-3', 'auto');
        ga('send', 'pageview');`}
      </script>
    </Helmet>
  );
};

export default Head;
