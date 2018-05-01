module.exports = {
  siteMetadata: {
    title: 'Jack Moore',
    siteUrl: 'https://jackmoore.co',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-next',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-118449642-1',
      },
    },
  ],
};
