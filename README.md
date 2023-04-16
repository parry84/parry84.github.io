# Parry Personal Website

This is the git repo behind my personal site, hosted at [parry84.github.io](https://parry84.github.io)

![GitHub Pages Status](https://github.com/parry84/parry84.github.io/actions/workflows/pages/pages-build-deployment/badge.svg) [<img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=plastic">]("https://gitmoji.dev")

## 🛠 How it's built

The site is built using [Gatsby JS](https://www.gatsbyjs.com/), and hosted using [GitHub Pages](https://pages.github.com/). It is based on [Absurd Gatsby starter](https://github.com/ajayns/gatsby-absurd). The collection of illustrations, [absurd.design](https://absurd.design/) is by [Diana Valeanu](https://twitter.com/diana_valeanu). The Notes CSS is based on the [Tufte CSS](https://edwardtufte.github.io/tufte-css/).

## 🎨 Can I use this

The code is released under MIT license. The notes are released under CC BY-ND. Please refer to third-party assets licenses.

## 🚀 How to use the site

Install the dependencies:

### `yarn install`

Run the development server:

### `yarn develop`

Production build to `/public`:

### `yarn build`

Cleanup cache (often fixes misc errors when run before `yarn develop`):

### `yarn clean`

You can now view parry84-site in the browser.
⠀
  <http://localhost:8000/>
⠀
View GraphiQL, an in-browser IDE, to explore your site's data and schema
⠀
  <http://localhost:8000/___graphql>

### Content

Each of the sections in the site are placed in `src/sections`. Data is usually separated out into objects/arrays to be rendered in the component. The notes are written in Markdown.

### SEO

The component `src/components/common/SEO.js` handles all meta data and SEO content, modify the `SEO_DATA` variable to add the data automatically. For application manifest data and favicon, modify the `gatsby-plugin-manifest` configuration in `gatsby-config.js`.

The canonical paths include the trailing slash (a path without the trailing slash will redirect to the canonical version). This is a GH Pages requirement.

### Styling

This project uses a CSS reset and the Tufte CSS as global style and CSS modules for styling components.
