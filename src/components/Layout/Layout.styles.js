import styled from "styled-components";
import bgImage from "../../assets/images/bg.png";

export const App = styled.div`
  background-image: url(${bgImage});
  background-position: center;
  display: flex;
  min-height: 100vh;
  color: #fff;
  padding: 30px;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1020px;
  width: 100%;
`;
