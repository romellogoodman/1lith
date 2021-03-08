import NextHead from 'next/head';
import React from 'react';

const twitterHandle = 'mellogood';
const siteUrl = 'https://1lith.com';

const getFavicon = (color = 'black') => {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      ${
        Array.isArray(color)
          ? `
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            ${color.map((col, index) => {
              const percent = Math.floor(100 / color.length) * (index + 1);

              return `<stop offset="${percent}%"  stop-color="${col}" />`;
            })}
          </linearGradient>
          <rect x="0" y="0" height="16" width="16" fill="url('#gradient')" />
      `
          : `
          <rect x="0" y="0" height="16" width="16" fill="${color}" />
        `
      }
    </svg>
  `;
};

const Head = (props) => {
  const {color} = props;
  const title = '';
  const description = '';

  return (
    <NextHead>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link
        rel="icon"
        type="image/svg+xml"
        href={`data:image/svg+xml,${encodeURIComponent(getFavicon(color))}`}
      />
      {/* Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={title} />
      {/* <meta property="og:image" content={imageUrl} /> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      {/* Twitter */}
      <meta name="twitter:title" content={description} />
      <meta name="twitter:description" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      {/* <meta name="twitter:image" content={imageUrl} /> */}
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:site" content={twitterHandle} />
      {/* Other */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </NextHead>
  );
};

export default Head;
