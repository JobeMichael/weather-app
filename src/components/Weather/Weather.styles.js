import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 30px 0;
`;

export const Header = styled.div`
  flex-basis: 100%;
  margin-bottom: 30px;
  h2 {
    color: rgb(255, 255, 255);
    display: block;
    font-weight: 600;
    font-size: 30px;
    text-align: center;
    padding: 5px 0px;
  }
  h4 {
    color: rgb(255, 255, 255);
    display: block;
    font-weight: 400;
    font-size: 15px;
    text-align: center;
    padding: 5px 0px;
  }
`;

export const WeatherDetailsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: rgba(255, 255, 255, 0.2);
  align-self: flex-start;
  padding: 10px 0px;
  margin: 20px 0px;
  border-radius: 10px;
  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

export const Temperature = styled.div`
  display: flex;
  align-items: center;
  h3 {
    font-size: 70px;
  }
  h4 {
    font-size: 30px;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
