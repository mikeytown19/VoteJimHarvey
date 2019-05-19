import React from "react"
import styled from '@emotion/styled'
import { Link } from "gatsby"

import Layout from "../components/layout"
import {theme, Container, Row, media } from '../styles'
import Jim from '../images/logos-2.png'
import TabBoxes from '../components/tabBoxes'

const {colors, maxWidth} = theme;

const HeroImage = styled.img`
  max-width: 600px;
  height: auto;
  width: 100%;
`

const HeroContainer = styled(Container)`
  margin: auto;
  padding-top: 30px;
  text-align: center;
`

const IndexPage = () => (
  <Layout>

    <Row noPadding bgColor={colors.blue}>
      <HeroContainer>
        <HeroImage src={Jim} alt=''/>
      </HeroContainer>
    </Row>

    <TabBoxes />


  </Layout>
)

export default IndexPage
