import React from "react";
import Icon from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  icon: {
    fontSize: "2rem",
    color: "orangered",
  },
}));

const Marker = ({ lat, lng, info, onClick }) => {
  const classes = useStyles();

  return (
    <div onClick={onClick}>
      <Icon icon={locationIcon} className={classes.icon} />
    </div>
  );
};

export default Marker;
