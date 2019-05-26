import React from "react"
import styled from '@emotion/styled'
import { Link } from "gatsby"

import Layout from "../components/layout"
import {theme, Container, Row, media } from '../styles'
import Jim from '../images/Logos.2.svg'
import TabBoxes from '../components/tabBoxes'
import Image from '../components/image'
import H from '../images/cherry-delivery.png'
import SideBySide from '../components/sidebyside'

const {colors, maxWidth} = theme;

const HeroImage = styled.img`
  max-height: 400px;
  height: auto;
  width: 100%;
  margin-bottom: 70px;

`

const HeroContainer = styled(Container)`
  margin: auto;
  padding-top: 30px;
  text-align: center;
`

const IndexPage = () => (
  <Layout>

    <Row noPadding bgColor={colors.blue}>
      <HeroContainer>
        <HeroImage src={Jim} alt=''/>
      </HeroContainer>
    </Row>

    <TabBoxes />
    <Row>
      <Container>
        <SideBySide roundImage reverse imgSrc="jim.png">
        <h4><i>"I am asking for your support as The Republican candidate for Weber County Commissioner."</i></h4>
          <br/>
        <p>It is with gratitude that we were given a generous victory in the 2nd round delegate vote during the Weber County Republican convention. Most of the people elected at your neighborhood precinct meetings voted for me because they know who I HAVE BEEN all my life. They did their homework, attended meetings, sent emails, made telephone calls, and then overwhelmingly supported us in both the first and second rounds of voting at the convention.  </p>

        <p>I whole heartedly support the Utah Republican Party Platform. I'm conservative minded with Family Values at the core.
        </p>

        <p>I am endorsed by all Weber County Utah House of Representatives; Justin Fawson (#7), Gage Froerer (#8), Jeremy Petersen (#9), Dixon Pitcher (#10), Brad Dee (#11), Kelly Miles (#11-elect) and Mike Schultz (#12). </p>
        </SideBySide>
      </Container>
    </Row>

    <Row>
      <Container>
        <SideBySide roundImage imgSrc="cherry-success.png">
        <p>Additionally I am proud to be supported by Utah Senators; Scott Jenkins, Greg Buxton (elect) and Allen Christensen. </p>

        <p>I am specifically grateful to Rep. Brad Dee for his years of public service and for his unconditional endorsement. As the second highest vote recipient at the convention, we are grateful that Rep. Dee asked all of his supporters to now support us as the next Weber County Commissioner. </p>

        <p>I'm a proud participant and supporter of: Children's Justice Center, GOAL Foundation, Catholic Community Services, LDS charities, YCC, Weber School District Foundation, Pioneer Days, just to mention a few. </p>

        <p>I am a honest problem solving, positive outcome communicator. Many know of my integrity and experience surrounding the growth of business in both the public and private sector. </p>

        <p>My strength is bringing a business mind to the community. My experience is not political based...It's BUSINESS based… </p>

        <p>I will support the man who earns his living by using his HEAD and not ignore a man who earns his living by using his BACK. </p>
        </SideBySide>
      </Container>
    </Row>

    <Row>
      <Container>
        <SideBySide reverse roundImage imgSrc="cherry-upgrade.png">
        <p>I will support small business and also “Big Business” because they bring the most tax into the community and that helps keep property tax low. </p>

        <p>I will grow business in Weber County but not on the back of the taxpayers. I’ve got a proven record of taking care of what we have because its less expensive than paying a huge amount later. In managing government funds it's one thing to save money but it's even a better thing to generate taxable income without raising taxes. That's what I have done !  </p>

        <p>I've been the Golden Spike Event Center General Manager for 23 years; successfully managing a no expenditure increase budget while producing great revenue including befriending, signing contracts with, and bringing in National groups of various interest. This has resulted in 100+ million dollars in economic growth and revenue for Weber County businesses, while growing the number of events coming into Golden Spike from 100+ to over 280+ annually. </p>
        <p>Prior to that I spent ten years managing employees at Morris Travel Corp. starting with $0.85M in annual sales and growing that revenue to over $18M annually. </p>

        <p>My VOLUNTEER SERVICE includes: Weber State Alumni Board, Ogden Rotary Club, Exchange Club of Ogden, Ogden Weber Chamber and Spikers, Boy Scouts of America Executive Committee, Weber County School District community council, Weber County Republican Delegate (22 years), Utah State Republican Delegate (4 years), USO/DOD United States entertainment representative to Germany. </p>

        <p>I graduated from Weber County Schools and later from Weber State University with a bachelor's degree in Communications, Sociology and Technical Sales. </p>

        <p>Because I've not participated in formal politics before, I will continue to offer a FRESH and INNOVATIVE PERSPECTIVE for Weber County citizens. </p>

        <p>I am asking for your support as THE Republican candidate for Weber County Commissioner.</p>
        </SideBySide>
      </Container>
    </Row>







  </Layout>
)

export default IndexPage
