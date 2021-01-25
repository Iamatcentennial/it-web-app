import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Powered
          </Typography>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/aboutus">About Us</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/portfolio">Portflio</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}
