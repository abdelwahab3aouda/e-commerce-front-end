import React from "react";
import { useNavigate } from "react-router-dom";

export default function Profile({ userData }) {
  let navigate=useNavigate()
function deleteme(){
  localStorage.removeItem('token')
  navigate('/register')
  
}


  return (
    <>
      <div className="w-50  mt-3 ">
        <h3> My Profile :</h3>
        <hr />
        <h4>
          Name: {userData?.first_name} {userData?.last_name}
        </h4>
        <h4 className="my-2">Email: {userData?.email}</h4>
        <h4>Age: {userData?.age}</h4>
      </div>
    </>
  );
}

