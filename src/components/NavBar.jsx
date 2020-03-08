import React, { Component } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../assets/ps-logo.svg";
import { ReactComponent as ShoppingCart } from "../assets/shopping-cart.svg";

import { ProductConsumer } from "../context";

// import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => (
          <nav className="navbar">
            <Link to="/" className="navbar__brand">
              <Logo className="navbar__brand-logo" height="52px" width="52px" />
              <span className="navbar__brand-name">Penny'Shop</span>
            </Link>
            <ul className="navbar__nav">
              <li className="navbar__nav-items">
                <Link to="/skateboards" className="navbar__nav-links">
                  Skateboards
                </Link>
              </li>
              <li className="navbar__nav-items">
                <Link to="/collections" className="navbar__nav-links">
                  Collections
                </Link>
              </li>
              <li className="navbar__nav-items">
                <Link
                  to="/shop"
                  className="navbar__nav-links"
                  onClick={() => (value.filteredList = [])}
                >
                  Shop
                </Link>
              </li>
            </ul>
            <button className="navbar__cart">
              <Link to="/cart" className="navbar__cart-link">
                <ShoppingCart height="24px" />
              </Link>
            </button>
          </nav>
        )}
      </ProductConsumer>
    );
  }
}

export default NavBar;
