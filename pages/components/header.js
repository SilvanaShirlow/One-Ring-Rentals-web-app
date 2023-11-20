import React from 'react';
import Link from 'next/link';


const header = () => {
  return (
    <header id="header">
      <div id="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <ul id="top-buttons">
                <li>
                  <Link href="#">
                    <i className="fa fa-sign-in" /> Login
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fa fa-pencil-square-o" /> Register
                  </Link>
                </li>
                <li className="divider" />
                <li>
                  <div className="language-switcher">
                    <span>
                      <i className="fa fa-globe" /> English
                    </span>
                    <ul>
                      <li>
                        <Link href="#">Deutsch</Link>
                      </li>
                      <li>
                        <Link href="#">Español</Link>
                      </li>
                      <li>
                        <Link href="#">Français</Link>
                      </li>
                      <li>
                        <Link href="#">Português</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* BOOTSTRAP SEARCH BEGINS

								<li>
								<form id="site-search">
									<span><i class="fa fa-search"></i></span>
									<input type="text" name="q" placeholder="Search">
								</form>	
								</li> 

								BOOTSTRAP SEARCH ENDS */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="nav-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <Link href="index.html" className="nav-logo">
                <img src="images/logo.png" alt="One Ring Rentals" />
              </Link>
              {/* BEGIN SEARCH */}
              <div id="sb-search" className="sb-search">
                <form>
                  <input
                    className="sb-search-input"
                    placeholder="Search..."
                    type="text"
                    defaultValue=""
                    name="search"
                    id="search"
                  />
                  <input
                    className="sb-search-submit"
                    type="submit"
                    defaultValue=""
                  />
                  <i className="fa fa-search sb-icon-search" />
                </form>
              </div>
              {/* END SEARCH */}
              {/* BEGIN MAIN MENU */}
              <nav className="navbar">
                <button id="nav-mobile-btn">
                  <i className="fa fa-bars" />
                </button>
                <ul className="nav navbar-nav">
                  <li>
                    <Link href="/article">Find a Rental</Link>
                  </li>
                  <li>
                    <Link href="#">List your rental</Link>
                  </li>
                  <li>
                    <Link href="#">Regions</Link>
                  </li>
                  <li>
                    <Link href="#">Travel Guides</Link>
                  </li>
                  <li>
                    <Link href="#">About Us</Link>
                  </li>
                  <li>
                    <Link href="/Regions">Regions</Link>
                  </li>
                </ul>
              </nav>
              {/* END MAIN MENU */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default header;