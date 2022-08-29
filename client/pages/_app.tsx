import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import React,{useState,useEffect} from "react";
import {MyProvider} from '../Context/MyContext'
import Head from "next/head";
function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  if (typeof window === 'undefined') {
    return <></>;
  } else {
  return (
    <div>
 <Head>
        <title>Blockchain Post</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <ChakraProvider>
      <MyProvider>
        
            <Component {...pageProps} />
      </MyProvider>
    </ChakraProvider>
    </div>
  );
}}

export default MyApp;
