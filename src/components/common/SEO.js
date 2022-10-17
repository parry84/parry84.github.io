import React from 'react';
import { useSiteMetadata } from '@hooks/use-seo-metadata';

const Seo = ({ title, description, pathname, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    author,
    image,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    author,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  };

  return (
    <>
      <title>{seo.title}</title>

      <link rel="canonical" href={seo.url} />

      <meta name="robots" content="all" />

      <meta name="description" content={seo.description} />
      <meta name="author" content={seo.author} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:description" content={seo.description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@elparro84" />
      <meta name="twitter:site" content="@elparro84" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:domain" content={seo.url} />
      <meta name="twitter:image:src" content={seo.image} />

      {children}
    </>
  );
};

export default Seo;
