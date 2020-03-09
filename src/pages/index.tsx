import * as React from "react"
import { ThemeProvider } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MixtapePride from "../components/mixtape-pride"
import { MixtapePrideTheme } from "../components/components"

const IndexPage = () => (
  <>
    <SEO title="Catalogue" />
    <ThemeProvider theme={MixtapePrideTheme}>
      <Layout>
        <MixtapePride />
      </Layout>
    </ThemeProvider>
  </>
)

export default IndexPage
