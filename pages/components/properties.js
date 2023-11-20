import React from 'react';
import Link from 'next/link';

const properties = () => {
    return (

      
    <div className="row"> 
        <h1 className="section-title">Featured Properties</h1>
       
       {/* BEGIN PROPERTIES CARDS */}
       
        <div className="grid-style1 clearfix">
          <div className="item col-md-4">
            <div className="image">
              <Link href="properties-detail.html">
                <h3>Luxury Apartment with great views</h3>
                <span className="location">Upper East Side, New York</span>
              </Link>
              <img src="http://placehold.it/760x670" alt="" />
            </div>
            <div className="price">
              <span>$950</span>
              <p>per night</p>
            </div>
            <ul className="amenities">
              <li>
                <i className="icon-bedrooms" /> 4
              </li>
              <li>
                <i className="icon-bathrooms" /> 3
              </li>
            </ul>
          </div>
          <div className="item col-md-4">
            <div className="image">
              <Link href="properties-detail.html">
                <h3>Stunning Villa with 5 bedrooms</h3>
                <span className="location">Miami Beach, Florida</span>
              </Link>
              <img src="http://placehold.it/760x670" alt="" />
            </div>
            <div className="price">
              <span>$1,300</span>
              <p>per night</p>
            </div>
            <ul className="amenities">
              <li>
                <i className="icon-bedrooms" /> 5
              </li>
              <li>
                <i className="icon-bathrooms" /> 2
              </li>
            </ul>
          </div>
          <div className="item col-md-4">
            <div className="image">
              <Link href="properties-detail.html">
                <h3>Recent construction with 3 bedrooms</h3>
                <span className="location">Park Slope, New York</span>
              </Link>
              <img src="http://placehold.it/760x670" alt="" />
            </div>
            <div className="price">
              <span>$560</span>
              <p>per night</p>
            </div>
            <ul className="amenities">
              <li>
                <i className="icon-bedrooms" /> 3
              </li>
              <li>
                <i className="icon-bathrooms" /> 2
              </li>
            </ul>
          </div>
          <div className="item col-md-4">
            <div className="image">
              <Link href="properties-detail.html">
                <h3>Modern construction with parking space</h3>
                <span className="location">Midtown, New York</span>
              </Link>
              <img src="http://placehold.it/760x670" alt="" />
            </div>
            <div className="price">
              <span>$85</span>
              <p>per night</p>
            </div>
            <ul className="amenities">
              <li>
                <i className="icon-bedrooms" /> 1
              </li>
              <li>
                <i className="icon-bathrooms" /> 2
              </li>
            </ul>
          </div>
          <div className="item col-md-4">
            <div className="image">
              <Link href="properties-detail.html">
                <h3>Single Family Townhouse</h3>
                <span className="location">Cobble Hill, New York</span>
              </Link>
              <img src="http://placehold.it/760x670" alt="" />
            </div>
            <div className="price">
              <span>$840</span>
              <p>per night</p>
            </div>
            <ul className="amenities">
              <li>
                <i className="icon-bedrooms" /> 2
              </li>
              <li>
                <i className="icon-bathrooms" /> 2
              </li>
            </ul>
          </div>
          <div className="item col-md-4">
            <div className="image">
              <a href="properties-detail.html">
                <h3>3 bedroom villa with garage for rent</h3>
                <span className="location">Bal Harbour, Florida</span>
              </a>
              <img src="http://placehold.it/760x670" alt="" />
            </div>
            <div className="price">
              <span>$150</span>
              <p>per night</p>
            </div>
            <ul className="amenities">
              <li>
                <i className="icon-bedrooms" /> 3
              </li>
              <li>
                <i className="icon-bathrooms" /> 2
              </li>
            </ul>
          </div>
        </div>
      </div>
      );  {/* END MAIN CONTENT */}
}

export default properties;