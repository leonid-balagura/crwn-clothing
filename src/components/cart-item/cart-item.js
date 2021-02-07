import React from "react";

import "./cart-item.scss";

const CartItem = ({ name, imageUrl, price, quantity }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="" />
      <div className="item-details">
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
