module.exports = {
  siteMetadata: {
    title: `Cam Howey`,
    description: `Cam Howey is a retired engineer with a passion for understanding the data and science behind giving, gratitude, kindness and our health! He lives in Alberta, Canada.`,
    keywords: [`gratitude`, `writer`, `giving`, `Cam Howey`],
    author: `Cam Howey`,
    twitter: ``,
    siteUrl: `https://www.camhowey.com`, //Change to you site address, required for sitemap.xml and robots.txt file among other things
    menuLinks: [
      {
        name: `Generosity`,
        link: `/generosity`,
        type: `internal`, //internal or anchor
      },
      {
        name: `Gratitude`,
        link: `/gratitude`,
        type: `internal`, //internal or anchor
      },
      {
        name: `Bio`,
        link: `/bio`,
        type: `internal`, //internal or anchor
      },
      {
        name: `Writing`,
        link: `/writing`,
        type: `internal`, //internal or anchor
      },
    ],
    socialLinks: [
      {
        name: `Email`,
        link: `cam.howey@gmail.com`,
        location: `footer`, //Options are "all", "header", "footer"
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-catalyst-core`,
      options: {
        displaySiteLogo: false,
      },
    },
    {
      resolve: `gatsby-theme-catalyst-blog`,
      options: {
        basePath: `/writing`,
      },
    },
    `gatsby-theme-catalyst-header-basic`,
    `gatsby-theme-catalyst-footer-basic`,
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
