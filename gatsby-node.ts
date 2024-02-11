const path = require("path")
const noteTemplate = path.resolve(`./src/templates/Note/Note.tsx`)

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const notesQuery = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          id
          frontmatter {
            slug
            visible
          }
        }
      }
    }
  `)

    if (notesQuery.errors) {
        reporter.panicOnBuild('Error loading Markdown result', notesQuery.errors)
    }

    const notes = notesQuery.data.allMarkdownRemark.nodes

    notes
    .filter(node => node.frontmatter.visible)
    .forEach(node => {
        createPage({
            path: `/notes/${node.frontmatter.slug}`,
            component: noteTemplate,
            context: { id: node.id, slug: node.frontmatter.slug },
        })
    })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "./src/components"),
        "@common": path.resolve(__dirname, "./src/components/common"),
        "@images": path.resolve(__dirname, "./src/images"),
        "@sections": path.resolve(__dirname, "./src/components/sections"),
        "@hooks": path.resolve(__dirname, "./src/hooks"),
        "@styles": path.resolve(__dirname, "./src/styles"),
        "@static": path.resolve(__dirname, "./static")
      },
    },
  });
};