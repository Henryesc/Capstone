import React from "react";
import { styled } from "styled-components";

const testimonialsData = [
  {
    name: "Christina Foodie",
    quote: "The best buffet food I have every tasted! I will be back for more.",
    image: "../assets/christina-foodie.png",
  },
  {
    name: "Shane LargeTummy",
    quote: "I have never been so full in my life! My large tummy is happy.",
    image: "../assets/shane-largetummy.png",
  },
  {
    name: "Sally SmallTummy",
    quote:
      "Big appetites come in small tummies, this buffet was no disappointment. You should be disappointed if you do not check this place out ASAP!",
    image: "../assets/sally-smalltummy.png",
  },
  {
    name: "Jimmy Buffet",
    quote:
      "No margaritas in this place, but the buffet certainly makes up for that!Now where is that shaker of salt?",
    image: "../assets/jimmy-buffet.png",
  },
  {
    name: "Samantha HungryForMore",
    quote: "I am hungry for more! I will be back for sure.",
    image: "../assets/samantha-hungryformore.png",
  },
  {
    name: "Patti Pickyeater",
    quote:
      "I am a picky eater, but this place has something for everyone. I will be back for more.",
    image: "../assets/patti-pickyeater.png",
  },
  {
    name: "Betty SecondPlate",
    quote:
      "I am on my second plate and I am still craving more of this delicious yum yum to my tum tum buffet!",
    image: "../assets/betty-secondplate.png",
  },
];

const Testimonials = () => {
  return (
    <div className="container">
      <div className="ourclientssaywrapper">
        <h3 className="ourclientssay">Special Selection</h3>
        <h1 className="ourclientssay">OUR CLIENTS SAY</h1>
      </div>
      <div className="testimonialContainer">
        {testimonialsData.map((testimonial, index) => (
          <div className="mainTestimonial" key={index}>
            <img
              className="image"
              src={testimonial.image}
              alt={testimonial.name}
            />
            <h3>{testimonial.name}</h3>
            <p>{testimonial.quote}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

const image = styled.img`
  border: 10px solid black;
  height: 70px;
`;

const testimonialContainer = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const mainTestimonial = styled.div`
  background-color: transparent;
  display: flex;
  border: 10px solid black;
  height: 70px;
  width: 510px;
`;

const ourclientssay = styled.div`
  color: #ffffff;
  font-family: "Caviar Dreams-Bold", Helvetica;
  font-size: 55px;
  font-weight: 700;
  left: 0;
  letter-spacing: 2.75px;
  line-height: normal;
  position: fixed;
  border: 10px solid black;
  top: 0;
`;

const ourclientssaywrapper = styled.div`
  background-color: transparent;
  border: 10px solid black;
  height: 70px;
  width: 510px;
`;

const testimonialImage = styled.div`
  background-color: transparent;
  border: 10px solid black;
  height: 70px;
`;
