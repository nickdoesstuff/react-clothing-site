import React from "react";

import "./App.css";

import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop-page/shop-page";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/shop">
        <ShopPage />
      </Route>
    </Switch>
  );
}

export default App;
