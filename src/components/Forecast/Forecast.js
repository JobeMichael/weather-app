import { useFetch } from "hooks/useFetch";
import moment from "moment";
import React, { useCallback, useEffect, useState } from "react";
import { getUrl } from "utils/getUrl";
import WeatherAlert from "../WeatherAlert/WeatherAlert";
import * as Styled from "./Forecast.styles";
import ForeCastCard from "./ForeCastCard/ForeCastCard";

let isRaining = false;
let hightestWind = { speed: 0 };
const Forecast = ({ position }) => {
  const [forecast, setForecast] = useState();
  const weatherApiUrl = getUrl("forecast", position);
  const { data, loading, error } = useFetch(weatherApiUrl);

  const formattedData = useCallback(() => {
    if (data) {
      const lastDay = moment().add(3, "days");
      isRaining = data.list[0].weather[0].main === "Rain";

      return data.list.reduce((acc, item) => {
        const date = item.dt_txt;
        const currentDate = moment(date);
        const windSpeed = item.wind.speed;

        if (currentDate.diff(lastDay, "days", true) < 0) {
          if (windSpeed > hightestWind.speed) {
            hightestWind.speed = windSpeed;
            hightestWind.date = date;
          }
          if (date.includes("12:00:00")) {
            acc.push(item);
          }
        }
        return acc;
      }, []);
    }
  }, [data]);

  useEffect(() => {
    setForecast(formattedData());
  }, [data, formattedData]);

  if (loading || !data) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error...</h1>;
  }

  return (
    <>
      <Styled.Forecast>
        <h3>Forecast</h3>
        <WeatherAlert isRaining={isRaining} windSpeed={hightestWind} />
        <h4>Next 3 days</h4>
        <Styled.Wrapper>
          {forecast.map((item) => (
            <ForeCastCard key={item.dt} data={item} />
          ))}
        </Styled.Wrapper>
      </Styled.Forecast>
    </>
  );
};

export default Forecast;
