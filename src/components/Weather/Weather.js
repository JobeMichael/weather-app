import React from "react";
import { useFetch } from "hooks/useFetch";
import { getUrl } from "utils/getUrl";

const Weather = ({ position }) => {
  const weatherApiUrl = getUrl("weather", position);
  const { data, loading, error } = useFetch(weatherApiUrl);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error...</h1>;
  }
  return <p>{JSON.stringify(data)}</p>;
};

export default Weather;
