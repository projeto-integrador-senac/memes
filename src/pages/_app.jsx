import React from 'react';
import '../styles/globals.css'
import Head from "next/head";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;


function MyApp({ Component, pageProps }) {
  return ( 
  <>
  <Head>
      <link rel="icon" href="/images/3eacerta.ico" />
  </Head>
  <Component {...pageProps} />
  </> 
  )
}

export default MyApp
