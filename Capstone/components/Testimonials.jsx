import React from "react";
import { useState } from "react";

const data = [
  {
    name: "Shane LargeTummy",
    quote: "I have never been so full in my life! My large tummy is happy.",
    src: "../assets/testimonials/shane-largetummy.png",
    id: 1,
  },
  {
    name: "Sally SmallTummy",
    quote:
      "This buffet was no disappointment. You should be disappointed if you do not check this place out ASAP!",
    src: "../assets/testimonials/sally-smalltummy.png",
    id: 2,
  },
  {
    name: "Jimmy Buffet",
    quote:
      "No margaritas in this place, but the buffet certainly makes up for that! Now where is that shaker of salt?",
    src: "../assets/testimonials/jimmy-buffet.png",
    id: 3,
  },
  {
    name: "Samantha HungryForMore",
    quote: "I am hungry for more! I will be back for sure.",
    src: "../assets/testimonials/samantha-hungryformore.png",
    id: 4,
  },
  {
    name: "Patti Pickyeater",
    quote:
      "I am a picky eater, but this place has something for everyone. I will be back for more.",
    src: "../assets/testimonials/patti-pickyeater.png",
    id: 5,
  },
  {
    name: "Betty SecondPlate",
    quote:
      "I am on my second plate and I am still craving more of this delicious yum yum to my tum tum buffet!",
    src: "../assets/testimonials/betty-secondplate.png",
    id: 6,
  },
];



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
      <div className="testHeadContainer1">
        <h2 className="testSubTitle">Special Selection</h2>
      </div>
      <div className="testHeadContainer2">
        <img src="../assets/linedeco.png" className="lineDeco" alt="line" />
        <br></br>
        <h1 className="testTitle"> OUR CLIENTS SAY</h1>
        <br />
        <img src="../assets/linedeco.png" className="lineDeco" alt="line" />
      </div>
      <h3 className="testTitle2">
        We love to hear from our customers, so please leave a comment or say
        hello in an email.
      </h3>
      <br />
      <div className="imageContainer">
        <img
          src={data[currentImage].src}
          className="image-pic"
          alt={`Image ${currentImage + 1}`}
        />

        <br />
        <div className="quoteContainer">
          <img src="../assets/openquote.png" className="openquote" />
          <span className="quotes">{data[currentImage].quote}</span>
          <img src="../assets/closequote.png" className="closequote" />
        </div>
        <h2 className="name">{data[currentImage].name}</h2>
        <br />
        <br />
        <div className="buttons">
          <button onClick={handlePrev} className="button1">
            Prev
          </button>
          <button onClick={handleNext} className="button2">
            Next
          </button>
        </div>

        <br />
        <br />
      </div>
    </div>
  );
  
};

export default ImageCarousel;