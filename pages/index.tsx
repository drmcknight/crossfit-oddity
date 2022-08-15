import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import styled from 'styled-components';
import { CTASection, GettingStartedSection, Header, HeroSection, LocationSection, MembershipsSection, OurProgramsSection, Wrapper } from '../components'

const Main = styled.main`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    padding 0;
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
        <link href="https://fonts.googleapis.com/css2?family=Oswald&family=Roboto&display=optional" rel="stylesheet" />
      </Head>
      <Wrapper>
        <Header />
        <Main>
            <HeroSection />
            <OurProgramsSection />
            <MembershipsSection />
            <CTASection />
            <GettingStartedSection />
            <LocationSection />
        </Main>
      </Wrapper>
    </React.Fragment>
  )
}

export default Home
