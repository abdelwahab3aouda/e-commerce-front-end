import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProDetails = () => {
  const [prd, setPrd] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://e-commerce-backend-w3wd.onrender.com/api/products/${id}`)
      .then((res) => {
        setPrd(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const updatePrd = () => {
    axios
      .put(
        `https://e-commerce-backend-w3wd.onrender.com/api/products/${id}`,
        prd
      )
      .then((res) => {
        setPrd(res.data);
        alert("updated");
      })
      .catch((err) => console.log(err));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPrd((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <div>
        <h1>Product details</h1>
        <div className="row">
          <div className="col-md-4">
            <img src={prd.imageURL} className="w-100" alt="..." />
          </div>
          <div className="col-md-4 m-3">
            <div className=" text-start ">
              <h5>name :</h5>
              <input
                className="form-control "
                type="text"
                name="name"
                value={prd.name}
                onChange={handleInputChange}
              />
              <h5> Price:</h5>
              <input
                className="form-control"
                type="text"
                name="price"
                value={prd.price}
                onChange={handleInputChange}
              />
              <h5> Quantity:</h5>
              <input
                className="form-control"
                type="text"
                name="items_left"
                value={prd.items_left}
                onChange={handleInputChange}
              />
              <h5> Brand:</h5>
              <input
                className="form-control"
                type="text"
                name="brand"
                value={prd.brand}
                onChange={handleInputChange}
              />
              <h5> Gender:</h5>
              <input
                className="form-control"
                type="text"
                name="gender"
                value={prd.gender}
                onChange={handleInputChange}
              />
              <button
                className="btn btn-danger mt-2 w-50 me-1"
                onClick={updatePrd}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProDetails;
