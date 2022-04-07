// import components
import { React } from "react";
import Restrict from "../../components/restrict";
// import styles
import "./index.scss";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Item from "../../components/item";
// import assets

// home component
const Home = () => {
  return (
    <>
      <div className="page home">
        <Restrict />
        <div className="wrapper">
          <Navbar linkAnchor="/about/" linkTitle="about me" />
          <div className="items">
            <Item />
          </div>
          <Footer
            linkA="https://www.github.com/devwraithe"
            linkATitle="visit github"
            linkB="mailto:ibrahimibrahim851@outlook.com"
            linkBTitle="send email"
          />
        </div>
      </div>
    </>
  );
};

// export home component
export default Home;
