import React from "react";

import Home from "./components/Home/Home";

import "./App.scss";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
};

export default App;
