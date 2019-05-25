import React from 'react'
import styled from '@emotion/styled'
import Image from './image'
import {theme, Container, Row, media } from '../styles'



const ImageContainer = styled.div`
  padding: 20px;
  max-width: 450px;
  ${media.medium} {
    margin: auto;
    }
`
const ContentContainer = styled.div`
  padding: 0px 20px;
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
    flex-wrap: wrap;
  }
  ${media.small} {
    flex-direction: column;
  }
`




const SideBySide = ({children, imgSrc, reverse}) => {

  return (
    <StyleContinaer reverse={reverse}>
      <ImageContainer>
        <Image src={imgSrc}/>
      </ImageContainer>
      <ContentContainer>
        {children}
      </ContentContainer>
    </StyleContinaer>
  )
}

export default SideBySide