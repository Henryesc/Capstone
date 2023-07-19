import React from "react";
import ImageCarousel from "../components/Testimonials";
import CateringRequest from "../components/CateringRequest";
import { AboutUs, Background, OurMenu,} from "../components"
import LeaveReviews from "../components/review/Review"

const Landing = () => {
  return (
    <>
      <Background />
      <OurMenu />
      <ImageCarousel />
      <LeaveReviews />
      <CateringRequest />
      <AboutUs />
    </>
  );
};

export default Landing;