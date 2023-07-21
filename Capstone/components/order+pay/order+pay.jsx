import React from "react";
import "./order+pay.css";


const OrderRedirect = () => {
  return (
    <div className="redirectSpecialsContainer">
      <div className="titleContainer">
        <div className="order">
          <svg
            width="51"
            height="14"
            viewBox="0 0 51 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group 1261153700">
              <path
                id="Vector 32"
                d="M1 1.75L25.5 12.25L50 1.75"
                stroke="#D0AF3D"
                stroke-width="2"
              />
              <path
                id="Vector 33"
                d="M1 12.25L25.5 1.75L50 12.25"
                stroke="#D0AF3D"
                stroke-width="2"
              />
            </g>
          </svg>
          <span className="orderTitle">ORDER ONLINE</span>
          <svg
            width="51"
            height="14"
            viewBox="0 0 51 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group 1261153700">
              <path
                id="Vector 32"
                d="M1 1.75L25.5 12.25L50 1.75"
                stroke="#D0AF3D"
                stroke-width="2"
              />
              <path
                id="Vector 33"
                d="M1 12.25L25.5 1.75L50 12.25"
                stroke="#D0AF3D"
                stroke-width="2"
              />
            </g>
          </svg>
        </div>

        <div className="specials">
          <img src="../assets/linedeco.png" className="lineDeco" alt="line" />
          <span className="specialTitle"> SPECIAL MENU</span>
          <img src="../assets/linedeco.png" className="lineDeco" alt="line" />
        </div>
      </div>
      <div className="orderpay">
        <a href="govindashou.com/onlinepay" className="orderLink">
          Order & Pay Online
        </a>
      </div>
      <div className="yellowContainer"></div>

      <br />
      <div className="squareImageContainer">
        <img src="../assets/uberImage.png" className="uber" />
        <img src="../assets/spacer.png" className="spacer" />
        <br />
        <br />
        <img src="../assets/specials.png" className="specialsImage" />
      </div>
      <br />
      <div className="socialLinksContainer">
        <div className="leftSocial">
          <span className="twitterLink">
            View Our Daily Specials on
            <span href="https://t.co/fuk6Nlwki8" className="tweet">
              {" "}
              Twitter
            </span>{" "}
            &
            <a href="https://www.instagram.com/govindashou/" className="insta">
              {" "}
              Instagram
            </a>
            .
          </span>
        </div>
        <img src="../assets/spacer.png" className="spacer2" />
        <div className="rightSocial">
          <span className="followUs">Follow Us On Social Media!</span>
          <br />
          <img src="../assets/spacer.png" className="spacer3" />
          <br />
          <img src="./assets/facebook.png" className="facebook" href="" />
          <img
            src="./assets/instagram.png"
            className="instagram"
            href="https://www.instagram.com/govindashou/"
          />
          <img
            src="./assets/twitter.png"
            className="twitter"
            href="https://t.co/fuk6Nlwki8"
          />
        </div>
      </div>
      <div className="uberContainer">
        <span className="uberEats">
          UberEats can bring the yummies to you now. (First time orders receive
          10% discount)
        </span>
      </div>
    </div>
  );
};

export default OrderRedirect;