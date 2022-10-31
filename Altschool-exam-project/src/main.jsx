import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const APP = (
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

root.render(APP);
