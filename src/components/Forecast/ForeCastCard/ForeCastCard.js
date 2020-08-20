import React from "react";
import { getIconUrl } from "utils/getIconUrl";
import * as Styled from "./ForeCastCard.styles";
const ForeCastCard = ({ data }) => {
  const {
    weather: [{ description, icon }],
    main: { temp, feels_like, temp_min, temp_max, humidity },
    wind: { speed: windSpeed },
  } = data;
  return (
    <>
      <Styled.Card>
        <span>08.20</span>
        <span>0:00</span>
        <img src={getIconUrl(icon, "2x")} alt="weather-icon" />
        <h4>{temp}°</h4>
      </Styled.Card>
    </>
  );
};

export default ForeCastCard;
