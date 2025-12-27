import React, { useState, useEffect } from "react";

import LeftArrow from "../../../Assets/Icons/LeftArrow.svg";
import RightArrow from "../../../Assets/Icons/RightArrow.svg";
import "./EventCarousel.css";
import Events from "./EventData";

const EventCarousel = () => {
  const contentLength = Events.length;
  const [current, setCurrent] = useState(0);

  // Auto-rotate every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % contentLength);
    }, 4000);
    return () => clearInterval(interval);
  }, [contentLength]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % contentLength);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + contentLength) % contentLength);
  };

  return (
    <div className="EventCarousel_mainContainer">
      <div className="EventCarousel_container">
        <button className="carousel_control_button" onClick={prevSlide}>
          <img src={LeftArrow} alt="Prev Slide" />
        </button>
        <div className="CardCarousel_container">
          {Events.map((event, idx) => {
            return (
              <div
                key={idx}
                className={`EventCarousel_card ${
                  idx === current ? "active" : ""
                }`}
              >
                <img src={event.description.image} alt="" />
                <div className="EventCarousel_description_overlay">
                  <div className="EventCarousel_description_text">
                    {event.description.Heading}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button className="carousel_control_button" onClick={nextSlide}>
          <img src={RightArrow} alt="Next Slide" />
        </button>
      </div>
    </div>
  );
};

export default EventCarousel;
