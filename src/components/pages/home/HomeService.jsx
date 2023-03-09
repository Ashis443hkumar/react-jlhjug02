import React from "react";

export default function HomeService() {
  return (
    <div className="homeService">
      <div className="heading">
        <h5>Check Now</h5>
        <h1>Our Feature Services</h1>
      </div>
      <div className="service">
        <div className="Service-box">
          <img src="https://cdn.pixabay.com/photo/2017/06/20/23/15/coffee-2425303__340.jpg" alt=""/>
          <h3>Mobile</h3>
          <div className="">
            <h4>IPhone X</h4>
            <h4>$60,0000.00</h4>
          </div>
        </div>
        <div className="Service-box">
          <img src="https://cdn.pixabay.com/photo/2018/02/24/20/39/clock-3179167__340.jpg" alt=""/>
          <h3>Accessories</h3>
          <div className="">
            <h4>Accessories</h4>
            <h4>$60,0000.00</h4>
          </div>
        </div>
        <div className="Service-box">
          <img src="https://cdn.pixabay.com/photo/2020/06/10/13/56/ipad-5282804__340.jpg" alt=""/>
          <h3>Watch</h3>
          <div className="">
            <h4>galaxy w20</h4>
            <h4>$60,0000.00</h4>
          </div>
        </div>
      </div>

    </div>
  );
}
