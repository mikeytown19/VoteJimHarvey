

import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import EndorseCard from '../components/endorseCard'
import {theme, Container, Row } from '../styles'



const Endorsments = () => {


  return (

    <Layout>
    <SEO title="Endorsments" />
    <Row>
      <Container>
        <h1>Endorsments</h1>

      <EndorseCard />
      </Container>
    </Row>




  </Layout>




  )
}

export default Endorsments

