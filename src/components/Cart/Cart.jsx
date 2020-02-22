import React, { Component } from "react";
import Title from "../Title";
import EmptyCart from "./EmptyCart";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

import { ProductConsumer } from "../../context";

export class Cart extends Component {
  render() {
    return (
      <section className="cart container">
        <Title title="Shopping Cart" />
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <div className="cart__row">
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotal value={value} />
                </div>
              );
            } else {
              return (
                <React.Fragment>
                  <EmptyCart />
                </React.Fragment>
              );
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}

export default Cart;
