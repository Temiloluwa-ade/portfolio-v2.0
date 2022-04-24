// import components
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
// import style
import "./index.scss";

// footer component
const Footer = ({
  link1,
  link2,
  link3,
  link1Title,
  link2Title,
  link3Title,
}) => {
  // use ref variable
  const itemRef = useRef(null);

  // initialize use effect
  useEffect(() => {
    // work items
    let footerItem = document.querySelectorAll(".footer__item");

    // work items effects
    footerItem.forEach((item) => {
      item.addEventListener("mouseover", () => {
        gsap.to(".cursor", {
          scale: 2,
          duration: 0.5,
          backgroundColor: "#ffffff",
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
    <>
      <footer className="footer" ref={itemRef}>
        <div className="footer__wrapper">
          <div></div>
          <div>
            <a
              href={link1}
              target="_blank"
              rel="noreferrer"
              className="footer__item"
            >
              {link1Title}
            </a>
            <a
              href={link2}
              target="_blank"
              rel="noreferrer"
              className="footer__item"
            >
              {link2Title}
            </a>
            <a
              href={link3}
              target="_blank"
              rel="noreferrer"
              className="footer__item"
            >
              {link3Title}
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

// export component
export default Footer;
