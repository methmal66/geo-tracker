import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import MarkerInfo from "./MarkerInfo";
import "../css/map.css";

const Map = ({ wildFires, center, zoom }) => {
  const [info, setInfo] = useState(null);

  const markers = wildFires.map((wildFire, index) => {
    const handleClick = () => {
      setInfo({
        id: wildFire.id,
        title: wildFire.title,
        link: wildFire.sources[0].url,
      });
    };

    return (
      <Marker
        key={index}
        lat={wildFire.geometries[0].coordinates[1]}
        lng={wildFire.geometries[0].coordinates[0]}
        onClick={handleClick}
      />
    );
  });

  return (
    // Important! Always set the container height explicitly
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB14xbMSEg46WaKyjJo1cufzAxRS36hFhQ" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {info && <MarkerInfo info={info} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 37,
    lng: -120,
  },
  zoom: 4,
};

export default Map;
