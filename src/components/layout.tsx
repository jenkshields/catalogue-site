/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"

import Header from "./header"
import PageList from "./page-list"

const theme = {
  green: "#204022",
}

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

  body {
  font-family: Asap, sans-serif;
  margin: 0;
  line-height: 1.5;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Cormorant Infant", serif;
  font-style: italic;
  margin-top: 0;
  margin-bottom: 0.5rem;
}

a {
  color: ${props => props.theme.green};
  text-decoration: none;
}

a:hover {
  color: ${props => props.theme.green};
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

ol,
ul {
  padding-left: 2rem;
  margin-top: 0;
  margin-bottom: 1rem;
}

ol ol,
ul ul,
ol ul,
ul ol {
  margin-bottom: 0;
}
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.33fr 1fr;
`

const PageListDiv = styled.div`
  grid-row: 1 / 2;
  width: 100vw;
  padding: 20px;

  @media only screen and (min-width: 800px) {
    grid-column: 1;
    width: 20vw;
    padding: 20px;
  }
`

const Content = styled.div`
  grid-row: 2;
  grid-column: 1;

  @media only screen and (min-width: 800px) {
    grid-column: 2;
    grid-row: 1;
  }
`

const CenteredFooter = styled.footer`
  text-align: center !important;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>
        <Grid>
          <PageListDiv>
            <PageList />
          </PageListDiv>
          <Content>{children}</Content>
        </Grid>
      </main>
      <CenteredFooter>
        <small>
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://glitterbox.nz">Glitterbox</a>
        </small>
      </CenteredFooter>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
