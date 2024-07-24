import React from "react";
import ReactDOM from "react-dom/client";
import "react-storybook-library-v3/global.css"; 
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
