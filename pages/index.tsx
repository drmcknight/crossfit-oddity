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
      padding: 0;
  }
`;

const Home: NextPage = () => {

  return (
    <React.Fragment>
      <Head>
        <title>CrossFit Oddity - Madison, AL</title>
        <meta name="description" content='Come in for a “No Sweat Intro” today! We will talk about what your fitness goals are in addition to helping you pick the right program tailored specifically for you. Part of what makes Oddity different from every other gym out there is the personal attention we give in talking about nutrition, goal setting and lifestyle. Whether you are new to CrossFit or have experience and are new to Oddity this is the place to start.'></meta>
        {/* <link href="https://fonts.googleapis.com/css2?family=Oswald&family=Roboto&display=optional" rel="stylesheet" /> */}
      </Head>
      <Wrapper>
        <Main>
            <HeroSection />
            <OurProgramsSection />
            <BelowTheFold>
                <OurMissionSection>
                  <h2>
                    Our Mission at CrossFit Oddity
                  </h2>
                  <p>
                  Our Mission:  Take “ordinary people and give them extraordinary results”.  By focusing all of our energy, effort and finances  on our mission, the result is an amazing gym, talented Coaches and a fantastic, welcoming community of members exceeding their fitness goals.
                  </p>
                </OurMissionSection>
              <MoreInfoWrapper>
                <MembershipsSection />
                <CTASection />
              </MoreInfoWrapper>
            </BelowTheFold>
            <WayBelowTheFold>
              <HelpfulInfoWrapper>
                <OurGymSection />
                <GettingStartedSection />
              </HelpfulInfoWrapper>
            </WayBelowTheFold>
        </Main>
      </Wrapper>
    </React.Fragment>
  )
}

export default Home
