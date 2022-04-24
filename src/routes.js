// import components
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

// routes component
const SiteRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

// export component
export default SiteRoutes;
