import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import "./Header.scss";
import logo from "../../Images/logo.png";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#FFFFFF"
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
      <div className='logoType'>
      <img
        src={logo}
        className="siteLogo"
        style={{ height: 60, width: 60 }}
        alt="siteLogo"
          />
          <h1 className='logoTitle'>OSF <span>Academy</span></h1>
          </div>
          
        
      </AppBar>
    </div>
  );
}
