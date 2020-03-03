import styled from "styled-components"
import Img from "gatsby-image"

export const UnstyledButton = styled.button`
  all: unset;
`
export const Serif = styled.p`
  font-family: "Cormorant Infant", serif;
  font-style: italic;
`
export const PaddedText = styled.p`
  padding-left: 2vw;
  padding-right: 2vw;
`

export const Blockquote = styled.p`
  padding-top: 10px;
  padding-left: 2vw;
  padding-right: 2vw;
  margin: 0 0 1rem;
  font-size: 1.25rem;
`
export const Title = styled.h1`
  text-align: center;
`

export const DocumentationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: repeat(auto);
  grid-gap: 5px;
  grid-auto-flow: dense;
  padding-right: 10px;
`

export const DocumentationItem = styled(Img)`
  object-fit: contain;
  width: 100%;
  height: 100%;
`
