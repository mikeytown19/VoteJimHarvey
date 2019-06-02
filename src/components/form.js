import React from 'react'
import styled from '@emotion/styled'
import {theme} from '../styles'

const {colors} = theme;

const StyledForm = styled.form`
  label {
    color: ${colors.blue};
    display: none;
  }

  input, textarea {
    margin: 10px 0;
    border-radius: 3px;
    border: solid ${colors.blue} 1px;
    padding: 5px 10px;
    -webkit-appearance: none;
    color: ${colors.blue};
    width: 100%;
    max-width: 250px;

  }

`


const Form = () => {
  return (
    <StyledForm name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
    <div data-netlify-recaptcha></div>
    <p className='hidden'>
      <input type="hidden" name="bot-field" />
    </p>
     <div className="field">
      <label className="label" for="fist_name">First Name</label>
      <div className="control">
        <input className="input" type="text"id="name" name="name" placeholder="First Name" />
      </div>
    </div>

    <div className="field">
      <label className="label" for="last_name">Last   Name</label>
      <div className="control">
        <input className="input" type="text"id="name" name="name" placeholder="Last Name" />
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


  </StyledForm>
  )
}

export default Form