import React from "react"
import { ThemeProvider } from "styled-components"

import Layout from "../../components/layout"
import MixtapePride from "../../components/mixtape-pride"
import SEO from "../../components/seo"
import { MixtapePrideTheme } from "../../components/components"

const MixtapePridePage = () => (
  <>
    <SEO title="Mixtape: Pride" />
    <ThemeProvider theme={MixtapePrideTheme}>
      <Layout>
        <MixtapePride />
      </Layout>
    </ThemeProvider>
  </>
)

export default MixtapePridePage
