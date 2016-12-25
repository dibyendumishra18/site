// Packages
import React from 'react'
import Head from 'next/head'

// Components
import Links from '../components/links'
import Naming from '../components/naming'

export default () => (
  <div>
    <Head>
      <title>Leo Lamprecht</title>

      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
      <meta name="description" content="A teenagers view on web development and intuitive UI design."/>

      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:creator" content="@lmprht"/>
      <meta name="twitter:title" content="Leo Lamprecht"/>
      <meta name="twitter:description" content="About a teenager who likes writing code."/>
      <meta name="twitter:image" content="https://leo.im/assets/touch-icon.png"/>

      <link rel="mask-icon" href="https://leo.im/assets/flash.svg" color="#000000"/>
      <link rel="apple-touch-icon" href="/static/images/touch-icon.png"/>
      <link rel="icon" href="/static/images/touch-icon.png" type="image/png"/>

      <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Cardo&text=Just%20call%20me%20Leo"/>
      <link rel="stylesheet" href="/static/styles/main.css"/>
    </Head>

    <Naming/>
    <Links/>
  </div>
)
