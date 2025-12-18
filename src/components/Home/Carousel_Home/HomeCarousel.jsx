import { React, useState } from "react";

import "./HomeCarousel.css";

import LeftArrow from "../../../Assets/Icons/LeftArrow.svg";
import RightArrow from "../../../Assets/Icons/RightArrow.svg";
import ButtonAnimate from "../../UI/Button_animated/ButtonAnimate";

import HomeCarouselContent from "./CarouselData.jsx";

export default function HomeCarousel() {
  const n = HomeCarouselContent.length;

  const [SlideNo, setSlideNo] = useState(0);

  const prevSlide = () => {
    setSlideNo(SlideNo === 0 ? n - 1 : SlideNo - 1);
  };
  const nextSlide = () => {
    setSlideNo(SlideNo === n - 1 ? 0 : SlideNo + 1);
  };
  return (
    <>
      <div className="Carousel_body">
        <img src={LeftArrow} alt="" onClick={prevSlide} className="leftArrow" />
        <div className="AllSlides_container">
          {HomeCarouselContent.map((obj, indx) => {
            return (
              <div key={indx} className="Carousel_AllSlides">
                {indx === SlideNo && (
                  <div className="Carousel_CurrSlide">
                    <img src={obj.img} alt="" />
                    <div className="CurrSlide_content">
                      <h4 className="Carousel_heading">{obj.heading}</h4>
                      <div className="Carousel_descp">{obj.description}</div>
                      <ButtonAnimate text="Watch Live" link={obj.ytlink} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <img
          src={RightArrow}
          alt=""
          onClick={nextSlide}
          className="rightArrow"
        />
      </div>
      <div className="Home_SlideButton">
        {HomeCarouselContent.map((ele, idx) => {
          return (
            <div
              key={idx}
              className={`SlideBtn${SlideNo=== idx ? " active" : ""}`}
              onClick={() => setSlideNo(idx)}
            />
          );
        })}
      </div>
    </>
  );
}
