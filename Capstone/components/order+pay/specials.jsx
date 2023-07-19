import React from "react";

const Specials = () => {
  return (
    <div className="specialMenuContainer">
      <div className="specialTitleContainer">
        <img src="../assets/linedeco.png" className="lineDeco" alt="line" />
        <br />
        <h1 className="specialTitle"> SPECIAL MENU</h1>
        <br />
        <img src="../assets/linedeco.png" className="lineDeco" alt="line" />
      </div>
      <br />
      <div className="instagramContainer">
        <span className="instagramLink">Keep up with daily specials on <a href="https://www.instagram.com/govindashou/">Instagram</a>!</span>
      </div>
      <br />
      <div className="uberContainer">
        <span className="uberEats">
          UberEats can bring the yummies to you now! (First time orders receive
          10% discount)
        </span>
        <br />
        <img src="../assets/specials.png" className="specialsImage" />
      </div>
      <div className="followUsContainer">
        <span className="followUs">Follow Us On Social Media!</span>
        <img src="../assets/facebook.png" className="facebook" href="" />
        <img src="../assets/instagram.png" className="instagram" href="https://www.instagram.com/govindashou/" />
        <img src="../assets/twitter.png" className="twitter" href="https://t.co/fuk6Nlwki8" />
      </div>
    </div>
  );
};
      
export default Specials;