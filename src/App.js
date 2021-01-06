import React from "react";
import HomePage from "./pages/home-page/home-page";
import ShopPage from "./pages/shop-page/shop-page";
import SignInSignUpPage from "./pages/sign-in-sign-up-page/sign-in-sign-up-page";
import Header from "./components/header/header";
import { Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
