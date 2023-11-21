"use client";
import React from 'react';
//import Head from 'next/head';
//import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Head, Main, NextScript } from 'next/document';
import Header from './components/header';
import Footer from './components/footer';


const RootLayout = ({ children }) => {
  
    useEffect(() => {
      // An array of script URLs to load sequentially
      const scriptSources = [
        '/js/scripts.js',
        '/js/variables.js',
        //'/js/common/bootstrap.min.js',
        //'/js/common/chosen.min.js',
        '/js/common/modernizr.js',
        '/js/common.js',
        //'/js/common/waypoints.min.js',
        //'/js/common/waypoints-sticky.min.js',
        '/js/common/bootstrap-datepicker.js',
        '/js/common/bootstrap-checkbox.js',
        //'/js/common/nice-scroll.js',
        'js/common/jquery-1.11.1.min.js',
        //'/js/common/jquery-browser.js',
        //'/js/common/jquery-1.11.1.min.js',
        //'/js/chosen.jquery.min.js',
        
      ];
  
      // Function to load scripts sequentially
      const loadScript = (index) => {
        if (index < scriptSources.length) {
          const script = document.createElement('script');
          script.src = scriptSources[index];
          script.onload = () => {
            loadScript(index + 1);
          };
          document.body.appendChild(script);
        }
      };
  
      // Start loading the scripts
      loadScript(0);
    }, []);
  
    
     return (
       <Html lang="en">
          <Head>
            <title>One Ring Rentals</title>
            <meta property="og:title" content="My page title" key="title" />
          </Head> 
        <body>
          <div id="wrapper">
            <Header />
            {children}
            <Footer />
          </div>
        </body>
      // </Html>
  );
  }
  
  export default RootLayout;
  
   
