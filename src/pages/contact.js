import React from "react"
import { Link } from "gatsby"
import Helmet from 'react-helmet'

import {theme, Container, Row } from '../styles'
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <Row>
      <Container>
      <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <div data-netlify-recaptcha></div>
        <p className='hidden'>
          <input type="hidden" name="bot-field" />
        </p>
         <div className="field">
          <label className="label" for="name">Name</label>
          <div className="control">
            <input className="input" type="text"id="name" name="name" placeholder="Full Name" />
          </div>
        </div>


        <div className="field">
          <label className="label" for="email">Email</label>
          <div className="control">
            <input className="input" type="email" name="email"id="email"placeholder="Email" />
          </div>
        </div>


        <div className="field">
          <label className="label" for="number">Number</label>
          <div className="control">
            <input className="input" type="tel" id="number" name="number"placeholder="Phone Number" />
          </div>
        </div>

        <div className="field">
          <label className="label" for="message">Message</label>
          <div className="control">
            <textarea className="textarea" id="message" name="message"placeholder="Write us"></textarea>
          </div>
        </div>

        <div className="field is-grouped">

          <div className="control">
            <button type="submit" className="button is-primary">Submit</button>
          </div>
          <div className="control">
            <button className="button is-text">Cancel</button>
          </div>
        </div>


      </form>
      </Container>
    </Row>


  </Layout>
)

export default Contact
