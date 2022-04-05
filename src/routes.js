// import components
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about/about";
import Loader from "./components/loader";

// routes component
const SiteRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/" element={<About />} />
          <Route path="/loader" element={<Loader />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

// export component
export default SiteRoutes;
