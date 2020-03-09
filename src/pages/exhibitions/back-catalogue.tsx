import React from "react"
import { ThemeProvider } from "styled-components"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { PaddedText, Title, DefaultTheme } from "../../components/components"

const BackCatalogue = () => (
  <>
    <SEO title="Back Catalogue" />
    <ThemeProvider theme={DefaultTheme}>
      <Layout>
        <Title>Coming Soon</Title>
        <PaddedText>
          Limited-edition prints and artist editions of previously exhibited
          works at an affordable price, creating an archival back-catalogue of
          artwork.
        </PaddedText>
      </Layout>
    </ThemeProvider>
  </>
)

export default BackCatalogue
