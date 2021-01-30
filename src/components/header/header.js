import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.scss";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          shop
        </Link>
        <Link to="/shop" className="option">
          contact
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            sign out
          </div>
        ) : (
          <Link to="/signin" className="option">
            sign in
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => {
  return {
    currentUser,
    hidden,
  };
};

export default connect(mapStateToProps)(Header);
