import React from "react"
import { ThemeProvider } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { DefaultTheme } from "../components/components"

const NotFoundPage = () => (
  <ThemeProvider theme={DefaultTheme}>
    <Layout>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  </ThemeProvider>
)

export default NotFoundPage
