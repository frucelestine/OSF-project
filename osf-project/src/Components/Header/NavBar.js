import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DropdownButton from "react-bootstrap/DropdownButton";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.scss";
import logo from "../../Images/logo.png";
import MenuList from './MenuList'
import LanguageSelect from "./LanguageSelect";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#FFFFFF",
    display: "flex"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className="NavBar">
        <div className="logoType">
          <img src={logo} className="siteLogo" alt="siteLogo" />
          <h1 className="logoTitle">
            OSF <span>Academy</span>
          </h1>
        </div>
        <Navbar variant="light" className="navMenu">
          <Nav className="mr-auto">
            {/*<DropdownButton id="dropdown-basic-button" title="SERVICES">
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
                <img src={dropImg} className='dropImg' alt="image of lady and shopping bags" />
  </div>
            </DropdownButton>*/}
            <MenuList/>
            <Nav.Link href="#home" className="NavLink">
              COMPANY
            </Nav.Link>
            <Nav.Link href="#features" className="NavLink">
              LIBRARY
            </Nav.Link>
            <Nav.Link href="#pricing" className="NavLink">
              CONTACT US
            </Nav.Link>
          </Nav>
        </Navbar>
        <LanguageSelect />
        <div className="icons">
          <span className="icon-search"></span>
          <span class="icon-user"></span>
          <span class="icon-heart"></span>
          <span class="icon-shopping-bag"></span>
        </div>
      </AppBar>
    </div>
  );
}
