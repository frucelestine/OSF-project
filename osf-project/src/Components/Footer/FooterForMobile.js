import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from 'react-bootstrap/Dropdown';
import './Footer.scss'

function FooterForMobile() {
    return (
      <div id="mobileFooter">
        <p className="copyRight" style={{ margin: 0 }}>
          © Copyright 2019.{" "}
        </p>
        <p className="Rights">All Rights Reserved.</p>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">CONTACT</Dropdown.Toggle>

          <Dropdown.Menu id="dropFoot">
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
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">CATEGORIES</Dropdown.Toggle>

          <Dropdown.Menu id="dropFoot">
            <ul className="categories">
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
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">ABOUT</Dropdown.Toggle>

          <Dropdown.Menu id="dropFoot">
            <ul className="categories">
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
          </Dropdown.Menu>
        </Dropdown>
        <div className="social">
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-google-plus-g"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-pinterest-p"></i>
        </div>
        
      </div>
    );
}

export default FooterForMobile
