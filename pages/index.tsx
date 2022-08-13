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
