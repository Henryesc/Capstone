import React from "react";
import "./order+pay.css";


const OrderRedirect = () => {
  return (
    <div className="redirectSpecialsContainer">
      <div className="titleContainer">
        <div className="order">
          <img src="../assets/linedeco.png" className="lineDeco" alt="line" />
          <span className="orderTitle">ORDER ONLINE</span>
          <img src="../assets/linedeco.png" className="lineDeco" alt="line" />
        </div>

        <div className="specials">
          <img src="../assets/linedeco.png" className="lineDeco" alt="line" />
          <span className="specialTitle"> SPECIAL MENU</span>
          <img src="../assets/linedeco.png" className="lineDeco" alt="line" />
        </div>
      </div>

      <div className="yellowContainer">
        <br />
        <div className="orderpay">
          <a href="govindashou.com/onlinepay" className="orderLink">
            Order & Pay Online
          </a>
        </div>
        <div className="specialsURL">
          <p className="specialsBottom">
            Keep up with daily specials on
            <img src="../assets/spacer.png" className="spacer4" />
            <a
              href="https://www.instagram.com/govindashou/"
              className="instaLink"
            >
              Instagram
            </a>
            !
          </p>
        </div>
      </div>
      <br />
      <div className="uberContainer">
        <span className="uberEats">
          UberEats can bring the yummies to you now. (First time orders receive
          10% discount)
        </span>
      </div>
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
            <a href="https://t.co/fuk6Nlwki8" className="tweet">
              Twitter
            </a>
            !
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
    </div>
  );
};

export default OrderRedirect;