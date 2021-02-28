import React from "react";

import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

import { SignInSignUpPageContainer } from "./sign-in-sign-up-page-styles";

const SignInSignUpPage = () => (
  <SignInSignUpPageContainer>
    <SignIn />
    <SignUp />
  </SignInSignUpPageContainer>
);

export default SignInSignUpPage;
