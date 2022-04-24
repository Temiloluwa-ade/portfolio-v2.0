// import external components
import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
// import style
import "./index.scss";

// navbar component
const Navbar = ({ linkAnchor, linkTitle }) => {
  // use ref variable
  const itemRef = useRef(null);

  // initialize use effect
  useEffect(() => {
    // work items
    let navItem = document.querySelectorAll(".navbar__item");

    // work items effects
    navItem.forEach((item) => {
      item.addEventListener("mouseover", () => {
        gsap.to(".cursor", {
          scale: 2,
          duration: 0.5,
          backgroundColor: "white",
        });
      });
      item.addEventListener("mouseout", () => {
        gsap.to(".cursor", {
          scale: 1,
          duration: 0.5,
          backgroundColor: "transparent",
        });
      });
    });
  });
  return (
    <nav className="navbar" ref={itemRef}>
      <div className="navbar__wrapper">
        <div className="navbar__item navbar__brand">
          <NavLink to="/">devwraithe</NavLink>
        </div>
        <div className="navbar__item">
          <a href={linkAnchor} target="_blank" rel="noreferrer">
            {linkTitle}
          </a>
        </div>
      </div>
    </nav>
  );
};

// export component
export default Navbar;
