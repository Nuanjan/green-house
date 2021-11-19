import React from "react";
import styled, { css } from "styled-components";
import colors from "../globalStyles/colorStyles";
import { BsCartPlusFill } from "react-icons/bs";
import { Link, useHistory } from "react-router-dom";
const sharedStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;
export const NavbarContainer = styled.nav`
  background-color: ${colors.pink};
  ${sharedStyle}
`;
export const Container = styled.div`
  ${sharedStyle}
`;

const Navbar = ({ num, setShowCard }) => {
  const history = useHistory();
  const handleCartView = () => {
    if (num === "") {
      setShowCard(true);
      history.push("/products");
    } else {
      history.push("/cart/" + num);
    }
  };
  return (
    <NavbarContainer>
      <Link style={{ textDecoration: "none" }} to={"/products"}>
        <h1>Green-House</h1>
      </Link>
      <Container>
        <Link
          style={{ textDecoration: "none", margin: "0 1rem" }}
          to={"/products"}
        >
          plants
        </Link>
        <Link
          style={{ textDecoration: "none", margin: "0 1rem" }}
          to={"/products"}
        >
          plots
        </Link>
        <Link
          style={{ textDecoration: "none", margin: "0 1rem" }}
          to={"/products"}
        >
          accessories
        </Link>
      </Container>
      <BsCartPlusFill size={40} onClick={handleCartView} />
    </NavbarContainer>
  );
};

export default Navbar;
