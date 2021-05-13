import React from "react";
import "./Checkout.css";
import Subtotal  from "./Subtotal";
function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2021/ASV/NCA/ASV_MAPLE_US_CA_148x71_20210305._CB658190487_.png"
          alt=""
          className="checkout_ad"
        />
        <div>
          <h2 className="checkout_title">Your Shopping Basket</h2>
        </div>
      </div>
      <div className="checkout_right">
      <Subtotal/>
      </div>
    </div>
  );
}

export default Checkout;
