// imports
import { React } from "react";
import "./index.scss";

// component
function Navbar() {
  return (
    <div className="nav">
      <div className="wrapper">
        <div className="mail">
          <a href="mailto">reach out</a>
        </div>
        <div className="brand">devwraithe</div>
        <div className="about">
          <a href="mailto">about me</a>
        </div>
      </div>
    </div>
  );
}

// export
export default Navbar;
