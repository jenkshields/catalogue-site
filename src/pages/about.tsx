import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PaddedText, Blockquote } from "../components/components"
import FermentistLogo from "../images/the-fermentist-logo.svg"

const SponsorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: repeat(auto);
  grid-gap: 5px;
  grid-auto-flow: dense;
`

const SponsorBlock = styled.div``

const StyledImg = styled.img`
  object-fit: contain;
  width: 100%;
`

const StyledGatsbyImg = styled(Img)`
  object-fit: contain;
  width: 100%;
`
const About = ({ data }) => (
  <>
    <SEO title="About" />
    <Layout>
      <PaddedText>
        <p />
        Based in Penny Lane Records, Catalogue continues the First Thursdays
        CHCH tradition of exhibiting new works on record covers.
        <p />
        Catalogue will host works on board, paper, card, and similar materials,
        by under-represented (not just emerging) artists.
        <p />
        The works will be for sale, with the intention of making art accessible
        and affordable to a broad audience. Alongside the original works will be
        prints and artist editions, which will form a back catalogue for sale as
        the space continues.
        <Blockquote>
          "Compilation brings together an array of practitioners from different
          backgrounds - there are Ilam graduates, freelance designers,
          illustrators, sculptors and recent graduates in the mix. It's a bit of
          a sampler of Christchurch makers. The parameters for the show are that
          all works will be the same dimensions - the same size as an LP sleeve.
          I'm expecting an eclectic mix of bright colours and techniques ranging
          from printmaking and painting to collage and electric mark-making." -
          Audrey Baldwin
        </Blockquote>
        <p />
        Catalogue is a collaboration between Glitterbox Pursuits and Penny Lane
        Records, with the aim of bringing together the art and music scenes and
        creating more platforms for artists to show in. It acknowledges and
        celebrates the often symbiotic relationship between music and visual
        art. Catalogue joins established galleries such as Jonathan Smart, City
        Art Depot and Form in the Sydenham area.
        <p />
        The establishment of Catalogue follows on from a relationship built up
        over a number of First Thursdays CHCH events, where Dave and the crew
        were always very supportive and engaged with the event - hosting some
        fabulous gigs and exhibitions. Glitterbox Pursuits will be curating and
        producing the shows, with help with promotion from Tiffany and Lukas at
        Pennylane.
        <p />
        <h2>Sponsors</h2>
        <SponsorGrid>
          <SponsorBlock>
            <a href="http://www.thefermentist.co.nz/">
              <StyledImg src={FermentistLogo} alt="The Fermentist" />
            </a>
          </SponsorBlock>
          <SponsorBlock>
            <a href="https://pennylanerecords.co.nz">
              <StyledGatsbyImg
                fluid={data.PennyLane.childImageSharp.fluid}
                alt="Penny Lane Records"
              />
            </a>
          </SponsorBlock>
          <SponsorBlock>
            <a href="https://glitterbox.nz">
              <StyledGatsbyImg
                fluid={data.Glitterbox.childImageSharp.fluid}
                alt="Glitterbox Pursuits"
              />
            </a>
          </SponsorBlock>
        </SponsorGrid>
      </PaddedText>
    </Layout>
  </>
)

export default About

export const query = graphql`
  query {
    PennyLane: file(relativePath: { regex: "/pennylane-logo/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    Glitterbox: file(relativePath: { regex: "/glitterbox-logo/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
