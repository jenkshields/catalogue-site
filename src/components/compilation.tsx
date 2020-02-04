import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"

import { UnstyledButton } from "./components"

const BigGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  grid-template-rows: 1fr;

  @media only screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }
`

const Container = styled.div`
  width: 60vw;
  margin: 0 auto;
  height: 100vh;
  background-repeat: no-repeat !important;
  background-size: 33vw 100vh !important;
  grid-column: 1;
  border: solid black 1px;

  @media only screen and (min-width: 800px) {
    width: 40vw;
    margin: 0 auto;
    height: 100vh;
    grid-column: 1;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: auto;
`

const Title = styled.h1`
  grid-column: 1 / -1;
  grid-row: 1;
  width: 33vw;
  text-decoration: underline;
  text-align: center;
  font-size: 5.5rem;
  font-weight: 300;
  line-height: 1.2;
`

const Canvas = styled.canvas`
  height: 100vh;
  width: 33vw;
  display: none;
`

const Subtitle = styled.p`
  grid-row: 2;
  grid-column: 6 / -1;
  @include font-size(1.1rem);
`

const List = styled.ul`
  grid-row: 3;
  grid-column: 5 / -1;
  padding-top: 10vh;
  padding-left: 0;
  list-style: none;

  > li {
    cursor: pointer;
  }
`

const ArtistContainer = styled.div`
  grid-column: 2;
`

const ArtistInfo = styled.div`
  padding-top: 25vh;
  padding-left: 1vw;
  padding-right: 1vw;
  font-size: 0.9rem;
`

class Compilation extends React.Component {
  constructor(props) {
    super(props)
    this.canvasRef = React.createRef()
    this.bgRef = React.createRef()
    this.state = {
      artistValue: 0,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(ev) {
    let value = ev.currentTarget.dataset.id
    if (this.state.artistValue === value) {
      this.setState(state => ({
        artistValue: 0,
      }))
    } else {
      this.setState(state => ({
        artistValue: value,
      }))
    }
  }

  componentDidMount() {
    let canvas = this.canvasRef.current
    let ctx = canvas.getContext("2d")

    ctx.lineWidth = 1.5

    ctx.beginPath()
    ctx.moveTo(200.5, 0)
    ctx.lineTo(30.5, 750)
    ctx.stroke()

    this.bgRef.current.style.background = `url(` + canvas.toDataURL() + `)`
  }

  render() {
    let artistOne = {
      display: "none",
    }

    let artistTwo = {
      display: "none",
    }

    let artistThree = {
      display: "none",
    }

    let artistFour = {
      display: "none",
    }

    let artistFive = {
      display: "none",
    }

    let artistSix = {
      display: "none",
    }

    let artistSeven = {
      display: "none",
    }

    let artistEight = {
      display: "none",
    }

    let artistNine = {
      display: "none",
    }

    let artistTen = {
      display: "none",
    }

    let artistEleven = {
      display: "none",
    }

    let artistTwelve = {
      display: "none",
    }

    // switch(this.state.artistValue) {
    //   case 0:
    //     artistOne.display = 'none';
    //     console.log(this.state.artistValue)
    //   case "1":
    //     artistOne.display = 'block';
    //     console.log(this.state.artistValue)
    // }

    let value = this.state.artistValue

    if (value === 0) {
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
    } else if (value === "1") {
      artistOne.display = "block"
    } else if (value === "2") {
      artistTwo.display = "block"
    } else if (value === "3") {
      artistThree.display = "block"
    } else if (value === "4") {
      artistFour.display = "block"
    } else if (value === "5") {
      artistFive.display = "block"
    } else if (value === "6") {
      artistSix.display = "block"
    } else if (value === "7") {
      artistSeven.display = "block"
    } else if (value === "8") {
      artistEight.display = "block"
    } else if (value === "9") {
      artistNine.display = "block"
    } else if (value === "10") {
      artistTen.display = "block"
    } else if (value === "11") {
      artistEleven.display = "block"
    } else if (value === "12") {
      artistTwelve.display = "block"
    }

    return (
      <>
        <Helmet>
          <script
            src="https://kit.fontawesome.com/ec18a59363.js"
            crossorigin="anonymous"
          ></script>
        </Helmet>
        <BigGrid>
          <Container ref={this.bgRef}>
            <Grid>
              <Canvas ref={this.canvasRef} height="750" width="475.2"></Canvas>
              <Title>Compilation</Title>
              <Subtitle>An exhibition of new works.</Subtitle>
              <List>
                <li>
                  <UnstyledButton onClick={this.handleClick} data-id="1">
                    Annemieke Montagne
                  </UnstyledButton>
                </li>
                <li>
                  <UnstyledButton onClick={this.handleClick} data-id="2">
                    Jenna Ingram
                  </UnstyledButton>
                </li>
                <li>
                  <UnstyledButton onClick={this.handleClick} data-id="3">
                    Kerry Tunstall
                  </UnstyledButton>
                </li>
                <li>
                  <UnstyledButton onClick={this.handleClick} data-id="4">
                    Julia Sharp
                  </UnstyledButton>
                </li>
                <li>
                  <UnstyledButton onClick={this.handleClick} data-id="5">
                    Kara Burrowes
                  </UnstyledButton>
                </li>
                <li>
                  <UnstyledButton onClick={this.handleClick} data-id="6">
                    Jason Ware
                  </UnstyledButton>
                </li>
                <li>
                  <UnstyledButton onClick={this.handleClick} data-id="7">
                    Kate Rennie
                  </UnstyledButton>
                </li>
                <li>
                  <UnstyledButton onClick={this.handleClick} data-id="8">
                    Samuel Lewis
                  </UnstyledButton>
                </li>
                <li>
                  <UnstyledButton onClick={this.handleClick} data-id="9">
                    Irenie How
                  </UnstyledButton>
                </li>
                <li>
                  <UnstyledButton onClick={this.handleClick} data-id="10">
                    Shannon Williamson
                  </UnstyledButton>
                </li>
                <li>
                  <UnstyledButton onClick={this.handleClick} data-id="11">
                    Nick White
                  </UnstyledButton>
                </li>
                <li>
                  <UnstyledButton onClick={this.handleClick} data-id="12">
                    Gemma Syme
                  </UnstyledButton>
                </li>
              </List>
            </Grid>
          </Container>
          <ArtistContainer>
            <ArtistInfo>
              <p style={artistOne}>
                Annemieke is a painter, designer, sculptor and filmmaker
                currently residing in Christchurch, New Zealand. Montagne
                currently manages and curates Art Hole Gallery - located at 336
                Saint Asaph street. Her work is expressive, often featuring
                unsettling textures and challenging subject matter. Much of her
                work stems from self reflection and the analysis of that
                insight, and so often has a commanding physical presence. Her
                compositions have been described as a halfway marker between
                Aubrey Beardsley’s decadent Art Nouveau prints and
                neo-expressionist George Baselitz’s paintings. Montagne’s recent
                exhibitions include groupshows ‘Contrast’ and ‘Gluttony’ at Next
                Gallery, a self titled solo show at Absolution, and a
                multi-medium project in collaboration with CoCA Gallery and
                other artists.
              </p>

              <p style={artistTwo}>
                Jenna Ingram is also known as Jen_Heads and is the director of
                Fiksate Gallery. After graduating from Fine Arts in 2007, Jenna
                had several art studios in Christchurch and held a solo
                exhibition in 2010. She left the art world in search of herself
                through music and street art and through her iconic Jen Heads
                character, she found joy, passion and excitement within her
                creative force. One to watch. The beginning has only just begun.{" "}
              </p>
              <p style={artistTwo}>
                <a href="https://www.instagram.com/jen_heads/">
                  <i class="fab fa-instagram fa-lg"></i> Jen_Heads{" "}
                </a>
                <a href="https://www.instagram.com/fiksate_gallery/">
                  <i class="fab fa-instagram fa-lg"></i> Fiksate Gallery
                </a>
              </p>

              <p style={artistThree}>
                A graduate of Fine Arts at the University of Canterbury, Kerry
                Tunstall uses high voltage electricity to make his art. His work
                encompasses prints, photography, film, and art installments that
                actively use electricity. He has always had a strong interest in
                the electrical world, and sees his art as being representational
                of electricity in a scientific and artistic sense.
              </p>
              <p style={artistThree}>
                <a href="https://kerry-tunstall.blogspot.com/">
                  <i class="fas fa-location-arrow fa-lg"></i> Website
                </a>{" "}
                <a href="https://www.instagram.com/hvkerry/">
                  <i class="fab fa-instagram fa-lg"></i> Instagram{" "}
                </a>
              </p>

              <p style={artistFour}>
                Julia is a watercolour portrait artist based in Christchurch.
                Her love of film and media is the source of inspiration of her
                work. Her use of exaggerated colour and painterly application
                seeks to heighten the drama and emotion of the original source
                material.{" "}
              </p>
              <p style={artistFour}>
                <a href="https://instagram.com/shyster.s">
                  <i class="fab fa-instagram fa-lg"></i> Instagram
                </a>
              </p>

              <p style={artistFive}>
                Kara enjoys working with the detritus, ephemera and experience
                of urban space, recontextualising urban elements through craft,
                photography, painting and sculptural constructions, transforming
                the ordinary into the fascinating and beautiful. She likes to
                explore, document and reconsider the overlooked urban
                environment, the flux, decay and abandonment found within the
                cityscape. She attempts to recreate the irrelevant or mundane,
                celebrating the nostalgic value found within the urban
                landscape. With a degree in Landscape Architecture and a degree
                in Fine Arts, she likes to work in both two and three dimensions
                and has recently been pushing more into sculpture.
              </p>
              <p style={artistFive}>
                <a href="http://karaburrowes-nz.com/">
                  <i class="fas fa-location-arrow fa-lg"></i> Website
                </a>{" "}
                <a href="https://www.instagram.com/karaburrowes/">
                  <i class="fab fa-instagram fa-lg"></i> Instagram
                </a>
              </p>

              <p style={artistSix}>
                Jason has been trained in Fine Arts and as an Engineering
                Surveyor, and all of his works feature aspects of mechanics,
                electronics, and sound. He majored in sculpture, but also
                practices other art forms, including film, photography, and
                collage. Jason mixes concepts of science and art to create
                pieces that explore texture, colour, and form, as well as a
                mechanical nature.
              </p>
              <p style={artistSix}>
                <a href="https://sharedlines.wordpress.com/slw-2017-arti…/jason-ware/">
                  <i class="fas fa-location-arrow fa-lg"></i> Shared Lines
                </a>{" "}
                <a href="https://www.instagram.com/jawreason/">
                  <i class="fab fa-instagram fa-lg"></i> Instagram
                </a>
              </p>

              <p style={artistSeven}>
                Kate is a Design student focused on Illustration, at Ara. Her
                work is predominately influenced by anything ghoulish, gruesome
                and fem, taking inspiration from tattoos, dreams, music, record
                design, comics, poetry and animation.{" "}
              </p>
              <p style={artistSeven}>
                <a href="https://instagram.com/koiuuitt">
                  <i class="fab fa-instagram fa-lg"></i> Instagram
                </a>
              </p>

              <p style={artistEight}>
                Sam is a director, animator, illustrator, and stop motion
                specialist. In all formats, his work shows a whimsical and
                imaginative side, his animations and illustrations both using
                bright colours and strong line-work.
              </p>

              <p style={artistNine}>
                Irenie How recently finished an honours year at Ilam School of
                Fine Arts. Often making use of symbolism and an original glyph
                language, her work explores words and how language helps us see
                and be a part of the world around us. She likes colour, markers,
                books, and maximalist detail.
              </p>
              <p style={artistNine}>
                <a href="https://instagram.com/irenie.makes">
                  <i class="fab fa-instagram fa-lg"></i> Instagram
                </a>{" "}
                <a href="https://instagram.com/anaplangent">
                  <i class="fab fa-instagram fa-lg"></i> Photography
                </a>
              </p>

              <p style={artistTen}>
                Shannon is a Christchurch based artist whose practice draws
                loosely on the visual languages of anatomy, astronomy and
                cartography. Shannon has exhibited in solo and group shows
                internationally since 2001 and completed multiple international
                artist residencies with a focus on groups that orchestrate
                collaborations between artists and scientists.
              </p>
              <p style={artistTen}>
                <a href="http://swilliamsonstudio.net/">
                  <i class="fas fa-location-arrow fa-lg"></i> Website
                </a>
              </p>

              <p style={artistEleven}>
                <a href="https://nickwhite.org">
                  <i class="fas fa-location-arrow fa-lg"></i> Website
                </a>{" "}
                <a href="https://instagram.com/nickwhitenickwhite">
                  <i class="fab fa-instagram fa-lg"></i> Instagram
                </a>
              </p>

              <p style={artistTwelve}>
                Gemma is a multidisciplinary artist who investigates the body
                and identity through intersectional feminism and queer theory.
                Her work includes performance, video, audio and printmaking. She
                is a member of Aotearoa based art collective/band Fantasing and
                has created music and art with acts such as Instant Fantasy, Fem
                Screm and Trimasterbate.
              </p>
              <p style={artistTwelve}>
                <a href="https://gemmasyme.com/">
                  <i class="fas fa-location-arrow fa-lg"></i> Website
                </a>{" "}
                <a href="https://www.facebook.com/GemmaSymeArtist">
                  <i class="fab fa-facebook fa-lg"></i> Facebook
                </a>{" "}
                <a href="https://www.instagram.com/gemmasyme/">
                  <i class="fab fa-instagram fa-lg"></i> Instagram
                </a>
              </p>
            </ArtistInfo>
          </ArtistContainer>
        </BigGrid>
      </>
    )
  }
}

export default Compilation
