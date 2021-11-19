import React, { useEffect, useState } from "react";
import axios from "axios";
import productImageUrl from "./productImageUrl";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const ImgContainer = styled.div`
  width: 350px;
  heigh: 350px;
`;

export const ImgTag = styled.img`
  object-fit: cover;
  width: 100%;
`;
export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 5rem auto;

  width: 70%;
`;

export const IndividualProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  cursor: pointer;
`;

export const TextTag = styled.p`
  margin: 0.5rem 1rem;
`;
const ProductContainer = () => {
  const [allProductList, setAllProductList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => setAllProductList(res.data.products));
  }, []);
  return (
    <div>
      <h2 style={{ textAlign: " center", margin: "5rem" }}>All Products</h2>
      <ProductWrapper>
        {allProductList.map((product, i) => {
          return (
            <Link to={`/products/${product._id}`} key={product._id}>
              <IndividualProductContainer>
                <ImgContainer>
                  <ImgTag src={productImageUrl[product.name][0]} alt="" />
                </ImgContainer>
                <TextTag>{product.name}</TextTag>
                <TextTag>{product.price}</TextTag>
              </IndividualProductContainer>
            </Link>
          );
        })}
      </ProductWrapper>
    </div>
  );
};

export default ProductContainer;
