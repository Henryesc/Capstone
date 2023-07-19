import React from "react";
import ImageCarousel from "../components/Testimonials";
import CateringRequest from "../components/CateringRequest";
import { AboutUs, Background, OurMenu,} from "../components"
import LeaveReviews from "../components/review/Review"
import OrderRedirect from "../components/order+pay/order+pay"
import Specials from "../components/order+pay/specials"

const Landing = () => {
  return (
    <>
      <Background />
      <OurMenu />
      <ImageCarousel />
      <LeaveReviews />
      <CateringRequest />
      <OrderRedirect /><Specials />
      <AboutUs />
    </>
  );
};

export default Landing;