import React from 'react';
import 'next/link';
import '../layout';

import Header from '../components/header';
import Footer from '../components/footer';


const regions = () => {
  return (
        <>
{/* IMPORT HEADER COMPONENT HERE FROM COMPONENTS/HEADER.JS */}
    <div>
      <Header />
    </div> 
    <div
    className="parallax colored-bg pattern-bg"
    data-stellar-background-ratio="0.5"
  >
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h1 className="page-title">Blog Detail</h1>
          <ul className="breadcrumb">
            <li>
              <a href="/">Home </a>
            </li>
            <li>
              <a href="#">Travel Guides</a>
            </li>
            <li>
              <a href="#">Regions</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* END PAGE TITLE/BREADCRUMB */}

  {/* BEGIN CONTENT WRAPPER */}
  <div className="content">
    <div className="container">
      <div className="row">
        {/* BEGIN MAIN CONTENT */}
        <div className="main col-sm-8">
          {/* BEGIN BLOG LISTING */}
          <div className="grid-style1 clearfix">
            <div className="item col-md-12">
              {/* Set width to 4 columns for grid view mode only */}
              <div className="image image-large">
                <a href="#">
                  <span className="btn btn-default">
                    <i className="fa fa-file-o" /> Read More
                  </span>
                </a>
                <img src="http://placehold.it/720x255" alt="" />
              </div>
              <div className="info-blog">
                <h3>
                  <a href="#">The Northeast</a>
                </h3>
                <p>
                  Sed rutrum urna id tellus euismod gravida. Praesent placerat,
                  mauris ac pellentesque fringilla, tortor libero condimen.
                  Aliquam fermem tum nulla felis, sed molestie libero porttitor
                  in.
                </p>
              </div>
            </div>
            <div className="item col-md-12">
              {/* Set width to 4 columns for grid view mode only */}
              <div className="image image-large">
                <a href="#">
                  <span className="btn btn-default">
                    <i className="fa fa-file-o" /> Read More
                  </span>
                </a>
                <img src="http://placehold.it/720x255" alt="" />
              </div>
              <div className="info-blog">
                <h3>
                  <a href="#">The Northwest</a>
                </h3>
                <p>
                  Sed rutrum urna id tellus euismod gravida. Praesent placerat,
                  mauris ac pellentesque fringilla, tortor libero condimen.
                  Aliquam fermem tum nulla felis, sed molestie libero porttitor
                  in.
                </p>
              </div>
            </div>
            <div className="item col-md-12">
              {/* Set width to 4 columns for grid view mode only */}
              <div className="image image-large">
                <a href="#">
                  <span className="btn btn-default">
                    <i className="fa fa-file-o" /> Read More
                  </span>
                </a>
                <img src="http://placehold.it/720x255" alt="" />
              </div>
              <div className="info-blog">
                <h3>
                  <a href="#">The Southeast</a>
                </h3>
                <p>
                  Sed rutrum urna id tellus euismod gravida. Praesent placerat,
                  mauris ac pellentesque fringilla, tortor libero condimen.
                  Aliquam fermem tum nulla felis, sed molestie libero porttitor
                  in.
                </p>
              </div>
            </div>
            <div className="item col-md-12">
              {/* Set width to 4 columns for grid view mode only */}
              <div className="image image-large">
                <a href="#">
                  <span className="btn btn-default">
                    <i className="fa fa-file-o" /> Read More
                  </span>
                </a>
                <img src="http://placehold.it/720x255" alt="" />
              </div>
              <div className="info-blog">
                <h3>
                  <a href="#">The Southwest</a>
                </h3>
                <p>
                  Sed rutrum urna id tellus euismod gravida. Praesent placerat,
                  mauris ac pellentesque fringilla, tortor libero condimen.
                  Aliquam fermem tum nulla felis, sed molestie libero porttitor
                  in.
                </p>
              </div>
            </div>
          </div>
          {/* END BLOG LISTING */}
          {/* BEGIN PAGINATION */}
          <div className="pagination">
            <ul id="previous">
              <li>
                <a href="#">
                  <i className="fa fa-chevron-left" />
                </a>
              </li>
            </ul>
            <ul>
              <li className="active">
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
            </ul>
            <ul id="next">
              <li>
                <a href="#">
                  <i className="fa fa-chevron-right" />
                </a>
              </li>
            </ul>
          </div>
          {/* END PAGINATION */}
        </div>
        {/* END MAIN CONTENT */}
        {/* BEGIN SIDEBAR */}
        <div className="sidebar gray col-sm-4">
          {/* BEGIN LATEST NEWS */}
          <h2 className="section-title">Popular articles</h2>
          <ul className="latest-news">
            <li className="col-md-12">
              <div className="image">
                <a href="blog-detail.html" />
                <img src="http://placehold.it/100x100" alt="" />
              </div>
              <ul className="top-info">
                <li>
                  <i className="fa fa-calendar" /> 30 July 2014
                </li>
              </ul>
              <h4>
                <a href="#">It's all about the Northeast</a>
              </h4>
            </li>
            <li className="col-md-12">
              <div className="image">
                <a href="blog-detail.html" />
                <img src="http://placehold.it/100x100" alt="" />
              </div>
              <ul className="top-info">
                <li>
                  <i className="fa fa-calendar" /> 20 July 2014
                </li>
              </ul>
              <h4>
                <a href="#">Southwest: Best ever</a>
              </h4>
            </li>
            <li className="col-md-12">
              <div className="image">
                <a href="blog-detail.html" />
                <img src="http://placehold.it/100x100" alt="" />
              </div>
              <ul className="top-info">
                <li>
                  <i className="fa fa-calendar" /> 10 July 2014
                </li>
              </ul>
              <h4>
                <a href="#">
                  I went to the Northwest and stole from and old lady
                </a>
              </h4>
            </li>
          </ul>
          {/* END LATEST NEWS */}
        </div>
        {/* END SIDEBAR */}
      </div>
    </div>
  </div>
  {/* END CONTENT WRAPPER */}

{/* IMPORT FOOTER COMPONENT HERE FROM COMPONENTS/FOOTER.JS */}
 <div>
    <Footer />
</div> 
</>
    );
}

export default regions
