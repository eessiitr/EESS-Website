import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EventsData from '../EventCarousel/EventData';
import GlassContainer from '../../UI/GlassContainer/GlassContainer';
import './EventDetail.css';

const EventDetail = () => {
  const { eventName } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // Decode the event name and find matching event
    const decodedName = decodeURIComponent(eventName);
    const foundEvent = EventsData.find((e) => {
      const heading = e.description.Heading;
      if (React.isValidElement(heading) && heading.type === 'h3') {
        return heading.props.children === decodedName;
      }
      if (typeof heading === 'string') {
        return heading === decodedName;
      }
      if (heading?.props?.children) {
        return heading.props.children === decodedName;
      }
      return false;
    });

    if (foundEvent) {
      setEvent(foundEvent);
    } else {
      // If event not found, redirect to Events page
      navigate('/Events');
    }
  }, [eventName, navigate]);

  if (!event) {
    return <div className="EventDetail_loading">Loading...</div>;
  }

  const getHeadingText = () => {
    const heading = event.description.Heading;
    if (React.isValidElement(heading) && heading.type === 'h3') {
      return heading.props.children;
    }
    if (typeof heading === 'string') return heading;
    if (heading?.props?.children) return heading.props.children;
    return 'Event';
  };

  return (
    <div className="EventDetail_body">
      {/* Image at top */}
      <div className="EventDetail_image_container">
        <img 
          src={event.description.image} 
          alt={getHeadingText()}
          className="EventDetail_image"
        />
      </div>
      
      <div className="EventDetail_container">
        {/* Heading */}
        <section className="EventDetail_section">
          <h1 className="EventDetail_heading">{getHeadingText()}</h1>
        </section>

        {/* Description Section */}
        <section className="EventDetail_section">
          <h2 className="EventDetail_section_title">Description</h2>
          <GlassContainer>
            <div className="EventDetail_description">
              {event.description.description}
            </div>
          </GlassContainer>
        </section>

        {/* Resources Section */}
        <section className="EventDetail_section">
          <h2 className="EventDetail_section_title">Resources</h2>
          <GlassContainer>
            <div className="EventDetail_resources">
              <p>Resources for this event will be available here.</p>
              {/* Add resource links/files here */}
            </div>
          </GlassContainer>
        </section>
      </div>
    </div>
  );
};

export default EventDetail;

