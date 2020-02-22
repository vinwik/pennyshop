import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

import { ReactComponent as ShoppingCart } from "../assets/shopping-cart.svg";

export class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductConsumer>
        {value => (
          <div className="card">
            <div
              className="card__img-container"
              onClick={() => value.handleDetail(id)}
            >
              <Link to="/details">
                <img src={img} alt={title} className="card__img" />
              </Link>
              <h4 className="card__title">
                <Link to="/details">{title}</Link>
              </h4>
            </div>
            <p className="card__price">£{price}</p>
            <button
              className="card__btn dark-btn"
              disabled={inCart ? true : false}
              onClick={() => {
                value.addToCart(id);
              }}
            >
              <ShoppingCart className="card__btn-icon btn-icon" />
              {inCart ? (
                <span className="card__btn-text">In Cart</span>
              ) : (
                <span className="card__btn-text">Add to Cart</span>
              )}
            </button>
          </div>
        )}
      </ProductConsumer>
    );
  }
}

export default Product;
