import React from "react";
import Icon from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";
import "../css/marker.css";

const Marker = ({ handleClick }) => {
  return (
    <div className="marker" onClick={handleClick}>
      <Icon icon={locationIcon} className="marker__icon" />
    </div>
  );
};

export default Marker;
