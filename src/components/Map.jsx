import React from "react";
import { useSelector } from "react-redux";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import MarkerInfo from "./MarkerInfo";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
    width: "100%",
  },
}));

const Map = ({ center, zoom }) => {
  const classes = useStyles();
  const wildFires = useSelector((state) => state.wildFires);

  const markers = wildFires.map(({ info, cords }) => (
    <Marker key={info.id} id={info.id} lat={cords.lat} lng={cords.lng} />
  ));

  return (
    // Important! Always set the container height explicitly
    <div className={classes.root}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB14xbMSEg46WaKyjJo1cufzAxRS36hFhQ" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      <MarkerInfo />
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
