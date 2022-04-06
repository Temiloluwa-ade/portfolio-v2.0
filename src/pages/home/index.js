// import components
import { React } from "react";
import Navbar from "../../components/navbar";
import Restrict from "../../components/restrict";
import Shadow from "../../components/shadow";
// import ReactFullpage from "@fullpage/react-fullpage";
// import styles
import "./index.scss";
// import assets
import bgImage from "../../assets/images/8.jpg";
import bgImage2 from "../../assets/images/1.jpg";

// home component
const Home = () => {
  return (
    <>
      <div className="page">
        <Restrict />
        <div className="wrapper">
          <Navbar linkAnchor="/about/" linkTitle="about me" />
          <div className="items">
            <div className="item">
              <div className="item__img">
                <img src={bgImage} className="item__imgsrc" alt="" />
                <div className="item__imgwrap"></div>
              </div>
              <div className="item__content">
                <div className="item__title">
                  <a href="/">Snick Snack</a>
                </div>
                <div className="item__subtitle">
                  BUILT IN 2021 &middot; CORPORATE BRAND
                  <span className="item__link">
                    {">>"} VIEW CASE STUDY {"<<"}
                  </span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item__img">
                <img src={bgImage2} className="item__imgsrc" alt="" />
                <div className="item__imgwrap"></div>
              </div>
              <div className="item__content">
                <div className="item__title">
                  <a href="/">Ueno Brand</a>
                </div>
                <div className="item__subtitle">
                  BUILT IN 2021 &middot; CORPORATE BRAND
                  <span className="item__link">
                    {">>"} VIEW CASE STUDY {"<<"}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Shadow />
        </div>
      </div>
    </>
  );
};

// export component
export default Home;
