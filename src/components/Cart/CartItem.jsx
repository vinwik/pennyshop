import React from "react";
import { ReactComponent as Trash } from "../../assets/trash.svg";
import { ReactComponent as PLus } from "../../assets/plus-square.svg";
import { ReactComponent as Minus } from "../../assets/minus-square.svg";

function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  console.log(item);
  const { increment, decrement, removeItem } = value;
  return (
    <div className="cart-item">
      <div className="cart-item__product-details">
        <div className="cart-item__img-container">
          <img src={img} alt={title} width="150px" />
        </div>
        <div className="cart-item__title">{title}</div>
      </div>

      <div className="cart-item__quantity">
        <div className="cart-item__counter">
          <button
            className="counter-decrement"
            disabled={count > 1 ? false : true}
            onClick={() => decrement(id)}
          >
            <Minus />
          </button>
          <span className="counter-amount">{count}</span>
          <button className="counter-increment" onClick={() => increment(id)}>
            <PLus />
          </button>
        </div>
        <div className="cart-item__remove" onClick={() => removeItem(id)}>
          Remove
        </div>
      </div>
      <div className="cart-item__price">£{price.toFixed(2)}</div>
      <div className="cart-item__total">
        <strong>£{total.toFixed(2)}</strong>
      </div>
    </div>
  );
}

export default CartItem;
