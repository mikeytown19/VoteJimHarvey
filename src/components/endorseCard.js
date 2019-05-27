import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from '@emotion/styled'
import Popup from 'reactjs-popup'
import {theme } from '../styles'
const {colors} = theme;
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

  .img_container {
    height: auto;
    width: 100%;
    max-width: 400px;
    margin: 10px;
    cursor: pointer;
    position: relative;


    .button {
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: 100;
    }

    .close {
      cursor: pointer;
      font-size: 30px;
    }

  }
`

const PopupStyles = styled(Popup)`
color: ${colors.blue};
margin: 0;
max-width: 100% !important;
.popup-content {
  width: 75% !important;
}
`

const PopupExample =  ({img}) => {
  return (
    <PopupStyles  position="center center"trigger={<span className="button"></span>} modal>
    {close => (
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>


     <Img  fluid={img}/>


      </div>
    )}
  </PopupStyles>

)
}



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

      {endorseImages.map((item, index) => {
        let image = item.node.childImageSharp.fluid;
        return (
          <div key={index} className="img_container">
            <PopupExample img={image} />
            <Img  fluid={image}/>
          </div>
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
            fluid(maxWidth: 1200) {
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