import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import Image from './image'
import {media, theme } from '../styles'

const {colors} = theme;



const SideBySide = ({children, imgSrc, reverse, roundImage, imageToCenter}) => {

  return (
    <StyleContinaer reverse={reverse}>
      <ImageContainer  imageToCenter={imageToCenter}  roundImage={roundImage}>
        <Img  fluid={imgSrc}/>
      </ImageContainer>
      <ContentContainer>
        {children}
      </ContentContainer>
    </StyleContinaer>
  )
}

export default SideBySide


const ImageContainer = styled.div`
  padding: 20px;
  max-width: 450px;

  display: ${props => props.imageToCenter ? 'flex': ''};
  justify-content: ${props => props.imageToCenter ? 'center': ''};
  align-items: ${props => props.imageToCenter ? 'center': ''};



  .gatsby-image-wrapper {
    border-radius: ${props =>
    props.roundImage ? '50%' : '0' };
  }

  ${media.medium} {
    margin: auto;
    }
    `

const ContentContainer = styled.div`
  padding: 0px 20px;

  p {
    color: ${colors.blue};
  }

  h4, i {
    font-weight: 700;
    color: ${colors.blue3};
  }

  `
  const StyleContinaer = styled.div`
  display: flex;
  flex-wrap: wrap;
  div {
    flex: 1;
    min-width: 200px;
  }

  flex-direction: ${props =>
  props.reverse ? 'row-reverse': 'row'};

  ${media.medium} {
    flex-direction: column;
  }

`
