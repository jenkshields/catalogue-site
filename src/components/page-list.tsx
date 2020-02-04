import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media only screen and (min-width: 800px) {
    grid-template-columns: 1fr;
  }
`

const NavTitle = styled.h3`
  grid-row: 1;
  grid-column: 1;
  font-size: 1.75rem;
  font-weight: 500;
`

const About = styled(Link)`
  grid-row: 2;
  grid-column: 1;
`

const Exhibit = styled(Link)`
  grid-row: 2;
  grid-column: 2;

  @media only screen and (min-width: 800px) {
    grid-row: 3;
    grid-column: 1;
  }
`

const Facebook = styled.a`
  grid-row: 2;
  grid-column: 3;

  @media only screen and (min-width: 800px) {
    grid-row: 4;
    grid-column: 1;
  }
`

const Instagram = styled.a`
  grid-row: 2;
  grid-column: 4;

  @media only screen and (min-width: 800px) {
    grid-row: 5;
    grid-column: 1;
  }
`

const Exhibitions = styled.h3`
  grid-row: 3;
  grid-column: 1;
  font-size: 1.75rem;
  font-weight: 500;

  @media only screen and (min-width: 800px) {
    grid-row: 6;
  }
`

const Compilation = styled(Link)`
  grid-row: 4;
  grid-column: 1;

  @media only screen and (min-width: 800px) {
    grid-row: 7;
  }
`

const ForestFamine = styled(Link)`
  grid-row: 4;
  grid-column: 2;

  @media only screen and (min-width: 800px) {
    grid-row: 8;
    grid-column: 1;
  }
`

const BackCatalogue = styled(Link)`
  grid-row: 4;
  grid-column: 3;

  @media only screen and (min-width: 800px) {
    grid-row: 9;
    grid-column: 1;
  }
`

const PageList = () => (
  <Grid>
    <NavTitle>Navigation</NavTitle>
    <About to="/about">About</About>
    <Exhibit to="/exhibit">Exhibit</Exhibit>
    <Facebook href="https://facebook.com/cataloguechch">Facebook</Facebook>
    <Instagram href="https://instagram.com/catalogue.chch">Instagram</Instagram>
    <Exhibitions>Exhibitions</Exhibitions>
    <Compilation to="/exhibitions/compilation">Compilation</Compilation>
    <ForestFamine to="/exhibitions/forest-famine">
      Forest and Famine
    </ForestFamine>
    <BackCatalogue to="/exhibitions/back-catalogue">
      Back Catalogue
    </BackCatalogue>
  </Grid>
)

export default PageList
