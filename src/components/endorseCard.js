import React, { useState } from 'react'
import { StaticQuery, graphql } from "gatsby"
import Carousel, { Modal, ModalGateway } from 'react-images'
import Img from "gatsby-image"
import styled from '@emotion/styled'

import {theme, media } from '../styles'
const {colors} = theme;


const EndorsmentCard = ({data}) => {
  const images = []
  const [modalIsOpen, toggleModal] = useState(false)
  const [selectedIndex, updateIndex] = useState(0)


  let endorseImages = data.allFile.edges.filter(({node}) => {
    if (node.relativePath) {
      return node.relativePath.indexOf('endorsments') > -1 ;
    } else {
      return ''
    }
  })
  return (
    <GalleryLayout>
    {endorseImages.map(({ node }, id) => {
      console.log(node)
      images.push({ src: node.childImageSharp.fluid.src })

      let image = node.childImageSharp.fluid

      return (
        <StyledImageContainer
          onClick={() => {
            toggleModal(prevState => !prevState)
            updateIndex(prevState => (prevState = id))
          }}
          key={id}
        >
          <Img fluid={image} />
        </StyledImageContainer>
      )
    })}

    {modalIsOpen ? (
      <div>
        <ModalGateway>
          <Modal onClose={() => toggleModal(prevState => !prevState)}>
            <Carousel currentIndex={selectedIndex} views={images} />
          </Modal>
        </ModalGateway>
      </div>
    ) : null}
  </GalleryLayout>

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

            fixed(quality: 90, width: 472) {
              ...GatsbyImageSharpFixed
            }
          }

        	}
      	}

      }
    }
    `}  render={data => <EndorsmentCard data={data} {...props}/>}/>
    );

    const StyledImageContainer = styled.div`
    width: 100%;
    height: 100%;
    cursor: pointer;
    object-fit: cover;
    filter: grayscale(0);
    transition: filter 0.2s, padding 0.2s;
    padding: 25px;
    border: solid white 1px;
    display: flex;
    justify-content: center;
    &:hover {
      filter: grayscale(0.5);
      border: solid 1px #5e5e5e;
    }
    .gatsby-image-wrapper {
      height: 100% !important;
      width: 100% !important;
    }
    .css-h67k8  {
      top: 40px;
    }
  `

  const GalleryLayout = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-auto-rows: 300px;
    width: 100%;
    justify-items: center;

  `

