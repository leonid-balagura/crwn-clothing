import React from "react";
import HomePage from "./pages/home-page/home-page";
import ShopPage from "./pages/shop-page/shop-page";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
