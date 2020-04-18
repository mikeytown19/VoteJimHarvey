import React from "react"
import styled from '@emotion/styled'

import { graphql } from 'gatsby'
import SEO from "../components/seo"
import Layout from "../components/layout"
import {theme, Container, Row } from '../styles'
import Jim from '../images/re-elect-main-white.svg'
import TabBoxes from '../components/tabBoxes'
import SideBySide from '../components/sidebyside'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
const {colors} = theme;


const IndexPage = ({data}) => {
  data = data.allContentfulPage.edges[0].node


  const SideBySides = ({pageData}) =>
   pageData.pageModules.map(item => {

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


  return (
    <Layout>
      <SEO title="Home" />
      <Row noPadding bgColor={colors.blue}>
        <HeroContainer>
          <HeroImage src={Jim} alt=''/>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/pZuZ_1SEczw?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </HeroContainer>
      </Row>
      <TabBoxes />

      <SideBySides pageData={data} />
    </Layout>
  )
}

export default IndexPage


export const pageQuery = graphql`
query MyQuery {
  allContentfulPage(filter: {tite: {eq: "Home page"}}) {
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


`

const HeroContainer = styled(Container)`
  margin: auto;
  padding-top: 0px;
  text-align: center;
  iframe {
    margin-top: -20px;
    padding-bottom: 20px;
    max-width: 580px;
  }
`