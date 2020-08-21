import moment from "moment";
import React from "react";
import { getTextByWindSpeed } from "utils/getTextByWindSpeed";
import * as Styled from "./WeatherAlert.styles";

const WeatherAlert = ({ isRaining, windSpeed: { speed, date } }) => {
  return (
    <Styled.Wrapper>
      <Styled.RainText>
        {isRaining
          ? `🌧️ It will rain today. Carry an umbrella for goodness sake! 🌧️`
          : `☀️ No rain today. Great day for a run ☀️`}
      </Styled.RainText>
      <Styled.WeatherForecast>
        {`💨 Wind forecast : ${getTextByWindSpeed(speed)} on ${moment(
          date
        ).format("dddd")} 💨`}
      </Styled.WeatherForecast>
    </Styled.Wrapper>
  );
};

export default WeatherAlert;
