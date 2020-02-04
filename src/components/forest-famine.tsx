import React from "react"
import styled from "styled-components"
import bg from "../images/ff-bg.jpg"

const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 0.5fr;
  grid-template-rows: 1fr 1fr 1fr;
`

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 0.5fr;
  grid-template-rows: 1fr 1fr 1fr;
  background: url(${bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  grid-column: 1 / -1;
  grid-row: 1 / 3;
`

const Title = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  color: #fff;
  text-align: center;
`

const Bio = styled.div`
  grid-column: 2/3;
  grid-row: 3/4;
  text-align: left;
  padding: 5px;

  @media only screen and (min-width: 800px) {
    grid-column: 1/2;
    grid-row: 3/4;
    text-align: justify;
  }
`

const Statement = styled.div`
  grid-column: 2/3;
  grid-row: 4/5;
  text-align: left;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 2vw;
  padding-right: 2vw;

  @media only screen and (min-width: 800px) {
    grid-column: 2/3;
    grid-row: 3/4;
    text-align: justify;
  }
`

const Date = styled.div`
  grid-column: 2/3;
  grid-row: 5/6;
  text-align: left;
  padding: 5px;

  @media only screen and (min-width: 800px) {
    grid-column: 3/3;
    grid-row: 3/3;
    text-align: justify;
  }
`

const ForestAndFamine = () => (
  <Grid>
    <ImageGrid>
      <Title>
        <h1>Forest and Famine</h1>
        <br />
        <h2>Nick Lowry</h2>
      </Title>
    </ImageGrid>
    <Bio>
      <p>
        Nick Lowry is an established artistic director, set designer and mural
        artist based in Christchurch. Having worked and exhibited across New
        Zealand and Australia, his main focus is with theater and video
        production where his passion for spacial art and creating surreal space
        thrives.
      </p>
    </Bio>
    <Statement>
      <p>
        In these works, Nick aims to create a series of pieces that loosely
        reflect the energy of album cover art collaged into a mass of turbulent
        scenarios homogenizing into one piece. Using colours and textures that
        give a cold and unnerving appearance, falling away into an endless
        space.
      </p>
    </Statement>
    <Date>
      <p>
        February 13th 2020 <br />- 8th March 2020
      </p>
    </Date>
  </Grid>
)

export default ForestAndFamine
