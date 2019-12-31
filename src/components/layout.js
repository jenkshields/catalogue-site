/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import PageList from "./page-list"
import styles from "./layout.module.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
        <main>
          <div className={styles.grid}>
            <div className={styles.pageList}>
              <PageList />
            </div>
            <div className={styles.content}>
              {children}
            </div>
          </div>
        </main>
        <footer className="text-center">
          <small>© {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://glitterbox.nz">Glitterbox</a></small>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
