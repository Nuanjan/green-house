import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productImageUrl from "./productImageUrl";
import axios from "axios";
import styled from "styled-components";
import colors from "../globalStyles/colorStyles";
import { randomOrderNumber } from "../helper/helper";
import { Link } from "react-router-dom";

export const ProductDetailContainner = styled.div`
  display: flex;
  justify-content: center;
  align-itmes: center;
  width: 80%;
  margin: 5rem auto;
`;
export const ProductAction = styled.div``;
export const ImageContainer = styled.div`
  width: 70%;
  display: flex;
`;
export const MainImage = styled.div`
  width: 85%;
  height: 800px;
  overflow: hidden;
`;
export const SmallImage = styled.div`
  width: 15%;
`;

export const smallImgDiv = styled.div`
  width: 50%;
  height: 100%;
`;
export const ImgTag = styled.img`
  object-fit: cover;
  width: 100%;
`;

export const AddCartBtn = styled.div`
  cursor: pointer;
  background-color: ${colors.darkGrayBrown};
  color: white;
  padding: 0.5em 1em;
`;
export const BuyBtn = styled.div`
  cursor: pointer;
  border: solid 1px ${colors.darkGrayBrown};
  color: ${colors.darkGrayBrown};
  padding: 0.5em 1em;
`;

export const ProductActionContainer = styled.div`
  width: 40%;
  margin-left: 2rem;
  padding: 2rem;
  text-align: center;
`;

const marginBottom = {
  marginBottom: "2rem",
};
const ProductDetail = ({num, setNum, itemList, setItemList }) => {
  console.log(num, " num from product detail")
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [productImg, setProductImg] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:8000/api/products/" + id).then((res) => {
      setProduct(res.data.product);
      setProductImg(productImageUrl[res.data.product.name]);
      console.log(productImageUrl)
    });
  }, []);

  const onAddToCart = () => {
    setItemList([...itemList, product]);
    console.log(itemList, " itemList when add to cart");
    if (num === "") {
      const randomNumber = randomOrderNumber();
      axios
        .post("http://localhost:8000/api/orders/new", {
          orderNumber: randomNumber,
        })
        .then((res) => {
          console.log(res.data.order._id, "order id");
          setNum(res.data.order._id);
          console.log(itemList, " this is itemList");
          axios
            .post("http://localhost:8000/api/items/new", {
              name: product.name,
              description: product.description,
              quantity: product.quantity,
              price: product.price,
              category: product.category,
              order_id: res.data.order._id,
            })
            .then((res) => console.log(res));
        });
    } else {
      console.log(itemList, " this is itemList");
      axios.post("http://localhost:8000/api/items/new", {
        name: product.name,
        description: product.description,
        quantity: product.quantity,
        price: product.price,
        category: product.category,
        order_id: num,
      });
    }
  };

  return (
    <ProductDetailContainner>
      <ImageContainer>
        <MainImage>
          <ImgTag src={productImg[imageIndex]} />
        </MainImage>
        <SmallImage>
          {productImg.map((image, i) => (
            <div key={i}>
              <ImgTag src={image} onClick={() => setImageIndex(i)} />
            </div>
          ))}
        </SmallImage>
      </ImageContainer>
      <ProductActionContainer>
        <h3 style={marginBottom}>{product.name}</h3>
        <hr style={marginBottom} />
        <p style={marginBottom}>{product.description}</p>
        <hr style={marginBottom} />
        <div>
          <label style={marginBottom} htmlFor="quantity">
            Quantity:{" "}
          </label>
          <input
            style={marginBottom}
            type="number"
            name="quantity"
            id="quantity"
            value={product.quantity}
            onChange={(e) =>
              setProduct({ ...product, [e.target.name]: e.target.value })
            }
          />
        </div>
        <AddCartBtn style={marginBottom} onClick={onAddToCart}>
          {product.price} - ADD TO CART
        </AddCartBtn>
        <Link style={{ textDecoration: "none" }} to={"/cart/"+num}>
          <BuyBtn>BUY IT NOW</BuyBtn>
        </Link>
      </ProductActionContainer>
    </ProductDetailContainner>
  );
};

export default ProductDetail;
