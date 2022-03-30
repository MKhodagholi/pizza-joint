import React, { useState } from "react";

import Home from "./components/Home/Home";

import "./App.scss";
import Header from "./components/Header/Header";
import Base from "./components/Base/Base";
import { Switch, Route } from "react-router-dom";

const App = () => {
  const [pizza, setPizza] = useState({
    base: null,
    topping: null,
  });

  const addBase = (base) => {
    setPizza((prev) => ({ ...prev, base }));
  };

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/base">
          <Base pizza={pizza} addBase={addBase} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
