module.exports = {
  siteMetadata: {
    title: `Cam Howey`,
    description: `Under Development`,
    keywords: [`gratitude`, `writer`, `giving`, `Cam Howey`],
    author: `Cam Howey`,
    twitter: ``,
    siteUrl: `https://www.camhowey.com`, //Change to you site address, required for sitemap.xml and robots.txt file among other things
    menuLinks: [],
    socialLinks: [],
  },
  plugins: [
    {
      resolve: `gatsby-theme-catalyst-core`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-catalyst-basic`,
        short_name: `catalyst`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#cccccc`,
        display: `minimal-ui`,
        icon: `content/assets/catalyst-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
