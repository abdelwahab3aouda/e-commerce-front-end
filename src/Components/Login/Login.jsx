import React, { useState } from "react";
import axios from "axios";
import joi from "joi";
import { useNavigate } from "react-router-dom";
import stsyels from "./login.module.scss";

export default function Login({ saveUSerData }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [errorsList, setErrorsList] = useState([]);
  let navigate = useNavigate();
  let goToHome = () => {
    navigate("/");
  };
  let goToRegister = () => {
    navigate("/register");
  };

  let submitFormData = async (e) => {
    e.preventDefault();
    let validationResponse = validateFormData();
    if (validationResponse.error) {
      setErrorsList(validationResponse.error.details);
    } else {
      let { data } = await axios.post(
        "https://movies-api.routemisr.com/signin",
        user
      );
      if (data.message === "success") {
        localStorage.setItem("token", data.token);
        goToHome();
        saveUSerData();
      } else {
        setErrorMsg(data.message);
      }
    }
  };
  let validateFormData = () => {
    const schema = joi.object({
      email: joi
        .string()
        .required()
        .email({ tlds: { allow: ["com", "net"] } }),
      password: joi
        .string()
        .required()
        // .pattern(new RegExp(/^[a z 0-9]{8,15}$/)),
    });
    return schema.validate(user, { abortEarly: false });
  };
  let getInputValue = (e) => {
    let myUser = { ...user }; //1  deep copy
    myUser[e.target.name] = e.target.value; //nadia
    setUser(myUser);
  };
  return (
    <div className="w-75 m-auto py-5">
      <h2>Login Form</h2>
      {errorsList.map((error, index) => (
        <div key={index} className="alert alert-danger p-2">
          {error.message}
        </div>
      ))}

      {errorMsg ? <div className="alert alert-danger p-2">{errorMsg}</div> : ""}
      <form onSubmit={submitFormData}>
        <div className="input-data my-2">
          <label htmlFor="email">Email</label>
          <input
            onChange={getInputValue}
            type="email"
            className="form-control my-2"
            name="email"
          />
        </div>
        <div className="input-data my-2">
          <label htmlFor="password">Password</label>
          <input
            onChange={getInputValue}
            type="password"
            className="form-control my-2"
            name="password"
          />
        </div>
        <div className=" d-flex justify-content-between my-3 ">
          <div>
            don't have an account ? <a onClick={goToRegister}>Register</a>
          </div>
          <button className="btn btn-info  float-end">login</button>
        </div>
      </form>
    </div>
  );
}
