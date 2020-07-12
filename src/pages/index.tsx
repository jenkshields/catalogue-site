import * as React from "react"
import { ThemeProvider } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NotSleeping from "../components/not-sleeping"
import { NotSleepingTheme } from "../components/components"

const IndexPage = () => (
  <>
    <SEO title="Catalogue" />
    <ThemeProvider theme={NotSleepingTheme}>
      <Layout>
        <NotSleeping />
      </Layout>
    </ThemeProvider>
  </>
)

export default IndexPage
