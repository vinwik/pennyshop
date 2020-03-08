import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

import { ReactComponent as ShoppingCart } from "../assets/shopping-cart.svg";

export class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            img,
            title,
            collection,
            price,
            info,
            inCart
          } = value.detailProduct;
          return (
            <div className="details container">
              <img src={`.${img}`} alt={title} className="details__img" />
              <div className="details__text">
                <h2 className="details__text-title">{title}</h2>
                <p className="details__text-category">
                  <strong>Collection : </strong>
                  {collection}
                </p>
                <h3 className="details__text-price">£{price}</h3>
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
                <h4 className="details__text-description">
                  Product description
                </h4>
                <p className="details__text-info">{info}</p>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
