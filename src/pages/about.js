
import React from 'react'
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import styled from '@emotion/styled'
import SEO from "../components/seo"
import {theme, Container, Row } from '../styles'

import Jim from '../images/re-elect-main-white.svg'
import SideBySide from '../components/sidebyside'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
const {colors} = theme;


const About = ({data}) => {
  data = data.allContentfulPage.edges[0].node
  const SideBySides = ({pageData}) => {

    return pageData.pageModules.map(item => {

      return (
        <Row key={item.id}>
         <Container>
          <SideBySide roundImage reverse={item.reversed} imgSrc={item.image.fluid}>
            {documentToReactComponents(item.childContentfulSideBySideCopyRichTextNode.json)}
          </SideBySide>
        </Container>
      </Row>
      )
    })
  }

  return (

    <Layout>
    <SEO title="About" />

    {/* <Row noPadding bgColor={colors.blue}>
      <HeroContainer>
        <HeroImage src={Jim} alt=''/>
      </HeroContainer>
    </Row> */}
     <br/>
    <br/>
    <H1>About Jim</H1>

    <Row >
         <HeroContainer>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/bo-1Dc0lBvA?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </HeroContainer>
      </Row>
    <SideBySides pageData={data} />

  </Layout>
  )
}

export default About

export const pageQuery = graphql`
query aboutQuery {
  allContentfulPage(filter: {tite: {eq: "About Me"}}) {
    edges {
      node {
        pageModules {
          id
          image {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          childContentfulSideBySideCopyRichTextNode {
            json
          }
          reversed
        }
        tite
      }
    }
  }
}


`

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

