import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();
//PROVIDER
//CONSUMER

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    cartTotal: 0
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let products = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      products = [...products, singleItem];
    });
    this.setState(() => {
      return { products };
    });
  };

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  addToCart = id => {
    let products = [...this.state.products];
    const index = products.indexOf(this.getItem(id));
    const product = products[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return { products, cart: [...this.state.cart, product] };
      },
      () => {
        this.sumTotals();
      }
    );
  };

  increment = id => {
    let cart = [...this.state.cart];
    const selectedProduct = cart.find(item => item.id === id);

    const index = cart.indexOf(selectedProduct);
    const product = cart[index];

    product.count += 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return { cart };
      },
      () => {
        this.sumTotals();
      }
    );
  };

  decrement = id => {
    let cart = [...this.state.cart];
    const selectedProduct = cart.find(item => item.id === id);

    const index = cart.indexOf(selectedProduct);
    const product = cart[index];

    if (product.count > 1) {
      product.count -= 1;
      product.total = product.count * product.price;
    }

    this.setState(
      () => {
        return { cart };
      },
      () => {
        this.sumTotals();
      }
    );
  };

  removeItem = id => {
    let products = [...this.state.products];
    let cart = [...this.state.cart];

    cart = cart.filter(item => item.id !== id);

    const index = products.indexOf(this.getItem(id));
    let removedProduct = products[index];

    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      () => {
        return { products, cart };
      },
      () => {
        this.sumTotals();
      }
    );
  };

  sumTotals = () => {
    let total = 0;
    this.state.cart.map(item => (total += item.total));
    this.setState(() => {
      return {
        cartTotal: total
      };
    });
  };

  render() {
    // console.log(this.state.products);
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          decrement: this.decrement,
          increment: this.increment,
          removeItem: this.removeItem
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };