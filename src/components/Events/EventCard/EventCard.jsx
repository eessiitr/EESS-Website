import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonAnimated from '../../UI/Button_animated/ButtonAnimate';
import Loader from '../../UI/Loader/Loader';
import './EventCard.css';

const EventCard = ({ event, index }) => {
  const navigate = useNavigate();
  
  const handleReadMore = () => {
    let eventName = 'Event';
    const heading = event.description.Heading;
    if (React.isValidElement(heading) && heading.type === 'h3') {
      eventName = heading.props.children;
    } else if (typeof heading === 'string') {
      eventName = heading;
    } else if (heading?.props?.children) {
      eventName = heading.props.children;
    }
    navigate(`/Events/${encodeURIComponent(eventName)}`);
  };

  return (
    <div className="EventCard" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="EventCard_image_container">
        <img src={event.description.image} alt={event.description.Heading} />
      </div>
      <div className="EventCard_content">
        <div className="EventCard_heading">
          {event.description.Heading}
        </div>
        <div className="EventCard_description">
          Click to read more about this event and explore details, resources, and gallery.
        </div>
        <ButtonAnimated 
          onClick={handleReadMore}
          text="Read More"
          className="EventCard_button"
        />
      </div>
    </div>
  );
};

export default EventCard;

