import React from "react";
import { useDispatch } from "react-redux";
import { setClickedId } from "../Actions/clickedId";
import Icon from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  icon: {
    fontSize: "2rem",
    color: "orangered",
  },
}));

const Marker = ({ id }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div onClick={() => dispatch(setClickedId(id))}>
      <Icon icon={locationIcon} className={classes.icon} />
    </div>
  );
};

export default Marker;
