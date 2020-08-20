import React from "react";
import * as Styled from "./WeatherDetailsCell.styles";

const WeatherDetailCell = ({ value, title }) => {
  return (
    <Styled.WeatherDetail>
      <h4>{value}</h4>
      <span>{title}</span>
    </Styled.WeatherDetail>
  );
};

export default WeatherDetailCell;
