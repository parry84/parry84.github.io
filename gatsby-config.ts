const path = require('path');

module.exports = {
  flags: {
    PARTIAL_HYDRATION: false
  },
  trailingSlash: "always",
  siteMetadata: {
    title: `Emanuele Parrinello (parry84)`,
    description: `Emanuele Parrinello (parry84) personal page. Software developer. Based in Milan`,
    author: `Emanuele Parrinello`,
    twitterUsername: `@elparro84`,
    image: `/gatsby-icon.png`,
    siteUrl: `https://parry84.github.io`,
  },
  plugins: [
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sass',
    'gatsby-plugin-svgr',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'notes',
        path: `${__dirname}/src/notes/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'art',
        path: `${__dirname}/src/images/art`,
      },
    },
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          placeholder: 'blurred',
        },
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        gfm: true,
        plugins: [
          'gatsby-remark-bibliography',
          'gatsby-remark-tufte',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'parry84 website',
        short_name: 'parry84',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: 'static/favicon.svg',
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['average', 'prata\:400,700'],
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-NTB94DCM',
        includeInDevelopment: true,
        enableWebVitalsTracking: false,
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
              nodes {
                path
              }
          }
          allMarkdownRemark {
            nodes {
              id
              frontmatter {
                title
                slug
                dateUpdated
              }
            }
          }
        }`,
        resolveSiteUrl: ({
          site: {
            siteMetadata: { siteUrl },
          },
        }) => siteUrl,
        resolvePages: ({
          allSitePage: { nodes: allPages },
          allMarkdownRemark: { nodes: allMarkdownRemark },
        }) => {
          const noteNodeMap = allMarkdownRemark.reduce((acc, node) => {
            const {
              frontmatter: { slug: slug },
            } = node;
            acc[`/notes/${slug}/`] = node.frontmatter;

            return acc;
          }, {});

          return allPages.map((page) => {
            return { ...page, ...noteNodeMap[page.path] };
          });
        },
        serialize: ({ path, dateUpdated }) => {
          return {
            url: path,
            lastmod: dateUpdated,
          };
        },
      },
    },
  ],
};
