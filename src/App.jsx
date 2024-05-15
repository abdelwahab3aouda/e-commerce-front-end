import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Masterlayout from "./Components/Masterlayout/Masterlayout";
import Notfound from "./Components/Notfound/Notfound";
import Home from "./Components/Home/Home";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Bags from "./Components/Bags/Bags";
import HotDeals from "./Components/Hotdeals/Hotdeals";
import Belt from "./Components/Belt/Belt";
import About from "./Components/About/About";
import ProductDetail from "./Components/ProductDetail/ProductDetails";
import { Profiler } from "react";
import Cart from '../Cart/Cart';
import Checkout from '../Cart/Checkout';

function App() {
  
  let routes = createBrowserRouter([
    {
      path: "",
      element: <Masterlayout />,
      errorElement: <Notfound />,
      children: [
        { index: true, element: <Home /> },
        { path: "Bags", element: <Bags /> },
        { path: "HotDeals", element: <HotDeals /> },
        { path: "Belt", element: <Belt /> },
        { path: "About", element: <About /> },
        { path: "Cart", element: <Cart /> },
        { path: "Checkout", element: <Checkout /> },
        { path: "register", element: <Register /> },
        { path: "ProductDetail", element: <ProductDetail /> },
        {
          path: "login",
          element: <Login />,
          children: [{ path: "register", element: <Register /> }],
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <Profiler id="my_app">
      <RouterProvider router={routes} />
      </Profiler>
    </div>
  );
}

export default App;
