import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { Header, Wrapper } from '../components'

const Home: NextPage = () => {

  return (
    <React.Fragment>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=optional" rel="stylesheet" />
      </Head>
      <Wrapper>
        <Header />
      </Wrapper>
    </React.Fragment>
  )
}

export default Home
