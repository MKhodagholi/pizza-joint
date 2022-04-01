import React, { useState } from "react";

import Home from "./components/Home/Home";

import "./App.scss";
import Header from "./components/Header/Header";
import Base from "./components/Base/Base";
import { Switch, Route } from "react-router-dom";
import Toppings from "./components/Toppings/Toppings";
import Order from "./components/Order/Order";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Modal from "./components/Modal/Modal";
import Loader from "./components/Loader/Loader";

const App = () => {
  const location = useLocation();

  const [pizza, setPizza] = useState({
    base: null,
    toppings: [],
  });

  const [showModal, setShowModal] = useState(false);

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
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => setShowModal(false)}
      >
        <Switch location={location} key={location.key}>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/base">
            <Base pizza={pizza} addBase={addBase} />
          </Route>
          <Route path="/toppings">
            <Toppings pizza={pizza} addToppings={addToppings} />
          </Route>
          <Route>
            <Order pizza={pizza} setShowModal={setShowModal} />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;
