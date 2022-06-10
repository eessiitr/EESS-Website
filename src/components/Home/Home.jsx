import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselContainer from "./Carousel_Home/CarouselContainer";
import Cards from "./Cards/Cards";

export default function Home() {
  return (
    <div>
    <div className="home_body">
      <CarouselContainer />
    </div>
    <div className="updates">
    <Cards />
  </div>
  </div>

  );
}
