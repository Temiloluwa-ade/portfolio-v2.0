// import components
import { React, useEffect, useRef } from "react";
import {
  gsap,
  LocomotiveScroll,
  Restrict,
  Navbar,
  Footer,
} from "../../components/components.js";
// import styles
import "./index.scss";

// home component
const Home = () => {
  // works array
  const works = [
    {
      title: "AERIS 2.0 WEATHER",
      link: "/",
    },
    {
      title: "CITI SWIFTCASH 1.0",
      link: "/",
    },
    {
      title: "ECHELON EXCHANGE",
      link: "/",
    },
    {
      title: "HPBST COLLECTION",
      link: "/",
    },
    {
      title: "COINBASE DECA 1.0",
      link: "/",
    },
    {
      title: "NETFLIX MOBITRON",
      link: "/",
    },
    {
      title: "NUEMEN DEFI DASH",
      link: "/",
    },
    {
      title: "PAYPAL SWIFTSEND",
      link: "/",
    },
  ];

  // use ref variable
  const itemRef = useRef(null);

  // initialize use effect
  useEffect(() => {
    // work items
    let workItems = document.querySelectorAll(".anchor");

    // work items effects
    workItems.forEach((item) => {
      item.addEventListener("mouseover", () => {
        gsap.timeline().to(".cursor", {
          scale: 5,
          duration: 0.35,
          backgroundColor: "#ffffff",
        });
      });
      item.addEventListener("mouseleave", () => {
        gsap.timeline().to(".cursor", {
          scale: 1,
          duration: 0.35,
          backgroundColor: "transparent",
        });
      });
    });

    // locomotive scroll
    new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      reloadOnContextChange: true,
      getDirection: true,
      getSpeed: true,
      scrollFromAnywhere: true,
    });
  });

  return (
    <>
      <Restrict />
      <div className="home">
        <div className="wrapper">
          <Navbar
            linkAnchor="mailto:ibrahimibrahim851@outlook.com"
            linkTitle="send mail"
          />
          <div className="works" data-scroll-container>
            <ul className="items">
              {works &&
                works.map((item, index) => (
                  <li
                    className="item"
                    key={index}
                    data-scroll-id={index}
                    ref={itemRef}
                    data-scroll
                    data-scroll-section
                  >
                    <span className="title">
                      <a
                        href={item.link}
                        className="anchor"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.title}
                      </a>
                    </span>
                  </li>
                ))}
            </ul>
          </div>
          <Footer
            link1Title="github"
            link1="https://www.github.com/devwraithe"
            link2Title="linkedin"
            link2="https://www.linkedin.com/in/ibrahimaibrahim"
            link3Title="twitter"
            link3="https://www.twitter.com/devwraithe"
          />
        </div>
      </div>
    </>
  );
};

// export component
export default Home;
