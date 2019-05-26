/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Nav from './nav'
import Footer from './footer'
import styled from '@emotion/styled'


import GlobalStyles from '../styles/Global';

const ChildrenContainer = styled.div`
  padding-top: 80px;
`

const Layout = ({ children }) => (
  <>
    <main>
      <GlobalStyles />
      <Nav />

      <ChildrenContainer>
        {children}

      </ChildrenContainer>

      <Footer />

    </main>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout