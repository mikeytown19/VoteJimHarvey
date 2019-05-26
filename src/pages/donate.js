import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Donate = () => (
  <Layout>
    <SEO title="Donate" />
    <h1>Hi from the Donate</h1>
    <p>Welcome to Donate</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Donate
