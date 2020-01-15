import React from "react"
import { Link } from "gatsby"
import styles from "./page-list.module.scss"

const PageList = () => (
    <div className={styles.grid}>
        <h3 className={styles.NavTitle}>Navigation</h3>
        <Link to="/about" className={styles.about}>About</Link>
        <Link to="/exhibit" className={styles.exhibit}>Exhibit</Link>
        <a href="https://facebook.com/cataloguechch" className={styles.facebook}>Facebook</a>
        <a href="https://instagram.com/catalogue.chch" className={styles.instagram}>Instagram</a>
        <h3 className={styles.exhibitions}>Exhibitions</h3>
        <Link to="/exhibitions/compilation" className={styles.compilation}>Compilation</Link>
        <Link to="/exhibitions/forest-famine" className={styles.forestFamine}>Forest and Famine</Link>
        <Link to="/exhibitions/back-catalogue" className={styles.backCatalogue}>Back Catalogue</Link>
        
    </div>
)

export default PageList