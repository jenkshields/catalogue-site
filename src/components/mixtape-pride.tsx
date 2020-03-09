import React, { useState } from "react"
import styled from "styled-components"

import { Title, Serif, UnstyledButton } from "../components/components"
import Glyph from "../images/mixtape-pride-gylph.svg"

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.5fr 1fr 1fr;

  @media only screen and (min-width: 800px) {
  }
`

const BigTitle = styled(Title)`
  font-size: 4em;
  grid-row: 2;
  grid-column: 3 / 6;
  text-align: left;

  @media only screen and (min-width: 800px) {
    grid-column: 2 / 4;
  }
`

const GlyphImage = styled.img`
  height: 20vh;
  grid-row: 2;
  grid-column: 2;
  justify-self: end;

  @media only screen and (min-width: 800px) {
    grid-column: 1;
  }
`

const Date = styled(Serif)`
  grid-row: 3;
  grid-column: 3 / 6;
  text-align: center;
  font-size: 1.2em;

  @media only screen and (min-width: 800px) {
    grid-column: 2 / 4;
  }
`

const Artists = styled.ul`
  grid-row: 4 / 7;
  grid-column: 1 / 3;
  list-style: none;

  > li {
    cursor: pointer;
  }

  @media only screen and (min-width: 800px) {
    grid-column: 1 / 2;
    padding-left: 0;
  }
`

const Bios = styled.div`
  grid-row: 4 / 7;
  grid-column: 3 / 5;

  @media only screen and (min-width: 800px) {
    grid-column: 2 / 4;
  }
