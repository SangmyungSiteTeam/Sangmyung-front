import { Routes, Route } from "react-router";
import LandingPage from "../pages/LandingPage";
import IntroducePage from "../pages/IntroducePage";
import DepartmentPage from "../pages/DepartmentPage";
import MapPage from "../pages/MapPage";
import PledgePage from "../pages/PledgePage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/introduce" element={<IntroducePage />} />
      <Route path="/introduce/:param" element={<IntroducePage />} />
      <Route path="/department" element={<DepartmentPage />} />
      <Route path="/department/:param" element={<DepartmentPage />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/pledge" element={<PledgePage />} />
    </Routes>
  );
};

export default Routing;
