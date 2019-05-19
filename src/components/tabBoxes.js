import React from 'react'
import Link from 'gatsby-link'
import styled from '@emotion/styled'
import {theme, Container, Row, media } from '../styles'
import Image from './image'
const {colors, maxWidth} = theme;

const TabContainer = styled(Container)`
  padding: 0;
  display: flex;
  margin-top: -50px;
  color: ${colors.white};



`

const ImageContainer = styled.div`
    width: 400px;
    background-color: ${colors.red};
    position: relative;

    &:hover {
      &:before {
        opacity: 0;
      }
    }

    &:before {
      transition: opacity .4s;
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: ${props => props.noBg ? '' : colors.blue};
      opacity: .8;
      z-index: 10;
      content: '';
      cursor: pointer;
    }
`

const TabBoxes = () => (
  <Row noPadding>
    <TabContainer>
      <ImageContainer noBg>
        <div>Contribute</div>
      </ImageContainer>

      <ImageContainer>
        <Image src='community.jpg' />
        <div>Contribute</div>

      </ImageContainer>

      <ImageContainer>
        <Image src='email-updates.jpg' />
      </ImageContainer>

      <ImageContainer>
        <Image src='phone.jpg' />
      </ImageContainer>

    </TabContainer>
  </Row>
)


export default TabBoxes;