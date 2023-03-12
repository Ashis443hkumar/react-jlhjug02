import React from "react";
import './head.css'
export default function Head() {
  return (
    <div className="head">
      <div className="left_head">
        <i class="fa-solid fa-envelope"></i>
        <label htmlFor="">SumitSangamsnp@gmail.com</label>
        <i class="fa-solid fa-phone"></i>
         <label htmlFor="">+91 9834960553</label>
      </div>
      <div className="right_head">
        <span><i class="fa-brands fa-facebook"></i></span>
        <span><i class="fa-brands fa-instagram"></i></span>
        <span><i class="fa-brands fa-twitter"></i></span>
        <span><i class="fa-brands fa-youtube"></i></span>
        <span><i class="fa-brands fa-linkedin"></i></span>
      </div>
    </div>
  );
}
