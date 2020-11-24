import React from "react";
import GoogleMapReact from "google-map-react";
import "../css/map.css";

const Map = ({ center, zoom }) => {
  return (
    // Important! Always set the container height explicitly
    <div className="map" style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB14xbMSEg46WaKyjJo1cufzAxRS36hFhQ" }}
        defaultCenter={center}
        defaultZoom={zoom}
      ></GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 23,
    lng: 65,
  },
  zoom: 6,
};

export default Map;
