import { useFetch } from "hooks/useFetch";
import moment from "moment";
import React from "react";
import { getIconUrl } from "utils/getIconUrl";
import { getTimeFromUTC } from "utils/getTimeFromUTC";
import { getUrl } from "utils/getUrl";
import * as Styled from "./Weather.styles";
import WeatherDetailCell from "./WeatherDetailCell/WeatherDetailCell";

const Weather = ({ position }) => {
  const weatherApiUrl = getUrl("weather", position);
  const { data, loading, error } = useFetch(weatherApiUrl);

  if (error) {
    return <></>;
  }

  if (loading || !data) {
    return <></>;
  }

  const {
    weather: [{ description, icon }],
    main: { temp, feels_like, temp_min, temp_max, humidity },
    wind: { speed: windSpeed },
    sys: { country, sunrise, sunset },
    name,
  } = data;

  return (
    <Styled.Wrapper>
      <Styled.Header>
        <h2>
          {name}, {country}
        </h2>
        <h4>{moment(new Date()).format("dddd D, MMMM YYYY")}</h4>
      </Styled.Header>
      <Styled.Temperature>
        <div>
          <img src={getIconUrl(icon)} alt="weather-icon"></img>
        </div>
        <div>
          <h3>{Math.floor(temp)}°</h3>
          <p>Feels like {Math.floor(feels_like)}°</p>
          <h4>{description}</h4>
        </div>
      </Styled.Temperature>
      <Styled.WeatherDetailsWrapper>
        <WeatherDetailCell value={`${Math.floor(temp_max)}°`} title="Hight" />
        <WeatherDetailCell value={`${windSpeed}mph`} title="Wind" />
        <WeatherDetailCell value={getTimeFromUTC(sunrise)} title="Sunrise" />
        <WeatherDetailCell value={`${Math.floor(temp_min)}°`} title="Low" />
        <WeatherDetailCell value={`${humidity}%`} title="Humidity" />
        <WeatherDetailCell value={getTimeFromUTC(sunset)} title="Sunset" />
      </Styled.WeatherDetailsWrapper>
    </Styled.Wrapper>
  );
};

export default Weather;
