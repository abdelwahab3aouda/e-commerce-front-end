import Stsyels from "./home.module.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./home-page.css";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
// images
import shipping_img from "./images/shipping.png";
import Nike_img from "./images/Nike_logo_emblem_logotype.png";
import figma_img from "./images/figma-1-logo.png";
import kronos_img from "./images/kronos-logo-1-1.png";
import refund_img from "./images/refund.png";
import shoes_img from "./images/shoes-shoe-png-transparent-shoe-images-pluspng-17.png";
import support_img from "./images/support.png";

const Home = () => {
  let [products, setProducts] = useState([]);
  let [bannerProducts, setBannerProducts] = useState([]);

  let getProducts = () => {
    axios
      .get("https://e-commerce-backend-w3wd.onrender.com/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  };
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      let choosenIndeces = [];
      let choosedPrds = [];
      for (let i = 0; i < 3; i++) {
        // 3 products
        let randIndex;
        let found;
        do {
          randIndex = Math.floor(Math.random() * products.length);
          found = false;
          for (i = 0; i < choosenIndeces.length; i++) {
            if (choosenIndeces[i] === randIndex) {
              found = true;
              break;
            }
          }
        } while (found);
        choosenIndeces.push(randIndex);
        choosedPrds.push(products[randIndex]);
      }
      setBannerProducts(choosedPrds);
    }
  }, [products]);

  return (
    <>
      <div
        id="Info"
        className={`bg-white d-none text-dark mt-5 w-50 m-auto px-5 py-3 ${Stsyels.info}`}
      >
        <div
          className={`d-flex justify-content-between  list-unstyled ${Stsyels.info2}`}
        >
          <div>
            <li className="mb-2 ms-2 ">catagory</li>
          </div>
          <div>
            <li className="mb-2 ms-5 ps-5 ">catagory</li>
          </div>
          <div>
            <li className=" mb-2 me-5  ">catagory</li>
          </div>
        </div>
        <div className=" d-flex justify-content-between">
          <div>
            <ul className="list-unstyled ">
              <li className="my-2">Comporate Shoes</li>
              <li className="my-2">Hotdeals</li>
              <li className="my-2">Sandals</li>
              <li className="my-2">Sport Shoe</li>
              <li className="my-2">Trainers</li>
            </ul>
          </div>
          <div>
            <ul className="list-unstyled text-dark">
              <li className="my-2">Comporate Shoes</li>
              <li className="my-2">Hotdeals</li>
              <li className="my-2">Sandals</li>
              <li className="my-2">Sport Shoe</li>
              <li className="my-2">Trainers</li>
            </ul>
          </div>
          <div>
            <ul className="list-unstyled text-dark">
              <li className="my-2">HOT DELA</li>

              <li className="my-2">Sunglasses</li>
              <li className="my-2">Belts</li>
              <li className="my-2">Handbags</li>
              <li className="my-2">Hotdeals</li>
            </ul>
          </div>
          <div>
            <ul className="list-unstyled text-dark">
              <li className="my-2">HOT DELA</li>

              <li className="my-2">Sunglasses</li>
              <li className="my-2">Belts</li>
              <li className="my-2">Handbags</li>
              <li className="my-2">Hotdeals</li>
            </ul>
          </div>
          <div>
            <ul className="list-unstyled text-dark">
              <li className="my-2 ">Comporate Shoes</li>
              <li className="my-2">Hotdeals</li>
              <li className="my-2">Sandals</li>
              <li className="my-2">Sport Shoe</li>
              <li className="my-2">Trainers</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="home-page bg-white">
        <div className="offer-banner container-fluid position-relative">
          <h2 className="title text-white text-capitalize position-absolute top-50 translate-middle-y">
            super flash sale
            <br /> 50% off
          </h2>
        </div>

        <div className="banner container-sm px-4">
          <div className="banner-content row row-cols-1 row-cols-md-2 row-cols-lg-3">
            {bannerProducts.map((p, i) => {
              return (
                <div
                  key={p.i}
                  className="product p-0 position-relative"
                  style={{ Height: "350px" }}
                >
                  <img src={`${p.imageURL}`} alt="" className="h-100 w-100" />
                  <div className="content position-absolute">
                    <h3
                      className="name fs-5 m-2 position-absolute top-0 start-0"
                      style={{ height: "50px" }}
                    >
                      {/* make sure of the page name */}
                      <Link to={`/ProductDetails/${p.id}`}>{p.name}</Link>
                    </h3>

                    <div className="after-disc position-absolute bottom-0 end-0">
                      <span className="after-disc ps-2">{`$${(
                        p.price * 0.75
                      ).toFixed(2)}`}</span>
                    </div>
                    <div className="price position-absolute">
                      <span className="before-disc ps-2">
                        {" "}
                        {`$${p.price}`}{" "}
                      </span>
                      <span className="disc ps-2">25% Off</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="best-seller container-sm my-3">
          <h2 className="text-center text-uppercase fw-bold my-3">
            Best seller
          </h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
            {products.map((p, i) => {
              return (
                <div key={p.id} className="product col d-flex flex-column">
                  <div className="product-content border border-1 rounded-2">
                    <div className="image d-flex position-relative">
                      <img
                        style={{ height: "300px" }}
                        src={`${p.imageURL}`}
                        alt=""
                        className="w-100"
                      />
                      <div className="cart-favorite-info bg-white rounded-2 position-absolute justify-content-center align-items-center gap-2">
                        <button className="heart rounded-circle p-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="#33A0FF"
                            className="bi bi-heart"
                            viewBox="0 0 16 16"
                          >
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                          </svg>
                        </button>
                        <button
                          className="cart rounded-circle p-2"
                          onClick={() => addProduct(p)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="#33A0FF"
                            className="bi bi-cart3"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="info text-center m-2">
                      <h3 className="name fs-5 m-2" style={{ height: "50px" }}>
                        {/* make sure of the page name */}
                        <Link to={`/ProductDetails/${p.id}`}>{p.name}</Link>
                      </h3>
                      <div
                        className="rate d-flex justify-content-center gap-1 mb-2"
                        title={`${p.rating.rate}`}
                      >
                        {[...Array(Math.floor(p.rating.rate))].map((_, i) => {
                          return (
                            <svg
                              key={`${p.id}-${i}`}
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="gold"
                              className="bi bi-star-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                          );
                        })}
                        {[...Array(1)].map((_, i) => {
                          let rate = p.rating.rate;
                          let subStar = rate - Math.floor(rate);
                          if (subStar !== 0) {
                            return (
                              <svg
                                key={`${p.id}-${i}`}
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill={`url(#grad-${p.id})`}
                                className="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <defs>
                                  <linearGradient
                                    id={`grad-${p.id}`}
                                    x1="0%"
                                    y1="0%"
                                    x2="100%"
                                    y2="0%"
                                  >
                                    <stop
                                      offset="0%"
                                      stopColor="gold"
                                      stopOpacity="1"
                                    />
                                    <stop
                                      offset={`${subStar * 100}%`}
                                      stopColor="gold"
                                      stopOpacity="1"
                                    />
                                    <stop
                                      offset={`${subStar * 100}%`}
                                      stopColor="#c1c8ce"
                                      stopOpacity="1"
                                    />
                                    <stop
                                      offset="100%"
                                      stopColor="#c1c8ce"
                                      stopOpacity="1"
                                    />
                                    {/* <stop offset="100%" style={{stopColor:"rgb(255,0,0)",stopOpacity:"1"}} /> */}
                                  </linearGradient>
                                </defs>
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                            );
                          }
                        })}
                      </div>

                      <div className="price">
                        <span className="after-disc ps-2">{`$${(
                          p.price * 0.75
                        ).toFixed(2)}`}</span>
                        <span className="before-disc ps-2">
                          {" "}
                          {`$${p.price}`}{" "}
                        </span>
                        <span className="disc ps-2">25% Off</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="button-div d-flex justify-content-center">
            <button>load more</button>
          </div>
        </div>

        <div className="offer-banner-2 container-fluid p-0 p-md-4 position-relative">
          <img src={shoes_img} alt="" />
          <div className="text text-white text-capitalize position-absolute top-50 translate-middle-y">
            <h2>
              Adidas Men Running <br /> Sneakers
            </h2>
            <p>Performance and design. Taken right to the edge.</p>
            <button> SHOP NOW </button>
          </div>
        </div>

        <div className="why-us py-5 ">
          <h2 className="text-center p-3" style={{ color: "#22262A" }}>
            {" "}
            WHY US{" "}
          </h2>
          <div className="container d-flex flex-column align-items-center flex-md-row justify-content-md-around">
            <div className="service">
              <img className="img1" src={shipping_img} alt="" />
              <h3> FREE SHIPPING </h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            <div className="service">
              <img className="img2" src={refund_img} alt="" />
              <h3> 100% REFUND </h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            <div className="service">
              <img className="img3" src={support_img} alt="" />
              <h3> SUPPORT 24/7 </h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>

        <div className="latest-news">
          <h2 className="text-center p-3" style={{ color: "#22262A" }}>
            {" "}
            LATEST NEWS{" "}
          </h2>
          <div className="container d-flex flex-column align-items-center gap-3 gap-lg-2 flex-lg-row justify-content-lg-around">
            <div className="service flex-column flex-lg-row text-center text-lg-srart">
              <div className="image">
                <img className="img1" src={Nike_img} alt="" />
              </div>
              <div className="info">
                <div className="date"> 01 Jan, 2015 </div>
                <h3> Fashion Industry </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>

            <div className="service flex-column flex-lg-row text-center text-lg-srart">
              <div className="image">
                <img className="img2" src={figma_img} alt="" />
              </div>
              <div className="info">
                <div className="date"> 01 Jan, 2015 </div>
                <h3> Best Design Tools </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>

            <div className="service flex-column flex-lg-row text-center text-lg-srart">
              <div className="image">
                <img className="img3" src={kronos_img} alt="" />
              </div>
              <div className="info">
                <div className="date"> 01 Jan, 2015 </div>
                <h3> HR Community </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="featured-products">
          <h2 className="text-center p-3" style={{ color: "#22262A" }}>
            {" "}
            FEATURED PRODUCTS{" "}
          </h2>
          <div className="container-sm">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
              {bannerProducts.map((p, i) => {
                return (
                  <div key={p.id} className="product p-2 p-lg-4">
                    <div className="product-content d-flex border border-1 rounded-2">
                      <div className="image d-flex position-relative">
                        <img
                          style={{ height: "150px", width: "150px" }}
                          src={`${p.imageURL}`}
                          alt=""
                        />
                        <div className="cart-favorite-info bg-white rounded-2 position-absolute justify-content-center align-items-center gap-2">
                          <button className="heart rounded-circle p-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="#33A0FF"
                              className="bi bi-heart"
                              viewBox="0 0 16 16"
                            >
                              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg>
                          </button>
                          <button
                            className="cart rounded-circle p-2"
                            onClick={() => addProduct(p)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="#33A0FF"
                              className="bi bi-cart3"
                              viewBox="0 0 16 16"
                            >
                              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="info d-flex gap-2 flex-column">
                        <h3
                          className="name fs-5 m-2"
                          style={{ height: "50px" }}
                        >
                          {/* make sure of the page name */}
                          <Link to={`/ProductDetails/${p.id}`}>{p.name}</Link>
                        </h3>
                        <div
                          className="rate d-flex gap-1 m-2"
                          title={`${p.rating.rate}`}
                        >
                          {[...Array(Math.floor(p.rating.rate))].map(() => {
                            return (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="gold"
                                className="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                            );
                          })}
                          {[...Array(1)].map(() => {
                            let rate = p.rating.rate;
                            let subStar = rate - Math.floor(rate);
                            if (subStar !== 0) {
                              return (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill={`url(#grad-${p.id})`}
                                  className="bi bi-star-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <defs>
                                    <linearGradient
                                      id={`grad-${p.id}`}
                                      x1="0%"
                                      y1="0%"
                                      x2="100%"
                                      y2="0%"
                                    >
                                      <stop
                                        offset="0%"
                                        stopColor="gold"
                                        stopOpacity="1"
                                      />
                                      <stop
                                        offset={`${subStar * 100}%`}
                                        stopColor="gold"
                                        stopOpacity="1"
                                      />
                                      <stop
                                        offset={`${subStar * 100}%`}
                                        stopColor="#c1c8ce"
                                        stopOpacity="1"
                                      />
                                      <stop
                                        offset="100%"
                                        stopColor="#c1c8ce"
                                        stopOpacity="1"
                                      />
                                      {/* <stop offset="100%" style={{stopColor:"rgb(255,0,0)",stopOpacity:"1"}} /> */}
                                    </linearGradient>
                                  </defs>
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                              );
                            }
                          })}
                        </div>

                        <div className="price">
                          <span className="after-disc ps-2">{`$${(
                            p.price * 0.75
                          ).toFixed(2)}`}</span>
                          <span className="before-disc ps-2">
                            {" "}
                            {`$${p.price}`}{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="container-sm py-5 d-flex justify-content-center">
          <div className="search">
            <input
              className="p-2"
              type="search"
              placeholder="Search query..."
            />
            <button className="p-3"> search</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
