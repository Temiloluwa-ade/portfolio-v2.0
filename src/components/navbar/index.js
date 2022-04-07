// import external components
import { React } from "react";
import { NavLink } from "react-router-dom";
// import navbar style
import "./index.scss";

// component
const Navbar = ({ linkAnchor, linkTitle }) => {
  return (
    <nav className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__brand">
          <NavLink to="/">devwraithe</NavLink>
        </div>
        <div className="navbar__link">
          <NavLink to={linkAnchor}>{linkTitle}</NavLink>
        </div>
      </div>
    </nav>
  );
};

// export
export default Navbar;
