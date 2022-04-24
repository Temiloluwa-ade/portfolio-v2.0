// import components
import React from "react";
import ReactDOM from "react-dom";
import Cursor from "./components/cursor/cursor";
import SiteRoutes from "./routes";
// import style
import "./index.css";

// render app
ReactDOM.render(
  <React.StrictMode>
    <Cursor />
    <SiteRoutes />
  </React.StrictMode>,
  document.getElementById("root")
);
