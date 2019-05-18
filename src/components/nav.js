import React, {useState} from 'react'
import Link from 'gatsby-link'
import styled from '@emotion/styled'
import {theme, Container, Row, media } from '../styles'
import NavLogo from '../images/navLogo.png'
import NavigationData from '../data/navigation'

console.log(NavigationData)

const {colors, maxWidth} = theme;



const MobileNavStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const StyledRow = styled(Row)`
color: ${colors.white};
max-width: ${maxWidth};
margin: auto;
display: flex;
position: relative;


  img {
    height: 50px;
  }
`

const NavLinksStyles = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: 600;

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
  }
`

const HamburgerStyles = styled.div`
  display: none;
  ${media.small} {
    display: block;
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

const NavLeft = styled.div`
  display: flex;
  padding: 15px;
`

const NavRight = styled.div`
  background-color: ${colors.red};
  padding: 15px 25px;
  border-radius: 2px;
`

const StyledNav = styled.nav`
  background-color: ${colors.blue};

  &.active {

  }

`

const NavLinks = props => (
  <NavLinksStyles>
    {NavigationData.map((item, index) => {
      // This way i am not getting Donate to appear in this Map function
      if (index < 4) {
        return (
          <Link  to={item.to} key={index}> {item.name} </Link>
          )
        }
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
    <StyledNav className={opened ? "active" : ""}>
      <StyledRow>
        <img src={NavLogo} alt=''/>
       <MobileNavStyles>
       <NavLeft>
          <NavLinks />
        </NavLeft>
      <NavLinksStyles hoverColor={colors.legalGray}>
        <NavRight>
          {NavigationData[4].name}
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
  )

}


export default Nav;