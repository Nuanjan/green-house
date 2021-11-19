import React from "react";
import styled from "styled-components";
import colors from "../globalStyles/colorStyles";
import { useHistory } from "react-router-dom";

export const ContinueBtn = styled.div`
  cursor: pointer;
  background-color: ${colors.darkGrayBrown};
  color: white;
  padding: 0.5em 1em;
  margin: 1rem;
  text-align: center;
`;
export const OrderHistoryBtn = styled.div`
  cursor: pointer;
  border: solid 1px ${colors.darkGrayBrown};
  color: ${colors.darkGrayBrown};

  padding: 0.5em 1em;
  margin: 1rem;
  text-align: center;
`;
export const BtnContainer = styled.div`
  display: flex;
  justify: center;
`;

export const ThankyouContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ThankYou = () => {
  const history = useHistory();
  const handleContinue = () => {
    history.push("/products");
  };
  const handleSeeHistory = () => {
    history.push("/order-history");
  };
  return (
    <ThankyouContainer>
      <h1>Thank You!</h1>
      <h3>Your order was completed successfully.</h3>
      <BtnContainer>
        <OrderHistoryBtn onClick={handleSeeHistory}>
          SEE ORDER HISTORY
        </OrderHistoryBtn>
        <ContinueBtn onClick={handleContinue}>CONTINUE SHOPPING</ContinueBtn>
      </BtnContainer>
    </ThankyouContainer>
  );
};

export default ThankYou;
