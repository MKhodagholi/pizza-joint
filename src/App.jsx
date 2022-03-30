import React, { useState } from "react";

import Home from "./components/Home/Home";

import "./App.scss";
import Header from "./components/Header/Header";
import Base from "./components/Base/Base";
import { Switch, Route } from "react-router-dom";
import Toppings from "./components/Toppings/Toppings";

const App = () => {
  const [pizza, setPizza] = useState({
    base: null,
    toppings: [],
  });

  const addBase = (base) => {
    setPizza((prev) => ({ ...prev, base }));
  };

  const addToppings = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(
        (toppingItem) => toppingItem !== topping
      );
    }
    setPizza({ ...pizza, toppings: newToppings });
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
        <Route path="/toppings">
          <Toppings pizza={pizza} addToppings={addToppings} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
