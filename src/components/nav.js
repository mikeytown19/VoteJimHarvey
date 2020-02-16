import React, {useState} from 'react'
import Link from 'gatsby-link'
import styled from '@emotion/styled'
import {theme, Row, media } from '../styles'
import NavLogo from '../images/navLogo.png'
import NavigationData from '../data/navigation'

const {colors, maxWidth} = theme;

const NavLinks = props => (
  <NavLinksStyles>
    {NavigationData.map((item, index) => {
      // This way i am not getting Donate to appear in this Map function
      if (index < 5) {
        return (
          <Link  to={item.to} key={index}> {item.name} </Link>
          )
        }

        return ''
    })}
  </NavLinksStyles>
)
function Nav() {
  const [opened, toggleOpened] = useState(false);

 const handleClick = e => {
    e.preventDefault()
    e.currentTarget.classList.toggle('change');
    toggleOpened(!opened)

  }


  return (
    <FixedNav>
          <StyledNav className={opened ? "active" : ""}>
      <StyledRow>
        <Link to="/"><img src={NavLogo} alt=''/></Link>
       <MobileNavStyles>
       <NavLeft>
          <NavLinks />
        </NavLeft>
      <NavLinksStyles hoverColor={colors.legalGray}>
        <NavRight target="_blank" href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=NZ7AYG7Q3KX74&currency_code=USD&source=url">
          {NavigationData[5].name}

        </NavRight>
      </NavLinksStyles>
       </MobileNavStyles>

            <HamburgerStyles onClick={(e)=>handleClick(e)}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </HamburgerStyles>

      </StyledRow>
    </StyledNav>
    </FixedNav>

  )

}


export default Nav;


const MobileNavStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;


  ${media.small} {
    border-bottom: solid white 2px;
    display: none;
  }
`

const NavLeft = styled.div`
  display: flex;
  padding: 15px;

  ${media.small} {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 0;
    align-items: flex-start;
  }
`

const NavRight = styled.a`
  background-color: ${colors.red};
  padding: 15px 25px;
  border-radius: 2px;
  cursor: pointer;

  ${media.small} {
    margin-bottom: 20px;
    margin-left: 10px;
  }
`

const StyledRow = styled(Row)`
color: ${colors.white};
max-width: ${maxWidth};
margin: auto;
display: flex;
position: relative;

a {
  line-height: 0;
}

${NavRight} {
  line-height: initial;
}


  img {
    height: 50px;
  }

  ${media.small} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    padding-bottom: 10px;

    a {
      line-height: initial;

    }

    img {

    }
  }
`

const NavLinksStyles = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: 600;
  position: relative;

  a {
    margin: 0 10px;
    cursor: pointer;
    transition: color .3s;
    color: ${colors.white};

    &:hover {
      color: ${props => props.hoverColor ? props.hoverColor: colors.red};
    }
  }


  ${media.small} {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    width: 100%;
    margin-bottom: 10px;

    a {
      margin-top: 8px;
    }
  }
`

const HamburgerStyles = styled.div`
  display: none;
  ${media.small} {
    display: block;
    margin-right: 15px;
    cursor: pointer;
    .bar1, .bar2, .bar3 {
      width: 35px;
      height: 5px;
      background-color:  ${props =>
      props.scrolled ? '#3e5f77' : 'white'};
      margin: 6px 0;
      transition: 0.4s;
    }
    &.change .bar1 {
      -webkit-transform: rotate(-45deg) translate(-9px, 6px);
      transform: rotate(-45deg) translate(-9px, 6px);
    }
    &.change .bar2 {opacity: 0;}
    &.change .bar3 {
      -webkit-transform: rotate(45deg) translate(-8px, -8px);
      transform: rotate(45deg) translate(-8px, -8px);
    }
  }
`



const StyledNav = styled.nav`
  background-color: ${colors.blue};
  height: 80px;
  display: flex;

  &.active {
    ${MobileNavStyles} {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 50px;
      background-color: ${colors.blue};
    }
  }

`

const FixedNav = styled.div`
    position: fixed;
    width: 100%;
    z-index: 100;
`
