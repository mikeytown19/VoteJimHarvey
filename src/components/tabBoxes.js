import React from 'react'
import Link from 'gatsby-link'
import styled from '@emotion/styled'
import {theme, Container, Row, media } from '../styles'
import Image from './image'
const {colors} = theme;

const TabContainer = styled(Container)`
  padding: 0;
  display: flex;
  margin-top: -45px;
  color: ${colors.white};

  ${media.small} {
    flex-wrap: wrap;
  }
`
const Text = styled.h4`

      color: ${colors.white};

      z-index: 20;
      width: 100%;
      height: 100%;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
`

const LinkContainer = styled(Link)`
    width: 400px;
    background-color: ${colors.blue2};
    position: relative;
    padding: 20px;
    transition: background-color .3s;

    &:hover {
      background-color: ${colors.blue3};
    }


    ${media.small} {
      width: 50%;
      margin: 0;
      padding: 20px 5px;

    }

    &.donate {
    background-color: ${colors.red};
    position: relative;
    padding: 20px;

    &:hover {
      background-color: ${colors.red2};
    }


    }

`

const TabBoxes = () => (
  <Row noPadding>
    <TabContainer>
      <LinkContainer to='/'>
        <Text>Achievements</Text>
      </LinkContainer>

      <LinkContainer to='/'>

        <Text>Endorsements</Text>

      </LinkContainer>

      <LinkContainer to='/'>

        <Text>Register to Vote</Text>
      </LinkContainer>

      <LinkContainer to='/' className="donate">

        <Text>Dontate</Text>
      </LinkContainer>

    </TabContainer>
  </Row>
)


export default TabBoxes;