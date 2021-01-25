import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#1A1A1A"
  }
});

export default () => {
  const classes = useStyles();
  return <div className={classes.root}>Top Bar</div>;
};
