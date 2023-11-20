import React from 'react';
//import 'next/head';
import '../styles/Home.module.css';
import Link from 'next/link';

import Header from './components/header';
import Footer from './components/footer';

const article = () => {
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
              <a href="#">Home </a>
            </li>
            <li>
              <a href="#">Travel Guides</a>
            </li>
            <li>
              <a href="#">Travel Guide Article</a>
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
          <h1 className="blog-title">
            How to get your dream property for the best price?
          </h1>
          <div className="blog-main-image">
            <img src="http://placehold.it/765x362" alt="" />
            <div className="tag">
              <i className="fa fa-file-text" />
            </div>
          </div>
          <div className="blog-bottom-info">
            <ul>
              <li>
                <i className="fa fa-calendar" /> July 30, 2014
              </li>
              <li>
                <i className="fa fa-comments-o" /> 3 Comments
              </li>
              <li>
                <i className="fa fa-tags" /> Properties, Prices, best deals
              </li>
            </ul>
            <div id="post-author">
              <i className="fa fa-pencil" /> By John Doe
            </div>
          </div>
          <div className="post-content">
            <div className="highlight-bold">
              Phasellus suscipit aliquam nisl et porttitor. Suspendisse potenti.
              Fusce libero velit, tristique eu mauris vitae, convallis facilisis
              sapien. Mauris urna diam, fringilla sit amet eleifend id, commodo
              ac lorem. Curabitur at erat justo.
            </div>
            <div className="divider" />
            <p>
              Curabitur dapibus hendrerit dui, vel sagittis lectus laoreet et.
              Cras vitae purus dictum, fringilla urna sit amet, elementum leo.
              Etiam blandit enim eu arcu blandit sagittis. Aliquam ligula mi,
              luctus ut est non, hendrerit scelerisque eros. Integer a velit
              massa. Pellentesque eu convallis purus, nec elementum neque. Donec
              arcu elit, venenatis nec mauris convallis, suscipit elementum
              metus. Vivamus dictum turpis in venenatis auctor.
            </p>
            <img src="http://placehold.it/270x335" alt="" className="right" />
            <p>
              Vestibulum rhoncus consequat aliquet. Mauris varius posuere
              mattis. Duis vitae molestie arcu. Curabitur sollicitudin, velit ut
              eleifend auctor, nibh orci pharetra risus, a malesuada nisi felis
              vel turpis. Aliquam fermentum nulla felis, sed molestie libero
              porttitor in.
            </p>
            <p>
              Quisque ut dictum justo. Vestibulum lacinia arcu ac dui volutpat
              consectetur. Nulla dui mauris, consequat non aliquet vitae,
              volutpat at nunc. Sed eget hendrerit odio. Donec sagittis
              venenatis est ac fringilla.
            </p>
            <p>
              Phasellus suscipit aliquam nisl et porttitor. Suspendisse potenti.
              Fusce libero velit, tristique eu mauris vitae, convallis facilisis
              sapien. Mauris urna diam, fringilla sit amet eleifend id, commodo
              ac lorem. Curabitur at erat justo. Morbi tincidunt, nisi in
              hendrerit adipiscing, lacus orci pellentesque orci, ac tempus
              purus libero in lectus.
            </p>
            <div className="divider" />
            <div className="highlight-color">
              Donec suscipit, sapien quis vehicula dictum, massa odio posuere
              nisl, consectetur viverra purus dui vel elit.
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse facilisis purus sed justo egestas dapibus. Etiam vel
              sagittis nisi. Curabitur ac egestas lorem. Sed ut odio iaculis,
              interdum magna non, mattis dolor. Vestibulum id dignissim elit.
              Cras ut scelerisque dolor. Vestibulum aliquet eu purus quis
              pellentesque. Nam eget lacus dolor.{" "}
            </p>
            <p className="quote">
              Vivamus suscipit <span>magna eu</span> turpis facilisis ornare.
              Aliquam ac ipsum dui. Nulla tincidunt orci nec elit dictum euismod
              ut lectus <span>ultricies mollis</span> pellentesque.
            </p>
            <p>
              Phasellus pulvinar purus turpis, a consequat orci pellentesque
              vitae. Donec suscipit, sapien quis vehicula dictum, massa odio
              posuere nisl, consectetur viverra purus dui vel elit. Fusce tempor
              ante in metus egestas egestas.
            </p>
            <p>
              Sed in mauris consectetur lectus ultricies mollis. Nulla at
              vulputate mi. Phasellus mauris augue, sollicitudin nec ornare
              congue, posuere eget nulla. Vestibulum pulvinar mauris ut magna
              interdum lacinia. Nam eu viverra urna. Quisque turpis massa,
              gravida ut faucibus nec, faucibus non turpis. Mauris facilisis et
              est a mollis. Mauris non sagittis risus
            </p>
          </div>
          <div className="share-wraper col-sm-12 clearfix">
            <h5>Share this Post:</h5>
            <ul className="social-networks">
              <li>
                <a
                  target="_blank"
                  href="http://www.facebook.com/sharer.php?s=100&p%5Burl%5D=http%3A%2F%2Fwww.wiselythemes.com%2Fhtml%2Fcozy%2Fblog-detail.html%3Ffb%3Dtrue&p%5Bimages%5D%5B0%5D=http%3A%2F%2Fwww.wiselythemes.com%2Fhtml%2Fcozy%2Fimages%2Fnews-img1.jpg&p%5Btitle%5D=Cozy%20Blog%20Post"
                >
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://twitter.com/intent/tweet?url=http://www.wiselythemes.com/html/cozy/blog-detail.html&text=Cozy%20Blog%20Post"
                >
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://plus.google.com/share?url=http://www.wiselythemes.com/html/cozy/blog-detail.html"
                >
                  <i className="fa fa-google" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="http://pinterest.com/pin/create/button/?url=http://www.wiselythemes.com/html/cozy/blog-detail.html&description=Cozy%20Blog%20Post&media=http%3A%2F%2Fwww.wiselythemes.com%2Fhtml%2Fcozy%2Fimages%2Fnews-img1.jpg"
                >
                  <i className="fa fa-pinterest" />
                </a>
              </li>
              <li>
                <a href="mailto:?subject=Check%20out%20this%20blog%20post%20from%20Cozy%20Real%20Estate!&body=http://www.wiselythemes.com/html/cozy/blog-detail.html">
                  <i className="fa fa-envelope" />
                </a>
              </li>
            </ul>
            <a className="print-button" href="javascript:window.print();">
              <i className="fa fa-print" />
            </a>
          </div>
          <h1 className="section-title">Comments</h1>
          <div className="comments">
            <ul>
              <li>
                <img src="images/comment-man.jpg" alt="" />
                <div className="comment">
                  <a href="#" className="btn btn-default-color">
                    Reply
                  </a>
                  <h3>
                    John Doe<small>30 July, 2014</small>
                  </h3>
                  <p>
                    Etiam eget felis lacus. In hendrerit, urna in fringilla
                    interdum, nunc mauris condimentum purus, vel ullamcorper dui
                    risus sed tellus. Nullam lacinia porttitor velit fermentum
                    accumsan. Etiam dui lorem, lobortis pellentesque malesuada
                    nec, lacinia pulvinar libero.
                  </p>
                </div>
                <ul>
                  <li>
                    <img src="images/comment-man.jpg" alt="" />
                    <div className="comment">
                      <a href="#" className="btn btn-default-color">
                        Reply
                      </a>
                      <h3>
                        John Doe<small>30 July, 2014</small>
                      </h3>
                      <p>
                        In hendrerit, urna in fringilla interdum, nunc mauris
                        condimentum purus, vel ullamcorper dui risus sed tellus.
                        Nullam lacinia porttitor velit fermentum accumsan. Etiam
                        dui lorem, lobortis pellentesque malesuada nec, lacinia
                        pulvinar libero.
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <img src="images/comment-woman.jpg" alt="" />
                <div className="comment">
                  <a href="#" className="btn btn-default-color">
                    Reply
                  </a>
                  <h3>
                    Mary Doe<small>31 July, 2014</small>
                  </h3>
                  <p>
                    Etiam eget felis lacus. In hendrerit, urna in fringilla
                    interdum, nunc mauris condimentum purus, vel ullamcorper dui
                    risus sed tellus. Nullam lacinia porttitor velit fermentum
                    accumsan. Etiam dui lorem, lobortis pellentesque malesuada
                    nec, lacinia pulvinar libero. Quisque pretium nunc sed nisl
                    vehicula gravida. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                  </p>
                </div>
              </li>
            </ul>
            <div className="comments-form">
              <div className="col-sm-12">
                <h3>Leave a Reply</h3>
                <p>
                  Your email address will no be published. Required fields are
                  marked*
                </p>
              </div>
              <form className="form-style">
                <div className="col-sm-6">
                  <input
                    type="text"
                    name="Name"
                    placeholder="Name*"
                    className="form-control"
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    type="email"
                    name="Email"
                    placeholder="Email*"
                    className="form-control"
                  />
                </div>
                <div className="col-sm-12">
                  <textarea
                    name="Comment"
                    placeholder="Comment*"
                    className="form-control"
                    defaultValue={""}
                  />
                </div>
                <div className="center">
                  <button
                    type="submit"
                    className="btn btn-default-color btn-lg"
                  >
                    Post Comment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* END MAIN CONTENT */}
        {/* BEGIN SIDEBAR */}
        <div className="sidebar gray col-sm-4">
          <h2 className="section-title">Categories</h2>
          <ul className="categories">
            <li>
              <a href="#">
                Business <span>(2)</span>
              </a>
            </li>
            <li>
              <a href="#">
                Commercial <span>(1)</span>
              </a>
            </li>
            <li>
              <a href="#">
                Land <span>(3)</span>
              </a>
            </li>
            <li>
              <a href="#">
                Loans <span>(2)</span>
              </a>
            </li>
            <li>
              <a href="#">
                News and Updates <span>(6)</span>
              </a>
            </li>
            <li>
              <a href="#">
                Properties for Sale <span>(1)</span>
              </a>
            </li>
            <li>
              <a href="#">
                Real Estate <span>(1)</span>
              </a>
            </li>
          </ul>
          {/* BEGIN ARCHIVES ACCORDION */}
          <h2 className="section-title">Archives</h2>
          <div id="accordion" className="panel-group blog-accordion">
            <div className="panel">
              <div className="panel-heading">
                <div className="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseOne"
                    className=""
                  >
                    <i className="fa fa-chevron-right" /> 2014 (15)
                  </a>
                </div>
              </div>
              <div id="collapseOne" className="panel-collapse collapse in">
                <div className="panel-body">
                  <ul>
                    <li>
                      <a href="#">July (3)</a>
                    </li>
                    <li>
                      <a href="#">June (4)</a>
                    </li>
                    <li>
                      <a href="#">May (1)</a>
                    </li>
                    <li>
                      <a href="#">April (2)</a>
                    </li>
                    <li>
                      <a href="#">March (3)</a>
                    </li>
                    <li>
                      <a href="#">February (1)</a>
                    </li>
                    <li>
                      <a href="#">January (1)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="panel">
              <div className="panel-heading">
                <div className="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseTwo"
                    className="collapsed"
                  >
                    <i className="fa fa-chevron-right" /> 2013 (6)
                  </a>
                </div>
              </div>
              <div id="collapseTwo" className="panel-collapse collapse">
                <div className="panel-body">
                  <ul>
                    <li>
                      <a href="#">May (1)</a>
                    </li>
                    <li>
                      <a href="#">April (2)</a>
                    </li>
                    <li>
                      <a href="#">March (1)</a>
                    </li>
                    <li>
                      <a href="#">February (2)</a>
                    </li>
                    <li>
                      <a href="#">January (1)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="panel">
              <div className="panel-heading">
                <div className="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseThree"
                    className="collapsed"
                  >
                    <i className="fa fa-chevron-right" /> 2012 (5)
                  </a>
                </div>
              </div>
              <div id="collapseThree" className="panel-collapse collapse">
                <div className="panel-body">
                  <ul>
                    <li>
                      <a href="#">April (1)</a>
                    </li>
                    <li>
                      <a href="#">March (1)</a>
                    </li>
                    <li>
                      <a href="#">February (2)</a>
                    </li>
                    <li>
                      <a href="#">January (1)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* END  ARCHIVES ACCORDION */}
          {/* BEGIN TAGS */}
          <h2 className="section-title">Tags</h2>
          <ul className="tags col-sm-12">
            <li>
              <a href="#">Apartments</a>
            </li>
            <li>
              <a href="#">Residential</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Real estate</a>
            </li>
            <li>
              <a href="#">Land</a>
            </li>
            <li>
              <a href="#">Business</a>
            </li>
            <li>
              <a href="#">Villas</a>
            </li>
            <li>
              <a href="#">Loans</a>
            </li>
            <li>
              <a href="#">Commercial</a>
            </li>
            <li>
              <a href="#">Rent</a>
            </li>
          </ul>
          {/* BEGIN TAGS */}
          {/* BEGIN LATEST NEWS */}
          <h2 className="section-title">Latest News</h2>
          <ul className="latest-news">
            <li className="col-md-12">
              <div className="image">
                <a href="blog-detail.html" />
                <img src="http://placehold.it/100x100" alt="" />
              </div>
              <ul className="top-info">
                <li>
                  <i className="fa fa-calendar" /> July 30, 2014
                </li>
              </ul>
              <h3>
                <a href="blog-detail.html">
                  How to get your dream property for the best price?
                </a>
              </h3>
            </li>
            <li className="col-md-12">
              <div className="image">
                <a href="blog-detail.html" />
                <img src="http://placehold.it/100x100" alt="" />
              </div>
              <ul className="top-info">
                <li>
                  <i className="fa fa-calendar" /> July 24, 2014
                </li>
              </ul>
              <h3>
                <a href="blog-detail.html">7 tips to get the best mortgage.</a>
              </h3>
            </li>
            <li className="col-md-12">
              <div className="image">
                <a href="blog-detail.html" />
                <img src="http://placehold.it/100x100" alt="" />
              </div>
              <ul className="top-info">
                <li>
                  <i className="fa fa-calendar" /> July 05, 2014
                </li>
              </ul>
              <h3>
                <a href="blog-detail.html">
                  House, location or price: What's the most important factor?
                </a>
              </h3>
            </li>
          </ul>
          {/* END LATEST NEWS */}
        </div>
        {/* END SIDEBAR */}
      </div>
    </div>
  </div>
{/* IMPORT FOOTER COMPONENT HERE FROM COMPONENTS/FOOTER.JS */}
<div>
    <Footer />
</div>

</>
  );
}

export default article
