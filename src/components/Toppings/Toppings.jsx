import React from "react";

import { toppings } from "../../store";
import { Link } from "react-router-dom";

const Toppings = ({ addToppings, pizza }) => {
  return (
    <div className="toppings container">
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping, index) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <li key={index} onClick={() => addToppings(topping)}>
              <span className={spanClass}>{topping}</span>
            </li>
          );
        })}
      </ul>
      <div className="next">
        <Link to="/order">
          <button>Order</button>
        </Link>
      </div>
    </div>
  );
};

export default Toppings;
