import React from "react";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CartItem from "../cart-item/cart-item";
import CustomButton from "../custom-button/custom-button";

import "./cart-dropdown.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(({ id, ...otherItemProps }) => (
        <CartItem key={id} {...otherItemProps} />
      ))}
    </div>
    <CustomButton>go to checkout</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({ cartItems: selectCartItems(state) });

export default connect(mapStateToProps)(CartDropdown);
