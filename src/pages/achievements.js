
import React from 'react'
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import styled from '@emotion/styled'
import SEO from "../components/seo"
import Pic from '../images/achievements.png'
import SideBySide from '../components/sidebyside'
import TabBoxes from '../components/tabBoxes'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Img from "gatsby-image"


import {theme, Container, Row, media } from '../styles'
const {colors} = theme;

const About = ({data}) => {
  const allContentfulAchievements = data.allContentfulAchievements.edges[0].node.achievements
  console.log(allContentfulAchievements)
  const allContentfulPage = data.allContentfulPage.edges[0].node



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
    <SEO title="Achievements" />


    <br/>
    <br/>
    <H1>Achievements</H1>
    <HeroContainer>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/zlkn2UU9IG8?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </HeroContainer>

    <LinkContinaer>
      {allContentfulAchievements.map((node) =>
          <a className="link" target="_blank" href={node.url}>
              <h4>{node.title}</h4>
            <div className="image-container">
              <LinkImage fluid={node.image.fluid} />
            </div>
          </a>
        )}
    </LinkContinaer>


    <SideBySides pageData={allContentfulPage} />

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
    allContentfulAchievements {
    edges {
      node {
        achievements {
          title
          url
          image {
            id
            fluid {
              src
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
  }
`

const LinkImage = styled(Img)`
  height: auto;
  width: 350px;
  object-fit: cover;

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

const LinkContinaer = styled.div`
  max-width: 1400px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 400px));
  justify-content: center;
  grid-gap: 40px;

  a {
    color: ${colors.blue};

    &:visited {
      color: ${colors.blue};
    }
  }


  .link {
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    flex-direction: column;
    padding: 15px 20px;
    border-radius: 4px;
    box-shadow: rgb(216, 220, 223) 0px 4px 8px;

    .image-container {
      height: 300px;
      height: auto;
      object-fit: cover;
    }
  }

  h4 {
    margin-bottom: 20px;
    font-weight: 500;
  }
`
const H1 = styled.h1`
  color: ${colors.blue};

  ${media.medium} {
   text-align: center;
  }

`