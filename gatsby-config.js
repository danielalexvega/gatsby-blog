module.exports = {
  siteMetadata: {
    title: `Gatsby MDX Blog`,
    description: `A Gatsby MDX Blog focusing on JavaScript, Gatsby, and other Full Stack ideas`,
    titleTemplate: `%s | Full Court Press`,
    url: `https://fullcourtpressblog.netlify.app/`,
    image: `mainImg.png`,
    twitterUsername: `@zlamdanielvega`
  },
  plugins: [
    // `gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `gatsbyjs`,
      },
    }
  ],
}


// {
//   resolve: `gatsby-plugin-prefetch-google-fonts`,
//     options: {
//     fonts: [
//       {
//         family: `Roboto`,
//         variants: [`400`, `500`, `700`],
//       },
//       {
//         family: `Open Sans`,
//       },
//     ],
//       },
// },
