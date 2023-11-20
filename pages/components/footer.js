import React from 'react';
import Link from 'next/link';
import Script from 'next/script';

const footer = () => {
  return (
    <footer id="footer">
      <div id="footer-top" className="container">
        <div className="row">
          <div className="block col-sm-3">
            <a href="#">
              <img src="images/logo.png" alt="One Ring Rentals" />
            </a>
            <br />
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              commodo eros nibh, et dictum elit tincidunt eget. Pellentesque
              volutpat quam dignissim, convallis elit id, efficitur sem. Vivamus
              ac scelerisque sem. Aliquam sed enim rutrum nibh gravida
              pellentesque nec at metus.
            </p>
          </div>
          <div className="block col-sm-3">
            <h3>Helpful Links</h3>
            <ul className="footer-links">
              <li>
                <a href="#">All rentals</a>
              </li>
              <li>
                <a href="#">List your rental</a>
              </li>
              <li>
                <a href="#">Read our FAQs</a>
              </li>
            </ul>
          </div>
          <div className="block col-sm-6">
            <h3>Popular regions</h3>
            <div className="row">
              <div className="col-sm-6">
                <ul className="footer-listings">
                  <li>
                    <div className="image">
                      <a href="properties-detail.html">
                        <img src="http://placehold.it/760x670" alt="" />
                      </a>
                    </div>
                    <p>
                      <a href="properties-detail.html">Rhovanion</a>
                    </p>
                  </li>
                  <li>
                    <div className="image">
                      <a href="properties-detail.html">
                        <img src="http://placehold.it/760x670" alt="" />
                      </a>
                    </div>
                    <p>
                      <a href="properties-detail.html">Eriador</a>
                    </p>
                  </li>
                  <li>
                    <div className="image">
                      <a href="properties-detail.html">
                        <img src="http://placehold.it/760x670" alt="" />
                      </a>
                    </div>
                    <p>
                      <a href="properties-detail.html">Bay of Belfalas</a>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6">
                <ul className="footer-listings">
                  <li>
                    <div className="image">
                      <a href="properties-detail.html">
                        <img src="http://placehold.it/760x670" alt="" />
                      </a>
                    </div>
                    <p>
                      <a href="properties-detail.html">Mordor</a>
                    </p>
                  </li>
                  <li>
                    <div className="image">
                      <a href="properties-detail.html">
                        <img src="http://placehold.it/760x670" alt="" />
                      </a>
                    </div>
                    <p>
                      <a href="properties-detail.html">Arnor</a>
                    </p>
                  </li>
                  <li>
                    <div className="image">
                      <a href="properties-detail.html">
                        <img src="http://placehold.it/760x670" alt="" />
                      </a>
                    </div>
                    <p>
                      <a href="properties-detail.html">Forlindon</a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BEGIN COPYRIGHT */}
      <div id="copyright">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              © 2014 One Ring Rentals
              {/* BEGIN SOCIAL NETWORKS */}
              <ul className="social-networks">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-google" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-pinterest" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-youtube" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-rss" />
                  </a>
                </li>
              </ul>
              {/* END SOCIAL NETWORKS */}
            </div>
          </div>
        </div>
      </div>
      {/* END COPYRIGHT */}
      <Script
        src="./js/common.js"  strategy="lazyOnload"  onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <Script
        src="./js/scripts.js"  strategy="lazyOnload"  onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <Script
        src="./js/common/chosen.min.js"  strategy="lazyOnload"  onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      
      {/* <Script
        src="./js/common/bootstrap.min.js"  strategy="lazyOnload"  onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        } 
      /> */}

      <Script
        /* src="./js/common/bootstrap-datepicker.js"  strategy="lazyOnload"  onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        } */
      />

      <Script
        src="./js/common/chosen.min.js"  strategy="lazyOnload"  onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />    
        <Script
        src="./js/variables.js"  strategy="lazyOnload"  onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />    
       
       <Script
        src="./js/common/bootstrap-checkbox.js"  strategy="lazyOnload"  onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />

      <Script
        /* src="./js/common/nice-scroll.js"  strategy="lazyOnload"  onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        } */
      />
      <Script
        /* src="./js/common/waypoints-sticky.min.js"  strategy="lazyOnload"  onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        } */
      />
      <Script
        /* src="./js/common/waypoints.min.js"  strategy="lazyOnload"  onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        } */
      />
      <Script
        src="./js/common/jquery-1.11.1.min.js"  strategy="lazyOnload"  onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <Script
       /*  src="./js/chosen.jquery.min.js"  strategy="lazyOnload"  onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        } */
      />

      <Script
        /* src="./js/common/jquery-browser.js"  strategy="lazyOnload"  onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        } */
      />
    </footer>
  );
}

export default footer;