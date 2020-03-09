import React from "react"
import styled from "styled-components"

import { Title, Serif } from "../components/components"
import Glyph from "../images/mixtape-pride-gylph.svg"

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.5fr 1fr 1fr;
`

const BigTitle = styled(Title)`
  font-size: 4em;
  grid-row: 2;
  grid-column: 2 / 4;
  text-align: left;
`

const GlyphImage = styled.img`
  height: 20vh;
  grid-row: 2;
  grid-column: 1;
  justify-self: end;
`

const Date = styled(Serif)`
  grid-row: 3;
  grid-column: 2 / 4;
  text-align: center;
  font-size: 1.2em;
`

const Artists = styled.ul`
  grid-row: 1 / 4;
  grid-column: 5 / 6;
  list-style: none;
  padding-left: 0;
`

const MixtapePride = () => {
  return (
    <Grid>
      <GlyphImage src={Glyph} alt="Mixtape: Pride" />
      <BigTitle>Mixtape: Pride</BigTitle>
      <Date>Wednedsay 11th March - Sunday 5th April</Date>
      <Artists>
        <li>Holly Aitchison</li>
        <li>Audrey Baldwin</li>
        <li>Bek Coogan</li>
        <li>Cushla Donaldson</li>
        <li>Tiffany Furness</li>
        <li>Priscilla Howe</li>
        <li>Aaron Kong</li>
        <li>Akira Le Fevre</li>
        <li>Tim McLaughlin</li>
        <li>LeRoy Odom</li>
        <li>Steven Junil Park</li>
        <li>Louie Zalk-Neale</li>
      </Artists>
    </Grid>
  )
}

export default MixtapePride
