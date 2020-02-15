import React from "react"
import styled from '@emotion/styled'

import { graphql } from 'gatsby'

import Layout from "../components/layout"
import {theme, Container, Row } from '../styles'
import Jim from '../images/Logos.2.svg'
import TabBoxes from '../components/tabBoxes'
import SideBySide from '../components/sidebyside'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
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
      <Row noPadding bgColor={colors.blue}>
        <HeroContainer>
          <HeroImage src={Jim} alt=''/>
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