import React from "react";

import { bases } from "../../store";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
};

const nextVariant = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stifness: 120,
    },
  },
};

const Base = ({ pizza, addBase }) => {
  return (
    <motion.div
      className="base container"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base, index) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              key={index}
              onClick={() => addBase(base)}
              whileHover={{ scale: 1.5, originX: 0, color: "#f8e112" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>
      {pizza.base && (
        <motion.div className="next" variants={nextVariant}>
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
