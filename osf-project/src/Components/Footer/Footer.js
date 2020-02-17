import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="contact">
        <p className="copyRight" style={{ margin: 0 }}>
          © Copyright 2019.{" "}
        </p>
        <p className="Rights">All Rights Reserved.</p>
        <h5 className="contactHead">CONTACT</h5>
        <p style={{ margin: 0 }}>Headquaters:</p>
        <p className="address">
          5600, Blvd. des Galeries, Bur 530 Québec, Québec G2K 2H6
        </p>
        <a href="#" className="email">
          contact@osf-global.com
        </a> 
        <a href="#" className="contactNumber">
          +1 (888) 548-4344
        </a>
      </div>

      <ul className="categories">
        <li className="sectHead">Categories</li>
        <li className="sectList">
          <a href="#" className="sectLink">
            Alcohole
          </a>
        </li>
        <li className="sectList">
          <a href="#" className="sectLink">
            Art
          </a>
        </li>
        <li className="sectList">
          <a href="#" className="sectLink">
            Books
          </a>
        </li>
        <li className="sectList">
          <a href="#" className="sectLink">
            Drink
          </a>
          <li className="sectList">
            <a href="#" className="sectLink">
              Electronics
            </a>
          </li>
        </li>
      </ul>

      <ul className="categories">
        <li className="sectHead"></li>
        <li className="sectList">
          <a href="#" className="sectLink">
            home
          </a>
        </li>
        <li className="sectList">
          <a href="#" className="sectLink">
            jewelry
          </a>
        </li>
        <li className="sectList">
          <a href="#" className="sectLink">
            Kids & Baby
          </a>
        </li>
        <li className="sectList">
          <a href="#" className="sectLink">
            Man's Fashion
          </a>
        </li>
        <li className="sectList">
          <a href="#" className="sectLink">
            Mobile
          </a>
        </li>
        <li className="sectList">
          <a href="#" className="sectLink">
            Motorcycles
          </a>
        </li>
        <li className="sectList">
          <a href="#" className="sectLink">
            Movies
          </a>
        </li>
        <li className="sectList">
          <a href="#" className="sectLink">
            Music
          </a>
        </li>
      </ul>

      <ul className="categories">
        <li className="sectHead"></li>
        <li className="sectList">
          <a href="#" className="sectLink">
            sports
          </a>
        </li>
        <li className="sectList">
          <a href="#" className="sectLink">
            Toys
          </a>
        </li>
        <li className="sectList">
          <a href="#" className="sectLink">
            Travel
          </a>
        </li>
        <li className="sectList">
          <a href="#" className="sectLink">
            Women's Fashion
          </a>
        </li>
      </ul>

      <ul className="categories">
        <li className="sectHead">About</li>
        <li className="sectList">
          <a href="#" className="sectLink">
            About us
          </a>
        </li>
        <li className="sectList">
          <a href="#" className="sectLink">
            Delivery
          </a>
        </li>
        <li className="sectList">
          <a href="#" className="sectLink">
            Testimonials
          </a>
        </li>
        <li className="sectList">
          <a href="#" className="sectLink">
            Contact
          </a>
        </li>
      </ul>

      <div className="social">
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-google-plus-g"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-pinterest-p"></i>
      </div>
    </div>
  );
}

export default Footer;
