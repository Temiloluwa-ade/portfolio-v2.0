// import components
import React from "react";
import useMousePosition from "./useMousePosition";
// import style
import "./index.scss";

// cursor component
const Cursor = () => {
  const { clientX, clientY } = useMousePosition();

  return (
    <>
      {/* <div
        className="cursor"
        style={{
          position: "fixed",
          zIndex: 9999,
          pointerEvents: "none",
          top: clientY,
          left: clientX,
          transformOrigin: "100% 100%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "transparent",
          border: "2px solid #ffffff",
          width: 12,
          height: 12,
          borderRadius: "50%",
          userSelect: "none",
          mixBlendMode: "difference",
        }}
      ></div> */}

      <div
        style={{
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          pointerEvents: "none",
          mixBlendMode: "difference",
        }}
      >
        <div
          className="cursor"
          style={{
            top: clientY,
            left: clientX,
            transformOrigin: "100% 100%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "transparent",
            border: "2px solid #ffffff",
            width: 12,
            height: 12,
            borderRadius: "50%",
            userSelect: "none",
            mixBlendMode: "difference",
          }}
        ></div>
      </div>
    </>
  );
};

// export component
export default Cursor;
