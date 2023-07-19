import React from "react";

const OrderRedirect = () => {
  return (
    <div className="redirectSpecialsContainer">
    <div className="redirectContainer">
      <div className="orderTitleContainer">
        <img src="../assets/linedeco.png" className="lineDeco" alt="line" />
        <br />
        <h1 className="orderTitle"> ORDER ONLINE</h1>
        <br />
        <img src="../assets/linedeco.png" className="lineDeco" alt="line" />
      </div>
      <br />
      <div className="orderLinkContainer">
        <a href="govindashou.com/onlinepay"></a>
      </div>
      <div className="uberContainer">
        <span className="uberEats">
          UberEats can bring the yummies to you now! (First time orders receive
          10% discount)
        </span>
          <br />
          <div className="uberImage">
            <img src="../assets/uberImage.png" />
            </div>
      </div>
      <br />
      <span className="twitterLink">
        View Our Daily Specials on
        <a href="https://t.co/fuk6Nlwki8">Twitter</a>!
      </span>

      
      </div>
    </div>
  );
}

export default OrderRedirect;