// import external components
import { React } from "react";
// import footer style
import "./index.scss";

// footer component
const Footer = ({ linkA, linkATitle, linkB, linkBTitle }) => {
  return (
    <>
      <footer className="footer">
        <div className="footer__wrapper">
          <div>
            <a href={linkA} target="_blank" rel="noreferrer">
              {linkATitle}
            </a>
          </div>
          <div>
            <a href={linkB} target="_blank" rel="noreferrer">
              {linkBTitle}
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

// export footer component
export default Footer;
