import React from 'react'
import Box from '@/components/Box'
import Navbar from '@/components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import './globals.css'
import { About, Home } from '@/screens';

const Index = () => {
  return (
    <>
      <Head>
        <title>Portfólio</title>
        <meta name="description" content="Portfólio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Quicksand:wght@300..700&display=swap" rel="stylesheet"></link>
      </Head>
      <Box tag='main'>
        <Navbar />
        <Home />
        <About />
      </Box>
      </>
  )
}

export default Index