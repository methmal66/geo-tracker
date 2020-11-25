import { useState, useEffect } from "react";
import Map from "./components/Map";
import Loader from "./components/Loader";

const App = () => {
  const [wildFires, setWildFires] = useState([]);
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
            setWildFires((old) => [...old, event]);
            break;

          default:
            break;
        }
      });

      setLoading(false);
    };

    fetchEvents();
  }, []);

  return (
    <div className="App">
      {!loading ? <Map wildFires={wildFires} /> : <Loader />}
    </div>
  );
};

export default App;
