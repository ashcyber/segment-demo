import React from "react";
import ReactDOM from "react-dom";
import segment from "./segment";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

segment.debug();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
