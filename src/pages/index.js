import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
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
