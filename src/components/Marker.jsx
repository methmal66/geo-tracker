import React from "react";
import Icon from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";

import "../css/marker.css";

const Marker = ({ lat, lng, info, onClick }) => {
  return (
    <div className="marker" onClick={onClick}>
      <Icon icon={locationIcon} className="marker__icon" />
    </div>
  );
};

export default Marker;
