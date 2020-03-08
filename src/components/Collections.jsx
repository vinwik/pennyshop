import React from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import Product from "./Product";

const Collections = () => {
  return (
    <ProductConsumer>
      {value => {
        const tags = value.products.tags;
        return (
          <section className="collections">
            <header className="collections__header">
              <Title title="Collections" />
            </header>
            <div className="container">
              <article className="classic">
                <div className="inner-article">
                  <h3>CLASSIC</h3>
                  <p>
                    Distinguished by its plastic deck, the Classic Penny
                    Skateboard is available in a variety of colours and designs.
                    It will be your best companion for your barefoot,
                    particularly during the summer.
                  </p>
                  <button>
                    <Link
                      to="/shop"
                      className="dark-btn"
                      onClick={() => value.handleTags("Classic")}
                    >
                      Shop now
                    </Link>
                  </button>
                </div>
              </article>
              <article className="star-wars">
                <div className="inner-article">
                  <h3>STAR WARS COLLECTION</h3>
                  <p>
                    Not so long ago… in a skatepark not so far away… Penny
                    Skateboards and Star Wars combined forces to bring the
                    galaxy a collaboration like none before it. You can roll on
                    the dark side with Darth Vader and his loyal army of
                    Stormtroopers; or you could side with the Rebels and hop on
                    R2-D2. You don’t like to pick sides? Blast off with Boba
                    Fett. Ride safe young padawans!
                  </p>
                  <button>
                    <Link
                      to="/shop"
                      className="dark-btn"
                      onClick={() => value.handleTags("Star Wars")}
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

export default Collections;
