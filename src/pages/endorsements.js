import React from 'react'
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import styled from '@emotion/styled'
import SEO from "../components/seo"
import EndorseCard from '../components/endorseCard'
import TabBoxes from '../components/tabBoxes'
import {theme, Container, Row } from '../styles'
import Jim from '../images/re-elect-main-white.svg'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const {colors} = theme;

const Endorsments = () => {

  return (

    <Layout>
    <SEO title="Endorsments" />

    {/* <Row noPadding bgColor={colors.blue}>
      <HeroContainer>
        <HeroImage src={Jim} alt=''/>
      </HeroContainer>
    </Row> */}
    {/* <TabBoxes /> */}
    <Row>
      <Container>

        <H1>Endorsments</H1>

         <HeroContainer>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/ich3OXVB1YQ?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </HeroContainer>


      <EndorseCard/>
      </Container>
    </Row>
  </Layout>
  )
}

export default Endorsments

const HeroImage = styled.img`
  max-height: 400px;
  height: auto;
  width: 100%;
  margin-bottom: 70px;

`

const HeroContainer = styled(Container)`
  margin: auto;
  padding-top: 30px;
  text-align: center;

  iframe {
    padding-bottom: 20px;
    max-width: 800px;
  }
`
const H1 = styled.h1`
color: ${colors.blue};`



