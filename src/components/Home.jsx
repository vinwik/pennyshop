import React from "react";
import Title from "./Title";
import Product from "./Product";

import Banner1 from "../assets/star-wars-banner.jpg";
import Banner2 from "../assets/classic.jpg";
import Banner3 from "../assets/skateboards.jpg";

import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "../slick-theme.css";

const Home = () => {
  const settings = {
    autoplay: true,
    pauseOnFocus: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000
  };

  return (
    <ProductConsumer>
      {value => {
        const bestSellers = [...value.products]
          .sort((a, b) => b.likes - a.likes)
          .slice(0, 4);

        return (
          <section className="home">
            <Slider {...settings}>
              <div className="slide">
                <div
                  className="slide-container"
                  style={{
                    backgroundImage: `url(${Banner1})`
                  }}
                >
                  <Title title="star wars collection" />
                  <button className="light-btn">
                    <Link
                      to="/shop"
                      onClick={() => value.handleTags("Star Wars")}
                    >
                      Shop now
                    </Link>
                  </button>
                </div>
              </div>
              <div className="slide">
                <div
                  className="slide-container"
                  style={{
                    backgroundImage: `url(${Banner2})`
                  }}
                >
                  <Title title="classic collection" />
                  <button className="light-btn">
                    <Link
                      to="/shop"
                      onClick={() => value.handleTags("Classic")}
                    >
                      Shop now
                    </Link>
                  </button>
                </div>
              </div>
              <div className="slide">
                <div
                  className="slide-container"
                  style={{
                    backgroundImage: `url(${Banner3})`
                  }}
                >
                  <Title title="skateboards" />
                  <button className="light-btn">
                    <Link to="/skateboards">Shop by size</Link>
                  </button>
                </div>
              </div>
            </Slider>
            <div className="container">
              <Title title="top picks" />
              <div className="product">
                {bestSellers.map(product => {
                  return <Product key={product.id} product={product} />;
                })}
              </div>
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
};

export default Home;
