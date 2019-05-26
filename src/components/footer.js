import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from '@emotion/styled'
import {theme, Container, Row, media } from '../styles'
import FooterLogo from '../images/Logo.3.svg'
import Facebook from '../images/facebook.svg'
import Twitter from '../images/twitter.svg'
import Youtube from '../images/youtube.svg'

const {colors, maxWidth} = theme;

const FooterContainer = styled.footer`
  background-color: ${colors.blue};
  color: ${colors.white};



  ${Container} {

    display: flex;
    justify-content: space-between;

    ${media.medium} {
      flex-direction: column;

      .register {
        margin-top: 20px;
      }

    }



    a {
      color: ${colors.white};
      text-decoration: underline;
    }
  }


`

const FooterImage = styled.img`
  height: auto;
  width: 75px;
  margin-bottom: 10px;
`

const SocialIcons = styled.img`
  margin: 0 10px;
  cursor: pointer;
  transition: all .1s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`

const Footer = () => (
  <FooterContainer>
    <Row>
    <Container>
      <div>
          <Link to='/'>
            <FooterImage src={FooterLogo} alt=''/>
          </Link>
          <div>
            <a rel="noopener noreferrer" href="https://www.facebook.com/VoteJimHarvey/?pnref=story" target="_blank">
              <SocialIcons src={Facebook} alt=''/>
            </a>
            <a rel="noopener noreferrer" href="https://twitter.com/jimhharvey" target="_blank">
              <SocialIcons src={Twitter} alt=''/>
            </a>
            <a rel="noopener noreferrer" href="https://www.youtube.com/channel/UCbWJtt7g8Zs56rD-etaMLLw/videos" target="_blank">
              <SocialIcons src={Youtube} alt=''/>
            </a>
          </div>
      </div>

      <div className="register">
        <h5><a  rel="noopener noreferrer" href='https://secure.utah.gov/voterreg/index.html' target="_blank">Register to Vote</a></h5>
      </div>

    </Container>

    </Row>


  </FooterContainer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
{/*
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="8M9GRUWF27S3Q" />
        <input type="image" className="paypal" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"/>
      </form> */}