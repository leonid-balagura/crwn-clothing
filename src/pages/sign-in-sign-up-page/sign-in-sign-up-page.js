import React from "react";
import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

import "./sign-in-sign-up-page.scss";

const SignInSignUpPage = () => {
  return (
    <div className="sign-in-sign-up-page">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUpPage;
