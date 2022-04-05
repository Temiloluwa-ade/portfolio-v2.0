// imports
import { React } from "react";
import Navbar from "../../components/navbar";
import Restrict from "../../components/restrict";
import Shadow from "../../components/shadow";
import "./index.scss";
import bgImage from "../../assets/images/8.jpg";

// component
function Home() {
  return (
    <>
      <div className="home">
        <Restrict />
        <div className="wrapper">
          <Navbar />
          <div className="list">
            <div className="item">
              <div className="wrapper">
                <div className="content">
                  <div className="image">
                    <img src={bgImage} className="src" alt="" />
                  </div>
                  <div className="tags">
                    {/* 2021 &middot; MOVIE &middot; ENTERTAINMENT &middot;
                    TELEVISION */}
                    2021 &middot; DATA SECURITY SOFTWARE
                  </div>
                  <div className="title">
                    <a href=".html">Snick Snack</a>
                  </div>
                  <div className="button">VIEW SNICK SNACK CASE STUDY</div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="wrapper">
                <div className="content">
                  <div className="tags">
                    2021 &middot; MOVIE &middot; ENTERTAINMENT &middot;
                    TELEVISION
                  </div>
                  <div className="title">
                    <a href=".html">Snick Snack</a>
                  </div>
                  <div className="button">VIEW SNICK SNACK CASE STUDY</div>
                </div>
              </div>
            </div>
          </div>
          <Shadow />
        </div>
      </div>
    </>
  );
}

// export
export default Home;
