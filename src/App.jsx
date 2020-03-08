import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default";
import Skateboards from "./components/Skateboards";
import Collections from "./components/Collections";

// import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/shop" component={ProductList} />
          <Route exact path="/skateboards" component={Skateboards} />
          <Route exact path="/collections" component={Collections} />
          <Route path="/shop" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;