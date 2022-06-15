import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingSection  from "./LandingSection/LandingSection";
import Updates from "./Updates/Updates";
import Home_Carousel from "./Carousel_Home/Home_Carousel";

export default function Home() {
  return (
    <div className="home_body">
      <LandingSection />
      <Updates/>
      <Home_Carousel/>
    </div>
  );
}
