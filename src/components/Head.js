import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {Helmet} from 'react-helmet';
import metaImage from '../images/logo-square.jpg';

const Head = (
  description,
  pathname,
  title,
  author,
  socialImage,
  socialTitle,
  socialDescription,
  audioUrl = false
) => {
  const {site} = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            description
            keywords
            subTitle
            title
            siteUrl
            rss
          }
        }
      }
    `
  );

  const {author, keywords, subTitle, siteUrl, rss} = site.siteMetadata;

  const metaTitle = title || `${site.siteMetadata.title} | ${subTitle}`;
  const metaDescription = description || site.siteMetadata.description;
  const metaAuthor = author || site.siteMetadata.author;
  // Social
  const metaSocialTitle = socialTitle || `${site.siteMetadata.title}`;
  const metaSocialDescription =
    socialDescription || `${site.siteMetadata.subTitle}`;
  const metaSocialImage = socialImage || metaImage;
  // Audio
  const metaAudio = '';
  if (audioUrl) {
    metaAudio = (
      <React.Fragment>
        <meta property="og:audio" content={audioUrl} />
        <meta property="og:audio:type" content="audio/mp3" />
      </React.Fragment>
    );
  }
  // Canonical
  const canonical = pathname ? `${siteUrl}${pathname}` : null;

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <link rel="canonical" href={canonical}></link>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords} />
      <link type="application/rss+xml" rel="alternate" href={rss} />
      <meta name="author" content={metaAuthor} />
      {metaAudio}
      {`<!-- Open Graph -->`}
      <meta property="og:title" content={metaSocialTitle} />
      <meta property="og:description" content={metaSocialDescription} />
      <meta property="og:image" content={`${siteUrl}${metaSocialImage}`} />
      <meta property="og:url" content={canonical} />
      {`<!-- Twitter -->`}
      <meta name="twitter:title" content={metaSocialTitle} />
      <meta name="twitter:description" content={metaSocialDescription} />
      <meta name="twitter:image" content={`${siteUrl}${metaSocialImage}`} />
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
