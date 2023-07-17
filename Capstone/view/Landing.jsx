
import React from "react";
import ImageCarousel from "../components/Testimonials";
import CateringRequest from "../components/CateringRequest";
import { AboutUs, Background } from "../components";

const Landing = () => {
  return (
    <>
      <Background />
      <ImageCarousel />
      <CateringRequest />
      <AboutUs />
    </>
  );
};

export default Landing;

