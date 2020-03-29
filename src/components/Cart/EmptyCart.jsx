import React from "react";
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="empty-cart">
      <h1>shopping cart</h1>
      <h2>Your cart is empty</h2>
      <button className="light-btn">
        <Link to="/shop">Shop now</Link>
      </button>
    </div>
  );
}

export default EmptyCart;
