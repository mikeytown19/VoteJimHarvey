import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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

const Image = ({src, data}) => {
  let imageSrc = data.allFile.edges.find(({node}) => {
    if (node.childImageSharp) {
      return src ===  node.childImageSharp.fluid.originalName
    }
    return ''
  })
    return (
      <Img fluid={imageSrc.node.childImageSharp.fluid}/>
    )
  }


  export default props => (
    <StaticQuery
    query={graphql`
    query {
      allFile {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    }
    `}  render={data => <Image data={data} {...props}/>}/>
    );