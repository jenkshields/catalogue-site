import React from "react"
import { ThemeProvider } from "styled-components"

import Layout from "../../components/layout"
import ForestAndFamine from "../../components/forest-famine"
import SEO from "../../components/seo"
import { DefaultTheme } from "../../components/components"

const ForestFaminePage = () => (
  <>
    <SEO title="Forest and Famine" />
    <ThemeProvider theme={DefaultTheme}>
      <Layout>
        <ForestAndFamine />
      </Layout>
    </ThemeProvider>
  </>
)

export default ForestFaminePage
