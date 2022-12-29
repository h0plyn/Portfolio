import React from "react";

const seo = {
  url: "https://rickyrhodes.dev",
  title: "Ricky Rhodes | Software Engineer",
  description: "TypeScript, GraphQL, NodeJS, Gatsby",
  favicon: "",
  image: "https://dl.dropboxusercontent.com/s/qp7m0pjsrlf3w88/meta.png",
};

export const Head = () => {
  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="icon" type="image/png" sizes="32x32" href={seo.favicon} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
};
