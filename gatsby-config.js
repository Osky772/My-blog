require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `Oskar Kowalów`,
    siteTitleAlt: `Oskar Kowalów - blog o programowaniu`,
    siteHeadline: `Oskar Kowalów - blog o programowaniu`,
    siteDescription: `Blog osobity o programowaniu. Tematy związane z front-endem oraz problemami, które rozwiązywałem.`,
    siteLanguage: `pl`,
    siteImage: '',
    author: `Oskar Kowalów`,
    siteUrl: `https://www.oskarkowalow.pl`,
    siteImage: `/banner.jpg`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        tagsPath: '/kategorie',
        postsPrefix: `/blog`,
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          }
        ],
        externalLinks: [
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/oskar-kowalow/`,
          },
          {
            name: `Github`,
            url: `https://github.com/Osky772`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Oskar Kowalów`,
        short_name: `oskar-kowalow`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
          shortname: process.env.GATSBY_DISQUS_NAME
      }
  },
  `gatsby-plugin-remove-serviceworker`
  ].filter(Boolean),
}
