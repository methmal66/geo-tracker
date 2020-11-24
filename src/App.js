import "./App.css";
import { useState, useEffect } from "react";
import Map from "./components/Map";
import Loader from "./components/Loader";

const App = () => {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );
      const { events } = await res.json();
      setEventData(events);
      setLoading(false);
    };

    fetchEvents();
  }, []);

  return <div className="App">{!loading ? <Map /> : <Loader />}</div>;
};

export default App;
