import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import styled from 'styled-components';
import { Header, Wrapper } from '../components'
import Image from 'next/image';
import { CTAFullWidth } from '../components/ctaFullWidth';

const Main = styled.main`
    width: 75%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    padding 0;
    margin: auto;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const PageHeader = styled.h1`
    flex-basis: 100%;
`;

const Category = styled.section`
    display:flex;
    justify-content: center;
    flex-flow: row wrap;
    flex-basis: 100%;
    margin-bottom: 25px;
`;

const ThreeColumnItem = styled.summary`
    flex-basis: 33%;
    text-align: center;
    @media (max-width: 768px) {
      flex-basis: 100%;
    }
`;

const ItemHeader = styled.h2`
    font-size: 26px;
    padding: 10px;
`;

const ItemDetails = styled.div`
  text-align: left;
  padding: 5px;
`;

const CenteredItemDetails = styled.div`
  text-align: center;
  padding: 5px;
`

const OnRamp: NextPage = () => {

  return (
    <React.Fragment>
       <Head>
       <title>Schedule - CrossFit Oddity - Madison, AL</title>
        <meta name="robots" content='noindex, nofollow'></meta>
        <link href="https://fonts.googleapis.com/css2?family=Oswald&family=Roboto&display=optional" rel="stylesheet" />
      </Head>
      <Wrapper>
        <Header isHomepage={false} />
        <Main>
            <PageHeader>Schedule</PageHeader>
            <Image src="/crossfit-oddity/images/oddity-schedule.webp" height="400" width="700"></Image>
        </Main>
      </Wrapper>
    </React.Fragment>
  )
}

export default OnRamp
