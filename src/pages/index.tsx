import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ForestAndFamine from "../components/forest-famine"

const IndexPage = () => (
  <>
    <SEO title="Catalogue" />
    <Layout>
      <ForestAndFamine />
    </Layout>
  </>
)

export default IndexPage