`

const MixtapePride = () => {
  const [artistValue, setArtist] = useState("0")

  function handleClick(ev) {
    const value = (ev.currentTarget as HTMLButtonElement).dataset.id
    if (value) {
      if (artistValue === value) {
        setArtist("0")
      } else {
        setArtist(value)
      }
    }
    console.log(artistValue)
  }
  const artistOne = {
    display: "none",
  }

  const artistTwo = {
    display: "none",
  }

  const artistThree = {
    display: "none",
  }

  const artistFour = {
    display: "none",
  }

  const artistFive = {
    display: "none",
  }

  const artistSix = {
    display: "none",
  }

  const artistSeven = {
    display: "none",
  }

  const artistEight = {
    display: "none",
  }

  const artistNine = {
    display: "none",
  }

  const artistTen = {
    display: "none",
  }

  const artistEleven = {
    display: "none",
  }

  const artistTwelve = {
    display: "none",
  }

  if (artistValue === "0") {
    artistOne.display = "none"
    artistTwo.display = "none"
    artistThree.display = "none"
    artistFour.display = "none"
    artistFive.display = "none"
    artistSix.display = "none"
    artistSeven.display = "none"
    artistEight.display = "none"
    artistNine.display = "none"
    artistTen.display = "none"
    artistEleven.display = "none"
    artistTwelve.display = "none"
  } else if (artistValue === "1") {
    artistOne.display = "block"
  } else if (artistValue === "2") {
    artistTwo.display = "block"
  } else if (artistValue === "3") {
    artistThree.display = "block"
  } else if (artistValue === "4") {
    artistFour.display = "block"
  } else if (artistValue === "5") {
    artistFive.display = "block"
  } else if (artistValue === "6") {
    artistSix.display = "block"
  } else if (artistValue === "7") {
    artistSeven.display = "block"
  } else if (artistValue === "8") {
    artistEight.display = "block"
  } else if (artistValue === "9") {
    artistNine.display = "block"
  } else if (artistValue === "10") {
    artistTen.display = "block"
  } else if (artistValue === "11") {
    artistEleven.display = "block"
  } else if (artistValue === "12") {
    artistTwelve.display = "block"
  }

  return (
    <Grid>
      <GlyphImage src={Glyph} alt="Mixtape: Pride" />
      <BigTitle>Mixtape: Pride</BigTitle>
      <Date>Wednesday 11th March - Sunday 5th April</Date>
      <Artists>
        <li>
          <UnstyledButton onClick={handleClick} data-id="1">
            Holly Aitchison
          </UnstyledButton>
        </li>
        <li>
          <UnstyledButton onClick={handleClick} data-id="2">
            Audrey Baldwin
          </UnstyledButton>
        </li>
        <li>
          <UnstyledButton onClick={handleClick} data-id="3">
            Bek Coogan
          </UnstyledButton>
        </li>
        <li>
          <UnstyledButton onClick={handleClick} data-id="4">
            Cushla Donaldson
          </UnstyledButton>
        </li>
        <li>
          <UnstyledButton onClick={handleClick} data-id="5">
            Tiffany Furness
          </UnstyledButton>
        </li>
        <li>
          <UnstyledButton onClick={handleClick} data-id="6">
            Priscilla Howe
          </UnstyledButton>
        </li>
        <li>
          <UnstyledButton onClick={handleClick} data-id="7">
            Aaron Kong
          </UnstyledButton>
        </li>
        <li>
          <UnstyledButton onClick={handleClick} data-id="8">
            Akira Le Fevre
          </UnstyledButton>
        </li>
        <li>
          <UnstyledButton onClick={handleClick} data-id="9">
            Tim McLaughlin
          </UnstyledButton>
        </li>
        <li>
          <UnstyledButton onClick={handleClick} data-id="10">
            LeRoy Odom
          </UnstyledButton>
        </li>
        <li>
          <UnstyledButton onClick={handleClick} data-id="11">
            Steven Junil Park
          </UnstyledButton>
        </li>
        <li>
          <UnstyledButton onClick={handleClick} data-id="12">
            Louie Zalk-Neale
          </UnstyledButton>
        </li>
      </Artists>
      <Bios>
        <p style={artistOne}>Self taught Southern Sappho.</p>
        <p style={artistTwo}>
          Audrey Baldwin is an artist based in Aotearoa New Zealand. Her
          practice incorporates performance, video, photography, and curation.
          She operates both inside and outside of the traditional gallery space,
          with an interest in creating shared experiences where the viewer
          becomes an active part of the work.
        </p>
        <p style={artistThree}>
          Bek Coogan, from Palmerston North, based in Karori, Wellington. Coogan
          was recently described by the Audio Foundation’s ( AK) “Nowhere
          Festival ‘ – as “ NZ’s first lady of Rock’ n’ Roll Yodelling and a
          veteran of counter culture.” Coogan likes to test what art is.
          Coogan’s long-term desire is to rupture individualist neo-liberal
          consciousness with one collective yodel. ( kind of like a Joyous Rock
          Opera ). Until then the yodel comes out the end of a vivid pen when
          hearing the call of the mystery solo. (Bands: Dog Tooth Violet,
          Cortina, Full Fucking Moon, Fantasing, The Gorge, Bog Wolf, Sheville,
          Oona Verse )
        </p>
        <p style={artistFour}>
          Cushla Donaldson is an Elam School of Fine Arts graduate, and gained
          an MFA from Goldsmiths College, London in 2007, supported by the Anne
          Reid scholarship from the University of Auckland. Donaldson’s practice
          exhibits both erudite technical exploration and rigorous conceptual
          journeys. She has become known for her witty and panoptic engagement
          with the gendered hierarchy of aesthetics and their various
          contemporary applications.
        </p>
        <p style={artistFive}>
          Tiffany is an amateur artist in her spare time outside of work. She
          mainly makes use of watercolours, and enjoys painting somewhat
          whimsical scenes with bright colours. She doesn't often use
          conventional canvases, rather preferring to paint on other media
          (rocks, plant pots, other people etc.).
        </p>
        <p style={artistSix}>
          Priscilla Howe is an artist and designer from Christchurch, NZ
          currently based in Melbourne, Australia. Her work predominantly
          focuses on the supernatural, theatrical and phenomenology in the
          everyday.
        </p>
        <p style={artistSeven}>
          Aaron is an art clown currently based in Christchurch. Working
          predominantly in sculpture and performance, his practice looks at
          digital space and revolves around the notion of identity as a
          performance, looking at the slippages between physical and online
          identity through the lens of pop and contemporary culture. Past works
          include painting himself green, a glory hole installation and
          bejewelled condom earrings.
        </p>
        <p style={artistEight}>
          Queer Maori/Japanese artist who paints both canvas and face. Works in
          sexual health education and volunteers in the LGBTQIA+ community.
          Believes in diversity, freedom of expression and identity.
        </p>
        <p style={artistNine}>
          Through my practice I experiment with objects and materials which
          mimic the feelings of bodily sensations and play off the desire to
          touch. My works utilise movements between textures – soft and hard,
          glossy and matte – to draw on the colours and forms of natural and
          physical source material. I aim to acquire a sense of the familiar
          becoming strange, or alternatively, the strange becoming familiar,
          through acknowledgment of the underlying grotesque which I perceive as
          prominent in everyday life.
        </p>
        <p style={artistTen}>
          A young, up and coming artist from Christchurch, LeRoy works mainly in
          digital design and symmetry.
        </p>
        <p style={artistEleven}>
          A river with no banks moving in an unknown direction at an
          indiscernible speed, underneath a starless sky.
        </p>
        <p style={artistTwelve}>
          Louie Zalk-Neale is a queer artist, costume designer and performer
          based in Te Whanganui-a-Tara Wellington. They use drawing and painting
          as a way of visualising and designing costume garments. The
          timelessness of faded old paper and dark ink rightfully suggests that
          gender non-conformity and queerness have existed continuously
          throughout history, and will into the future. Louie transforms their
          drawings into wearable costumes, and performs in them, creating new
          logics to understand people's bodies – thinking of clothing, gender
          and movement. They aim to submerge the audience into their queer lived
          experience to demonstrate the potential freedom from society’s
          limiting structures.
        </p>
      </Bios>
    </Grid>
  )
}

export default MixtapePride
