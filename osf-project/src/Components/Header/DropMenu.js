import React from "react";
import dropImg from "../../Images/dropImg.jpg";
import './Header.scss'

function DropMenu() {
    return (
      <div className='DropMenu'>
        <div className="dropContainer">
          <div className="dropRow"> 
            <ul>
              <li className="dropList">
                <a href="#" className="dropLink heading">
                  product categories
                </a>
              </li>
              <li className="dropList">
                <a href="#" className="dropLink">
                  Accessories
                </a>
              </li>
              <li className="dropList">
                <a href="#" className="dropLink">
                  alcohol
                </a>
              </li>
              <li className="dropList">
                <a href="#" className="dropLink">
                  art
                </a>
              </li>
              <li className="dropList">
                <a href="#" className="dropLink">
                  books
                </a>
              </li>
              <li className="dropList">
                <a href="#" className="dropLink">
                  drink
                </a>
              </li>
              <li className="dropList">
                <a href="#" className="dropLink">
                  electronics
                </a>
              </li>
              <li className="dropList">
                <a href="#" className="dropLink">
                  flowers & Plans
                </a>
              </li>
              <li className="dropList">
                <a href="#" className="dropLink">
                  food
                </a>
              </li>
            </ul>
          </div>

          <div className="dropRow">
            <ul>
              <li className="dropList">
                <a href="#" className="dropLink">
                  gadgets
                </a>
              </li>
              <li className="dropList">
                <a href="#" className="dropLink">
                  garden
                </a>
              </li>
              <li className="dropList">
                <a href="#" className="dropLink">
                  grocery
                </a>
              </li>
              <li className="dropList">
                <a href="#" className="dropLink">
                  home
                </a>
              </li>
              <li className="dropList">
                <a href="#" className="dropLink">
                  jewelry
                </a>
              </li>
              <li className="dropList">
                <a href="#" className="dropLink">
                  kids & Baby
                </a>
              </li>
              <li className="dropList">
                <a href="#" className="dropLink">
                  men's Fashion
                </a>
              </li>
              <li className="dropList">
                <a href="#" className="dropLink">
                  mobile
                </a>
              </li>
            </ul>
          </div>

          <div className="dropRow">
            <ul>
              <li className="dropList">
                <a href="#" className="dropLink">
                  motorcycles
                </a>
              </li>
              <li className="dropList">
                <a href="#" className="dropLink">
                  movies
                </a>
              </li>
              <li className="dropList">
                <a href="#" className="dropLink">
                  music
                </a>
              </li>
              <li className="dropList">
                <a href="#" className="dropLink">
                  office
                </a>
              </li>
              <li className="dropList">
                <a href="#" className="dropLink">
                  pets
                </a>
              </li>
              <li className="dropList">
                <a href="#" className="dropLink">
                  romantic
                </a>
              </li>
              <li className="dropList">
                <a href="#" className="dropLink">
                  sport
                </a>
              </li>
              <li className="dropList">
                <a href="#" className="dropLink">
                  toys
                </a>
              </li>
            </ul>
          </div>

          <div className="dropRow">
            <ul>
              <li className="dropList">
                <a href="#" className="dropLink heading">
                  sales
                </a>
              </li>
              <li className="dropList">
                <a href="#" className="dropLink">
                  Accessories
                </a>
              </li>
              <li className="dropList">
                <a href="#" className="dropLink">
                  alcohol
                </a>
              </li>
              <li className="dropList">
                <a href="#" className="dropLink">
                  art
                </a>
              </li>
              <li className="dropList">
                <a href="#" className="dropLink">
                  books
                </a>
              </li>
              <li className="dropList">
                <a href="#" className="dropLink">
                  drink
                </a>
              </li>
              <li className="dropList">
                <a href="#" className="dropLink">
                  electronics
                </a>
              </li>
              <li className="dropList">
                <a href="#" className="dropLink">
                  flowers & Plans
                </a>
              </li>
              <li className="dropList">
                <a href="#" className="dropLink">
                  food
                </a>
              </li>
            </ul>
          </div>
          <img
            src={dropImg}
            className="dropImg"
            alt="image of lady and shopping bags"
          />
        </div>
      </div>
    );
}

export default DropMenu
