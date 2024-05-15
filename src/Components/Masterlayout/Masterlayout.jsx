import React from "react";
import Navbar from "./../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./../Footer/Footer";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

export default function Masterlayout({ userData, logout }) {
  return (
    <>
      <Navbar userData={userData} logout={logout} />
      <div className="container">
        <Outlet></Outlet>
      </div>

      <ProtectedRoute userData={userData}>
        <Footer />
      </ProtectedRoute>
    </>
  );
}
