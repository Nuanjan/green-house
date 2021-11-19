import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import colors from "../globalStyles/colorStyles";
import productImageUrl from "./productImageUrl";

export const CartContainer = styled.div`
  width: 70%;
  margin: 1rem auto;
`;
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
`;
export const LinkTag = styled.a`
  text-decoration: none;
  color: ${colors.darkGrayBrown};
`;

export const ImgContainer = styled.div`
  width: 150px;
  height: 150px;
`;

export const ImgTag = styled.img`
  object-fit: cover;
  width: 100%;
`;
export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em;
  border-bottom: 1px black solid;
`;
export const DescriptionContainer = styled.div`
  width: 20%;
`;

export const TotalContainer = styled.div`
  width: 50%;
  float: right;
`;
export const CheckOutBtn = styled.div`
  cursor: pointer;
  background-color: ${colors.darkGrayBrown};
  color: white;
  padding: 0.5em 1em;
  text-align: center;
`;
const Cart = ({ num, setNum, itemList, setItemList }) => {
  const history = useHistory();
  const { orderId } = useParams();
  const [total, setTotal] = useState(0);
  useEffect(() => {
    axios.get("http://localhost:8000/api/orders/" + orderId).then((res) => {
      console.log(res.data.order.items);
      let total = 0;
      const tempList = res.data.order.items.reduce((accu, item) => {
        total += item.price * item.quantity;
        setTotal(total);
        if (accu.length < 1) {
          accu.push(item);
          return accu;
        } else {
          for (let obj of accu) {
            if (obj.name !== item.name) {
              accu.push(item);
            } else {
              obj.quantity += item.quantity;
            }
            console.log(accu, " accu ");
            return accu;
          }
        }
      }, []);
      setItemList(tempList);
    });
  }, []);
  const onCheckOutSuccess = () => {
    setNum("");
    setItemList([]);
    history.push("/thank-you");
  };
  return (
    <CartContainer>
      <HeaderContainer>
        <a href={"/products"}>
          <BsArrowLeft />
          CONTINUE SHOPPING
        </a>
        <h1>Cart</h1>
        <h2>{itemList.length} ITEM(S)</h2>
      </HeaderContainer>
      <hr />
      <div>
        {itemList.map((item) => {
          return (
            <ItemContainer>
              <ImgContainer>
                <ImgTag src={productImageUrl[item.name][0]} alt="" />
              </ImgContainer>
              <DescriptionContainer>{item.description}</DescriptionContainer>
              <p>{item.price}</p>
              <p>quantity: {item.quantity}</p>
              <p>{item.quantity * item.price}</p>
            </ItemContainer>
          );
        })}
        <TotalContainer>
          <ItemContainer>
            <p>SUBTOTAL</p>
            <p>{total}</p>
          </ItemContainer>
          <ItemContainer>
            <p>TAX</p>
            <p>{total * 0.07}</p>
          </ItemContainer>
          <ItemContainer>
            <p>TOTAL</p>
            <p>{total + total * 0.07}</p>
          </ItemContainer>
          <CheckOutBtn onClick={onCheckOutSuccess}>CHECK OUT</CheckOutBtn>
        </TotalContainer>
      </div>
    </CartContainer>
  );
};

export default Cart;
