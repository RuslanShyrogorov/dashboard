import React from "react";
import ReactDOM from "react-dom";

import { ContextProvider } from "./contexts/ContextProvider";

import "./index.css";
import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   // <React.StrictMode>
//   <App />
//   // </React.StrictMode>
// );
ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
