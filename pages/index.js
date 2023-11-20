"use client";
import React from 'react';
import Link from 'next/link';
import Properties from './components/properties';
import Header from './components/header';
import Footer from './components/footer';
import Search from './components/search';
import './_app';
import './layout';
import './_document';


const Home = () => {
  
  return (
  
  <>
      {/* Bootstrap CSS */}
      <link href="css/bootstrap.min.css" rel="stylesheet" /> 

      {/* Template CSS */}
      <link href="css/style.css" rel="stylesheet" /> 
                {/* Modernizr */}

      <link
          href="http://fonts.googleapis.com/css?family=Raleway:300,500,900%7COpen+Sans:400,700,400italic"
          rel="stylesheet"
          type="text/css"
      />
      {/* IE6-8 support of HTML5 elements */}
      {/*[if lt IE 9]>
                    
      <![endif]*/}
      {/* Google Web Font */}           
      
      {/* BEGIN WRAPPER */}
      <div id="wrapper"> 
        {/* BEGIN HEADER */}


    {/* IMPORT HEADER COMPONENT HERE FROM COMPONENTS/HEADER.JS */}
        <div>
          <Header />
        </div>


    {/* BEGIN HOME SLIDER SECTION */}
    <div
      id="carousel-example-generic"
      className="carousel slide"
      data-ride="carousel"
      >
      {/* carousel indicators
		  <ol class="carousel-indicators">
		    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
		    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
		  </ol> */}
      {/* Wrapper for slides */}
      <div className="carousel-inner" role="listbox">
        <div
          className="item active"
          id="slide1"
          style={{
            background:
              "url(http://placehold.it/1920x605) no-repeat left center",
            backgroundSize: "cover"
          }}
        >
          {" "}
          {/* Ready for JS Injection */}
          <div className="carousel-caption">
            <div className="caption sfr slider-title">Breathtaking views</div>
            <div className="caption sfl slider-subtitle">
              Relaxation in the Bay of Belfalas
            </div>
            <Link href="#" className="caption sfb btn btn-default btn-lg">
              Learn More
            </Link>
          </div>
        </div>
        <div
          className="item"
          id="slide2"
          style={{
            background:
              "url(http://placehold.it/1920x605) no-repeat left center",
            backgroundSize: "cover"
          }}
        >
          <div className="carousel-caption">
            <div className="caption sfr slider-title">The simple life</div>
            <div className="caption sfl slider-subtitle">
              Lush gardens in Mordor
            </div>
            <Link href="#" className="caption sfb btn btn-default btn-lg">
              Learn More
            </Link>
          </div>
        </div>
      </div>
      {/* Blue Filter */}
      <div id="home-search-section" />
      {/* Controls */}
      <Link
        className="left carousel-control"
        href="#carousel-example-generic"
        role="button"
        data-slide="prev"
      >
        <span className="glyphicon glyphicon-chevron-left" />
        <span className="sr-only">Previous</span>
      </Link>
      <Link
        className="right carousel-control"
        href="#carousel-example-generic"
        role="button"
        data-slide="next"
      >
        <span className="glyphicon glyphicon-chevron-right" />
        <span className="sr-only">Next</span>
      </Link>
    </div>
    {/* END HOME SLIDER SECTION */}

          {/* IMPORT SEARCH COMPONENT HERE FROM COMPONENTS/SEARCH.JS */}
    <div>
      <Search />
    </div>

    {/* BEGIN CONTENT WRAPPER */}
    <div className="content">
      <div className="container">
        {/* <div className="row"> */}
          {/* BEGIN MAIN CONTENT */}
           
          {/* <div className="main col-sm-8"> */}

              {/* BEGIN PROPERTIES CARDS */}
          <div className="main col-sm-8"> 
                    <Properties />   
                  
           
            <div className="row"> 
              <div className="col-sm-12">
                <h3 className="section-title">Popular Regions</h3>
                <div id="regions">
                  <div className="item">
                    <Link href="#">
                      <img src="http://placehold.it/194x194" alt="" />
                      <h3>Rhovanion</h3>
                    </Link>
                  </div>
                  <div className="item">
                    <Link href="#">
                      <img src="http://placehold.it/194x194" alt="" />
                      <h3>Eriador</h3>
                    </Link>
                  </div>
                  <div className="item">
                    <Link href="#">
                      <img src="http://placehold.it/194x194" alt="" />
                      <h3>Bay of Belfalas</h3>
                    </Link>
                  </div>
                  <div className="item">
                    <Link href="#">
                      <img src="http://placehold.it/194x194" alt="" />
                      <h3>Mordor</h3>
                    </Link>
                  </div>
                  <div className="item">
                    <Link href="#">
                      <img src="http://placehold.it/194x194" alt="" />
                      <h3>The Southwest</h3>
                    </Link>
                  </div>
                  <div className="item">
                    <Link href="#">
                      <img src="http://placehold.it/194x194" alt="" />
                      <h3>Arnor</h3>
                    </Link>
                  </div>
                </div>
              </div>
            </div>  
            <h3 className="section-title">Recent Articles</h3>
            <div className="grid-style1">
              <div className="item col-md-4">
                <div className="image">
                  <Link href="#">
                    <span className="btn btn-default">
                      <i className="fa fa-file-o" /> Read More
                    </span>
                  </Link>
                  <img src="http://placehold.it/766x515" alt="" />
                </div>
                <div className="tag">
                  <i className="fa fa-file-text" />
                </div>
                <div className="info-blog">
                  <ul className="top-info">
                    <li>
                      <i className="fa fa-calendar" /> July 30, 2014
                    </li>
                    <li>
                      <i className="fa fa-comments-o" /> 2
                    </li>
                    <li>
                      <i className="fa fa-tags" /> Properties, Prices, best
                      deals
                    </li>
                  </ul>
                  <h3>
                    <Link href="#">
                      How to get your dream property for the best price?
                    </Link>
                  </h3>
                  <p>
                    Sed rutrum urna id tellus euismod gravida. Praesent
                    placerat, mauris ac pellentesque fringilla, tortor libero
                    condimen.
                  </p>
                </div>
              </div>
              <div className="item col-md-4">
                <div className="image">
                  <Link href="#">
                    <span className="btn btn-default">
                      <i className="fa fa-file-o" /> Read More
                    </span>
                  </Link>
                  <img src="http://placehold.it/766x515" alt="" />
                </div>
                <div className="tag">
                  <i className="fa fa-film" />
                </div>
                <div className="info-blog">
                  <ul className="top-info">
                    <li>
                      <i className="fa fa-calendar" /> July 24, 2014
                    </li>
                    <li>
                      <i className="fa fa-comments-o" /> 4
                    </li>
                    <li>
                      <i className="fa fa-tags" /> Tips, Mortgage
                    </li>
                  </ul>
                  <h3>
                    <Link href="#">7 tips to get the best mortgage.</Link>
                  </h3>
                  <p>
                    Sed rutrum urna id tellus euismod gravida. Praesent
                    placerat, mauris ac pellentesque fringilla, tortor libero
                    condimen.
                  </p>
                </div>
              </div>
              <div className="item col-md-4">
                <div className="image">
                  <Link href="#">
                    <span className="btn btn-default">
                      <i className="fa fa-file-o" /> Read More
                    </span>
                  </Link>
                  <img src="http://placehold.it/766x515" alt="" />
                </div>
                <div className="tag">
                  <i className="fa fa-file-text" />
                </div>
                <div className="info-blog">
                  <ul className="top-info">
                    <li>
                      <i className="fa fa-calendar" /> July 05, 2014
                    </li>
                    <li>
                      <i className="fa fa-comments-o" /> 1
                    </li>
                    <li>
                      <i className="fa fa-tags" /> Location, Price, House
                    </li>
                  </ul>
                  <h3>
                    <Link href="#">
                      House, location or price: What's the most important
                      factor?
                    </Link>
                  </h3>
                  <p>
                    Sed rutrum urna id tellus euismod gravida. Praesent
                    placerat, mauris ac pellentesque fringilla, tortor libero
                    condimen.
                  </p>
                </div>
              </div>
            </div>
            <div className="center">
              <Link href="#" className="btn btn-default-color">
                View All News
              </Link>
            </div>
          </div>
     
          {/* END MAIN CONTENT */}
          {/* BEGIN SIDEBAR */}
          <div className="sidebar col-sm-4">
            {/* BEGIN SIDEBAR ABOUT */}
            <div className="col-sm-12">
              <h3 className="section-title">Last minute deals</h3>
              <ul className="latest-news">
                <li className="col-md-12">
                  <div className="image">
                    <Link href="blog-detail.html" />
                    <img alt="" src="http://placehold.it/100x100" />
                  </div>
                  <ul className="top-info">
                    <li>
                      <i className="fa fa-calendar" />
                      Available Now
                    </li>
                  </ul>
                  <h4>
                    <Link href="blog-detail.html">Private Beach</Link>
                  </h4>
                    <p>Lossarnach, Eriado</p>
                </li>
                <li className="col-md-12">
                  <div className="image">
                    <Link href="blog-detail.html" />
                    <img alt="" src="http://placehold.it/100x100" />
                  </div>
                  <ul className="top-info">
                    <li>
                      <i className="fa fa-calendar" />
                      Available on 24 July
                    </li>
                  </ul>
                  <h4>
                    <Link href="blog-detail.html">Mountain views</Link>
                  </h4>  
                    <p>Hyarnustar, Rhovanion</p>
                </li>
                <li className="col-md-12">
                  <div className="image">
                    <Link href="blog-detail.html" />
                    <img alt="" src="http://placehold.it/100x100" />
                  </div>
                  <ul className="top-info">
                    <li>
                      <i className="fa fa-calendar" />
                      Available 5 July
                    </li>
                  </ul>
                  <h4>
                    <Link href="blog-detail.html">Heart of the village</Link>
                  </h4>  
                    <p>Minhiriath, Eriador</p>      
                </li>
                <li className="col-md-12">
                  <div className="image">
                    <Link href="blog-detail.html" />
                    <img alt="" src="http://placehold.it/100x100" />
                  </div>
                  <ul className="top-info">
                    <li>
                      <i className="fa fa-calendar" />
                      Available 6 July
                    </li>
                  </ul>
                  <h4>
                    <Link href="blog-detail.html">The city life</Link>
                  </h4>  
                    <p>West Beleriand, Mordor</p>
                </li>
              </ul>
              <p className="center">
                <Link className="btn btn-fullcolor" href="#">
                  More deals
                </Link>
              </p>
            </div>
            {/* END SIDEBAR ABOUT */}
            <div className="col-sm-12">
              <h4 className="section-title">Activity</h4>
              <ul className="activity">
                <li className="col-lg-12">
                  <Link href="#">
                    <img src="http://placehold.it/70x70" alt="" />
                  </Link>
                  <div className="info">
                    <h5>
                      Sam Minnée reviewed{" "}
                      <Link href="#">The House With No Windows</Link>
                    </h5>
                    <p>
                      Awesome solitary confinement, mate. Spot on. Sweet as.
                    </p>
                    <h6>Just now</h6>
                  </div>
                </li>
                <li className="col-lg-12">
                  <Link href="#">
                    <img src="http://placehold.it/70x70" alt="" />
                  </Link>
                  <div className="info">
                    <h5>
                      Ingo Schoomer asked a question about{" "}
                      <Link href="#">The Mistake by the Lake</Link>
                    </h5>
                    <p>Has this house been unit tested?</p>
                    <h6>37 minutes ago</h6>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* END SIDEBAR */}
        </div>
      </div>
    {/* </div> */}
    {/* END CONTENT WRAPPER */}
    {/* BEGIN FOOTER */}

    {/* IMPORT FOOTER COMPONENT HERE FROM COMPONENTS/FOOTER.JS */}
        <div>
          <Footer />
        </div>
   {/* END WRAPPER */}
 </div>
  
</>
  );
};

export default Home;

