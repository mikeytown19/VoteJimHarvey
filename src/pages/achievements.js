
import React from 'react'
import Layout from "../components/layout"
import styled from '@emotion/styled'
import SEO from "../components/seo"
import {theme, Container, Row } from '../styles'
import Jim from '../images/Logos.2.svg'
import SideBySide from '../components/sidebyside'
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
const About = () => {


  return (

    <Layout>
    <SEO title="About" />

    <Row noPadding bgColor={colors.blue}>
      <HeroContainer>
        <HeroImage src={Jim} alt=''/>
      </HeroContainer>
    </Row>
    <Row>
      <Container>
      <SideBySide imageToCenter roundImage reverse imgSrc="jane-jim.png">
        <H1>Achievements</H1>
        <p>   Allow me to introduce myself to you. I grew up in Riverdale and attended Weber County Schools graduating from Bonneville High School. In 1981 my talents earned me the privilege of serving the US military in Germany as an USO/DOD entertainer. I later served an LDS mission in Hawaii. In 1986 I graduated from Weber State University with a B.I.S. in Communication, Sociology, and Technical Sales.</p>

        <p>My incredible wife Jane and I just celebrated our 30th wedding anniversary. We have five grown children and one grandchild. I'm elated to admit that we are a close family and enjoy one another's company. I'm also proud to include that last year Jane graduated from Weber State with a bachelors in health promotions.</p>

        <p>   Following a 10+ year career in travel where I grew and managed what started as a 0.85 million dollar budget, to an 18 million dollar annual budget, I was hired in 1994 by Weber County to Manage the Golden Spike Event Center (GSEC). I've been there ever since and have worked under the direction of several past county commissioners. Since 1994 we grew from 100 events to 280+ events currently. We have enjoyed thousands of successes that have poured hundreds of millions of dollars into the local Weber County economy.</p>

        </SideBySide>


      </Container>
    </Row>







  </Layout>




  )
}

export default About

