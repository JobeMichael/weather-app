import React, { useState, useEffect } from "react";
import Weather from "components/Weather/Weather";
import Forecast from "components/Forecast/Forecast";
import Layout from "components/Layout/Layout";
import { getCurrentPosition } from "utils/getCurrentPosition";

const App = () => {
  const [position, setPosition] = useState({ lat: 0, lon: 0 });

  useEffect(() => {
    (async () => {
      const { latitude, longitude } = await getCurrentPosition();
      setPosition({ lat: latitude, lon: longitude });
    })();
  }, []);

  return (
    <Layout>
      {(position.lat > 0 || position.lon > 0) && (
        <>
          <Weather position={position} />
          <Forecast position={position} />
        </>
      )}
    </Layout>
  );
};

export default App;
