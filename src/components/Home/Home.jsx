import React, { useState, useEffect } from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingSection  from "./LandingSection/LandingSection";
import Updates from "./Updates/Updates";
import HomeCarousel from "./Carousel_Home/HomeCarousel";
import upArrow from "../../Assets/img/upArrow.png";

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Floating Back to Top Button */}
      <button 
        onClick={scrollToTop} 
        className={`floating-backToTop ${showBackToTop ? 'show' : ''}`}
        aria-label="Back to top"
      >
        <img className="backToTopImg" src={upArrow} alt="Back to top" />
      </button>

      <div className="home_body">
        <LandingSection />
        <HomeCarousel/>
        <Updates/>
      </div>
    </>
  );
}
