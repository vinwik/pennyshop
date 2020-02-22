import React from "react";

import { Link } from "react-router-dom";

function CartTotal({ value }) {
  const { cart, cartTotal } = value;
  console.log(cart.count);
  return (
    <aside className="cart-total">
      <h4 className="cart-total__title">Order Summary</h4>
      <div className="cart-total__item">
        <h4 className="cart-total__quantity">
          {cart.length} {cart.length > 1 ? "items" : "item"}
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
