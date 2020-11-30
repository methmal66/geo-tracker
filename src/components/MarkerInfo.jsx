import React from "react";
import { useSelector } from "react-redux";
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

const MarkerInfo = () => {
  const classes = useStyles();
  const id = useSelector((state) => state.clickedId);
  const wildFire = useSelector(
    (state) => state.wildFires.filter((wildFire) => wildFire.info.id === id)[0]
  );
  if (wildFire) {
    const { title, link } = wildFire.info;
    return (
      <div className={classes.root}>
        <span>
          <strong>ID : </strong>
          {id}
        </span>
        <span>
          <strong>Title :</strong> {title}
        </span>
        <span>
          <strong>More : </strong>
          <a href={link}>{link}</a>
        </span>
      </div>
    );
  }
  return <div></div>;
};

export default MarkerInfo;
