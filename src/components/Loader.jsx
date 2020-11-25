import React from "react";
import spinner from "./spinner.gif";
import { makeStyles } from "@material-ui/styles";

const styles = () => ({
  root: {
    display: "flex",
    justifyContent: "center",
    marginTop: "200px",
  },
});
const useStyles = makeStyles(styles);

const Loader = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={spinner} alt="loading" />
    </div>
  );
};

export default Loader;
