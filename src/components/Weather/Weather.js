import React from "react";
import { useFetch } from "hooks/useFetch";
import { getUrl } from "utils/getUrl";
import * as Styled from "./Weather.styles";

const Weather = ({ position }) => {
  const weatherApiUrl = getUrl("weather", position);
  const { data, loading, error } = useFetch(weatherApiUrl);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error...</h1>;
  }
  return (
    <Styled.Wrapper>
      <Styled.Header>
        <h2 class="sc-Axmtr fgqWGD">Berlin, DE</h2>
        <h4 class="sc-AxhCb jqBJnf">Wednesday 19 August</h4>
      </Styled.Header>
      <Styled.Temperature>
        <div>
          <img
            src="http://openweathermap.org/img/wn/04d@4x.png"
            alt="test"
          ></img>
        </div>
        <div>
          <h3>21°</h3>
          <h4>overcast clouds</h4>
        </div>
      </Styled.Temperature>
      <Styled.WeatherDetailsWrapper>
        <Styled.WeatherDetail>
          <h4>22°</h4>
          <span>Hight</span>
        </Styled.WeatherDetail>
        <Styled.WeatherDetail>
          <h4>22°</h4>
          <span>Hight</span>
        </Styled.WeatherDetail>
        <Styled.WeatherDetail>
          <h4>22°</h4>
          <span>Hight</span>
        </Styled.WeatherDetail>
        <Styled.WeatherDetail>
          <h4>22°</h4>
          <span>Hight</span>
        </Styled.WeatherDetail>
        <Styled.WeatherDetail>
          <h4>22°</h4>
          <span>Hight</span>
        </Styled.WeatherDetail>
        <Styled.WeatherDetail>
          <h4>22°</h4>
          <span>Hight</span>
        </Styled.WeatherDetail>
      </Styled.WeatherDetailsWrapper>
    </Styled.Wrapper>
  );
};

export default Weather;
