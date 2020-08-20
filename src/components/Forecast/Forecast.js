import React from "react";
import { useFetch } from "hooks/useFetch";
import { getUrl } from "utils/getUrl";
import * as Styled from "./Forecast.styles";

const Forecast = ({ position }) => {
  const weatherApiUrl = getUrl("forecast", position);
  const { data, loading, error } = useFetch(weatherApiUrl);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error...</h1>;
  }
  return (
    <Styled.Forecast>
      <h3>Forecast</h3>
      <Styled.Wrapper>
        <Styled.Card>
          <span class="sc-AxhUy iAIeLK">08.20</span>
          <span class="sc-AxhUy iAIeLK">0:00</span>
          <img
            src="https://openweathermap.org/img/w/04n.png"
            class="sc-AxheI eXzlnr"
            alt="te"
          />
          <h4 class="sc-AxhCb fWFNAr">20°</h4>
        </Styled.Card>
        <Styled.Card>
          <span class="sc-AxhUy iAIeLK">08.20</span>
          <span class="sc-AxhUy iAIeLK">0:00</span>
          <img
            src="https://openweathermap.org/img/w/04n.png"
            class="sc-AxheI eXzlnr"
            alt="te"
          />
          <h4 class="sc-AxhCb fWFNAr">20°</h4>
        </Styled.Card>
      </Styled.Wrapper>
    </Styled.Forecast>
  );
};

export default Forecast;
