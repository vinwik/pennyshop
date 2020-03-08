import React from "react";

import { Link } from "react-router-dom";

function CartTotal({ value }) {
  const { cart, cartTotal } = value;
  const count = cart.reduce((total, cart) => {
    return total + cart.count;
  }, 0);
  return (
    <aside className="cart-total">
      <h4 className="cart-total__title">Order Summary</h4>
      <div className="cart-total__item">
        <h4 className="cart-total__quantity">
          <span>{count}</span>
          <span> </span>
          <span>{count > 1 ? "items" : "item"}</span>
        </h4>
        <h4 className="item__subtotal">£{cartTotal.toFixed(2)}</h4>
      </div>
      <div className="cart-total__total">
        <h4 className="total-title">Total</h4>
        <h4 className="total-amount">£{cartTotal.toFixed(2)}</h4>
      </div>
      <button className="cart-total__checkout-btn">
        <Link className="dark-btn">Checkout</Link>
      </button>
    </aside>
  );
}

export default CartTotal;
