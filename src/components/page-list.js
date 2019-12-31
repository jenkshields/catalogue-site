import React from "react"
import { Link } from "gatsby"

const PageList = () => (
    <>
        <h3>Navigation</h3>
        <Link to="/about">About</Link>
        <br /><a href="https://facebook.com/cataloguechch">Facebook</a>
        <br /><a href="https://instagram.com/catalogue.chch">Instagram</a>
        <h3>Exhibitions</h3>
        <Link to="/exhibitions/compilation">Compilation</Link>
        
    </>
)

export default PageList