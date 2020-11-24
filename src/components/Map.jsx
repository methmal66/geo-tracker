import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import "../css/map.css";

const Map = ({ center, zoom }) => {
  return (
    // Important! Always set the container height explicitly
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB14xbMSEg46WaKyjJo1cufzAxRS36hFhQ" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Marker />
      </GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 23,
    lng: 65,
  },
  zoom: 3,
};

export default Map;
