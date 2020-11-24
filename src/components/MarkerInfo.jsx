import React from "react";
import "../css/markerInfo.css";

const MarkerInfo = ({ info }) => {
  return (
    <div className="markerInfo">
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
