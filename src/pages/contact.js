import React from "react"
import styled from '@emotion/styled'
import { Link } from "gatsby"
import Helmet from 'react-helmet'

import {theme, Container, Row } from '../styles'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from '../components/form'




const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <Row>
      <Container>
        <h2>Contact Us</h2>
        <Form />
      </Container>
    </Row>


  </Layout>
)

export default Contact
