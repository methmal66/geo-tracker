import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {
    position: "absolute",
    width: "400px",
    top: "50px",
    right: "50px",
    minHeight: "100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    borderRadius: "10px",
    color: "white",
    padding: "20px",
  },
}));

const MarkerInfo = ({ info }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span>
        <strong>ID : </strong>
        {info.id}
      </span>
      <span>
        <strong>Title :</strong> {info.title}
      </span>
      <span>
        <strong>More : </strong>
        <a href={info.link}>{info.link}</a>
      </span>
    </div>
  );
};

export default MarkerInfo;
