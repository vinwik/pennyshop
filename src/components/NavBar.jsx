import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../assets/ps-logo.svg";
import { ReactComponent as ShoppingCart } from "../assets/shopping-cart.svg";
import { ReactComponent as Bars } from "../assets/bars.svg";
import { ReactComponent as Close } from "../assets/times.svg";

import { ProductConsumer } from "../context";

// import "./NavBar.css";

const Menu = props => {
  const handleClose = () => {
    props.setIsVisible(false);
  };

  return (
    <ProductConsumer>
      {value => {
        return (
          <nav className={`menu ${props.isVisible ? "visible" : null}`}>
            <div className="menu__header">
              <Link to="/" className="menu__brand" onClick={handleClose}>
                <Logo className="menu__brand-logo" height="32px" width="32px" />
                <span className="menu__brand-name">Penny'Shop</span>
              </Link>
              <button className="menu__close" onClick={handleClose}>
                <Close height="24px" />
              </button>
            </div>
            <ul className="menu__nav">
              <li className="menu__nav-items">
                <Link
                  to="/skateboards"
                  className="navbar__nav-links"
                  onClick={handleClose}
                >
                  Skateboards
                </Link>
              </li>
              <li className="menu__nav-items" onClick={handleClose}>
                <Link to="/collections" className="navbar__nav-links">
                  Collections
                </Link>
              </li>
              <li className="menu__nav-items">
                <Link
                  to="/shop"
                  className="menu__nav-links"
                  onClick={() => (value.filteredList = [])}
                  onClick={handleClose}
                >
                  Shop
                </Link>
              </li>
            </ul>
          </nav>
        );
      }}
    </ProductConsumer>
  );
};

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <ProductConsumer>
      {value => {
        const cart = value.cart;
        const count = cart.reduce((total, cart) => {
          return total + cart.count;
        }, 0);

        return (
          <nav className="navbar" onBlur={() => setIsVisible(false)}>
            <button className="navbar__menu" onClick={() => setIsVisible(true)}>
              <Bars height="24px" />
            </button>
            <Menu isVisible={isVisible} setIsVisible={setIsVisible} />
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
                <span>{count > 0 ? count : ""}</span>
              </Link>
            </button>
          </nav>
        );
      }}
    </ProductConsumer>
  );
};

export default NavBar;
