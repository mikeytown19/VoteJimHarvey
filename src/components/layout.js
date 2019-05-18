/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Nav from './nav'


import GlobalStyles from '../styles/Global';

const Layout = ({ children }) => (
  <>
    <main>
      <GlobalStyles />
      <Nav />

      {children}
    </main>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout