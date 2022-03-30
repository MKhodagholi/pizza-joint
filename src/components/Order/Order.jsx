import React from "react";

const Order = ({ pizza }) => {
  return (
    <div className="container order">
      <h2>Thanks you for your order</h2>
      <p>You ordered a {pizza.base} pizza with:</p>
      {pizza.toppings.map((topping, index) => (
        <div key={index}>{topping}</div>
      ))}
    </div>
  );
};

export default Order;
