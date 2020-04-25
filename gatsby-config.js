module.exports = {
  siteMetadata: {
    title: "TravelAgency",
    description:
      "Explore awesome worldwide tours & discover what makes each of them unique. Forget your daily routine & say yes to adventure",
    author: "@koraydundar",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `your_space_id`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`
  ],
}
