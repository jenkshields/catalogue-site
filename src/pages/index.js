import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Compilation from "../components/compilation"

const IndexPage = () => (
  <>
  <SEO title="Catalogue"/>
  <Layout>
    <Compilation />
  </Layout>
  </>
)

export default IndexPage
