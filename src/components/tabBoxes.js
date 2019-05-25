import React from 'react'
import Link from 'gatsby-link'
import styled from '@emotion/styled'
import {theme, Container, Row, media } from '../styles'
import Image from './image'
const {colors, maxWidth} = theme;

const TabContainer = styled(Container)`
  padding: 0;
  display: flex;
  margin-top: -75px;
  color: ${colors.white};

  ${media.small} {
    flex-wrap: wrap;
  }



`
const ImageText = styled.div`
      position: absolute;
      color: ${colors.white};
      top: 0;
      z-index: 20;
      width: 100%;
      height: 100%;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
`

const ImageContainer = styled(Link)`
    width: 400px;
    background-color: ${colors.red};
    position: relative;

    ${media.small} {
      width: 50%;
    }

    &:hover {
      &:before {
        opacity: .5;
      }
    }

    &:before {
      transition: opacity .4s;
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: ${props => props.nobg ? '' : colors.blue};
      opacity: .8;
      z-index: 10;
      content: '';
      cursor: pointer;
    }
`

const TabBoxes = () => (
  <Row noPadding>
    <TabContainer>
      <ImageContainer to='/' nobg="true">
        <ImageText> <h4>Contribute</h4></ImageText>
      </ImageContainer>

      <ImageContainer to='/page-2'>
        <Image src='community.jpg' />
        <ImageText> <h4>Volunteer</h4></ImageText>

      </ImageContainer>

      <ImageContainer to='/page-2'>
        <Image src='email-updates.jpg' />
        <ImageText> <h4>Email Updates</h4></ImageText>
      </ImageContainer>

      <ImageContainer to='/page-2'>
        <Image src='phone.jpg' />
        <ImageText> <h4>Latest News</h4></ImageText>
      </ImageContainer>

    </TabContainer>
  </Row>
)


export default TabBoxes;