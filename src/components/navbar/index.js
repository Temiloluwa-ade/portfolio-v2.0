// imports
import { React } from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

// component
function Navbar({ linkAnchor, linkTitle }) {
  return (
    <div className="nav">
      <div className="wrapper">
        <div className="brand">
          <NavLink to="/">devwraithe</NavLink>
        </div>
        <div className="about">
          <NavLink to={linkAnchor}>{linkTitle}</NavLink>
        </div>
      </div>
    </div>
  );
}

// export
export default Navbar;
