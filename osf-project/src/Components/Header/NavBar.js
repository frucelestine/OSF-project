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
            <MenuList />
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
          <div className="icon-heart-o" data-icon="a"></div>
        </div>
      </AppBar>
    </div>
  );
}
