import Forecast from "components/Forecast/Forecast";
import Layout from "components/Layout/Layout";
import Weather from "components/Weather/Weather";
import React, { useEffect, useState } from "react";
import { geolocated } from "react-geolocated";

const App = ({ coords }) => {
  const [position, setPosition] = useState({
    lat: 0,
    lon: 0,
  });

  useEffect(() => {
    if (coords) {
      setPosition({
        lat: coords.latitude,
        lon: coords.longitude,
      });
    }
  }, [coords]);

  return (
    <Layout>
      {position.lat > 0 || position.lon > 0 ? (
        <>
          <Weather position={position} />
          <Forecast position={position} />
        </>
      ) : (
        <h1>💁 Turn On Location Services to Allow, if you haven't done yet!</h1>
      )}
    </Layout>
  );
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(App);
