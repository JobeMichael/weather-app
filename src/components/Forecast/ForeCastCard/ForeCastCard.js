import moment from "moment";
import React from "react";
import { getIconUrl } from "utils/getIconUrl";
import * as Styled from "./ForeCastCard.styles";

const ForeCastCard = ({ data }) => {
  const {
    weather: [{ description, icon }],
    main: { temp, feels_like, temp_min, temp_max },
    dt_txt,
  } = data;
  return (
    <>
      <Styled.Card>
        <p>{moment(dt_txt).format("dddd")}</p>
        <p>{moment(dt_txt).format("MMMM D, h:mm")}</p>
        <Styled.Temperature>
          <img src={getIconUrl(icon, "2x")} alt="weather-icon" />
          <h4>{Math.floor(temp)}°</h4>
          <span>{`${Math.floor(temp_max)}° / ${Math.floor(temp_min)}°`}</span>
        </Styled.Temperature>
        <h4>Feels like {Math.floor(feels_like)}°</h4>
        <p>{description}</p>
      </Styled.Card>
    </>
  );
};

export default ForeCastCard;
