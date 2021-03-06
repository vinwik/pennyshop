import React, { Component } from "react";
import Title from "./Title";

import { ProductConsumer } from "../context";
import Product from "./Product";

class ProductList extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <Title title="Shop" />
          <div className="product">
            <ProductConsumer>
              {value => {
                if (value.filteredList.length) {
                  return value.filteredList.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                } else {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                }
              }}
            </ProductConsumer>
          </div>
        </div>
      </section>
    );
  }
}

export default ProductList;
