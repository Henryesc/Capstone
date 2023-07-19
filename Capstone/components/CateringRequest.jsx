import React from "react";
import image from "../assets/backgroundCateringSection.png";

const CateringRequest = () => {


  return (
    <div className="cateringContainer">
      <div className="cateringRequestTextContainer">
        <h1 className="cateringRequestTitle">Catering Request </h1>
      </div>
      <br/>
      <div className="cateringRequest">
        <h1 className="catering">
          DO YOU <span className="catering2"> GOVINDA'S VEGETARIAN </span>
          CUISINE?
        </h1>
        <br /> <br />
        <span className="cateringRequestText">
          Please give us at least 10 days before the desired Catering Date
        </span>
      </div>
      <div className="cateringButtonContainer">
        <button className="cateringButton">Request Catering</button>
      </div>
    </div>
  );
  
};

export default CateringRequest;