const path = require("path")
const noteTemplate = path.resolve(`./src/components/common/Note/Note.js`)

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
