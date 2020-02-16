import React from 'react'
import Link from 'gatsby-link'
import styled from '@emotion/styled'
import {theme, Container, Row, media } from '../styles'
import Image from './image'
const {colors} = theme;


const TabBoxes = () => (
  <Row noPadding>
    <TabContainer>
      <LinkContainer to='/achievements'>
        <Text>Achievements</Text>
      </LinkContainer>

      <LinkContainer to='/endorsements'>

        <Text>Endorsements</Text>

      </LinkContainer>

      <a className="LinkContainer" target="_blank" href='https://secure.utah.gov/voterreg/index.html'>

        <Text>Register to Vote</Text>
      </a>

      <DonateContainer target="_blank" href='https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=NZ7AYG7Q3KX74&currency_code=USD&source=url' className="donate">

        <Text>Donate</Text>
      </DonateContainer>

    </TabContainer>
  </Row>
)


export default TabBoxes;

const TabContainer = styled(Container)`
  padding: 0;
  display: flex;
  margin-top: -45px;
  color: ${colors.white};

  ${media.small} {
    flex-wrap: wrap;
  }
  .LinkContainer {
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
 const DonateContainer = styled.a`

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
