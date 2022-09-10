import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { ThemeProvider } from 'styled-components';
import { Link } from "gatsby"

import theme from '@styles/theme';
import GlobalStyles from '@styles/GlobalStyles';

const shortcodes = { Link }

export default function PageTemplate({ data, children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <h1>{data.mdx.frontmatter.title}</h1>
      <Link to="/notes">all notes</Link>
      <MDXProvider components={shortcodes}>
        {children}
      </MDXProvider>
    </ThemeProvider>
  )
}

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`