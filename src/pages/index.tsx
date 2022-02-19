import Head from "next/head";
import React from "react";
import Landing from "./Landing";
import Footer from "../props/Footer";
import Header from "../props/Header";

export default function Home() {

  return (
    <div className="dark:bg-black scroll-smooth w-full h-full transition-colors duration-500">
      <Head>
        <title>Crypto COXY</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/> 
      <Landing/>
     {/*  <Footer/> */}
    </div>
  );
}
