import React from "react";

import { bases } from "../../store";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Base = ({ pizza, addBase }) => {
  return (
    <motion.div
      className="base container"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 1, type: "spring", stiffness: 120 }}
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base, index) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <li key={index} onClick={() => addBase(base)}>
              <span className={spanClass}>{base}</span>
            </li>
          );
        })}
      </ul>
      {pizza.base && (
        <motion.div
          className="next"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 120, duration: 1 }}
        >
          <Link to="/toppings">
            <motion.button
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              whileHover={{
                scale: 1.1,
                textShadow: "0 0 4px #fff",
                boxShadow: "0 0 4px #fff",
              }}
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
