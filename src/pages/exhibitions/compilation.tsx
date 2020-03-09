import React from "react"
import { ThemeProvider } from "styled-components"

import Layout from "../../components/layout"
import Compilation from "../../components/compilation"
import SEO from "../../components/seo"
import { DefaultTheme } from "../../components/components"

const CompilationPage = () => (
  <>
    <SEO title="Compilation" />
    <ThemeProvider theme={DefaultTheme}>
      <Layout>
        <Compilation />
      </Layout>
    </ThemeProvider>
  </>
)

export default CompilationPage
