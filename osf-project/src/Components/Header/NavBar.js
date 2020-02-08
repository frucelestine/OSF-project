import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from 'react-bootstrap/Dropdown';
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import "./Header.scss";
import logo from "../../Images/logo.png";
import LanguageSelect from './LanguageSelect'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#FFFFFF",
    display: 'flex'
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
            <DropdownButton id="dropdown-basic-button" title="SERVICES">
              <Dropdown.Item href="#/action-1" className="menuLink">
                Action
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2" className="menuLink">
                Another action
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3" className="menuLink">
                Something else
              </Dropdown.Item>
            </DropdownButton>
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
