module.exports = {
  siteMetadata: {
    title: "Koreanisch-Blog",
    description: "Mein simpler koreanisch-blog zum lernen und lehren",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    `@chakra-ui/gatsby-plugin`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "static/img",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: "src/blog",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: ["gatsby-remark-relative-images", "gatsby-remark-images"],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
  ],
};
