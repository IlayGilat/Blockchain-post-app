import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import React,{useState,useEffect} from "react";
import {MyProvider} from '../Context/MyContext'
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
    <ChakraProvider>
      <MyProvider>
            <Component {...pageProps} />
      </MyProvider>
    </ChakraProvider>
  );
}}

export default MyApp;
