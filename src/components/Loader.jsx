import React from "react";
import spinner from "./spinner.gif";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    marginTop: "200px",
  },
}));

const Loader = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={spinner} alt="loading" />
    </div>
  );
};

export default Loader;
