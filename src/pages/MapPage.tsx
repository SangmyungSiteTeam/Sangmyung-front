import React from "react";
import Header from "../components/Header/Header";
import Bio from "../components/Bio/Bio";
import Map from "../components/Map/Map";
import Footer from "../components/Footer/Footer";

import { useLocation } from "react-router-dom";

const MapPage = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      <Bio state={location.pathname.split("/")[1]} />
      <Map />
      <Footer />
    </>
  );
};

export default MapPage;
