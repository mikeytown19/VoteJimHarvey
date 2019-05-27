

import React from 'react'
import Layout from "../components/layout"
import styled from '@emotion/styled'
import SEO from "../components/seo"
import EndorseCard from '../components/endorseCard'
import {theme, Container, Row } from '../styles'
import Jim from '../images/Logos.2.svg'
const {colors} = theme;

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
`
const H1 = styled.h1`
color: ${colors.blue};`
const Endorsments = () => {


  return (

    <Layout>
    <SEO title="Endorsments" />

    <Row noPadding bgColor={colors.blue}>
      <HeroContainer>
        <HeroImage src={Jim} alt=''/>
      </HeroContainer>
    </Row>

    <Row>
      <Container>

        <H1>Endorsments</H1>

      <EndorseCard />
      </Container>
    </Row>




  </Layout>




  )
}

export default Endorsments

