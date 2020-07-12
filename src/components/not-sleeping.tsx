import React from "react"
import styled from "styled-components"

import notsleeping from "../images/notsleeping.jpg"

const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 0.5fr;
  grid-template-rows: 1fr 1fr 1fr;
`

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 0.5fr;
  grid-template-rows: 1fr 1fr 1fr;
  background: linear-gradient( rgba(0, 0, 0, 0.40) 100%, rgba(0, 0, 0, 0.40) 100%), url(${notsleeping});
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

const NotSleeping = () => (
    <>
        <Grid>
            <ImageGrid>
              <Title>
                <h1 style={{fontSize: `4rem`}}>When I'm Not Sleeping</h1>
                <br />
                <h2 style={{fontSize: `2rem`}}>Irenie How</h2>
              </Title>
            </ImageGrid>
            <Bio>
            <p>Irenie is making her way towards a Master of Fine Arts at Ilam School of Fine Arts. </p>

            <p>She is interested in language, technology, and perception — the way these shape our life experiences. Her practice utilises drawing, print, and publishing in order to facilitate seeing the world again. Part note-taking exercise, part visual assemblage, part alternative story-telling, she considers words and images we throw away, what happens when we change the context in which we view them, and the ways in which media influences our interpretation.</p>

            <p>
              <a href="https://www.instagram.com/irenie.makes/">
                  <i class="fab fa-instagram fa-lg"></i> Irenie Makes{" "}
              </a>
              <a href="https://www.facebook.com/irenie.makes/">
                  <i class="fab fa-facebook fa-lg"></i> Facebook
              </a>{" "}
            </p>
            </Bio>
            <Statement>
            <p>When I'm not sleeping explores language as the crossroads of music and art through the visual quotation of blues bar jam session sounds.</p>

            <p>Referencing pop. symbolism, typography, scientific diagrams and psychedelia as counterpoints to this original experience, and examples of altered and altering perception, each work transports a familiar symbol into a new code.</p>

            <p>The resulting intertextuality reimagines blues themes and melodies and plays with the possibilities inherent within the systems and symbolism of language.</p>
            </Statement>
            <Date>
              <p>Saturday 18 July <br />- Sunday 9th August 2020</p>
            </Date>
        </Grid>
    </>
)

export default NotSleeping