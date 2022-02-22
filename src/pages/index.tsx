import Head from "next/head";
import React from "react";
import Landing from "./Landing";

import Header from "../props/Header";
import CustomCursor from "../components/index"

export default function Home() {

  return (
    <div className=" cursor-none dark:bg-black scroll-smooth w-full h-full transition-colors duration-500">
      <Head>
        <title>Crypto COXY</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomCursor/>
      <Header/> 
      
      <Landing/>
     
    </div>
  );
}
