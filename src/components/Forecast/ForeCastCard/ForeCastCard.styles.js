import styled from "styled-components";

export const Card = styled.div`
  flex-shrink: 0;
  flex-basis: 25%;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  text-align: center;
  p {
    font-weight: bold;
  }
  @media (max-width: 768px) {
    flex-basis: 100%;
    padding: 30px 0;
    margin-bottom: 20px;
  }
`;

export const Temperature = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h4 {
    font-size: 40px;
  }
`;
