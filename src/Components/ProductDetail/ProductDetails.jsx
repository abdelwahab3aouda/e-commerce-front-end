import React from "react";
import styles from "./product.module.css";
import styles2 from "../Hotdeals/Hotdeals.module.css";
import { Link } from "react-router-dom";
import IncDec from "./IncDec";
import { blue } from "@mui/material/colors";
import ProductInfo from "./ProductInfo";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

const { useState, useEffect } = React;

export default function ProductDetails() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const imgs = document.querySelectorAll(".img_select a");
  const imgBtns = [...imgs];
  let imgId = 1;

  imgBtns.forEach((imgItem) => {
    imgItem.addEventListener("click", (event) => {
      event.preventDefault();
      imgId = imgItem.dataset.id;
      slideImage();
    });
  });

  const [related, setRelated] = useState([]);
  const [addedToCart, setAddedToCart] = useState(false);

  function get_related() {
    axios
      .get(`https://e-commerce-backend-w3wd.onrender.com/api/products`)
      .then((res) => {
        console.log(res.data);
        let related_data = res.data.filter((item) => item.id <= 3);
        setRelated(related_data);
      })
      .catch((e) => console.log(e));
  }
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    getDetails();
    get_related();
  }, []);

  function getDetails() {
    axios
      .get(`https://e-commerce-backend-w3wd.onrender.com/api/products/${id}`)
      .then((res) => {
        // Handle successful response here
        const productData = res.data;
        const lsCartItems = localStorage.getItem("cartItems");
        const cartItems = lsCartItems ? JSON.parse(lsCartItems) : [];
        setAddedToCart(cartItems.includes(res.data.id));
        setData(productData);
      })
      .catch((e) => console.log(e));
  }

  function slideImage() {
    const displayWidth = document.querySelector(
      ".img_showcase img:first-child"
    ).clientWidth;

    document.querySelector(".img_showcase").style.transform = `translateX(${
      -(imgId - 1) * displayWidth
    }px)`;
  }

  window.addEventListener("resize", slideImage);

  return (
    <>
      <div>
        <div className={styles.card_wrapper}>
          <div className={styles.card}>
            <div className={styles.product_imgs}>
              <div className={styles.img_display}>
                <div className={`${styles.img_showcase} img_showcase`}>
                  <img src={data.imageURL} alt="shoe image" />
                  <img
                    src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg"
                    alt="shoe image"
                  />
                  <img
                    src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg"
                    alt="shoe image"
                  />
                  <img
                    src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg"
                    alt="shoe image"
                  />
                </div>
              </div>
              <div className={`${styles.img_select} img_select`}>
                <div className={styles.img_item}>
                  <Link s="#" data-id="1">
                    <img
                      src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg"
                      alt="shoe image"
                    />
                  </Link>{" "}
                </div>
                <div className={styles.img_item}>
                  <Link to="#" data-id="2">
                    <img
                      src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg"
                      alt="shoe image"
                    />
                  </Link>{" "}
                </div>
                <div className={styles.img_item}>
                  <Link to="#" data-id="3">
                    <img
                      src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg"
                      alt="shoe image"
                    />
                  </Link>{" "}
                </div>
                <div className={styles.img_item}>
                  <Link to="#" data-id="4">
                    <img
                      src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg"
                      alt="shoe image"
                    />
                  </Link>{" "}
                </div>
              </div>
            </div>

            <div className={styles.product_content}>
              <h2 className={styles.product_title}>{data.name}</h2>
              <div
                style={{ display: "flex", gap: "10%" }}
                className={`${styles.product_rating} product-rating `}
              >
                <div>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <span style={{ color: "rgb(204, 204, 204)" }}>
                  {data.rating?.count} reviews{" "}
                </span>
                <span style={{ color: "#00BFFF" }}>Great Quality </span>
              </div>

              <div className={styles.product_price}>
                <p className={styles.new_price}>
                  <span>${data.price * 0.8}</span>
                </p>
                <p className={styles.current_price}>
                  {" "}
                  <span>${data.price}</span>
                </p>
                <p className={styles.last_price}>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>20% OFF</span>
                </p>
              </div>

              <div className={styles.product_detail}>
                <div className="row">
                  <ul className={styles.ul_product_lists}>
                    <li>
                      Availablity:{" "}
                      <span>
                        {data.is_in_inventory ? "In Stock" : "Out Of Stock"}
                      </span>
                    </li>
                    <li>
                      Category: <span>{data.category}</span>
                    </li>
                    <li>
                      Shipping Fees: <span>Free</span>
                    </li>
                    <li>
                      Items Left: <span>{data.items_left}</span>
                    </li>
                  </ul>
                  <div className={styles.main_inputs}>
                    <div className={styles.colorChange}>
                      <div>
                        <span> Select color</span>{" "}
                      </div>
                      <div className={styles.colorrrs}>
                        <input
                          type="color"
                          className={styles.style1}
                          value={blue}
                        />{" "}
                        <input
                          className={styles.style1}
                          type="color"
                          id="style1"
                          value="red"
                        />
                        <input
                          className={styles.style1}
                          type="color"
                          id="style1"
                          value="black"
                        />{" "}
                        <input
                          className={styles.style1}
                          type="color"
                          id="style1"
                          value="yellow"
                        />
                      </div>
                    </div>

                    <div
                      style={{ width: "45%", margin: ".5rem .1rem" }}
                      className={styles.sizes_input}
                    >
                      <span>Size</span>
                      <select
                        id="size"
                        name="size"
                        className={`${styles.form_control} form-control`}
                      >
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.thirdSection}>
                <div className={styles.purchase_info}>
                  <IncDec className={styles.IncDe} />
                  <div className={styles.mainBtns}>
                    <button
                      style={{ display: addedToCart ? "none" : "block" }}
                      type="button"
                      className={`${styles.btn} btn `}
                      onClick={() => {
                        const lsCartItems = localStorage.getItem("cartItems");
                        const cartItems = lsCartItems
                          ? JSON.parse(lsCartItems)
                          : [];
                        cartItems.push(data.id);
                        localStorage.setItem(
                          "cartItems",
                          JSON.stringify(cartItems)
                        );
                        setAddedToCart(true);
                      }}
                    >
                      Add To Cart <i className="fas fa-shopping-cart"></i>
                    </button>

                    <button
                      style={{ display: addedToCart ? "block" : "none" }}
                      type="button"
                      className={`${styles.btn} btn `}
                      onClick={() => {
                        const lsCartItems = localStorage.getItem("cartItems");
                        let cartItems = lsCartItems
                          ? JSON.parse(lsCartItems)
                          : [];
                        cartItems = cartItems.filter((i) => i !== data.id);
                        localStorage.setItem(
                          "cartItems",
                          JSON.stringify(cartItems)
                        );
                        setAddedToCart(false);
                      }}
                    >
                      Remove From Cart <i className="fas fa-shopping-cart"></i>
                    </button>

                    <button type="button" className={styles.btn}>
                      {" "}
                      <i className="fa-regular fa-heart "></i>
                    </button>
                  </div>
                  <div></div>
                </div>
                <div className={styles.socialBtns}>
                  <div className={styles.fbMainBtn}>
                    <a
                      href="https://www.facebook.com/XMehdiHack2"
                      target="_blank"
                    >
                      <input
                        type="submit"
                        className={styles.XM}
                        value="Facebook"
                        title="Add Me On Facebook"
                      />
                    </a>
                  </div>

                  <div className={styles.fbMainBtn}>
                    <a
                      href="https://www.facebook.com/XMehdiHack2"
                      target="_blank"
                    >
                      <input
                        type="submit"
                        style={{ background: "#00BFFF" }}
                        className={styles.XM}
                        value="Twitter"
                        title="Add Me On Facebook"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ProductInfo data={data} />

        <div>
          <div className={styles.relatedProducts}>
            <h1>
              <b>Related Products</b>
            </h1>
            <div className="container row">
              {related.map((product) => (
                <div key={product.id} className="col-md-4  mt-4">
                  <div
                    className={`card shadow-lg p-3 mb-5 bg-white rounded ${styles2.main_card}`}
                  >
                    <div className={styles2.product_img_container}>
                      <span className={styles2.hot}>HOT</span>
                      <img
                        className={`card-img-top ${styles2.product_img}`}
                        src={product.imageURL}
                        alt={product.name}
                      />
                      <div className="card-body text-start">
                        <Link
                          to={`/ProductDetails/${product.id}`}
                          className={styles2.name}
                        >
                          <h5 className={`card-title ${styles2.name}`}>
                            {product.name}
                          </h5>
                        </Link>
                        <h3 className="card-title">{product.brand}</h3>
                        <h3 className={`card-title ${styles2.realprice}`}>
                          {product.price}$
                        </h3>
                        <h3
                          className={`card-title text-decoration-line-through ${styles2.price}`}
                        >
                          <i>{product.price * 1.2}$</i>
                        </h3>

                        <a
                          href="#"
                          className={`btn btn-outline-success text-secondary me-5 ${styles2.card_icon}`}
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
                          className={`btn btn-outline-danger text-danger ${styles2.love_icon}`}
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
        </div>
      </div>
    </>
  );
}
