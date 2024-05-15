import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Admin() {
  const [prds, setPrds] = useState([]);
  const [product, setProduct] = useState({});
  const [show, setShow] = useState(false);

  let getProducts = () => {
    axios
      .get("https://e-commerce-backend-w3wd.onrender.com/api/products")
      .then((res) => {
        setPrds(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProducts();
  }, []);

  let deletePrd = (id) => {
    axios
      .delete(
        ` https://e-commerce-backend-w3wd.onrender.com/api/products/${id}`
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    getProducts();
  };

  let createPrd = () => {
    axios
      .post(
        ` https://e-commerce-backend-w3wd.onrender.com/api/products/`,
        product
      )
      .then((res) => {
        alert("product created successfly");
      })
      .catch((err) => console.log(err));
    getProducts();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  function openWin() {
    setShow(!show);
  }

  return (
    <div>
      <h1>Products</h1>
      <div className="container">
        <button className="btn btn-primary w-25 me-1" onClick={openWin}>
          Create New Product
        </button>
        <div
          id="new"
          className={`d-flex justify-content-center ${show ? "" : "d-none"}`}
        >
          <div className="w-50">
            <h5>name :</h5>
            <input
              className="form-control "
              type="text"
              name="name"
              onChange={handleInputChange}
            />
            <h5>image :</h5>
            <input
              className="form-control "
              type="text"
              name="imageURL"
              onChange={handleInputChange}
            />
            <h5> Price:</h5>
            <input
              className="form-control"
              type="text"
              name="price"
              onChange={handleInputChange}
            />
            <h5> Quantity:</h5>
            <input
              className="form-control"
              type="text"
              name="items_left"
              onChange={handleInputChange}
            />
            <h5> Brand:</h5>
            <input
              className="form-control"
              type="text"
              name="brand"
              onChange={handleInputChange}
            />
            <h5> Gender:</h5>
            <input
              className="form-control"
              type="text"
              name="gender"
              onChange={handleInputChange}
            />
            <button
              className="btn btn-danger mt-2 w-50 me-1"
              onClick={createPrd}
            >
              Create
            </button>
          </div>
        </div>
        <div className="row g-3">
          {prds.map((elm, idx) => {
            return (
              <div key={idx} className="col-md-3">
                <div className="item p-3">
                  <img
                    src={elm.imageURL}
                    className="w-100  m-2"
                    height={230}
                    alt="img"
                  />
                  <div className="d-flex justify-content-between px-3">
                    <h6>{elm.name}</h6>
                    <h6>{elm.price}$</h6>
                  </div>
                  <div className='d-flex justify-content-between "'>
                    <button
                      className="btn btn-danger w-50 me-1"
                      onClick={() => deletePrd(elm.id)}
                    >
                      Delete
                    </button>
                    <Link
                      to={`/ProDetails/${elm.id}`}
                      className="btn btn-warning w-50 "
                    >
                      Edit
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
