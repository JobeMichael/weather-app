import moment from "moment";
import React from "react";
import { getTextByWindSpeed } from "utils/getTextByWindSpeed";

const WeatherAlert = ({ isRaining, windSpeed: { speed, date } }) => {
  return (
    <div>
      <span>
        {isRaining
          ? `It will rain today. Carry an umbrella for goodness sake!`
          : `No rain today. Great day for a run`}
      </span>
      <span>
        Wind forecast:{getTextByWindSpeed(speed)} on
        {moment(date).format("dddd")}
      </span>
    </div>
  );
};

export default WeatherAlert;
