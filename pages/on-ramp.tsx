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
    padding: 5px;
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
       <title>On Ramp - CrossFit Oddity - Madison, AL</title>
        <meta name="robots" content='noindex, nofollow'></meta>
        <link href="https://fonts.googleapis.com/css2?family=Oswald&family=Roboto&display=optional" rel="stylesheet" />
      </Head>
      <Wrapper>
        <Header isHomepage={false} />
        <Main>
            <PageHeader>On-Ramp</PageHeader>
            <p style={{padding: '15px'}}>Our Foundations class, also called the on-ramp, is three 1-on-1 sessions with a coach who will teach and demonstrate the foundational movements we use in CrossFit, as well as review your range of motion and various scales to get you moving safely. In each session, you will learn the basics of what we do in the gym and how to perform the movements to maximize safety and efficacy.</p>
            <p style={{padding: '15px'}}>The Foundations Class costs $105 for three sessions. If needed, each additional class is $35</p>
            <CTAFullWidth />
        </Main>
      </Wrapper>
    </React.Fragment>
  )
}

export default OnRamp
