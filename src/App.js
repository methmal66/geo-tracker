import React, { useState, useEffect } from "react";
import Map from "./components/Map";
import Loader from "./components/Loader";
import { useDispatch } from "react-redux";
import { addWildFire } from "./Actions/wildFires";

const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState();

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );
      const { events } = await res.json();
      events.forEach((event) => {
        switch (event.categories[0].title) {
          case "Wildfires":
            dispatch(addWildFire(event));
            console.log("dispatched successfully");
            break;

          default:
            break;
        }
      });

      setLoading(false);
    };

    fetchEvents();
  }, []);

  return <div className="App">{!loading ? <Map /> : <Loader />}</div>;
};

export default App;
