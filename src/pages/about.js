
import React from 'react'
import Layout from "../components/layout"
import styled from '@emotion/styled'
import SEO from "../components/seo"
import {theme, Container, Row } from '../styles'
import Jim from '../images/Logos.2.svg'
import SideBySide from '../components/sidebyside'
const {colors} = theme;

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
const H1 = styled.h1`
color: ${colors.blue};`
const About = () => {


  return (

    <Layout>
    <SEO title="About" />

    <Row noPadding bgColor={colors.blue}>
      <HeroContainer>
        <HeroImage src={Jim} alt=''/>
      </HeroContainer>
    </Row>

    <Row>
      <Container>
      <SideBySide imageToCenter roundImage reverse imgSrc="jane-jim.png">
        <H1>About me</H1>
        <p>   Allow me to introduce myself to you. I grew up in Riverdale and attended Weber County Schools graduating from Bonneville High School. In 1981 my talents earned me the privilege of serving the US military in Germany as an USO/DOD entertainer. I later served an LDS mission in Hawaii. In 1986 I graduated from Weber State University with a B.I.S. in Communication, Sociology, and Technical Sales.</p>

        <p>My incredible wife Jane and I just celebrated our 30th wedding anniversary. We have five grown children and one grandchild. I'm elated to admit that we are a close family and enjoy one another's company. I'm also proud to include that last year Jane graduated from Weber State with a bachelors in health promotions.</p>

        <p>   Following a 10+ year career in travel where I grew and managed what started as a 0.85 million dollar budget, to an 18 million dollar annual budget, I was hired in 1994 by Weber County to Manage the Golden Spike Event Center (GSEC). I've been there ever since and have worked under the direction of several past county commissioners. Since 1994 we grew from 100 events to 280+ events currently. We have enjoyed thousands of successes that have poured hundreds of millions of dollars into the local Weber County economy.</p>

        </SideBySide>


      </Container>
    </Row>

    <Row>
      <Container>
      <SideBySide imageToCenter roundImage  imgSrc="jim-eve.png">

      <p>I enjoy my work at the GSEC very much. We have an incredible seasoned team that are professional and efficient. Our facilities are branded as some of the finest of their kind in the country. In fact, this year we have more events on the books than we have ever had since the facility opened. We have made many friends locally, regionally, and even nationally. We are a trusted economic anchor for this community. Part of the reason I am seeking a seat on the Weber County Commission is to expand my circle of influence beyond the 150 acre GSEC to include the entire Weber County community. </p>
      <p>I believe in a management style that empowers people to grow and improve; so much so that they could eventually lead on their own. This builds trust and improves performance and efficiency in them. They also enjoy a higher job satisfaction. </p>

      <p>Even before filing, I've focused on the 18-28 year old demographic. This is how we perpetuate our interest in the community. Many of them are not registered to vote. My site encourages this and there is a tab to make this process easier. Our community has also become dependent on the Hispanic community. I embrace that and encourage them to become registered voters and vote their conscience. </p>

        </SideBySide>


      </Container>
    </Row>

    <Row>
      <Container>
      <SideBySide imageToCenter roundImage reverse  imgSrc="jim-jane-outside.png">

        <p>    I've spent my career building relationships with people. I love trusting them and learning about them. I'm a GREAT in person communicator and have successfully surrounded myself with terrific people. I can negotiate with others without offending them. We are proud to confirm that we have the support of many of the business in the area. This includes both workers and elected officials of many municipalities. </p>
        <p>I believe in Libraries, education and economic growth but also recognize that healthy communication and trust is vital to both of those issues. </p>
        <p>I've been registered as a Republican for over 23 years of which 16 years have been spent as a precinct chairperson. I believe our form of government is good and I'm interested in enhancing the leadership style. </p>



        </SideBySide>


      </Container>
    </Row>

    <Row>
      <Container>
      <SideBySide  imageToCenter roundImage  imgSrc="jim.png">
        <p>I am endorsed by all Weber County Utah House of Representatives; Justin Fawson (#7), Gage Froerer (#8), Jeremy Petersen (#9), Dixon Pitcher (#10), Brad Dee (#11), Kelly Miles (#11-elect) and Mike Schultz (#12). Additionally I am proud to be supported by Utah Senators; Scott Jenkins, Greg Buxton (elect) and Allen Christensen.</p>

        <p>I want to be the next County Commissioner because I LOVE where we live, where I grew up and where I hope to help make a place where my family will want to raise their children. To do this it has to have opportunity, a safe feeling, and a healthy place to grow.</p>

        </SideBySide>


      </Container>
    </Row>






  </Layout>




  )
}

export default About

