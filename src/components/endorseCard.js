import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from '@emotion/styled'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const CardContainer = styled.div`
  color: red;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  max-width: 1200px;
  justify-content: center;
  .gatsby-image-wrapper {
    height: auto;
    width: 100%;
    max-width: 400px;
    margin: 10px;
    cursor: pointer;

  }
`

const EndorsmentCard = ({data}) => {

  let endorseImages = data.allFile.edges.filter(({node}) => {
    if (node.relativePath) {
      return node.relativePath.indexOf('endorsments') > -1 ;
    } else {
      return ''
    }
  })
  return (
    <CardContainer>
      {console.log(endorseImages)}
      {endorseImages.map((item, index) => {
        return (
          <Img key={index} fluid={item.node.childImageSharp.fluid}/>
        )
      })}

    </CardContainer>

  )

  }


  export default props => (
    <StaticQuery
    query={graphql`
    query {
      allFile {
       edges {
        node {
          relativePath
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }

        	}
      	}

      }
    }
    `}  render={data => <EndorsmentCard data={data} {...props}/>}/>
    );