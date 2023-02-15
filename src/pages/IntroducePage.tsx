import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Bio from "../components/Bio/Bio";
import Tab from "../components/Tab/Tab";
import Content from "../components/Content/Content";
import Organization from "../components/Organization/Organization";

const IntroducePage = () => {
  const param = useParams();

  return (
    <>
      <Header />
      <Bio />
      <Tab />
      {param.param === "greeting" ? <Content /> : <Organization />}
      <Footer />
    </>
  );
};

export default IntroducePage;