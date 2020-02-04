import React from "react"

import Layout from "../../components/layout"
import Compilation from "../../components/compilation"
import SEO from "../../components/seo"

const CompilationPage = () => (
    <>
    <SEO title="Compilation" />
    <Layout>
        <Compilation/>
    </Layout>
    </>
)

export default CompilationPage