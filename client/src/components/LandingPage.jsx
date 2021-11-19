import React from "react";
import styled from "styled-components";
import colors from "../globalStyles/colorStyles";
import plantImg from "../images/landing-page-plants.jpg";


export const TextContaniner = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
`;
export const LandingPageContainer = styled.div`
  background-color: ${colors.pink};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const ImgTagContainer = styled.div`
  transform: translateY(20%);
`;

export const ShoppoingBtnInner = styled.div`
  cursor: pointer;
  border: solid 1px black;
  text-align: center;
  padding: 0.5em 1em;
  transform: translate(5px, 5px);
  &:hover {
    transform: translate(0, 0);
  }
`;
export const ShoppoingBtnOutter = styled.div`
  border: solid 1px black;
  text-align: center;
`;
export const LinkTag = styled.a`
  color: ${colors.darkGrayBrown};
  text-decoration: none;
  margin: 0 1rem;
`;

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <TextContaniner>
        <h3 style={{ marginBottom: "1rem" }}>There’s a plant for everyone</h3>
        <p style={{ marginBottom: "1rem" }}>--Sara Gatanas--</p>
        <ShoppoingBtnOutter>
          <ShoppoingBtnInner>
            <LinkTag href={"/products"}>Start Shopping</LinkTag>
          </ShoppoingBtnInner>
        </ShoppoingBtnOutter>
      </TextContaniner>
      <ImgTagContainer>
        <img src={plantImg} alt="" />
      </ImgTagContainer>
    </LandingPageContainer>
  );
};

export default LandingPage;
