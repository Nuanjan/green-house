import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import { Font } from "../globalStyles/Font";
import ProductContainer from "./ProductContainer";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";
import ThankYou from "./ThankYou";
import OrderHistory from "./OrderHistory";
import CardContainer from "./Card";

function App() {
  const [num, setNum] = useState("");
  const [itemList, setItemList] = useState([]);
  const [showCard, setShowCard] = useState(false);
  return (
    <BrowserRouter>
      <Font />
      <Navbar num={num} setShowCard={setShowCard} />
      {showCard && (
        <CardContainer text={"Cart is Empty!!!"} setShowCard={setShowCard} />
      )}
      <Switch>
        <Route exact path="/" render={() => <LandingPage />} />
        <Route exact path="/products" render={() => <ProductContainer />} />
        <Route
          path="/products/:id"
          render={() => (
            <ProductDetail
              num={num}
              setNum={setNum}
              itemList={itemList}
              setItemList={setItemList}
            />
          )}
        />
        <Route
          path="/cart/:orderId"
          render={() => (
            <Cart
              num={num}
              setNum={setNum}
              itemList={itemList}
              setItemList={setItemList}
            />
          )}
        />
        <Route path="/thank-you" render={() => <ThankYou />} />
        <Route path="/order-history" render={() => <OrderHistory />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
