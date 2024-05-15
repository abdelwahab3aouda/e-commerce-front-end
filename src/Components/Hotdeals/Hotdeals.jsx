import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Hotdeals.module.css";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

const Hotdeals = () => {
  const location = useLocation();
  const currentRoute = location.pathname;
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    axios
      .get("https://e-commerce-backend-w3wd.onrender.com/api/products")
      .then((res) => {
        console.log(res.data);
        let filteredData = res.data.filter((item) => item.price >= 100);
        setProducts(filteredData);
      })
      .catch((e) => console.log(e));
  };
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    getProducts();
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className={styles.star}>
          &#9733;
        </span>
      );
    }
    while (stars.length < 5) {
      stars.push(
        <span key={stars.length} className={styles.star}>
          &#9734;
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="container-fluid">
      <h1 className={`text-center mb-5 mt-1 text-primary ${styles.path}`}>
        Home {currentRoute}
      </h1>
      <div
        className="mt-4"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {products.map((product) => (
          <div key={product.id} className="d-flex mt-4">
            <div
              className={`card shadow-lg p-3 mb-5 bg-white rounded ${styles.main_card}`}
            >
              <div className={styles.product_img_container}>
                <span className={styles.hot}>HOT</span>
                <img
                  className={`card-img-top ${styles.product_img}`}
                  src={product.imageURL}
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className={`card-title ${styles.name}`}>
                    {product.name}
                  </h5>
                  <h3 className="card-title">{product.brand}</h3>
                  <h3 className={`card-title ${styles.realprice}`}>
                    {product.price}$
                  </h3>
                  <h3
                    className={`card-title text-decoration-line-through ${styles.price}`}
                  >
                    <i>{product.price * 1.2}$</i>
                  </h3>
                  <p className="card-text"></p>
                  <div className="rating">
                    {renderStars(product.rating.rate)}
                  </div>
                  <span>({product.rating.count} reviews)</span>
                  <a
                    href="#"
                    className={`btn btn-outline-success text-secondary me-5 ${styles.card_icon}`}
                    title="Add To Card"
                    onClick={() => addProduct(product)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-bag"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className={`btn btn-outline-danger text-danger ${styles.love_icon}`}
                    title="Add To Favorite"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-heart"
                      viewBox="0 0 16 16"
                    >
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotdeals;
