import "./App.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Masterlayout from "./../Masterlayout/Masterlayout";
import Notfound from "./../Notfound/Notfound";
import Home from "./../Home/Home";
import Register from "./../Register/Register";
import Login from "./../Login/Login";
import Hotdeals from "../Hotdeals/Hotdeals";
import About from "../About/About";
import { useState } from "react";
import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import Profile from "./../Profile/Profile";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import ProductDetails from "../ProductDetail/ProductDetails";
import Cart from '../Cart/Cart';
import Checkout from '../Cart/Checkout';
import Admin from '../Admin/Admin';
import ProDetails from '../ProDetails/ProDetails';
import ShallowHome from '../ShallowHome/index.jsx'


function App() {
  const [userData, setuserData] = useState(null);
  let saveUSerData = () => {
    let encodedToken = localStorage.getItem("token");
    let decodedToken = jwtDecode(encodedToken);
    setuserData(decodedToken);
    console.log(decodedToken);
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      saveUSerData();
    }
  }, []);
  let logout = () => {
    localStorage.removeItem("token");
    saveUSerData(null);
    return <Navigate to="login" />;
  };
  
  let routes = createBrowserRouter([
    {
      path: "",
      element: <Masterlayout userData={userData} logout={logout} />,
      errorElement: <Notfound />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute userData={userData}>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "productDetails/:id",
          element: (
            <ProductDetails userData={userData}>
              <Home />
            </ProductDetails>
          ),
        },

        {
          path: "ITI-Project",
          element: (
            <ShallowHome />
          ),
        },

        {
          path: "ProDetails/:id",
          element: (
            <ProtectedRoute userData={userData}>
              <ProDetails />
            </ProtectedRoute>
          ),
        },
        {
          path: "Admin",
          element: (
            <ProtectedRoute userData={userData}>
              <Admin />
            </ProtectedRoute>
          ),
        },
        {
          path: "Hotdeals",
          element: (
            <ProtectedRoute userData={userData}>
              <Hotdeals />
            </ProtectedRoute>
          ),
        },
        {
          path: "About",
          element: (
            <ProtectedRoute userData={userData}>
              <About />
            </ProtectedRoute>
          ),
        },{
          path: "Cart",
          element: (
            <ProtectedRoute userData={userData}>
              <Cart />
            </ProtectedRoute>
          ),
        },
        {
          path: "Checkout",
          element: (
            <ProtectedRoute userData={userData}>
              <Checkout />
            </ProtectedRoute>
          ),
        },
        {
          path: " Profile",
          element: (
            <ProtectedRoute userData={userData}>
              <Profile userData={userData} />
            </ProtectedRoute>
          ),
        },
        { path: "register", element: <Register /> },
        {
          path: "login",
          element: <Login saveUSerData={saveUSerData} />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
