import React from "react";
import { styled } from "styled-components";
import { useState } from "react";
import data from "../navs/testimonialsData.json";




const ImageCarousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const handlePrev = () => {
    setCurrentImage((prevImage) =>
      (prevImage === 0?data.length - 1:prevImage - 1));
  };
  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage === data.length - 1 ? 0 : prevImage + 1));
  };
  
  return (
    
    <div className="imageCarousel">
      <div className="imageContainer">
      <img src={data[currentImage].src} className="image-pic" alt={`Image ${currentImage + 1}`} />
      <br />
        <p>{data[currentImage].quote}</p>
        </div>
      <br />
        <button onClick={handlePrev} className="button1">
          Prev
        </button>
        <button onClick={handleNext} className="button2">
          Next
        </button>
      </div>
  );
};

export default ImageCarousel;

const imageContainer = styled.div`
width: 20%;
height: 20%;
justify-content: center;
`

const imageCarousel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background-color: aliceblue;
  position: absolute;
  top: 50%;
  opacity: 1;`;
