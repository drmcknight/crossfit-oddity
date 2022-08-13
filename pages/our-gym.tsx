import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import styled from 'styled-components';
import { Header, Wrapper } from '../components'

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

const Memberships: NextPage = () => {

  return (
    <React.Fragment>
       <Head>
        <link href="https://fonts.googleapis.com/css2?family=Oswald&family=Roboto&display=optional" rel="stylesheet" />
      </Head>
      <Wrapper>
        <Header />
        <Main>
            <PageHeader>Our Gym</PageHeader>
            <Category>
              <ThreeColumnItem>
                <ItemHeader>Community</ItemHeader>
                <ItemDetails>
                  Our community is incredibly welcoming and supportive – always willing to offer advice, coaching and encouragement. We also participate in community events such as Wod for Water.
                </ItemDetails>
              </ThreeColumnItem>
              <ThreeColumnItem>
                <ItemHeader>Classes</ItemHeader>
                <ItemDetails>
                  All classes are coach led and we offer a flexible schedule for our clients. We also educate our clients with nutrition workshops, mobility clinics, and challenges.
                </ItemDetails>
              </ThreeColumnItem>
              <ThreeColumnItem>
                <ItemHeader>Programming</ItemHeader>
                <ItemDetails>
                We all have different goals and we understand this at Oddity. We will individualize workouts to meet these needs and do this in a group setting.
                </ItemDetails>
              </ThreeColumnItem>
            </Category>
        </Main>
      </Wrapper>
    </React.Fragment>
  )
}

export default Memberships
