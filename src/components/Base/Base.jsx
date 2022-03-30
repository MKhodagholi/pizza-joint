import React from "react";

import { bases } from "../../store";
import { Link } from "react-router-dom";

const Base = ({ pizza, addBase }) => {
  
  return (
    <div className="base container">
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
        <div className="next">
          <Link to="/toppings">
            <button>Next</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Base;
