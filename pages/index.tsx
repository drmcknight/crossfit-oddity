import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import styled from 'styled-components';
import { CTASection, GettingStartedSection, Header, HeroSection, LocationSection, MembershipsSection, OurGymSection, OurProgramsSection, Wrapper } from '../components'

const Main = styled.main`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    padding 0;
    @media (max-width: 768px) {
        padding: 0;
    }
`;

const BelowTheFold = styled.section`
    background-color: #f7f7f7;
    text-align: center;
`;

const MoreInfoWrapper = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    height: 420px;
    @media (max-width: 768px) {
      width: 100%;
      height: unset;
      flex-flow: row wrap;
    }
`;

const WayBelowTheFold = styled.section`
  background-color: white;
  flex-basis: 100%;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const HelpfulInfoWrapper = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: row wrap;
  }
`;

const OurMissionSection = styled.div`
    padding: 50px 200px 50px 200px;
    line-height: 2;
    @media (max-width: 768px) {
      padding: 20px;
  }
`;

const Divider = styled.div`
  display:none;
  @media (max-width: 768px) {
    display: block;
    width: 100%;
    height: 2px;
    background-color: black;
    background-image: radial-gradient(white, #7cda24, white 70%);
  }
`;

const Home: NextPage = () => {

  return (
    <React.Fragment>
      <Head>
        <title>CrossFit Oddity - Madison, AL</title>
        <meta name="description" content='Come in for a “No Sweat Intro” today! We will talk about what your fitness goals are in addition to helping you pick the right program tailored specifically for you. Part of what makes Oddity different from every other gym out there is the personal attention we give in talking about nutrition, goal setting and lifestyle. Whether you are new to CrossFit or have experience and are new to Oddity this is the place to start.'></meta>
        { <link href="https://fonts.googleapis.com/css2?family=Oswald&family=Roboto&display=optional" rel="stylesheet" /> }
      </Head>
      <Wrapper>
        <Main>
            <HeroSection />
            <BelowTheFold>
                <OurMissionSection>
                  <p>
                    Our Mission is to take ordinary people and give them extraordinary results by focusing all of our energy, on our mission. The result is an amazing gym, talented Coaches and a fantastic, welcoming community of members exceeding their fitness goals.
                  </p>
                </OurMissionSection>
              <MoreInfoWrapper>
                <MembershipsSection />
                <Divider />
                <CTASection />
                <Divider />
              </MoreInfoWrapper>
            </BelowTheFold>
            <WayBelowTheFold>
              <HelpfulInfoWrapper>
                <OurGymSection />
                <Divider />
                <GettingStartedSection />
              </HelpfulInfoWrapper>
            </WayBelowTheFold>
        </Main>
      </Wrapper>
    </React.Fragment>
  )
}

export default Home
