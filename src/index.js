import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App/App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.scss";
import { Provider } from 'react-redux';
import store from './Components/redux/store';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
        <App />
        </Provider>
    </React.StrictMode>
    );

reportWebVitals();
