import React from "react";
import Title from "./Title";
import { Link } from "react-router-dom";

import { ProductConsumer } from "../context";

const Skateboards = () => {
  return (
    <ProductConsumer>
      {value => {
        const size = value.products.size;
        return (
          <section className="skateboards">
            <header className="skateboards__header">
              <Title title="Skateboards" />
            </header>
            <div className="container">
              <article className="penny">
                <div className="inner-article">
                  <h3>22" PENNY SKATEBOARD</h3>
                  <p>
                    The first and original 22” Penny Skateboard is a quick and
                    nimble ride that’s perfect for getting from place to place
                    quickly and with no fuss at all. Our 22” Penny is a great
                    size for skaters looking for easy transportation.
                  </p>
                  <button>
                    <Link
                      to="/"
                      className="dark-btn"
                      onClick={() => value.handleTags(`22"`)}
                    >
                      Shop now
                    </Link>
                  </button>
                </div>
              </article>
              <article className="nickel">
                <div className="inner-article">
                  <h3>27" PENNY SKATEBOARD</h3>
                  <p>
                    For those who like a little more plastic under their feet,
                    the Penny 27” skateboard is the one for you. Commonly
                    referred to as the “Nickel,” the 27” boasts the same great
                    features as the 22” however its larger deck is great for
                    little more stability.
                  </p>
                  <button>
                    <Link
                      to="/"
                      className="dark-btn"
                      onClick={() => value.handleTags(`27"`)}
                    >
                      Shop now
                    </Link>
                  </button>
                </div>
              </article>
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
};

export default Skateboards;
