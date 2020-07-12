import React from "react"
import { ThemeProvider } from "styled-components"

import Layout from "../../components/layout"
import NotSleeping from "../../components/not-sleeping"
import SEO from "../../components/seo"
import { NotSleepingTheme } from "../../components/components"

const NotSleepingPage = () => (
  <>
    <SEO title="Irenie How: When I'm Not Sleeping" />
    <ThemeProvider theme={NotSleepingTheme}>
      <Layout>
        <NotSleeping />
      </Layout>
    </ThemeProvider>
  </>
)

export default NotSleepingPage
