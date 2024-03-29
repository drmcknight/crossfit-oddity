import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import styled from 'styled-components';
import { Header, Wrapper } from '../components'
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
const CategoryHeader = styled.h2`
    flex-basis: 100%;
    text-align: center;
`;
const TwoColumnItem = styled.summary`
    flex-basis: 50%;
    text-align: center;
    @media (max-width: 768px) {
      flex-basis: 100%;
    }
`;

const ThreeColumnItem = styled.summary`
    flex-basis: 33%;
    text-align: center;
    @media (max-width: 768px) {
      flex-basis: 100%;
    }
`;

const ItemHeader = styled.div`
    background-color: lightgray;
    color: white;
    font-size: 26px;
    padding: 10px;

`;
const ItemPrice = styled.div`
  font-size: 70px;
  color: #7cda24;
  border: 1px solid lightgray; 
`;
const ItemDetails = styled.div`
  text-align: left;
  color: black;
  font-size: 20px;
`;

const Memberships: NextPage = () => {

  return (
    <React.Fragment>
       <Head>
       <title>Memberships - CrossFit Oddity - Madison, AL</title>
        <meta name="description" content='We offer several membership options regardless of whether or not you are just dropping in or are looking for a new gym home.'></meta>
        <link href="https://fonts.googleapis.com/css2?family=Oswald&family=Roboto&display=optional" rel="stylesheet" />
      </Head>
      <Wrapper>
        <Header isHomepage={false} />
        <Main>
            <PageHeader>Memberships</PageHeader>
            <p style={{padding:'15px'}}>We are proud to offer a 10% discount on all rates to Military, First Responders, teachers and students – with ID</p>
            <Category>
              <CategoryHeader>Monthly Memberships</CategoryHeader>
              <TwoColumnItem>
                <ItemHeader>Unlimited</ItemHeader>
                <ItemPrice>
                  $150
                  <ItemDetails>
                    <ul>
                      <li>No limit to attendance</li>
                      <li>Attend all the classes you want when you want</li>
                      <li>Workout Planning included</li>
                      <li>No Contract or initiation fees</li>
                    </ul>
                  </ItemDetails>
                </ItemPrice>
              </TwoColumnItem>
              <TwoColumnItem>
                <ItemHeader>3 Days/Week</ItemHeader>
                <ItemPrice>
                  $135
                  <ItemDetails>
                    <ul>
                      <li>Attend 3 classes a week</li>
                      <li>Attend whichever time slot you want</li>
                      <li>Workout Planning Included</li>
                      <li>No Contract or initiation fees</li>
                    </ul>
                  </ItemDetails>
                </ItemPrice>
              </TwoColumnItem>
            </Category>
            <Category>
              <CategoryHeader>Passes and Drop-in</CategoryHeader>
              <ThreeColumnItem>
                <ItemHeader>10 Class Punch Card</ItemHeader>
                <ItemPrice>
                  $140
                  <ItemDetails>
                    <ul>
                      <li>Pick your class and attendance frequency</li>
                      <li>No contracts</li>
                      <li>Flexible</li>
                      <li>No Initiation Fee</li>
                      <li>Doesn’t expire</li>
                      <li>Workout Planning included</li>
                    </ul>
                  </ItemDetails>
                </ItemPrice>
              </ThreeColumnItem>
              <ThreeColumnItem>
                <ItemHeader>1-Week Pass</ItemHeader>
                <ItemPrice>
                  $80
                  <ItemDetails>
                    <ul>
                      <li>One week unlimited access</li>
                      <li>Great if you're here for a short time. Better deal than drop in rate.</li>
                    </ul>
                  </ItemDetails>
                </ItemPrice>
              </ThreeColumnItem>
              <ThreeColumnItem>
                <ItemHeader>Drop-in</ItemHeader>
                <ItemPrice>
                  $20
                  <ItemDetails>
                    <ul>
                      <li>One day workout for visitors.</li>
                    </ul>
                  </ItemDetails>
                </ItemPrice>
                
              </ThreeColumnItem>
            </Category>
            <p style={{padding:'15px'}}>If you're new to CrossFit you must take a Foundations Class to ensure you are at the right starting point before going to regular workouts. At a minimum it is 3 1-hour session with a coach.  Cost is $105. If needed, each additional class is $35.</p>
            <CTAFullWidth />
        </Main>
      </Wrapper>
    </React.Fragment>
  )
}

export default Memberships
