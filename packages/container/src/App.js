import React from "react";
import { mount } from "marketing/MarketingApp";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import Header from "./components/Header";
import AuthApp from "./components/AuthApp";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});
const App = () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/auth" component={AuthApp} />
            <Route path="/" component={MarketingApp} />
          </Switch>
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};

export default App;
