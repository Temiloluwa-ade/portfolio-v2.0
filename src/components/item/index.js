// import components
import { React } from "react";
// import styles
import "./index.scss";
// import assets

// home component
const Item = () => {
  const items = [
    {
      title: "horizon zero dawn",
      link: "https://www.jidewils.com/",
    },
    {
      title: "ghost of tsushima",
      link: "https://www.jidewils.com/",
    },
    {
      title: "Black myth wukong",
      link: "https://www.jidewils.com/",
    },
    {
      title: "miles morales spiderman",
      link: "https://www.jidewils.com/",
    },
    {
      title: "forza horizon 5",
      link: "https://www.jidewils.com/",
    },
    {
      title: "the last of us 2",
      link: "https://www.jidewils.com/",
    },
    {
      title: "RED DEAD REDEMPTION 2",
      link: "https://www.jidewils.com/",
    },
    {
      title: "GOD OF WAR RAGNAROK",
      link: "https://www.jidewils.com/",
    },
  ];
  return (
    <>
      {items &&
        items.map((item, index) => (
          <div className="item" key={index}>
            <div className="item__title">
              <a href={item.link} className="item__anchor">
                {item.title}
              </a>
            </div>
          </div>
        ))}
    </>
  );
};

// export home component
export default Item;
