import React from "react";
import './hero.css'
export default function Hero() {
  return (
    <div className="hero">
      <div className="hero_left">
        <h5>WELCOME TO</h5>
        <h1>Thapa Store</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias atque temporibus veniam       doloribus libero ad error omnis voluptates animi! Suscipit sapiente.</p>
        <button className="hero-btn">SHOW NOW</button>
      </div>
      <div className="hero_right">
        <img src="https://thapaecomstore.netlify.app/images/hero.jpg" alt=""/>
      </div>
    </div>
  );
}
