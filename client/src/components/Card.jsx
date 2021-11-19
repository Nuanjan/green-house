import React from "react";
import styled from "styled-components";
import colors from "../globalStyles/colorStyles";

export const CardContainer = styled.div`
  border: solid black 1px;
  width: 300px;
  height: 200px;
  margin: 2rem auto;
  text-align: center;
  padding: 2rem 1rem;
  position: fixed;
  right: 40%;
`;
export const CloseBtn = styled.div`
  cursor: pointer;
  background-color: ${colors.darkGrayBrown};
  color: white;
  padding: 0.5em 1em;
  margin: 1rem;
  text-align: center;
`;
const Card = ({ text, setShowCard }) => {
  return (
    <CardContainer>
      <h2 style={{ color: "red" }}>{text}</h2>
      <CloseBtn onClick={() => setShowCard(false)}>CLOSE</CloseBtn>
    </CardContainer>
  );
};

export default Card;
