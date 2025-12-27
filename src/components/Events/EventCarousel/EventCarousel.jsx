import React, { useState, useCallback, useEffect } from "react";

import LeftArrow from "../../../Assets/Icons/LeftArrow.svg";
import RightArrow from "../../../Assets/Icons/RightArrow.svg";
import EventDescription from "../EventDescription/EventDescription";
import Loader from "../../UI/Loader/Loader";
import "./EventCarousel.css";
import EventsData from "./EventData";
import SheetsService from "../../../services/sheetsService";

const EventCarousel = () => {
  const [events, setEvents] = useState(EventsData);
  const [loading, setLoading] = useState(true);

  const length = 3;
  const contentLength = events.length;

  //current represent the center card of the carousel.
  const [current, setCurrent] = useState(0);
  const [toshow, setToShow] = useState([0, Math.min(1, contentLength - 1), Math.max(0, contentLength - 1)]);
  const helperArray = [0, 1, 2];

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const sheetsData = await SheetsService.fetchEvents();
        if (sheetsData && sheetsData.length > 0) {
          // Transform Google Sheets data to match component structure
          const transformedData = sheetsData.map(item => ({
            description: {
              image: item.imageUrl,
              Heading: (
                <>
                  <h3>{item.title}</h3>
                  {item.subtitle && <h5 style={{ color: '#ffa500', marginTop: '-10px' }}>{item.subtitle}</h5>}
                </>
              ),
              description: (
                <p style={{ fontWeight: "300" }}>
                  {item.description}
                  {item.resources.length > 0 && (
                    <>
                      <br /><br />
                      <strong>Resources:</strong>
                      <ul>
                        {item.resources.map((resource, idx) => (
                          <li key={idx}>
                            <a href={resource.link} target="_blank" rel="noopener noreferrer">
                              {resource.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </p>
              ),
            }
          }));
          setEvents(transformedData);
          // Update toshow array for new content length
          if (transformedData.length > 0) {
            setToShow([
              0,
              Math.min(1, transformedData.length - 1),
              Math.max(0, transformedData.length - 1)
            ]);
          }
        }
      } catch (error) {
        console.error('Error loading events:', error);
        // Fallback to static data
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  //Next Slide Handler
  const nextSlide = useCallback(() => {
    if (events.length === 0) return;
    //Change the toshow array to change content of carousel
    let newToShow = [...toshow];
    newToShow[(current - 1 + length) % length] =
      (newToShow[(current + 1) % length] + 1) % events.length;
    setToShow(newToShow);

    //setCurrent to next slide
    setCurrent((prevState) => (prevState + 1) % length);
  }, [length, toshow, events.length, current]);

  const prevSlide = useCallback(() => {
    if (events.length === 0) return;
    //Change the toshow array to change content of carousel
    let newToShow = [...toshow];
    newToShow[(current + 1) % length] =
      (newToShow[(current - 1 + length) % length] - 1 + events.length) %
      events.length;
    setToShow(newToShow);

    //setCurrent to next slide
    setCurrent((prevState) => (prevState - 1 + length) % length);
  }, [length, toshow, events.length, current]);

  //Slide Button ClickHandler
  const SlideBtnClickHandler = (idx) => {
    var temp = [];
    temp.push((idx - 1 + events.length) % events.length);
    temp.push(idx);
    temp.push((idx + 1) % events.length);

    setToShow(temp);
    setCurrent(1);
  };

  if (loading) {
    return (
      <div className="EventCarousel_mainContainer">
        <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}>
          <Loader />
        </div>
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="EventCarousel_mainContainer">
        <h3 className="Event_Heading">No events available at the moment.</h3>
      </div>
    );
  }

  return (
    <>
      <div className="EventCarousel_mainContainer">
        <h3 className="Event_Heading">
          "Creativity involves breaking out of established patterns in order to
          look at things in a different way."
        </h3>
        <div className="EventCarousel_container">
          <button className="carousel_control_button" onClick={prevSlide}>
            <img src={LeftArrow} alt="Prev Slide" />
          </button>
          <div className="CardCarousel_container">
            {helperArray.map((element, idx) => {
              const eventIndex = toshow[idx] || 0;
              return (
                <div
                  key={idx}
                  className={`EventCarousel_card
                    ${(idx < current && `prevImg${current - idx}`) ||
                    (idx > current && `nextImg${idx - current}`) ||
                    (idx === current && "active")
                    }`}
                >
                  <Loader />
                  <img src={events[eventIndex]?.description?.image || ''} alt="" />
                </div>
              );
            })}
          </div>
          <button className="carousel_control_button" onClick={nextSlide}>
            <img src={RightArrow} alt="Next Slide" />
          </button>
        </div>
        <div className="EventCarousel_SlideButton">
          {events.map((ele, idx) => {
            return (
              <div
                key={idx}
                className={`SlideBtn${toshow[current] === idx ? " active" : ""
                  }`}
                onClick={() => SlideBtnClickHandler(idx)}
              />
            );
          })}
          <div className="Events_ReadMore">
            <a href="#EventDescription">
              <img src={RightArrow} alt="Read More" />
            </a>
            Read More
          </div>
        </div>
      </div>
      <EventDescription event={events[toshow[current]]?.description || {}} />
    </>
  );
};

export default EventCarousel;
