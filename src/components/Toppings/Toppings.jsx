import React from "react";

import { toppings } from "../../store";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Toppings = ({ addToppings, pizza }) => {
  return (
    <div className="toppings container">
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping, index) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li
              key={index}
              onClick={() => addToppings(topping)}
              whileHover={{ scale: 1.5, originX: 0, color: "#f8e111" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>
      <div className="next">
        <Link to="/order">
          <motion.button
            whileHover={{
              scale: 1.1,
              textShadow: "0 0 4px #fff",
              boxShadow: "0 0 4px #fff",
            }}
          >
            Order
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default Toppings;
