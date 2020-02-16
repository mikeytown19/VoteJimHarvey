
import React from 'react'
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import styled from '@emotion/styled'
import SEO from "../components/seo"
import Jim from '../images/re-elect-main-white.svg'
import SideBySide from '../components/sidebyside'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import {theme, Container, Row } from '../styles'
const {colors} = theme;

const About = ({data}) => {
  data = data.allContentfulPage.edges[0].node
  const SideBySides = ({pageData}) => {

    return pageData.pageModules.map(item => {
      console.log(item)
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

    <Row noPadding bgColor={colors.blue}>
      <HeroContainer>
        <HeroImage src={Jim} alt=''/>
      </HeroContainer>
    </Row>

    <SideBySides pageData={data} />

  </Layout>

  )
}

export default About




export const pageQuery = graphql`
  query pageQuery {
    allContentfulPage(filter: {tite: {eq: "Achievements"}}) {
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
`
const H1 = styled.h1`
color: ${colors.blue};`