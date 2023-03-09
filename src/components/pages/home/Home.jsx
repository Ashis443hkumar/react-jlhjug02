import React from "react";
import './home.css'
import Hero from "../../common/hero/Hero";
import HomeService from "./HomeService";
import NewAriable from "./NewAriable";

export default function Home() {
  return (
    <div>
      <Hero/>
      <HomeService/>
      <NewAriable/>
    </div>
  );
}
