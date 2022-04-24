// import components
import { useState, useEffect } from "react";
import gsap from "gsap";

// mouse position component
const useMousePosition = () => {
  const [position, setPosition] = useState({
    clientX: 0,
    clientY: 0,
  });

  useEffect(() => {
    var mouseCursor = document.querySelector(".cursor");
    const updatePosition = (event) => {
      setPosition(
        gsap.to(mouseCursor, 0.5, { x: event.clientX, y: event.clientY })
      );
    };
    window.addEventListener("mousemove", updatePosition, false);
    window.addEventListener("mouseenter", updatePosition, false);
    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseenter", updatePosition);
    };
  }, []);
  return position;
};

// export component
export default useMousePosition;
