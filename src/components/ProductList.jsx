import React, { Component } from "react";
import Title from "./Title";

import { ProductConsumer } from "../context";
import Product from "./Product";

class ProductList extends Component {
  render() {
    return (
      <div className="container">
        <Title title="Skateboards" />
        <div className="product">
          <ProductConsumer>
            {value => {
              return value.products.map(product => {
                return <Product key={product.id} product={product} />;
              });
            }}
          </ProductConsumer>
        </div>
      </div>
    );
  }
}

export default ProductList;
