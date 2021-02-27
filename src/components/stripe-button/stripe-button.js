import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 1000;
  const publishableKey =
    "pk_test_51INJ4PHy2MS77l6Qo6CR2ek1uBNcPMrOFJayH8G99pDZRcJy9GoGvsn9h5AXWuNMxc3t4j7Zb52HYuksgfC09EQ500BjpQRIuJ";

  const onToken = (token) => {
    console.log(token);
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
