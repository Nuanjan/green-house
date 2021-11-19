import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import styled from "styled-components";
import colors from "../globalStyles/colorStyles";
import { useHistory } from "react-router-dom";

export const DisplayFlex = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

export const OrderHistoryContainer = styled.div`
  width: 70%;
  margin: 0 auto;
`;

export const ContinueBtn = styled.div`
  cursor: pointer;
  background-color: ${colors.darkGrayBrown};
  color: white;
  padding: 0.5em 1em;
  margin: 1rem;
  text-align: center;
`;
const OrderHistory = () => {
  const history = useHistory();
  const [orderHistoryList, setOrderHistoryList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/orders")
      .then((res) => setOrderHistoryList(res.data.orders));
  }, []);
  const handleContinue = () => {
    history.push("/products");
  };
  return (
    <OrderHistoryContainer>
      {orderHistoryList.map((orderHistory) => {
        return (
          <div>
            <DisplayFlex>
              <p>OrderNumber</p>
              <p>Ordered Date</p>
            </DisplayFlex>
            <hr />
            <DisplayFlex>
              <div># {orderHistory.orderNumber}</div>
              <div>{moment(orderHistory.createdAt).format("LL")}</div>
            </DisplayFlex>
          </div>
        );
      })}
      <ContinueBtn onClick={handleContinue}>CONTINUE SHOPPING</ContinueBtn>
    </OrderHistoryContainer>
  );
};

export default OrderHistory;
