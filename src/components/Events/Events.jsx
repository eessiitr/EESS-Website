import React from 'react'
import { Routes, Route } from 'react-router-dom'
import EventCarousel from './EventCarousel/EventCarousel'
import EventCard from './EventCard/EventCard'
import EventDetail from './EventDetail/EventDetail'
import EventsData from './EventCarousel/EventData'

import './Events.css'

export default function Events() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className='events_body'>
            <EventCarousel />
            <div className='events_body_cards'>
              {EventsData.map((event, index) => (
                <EventCard key={index} event={event} index={index} />
              ))}
            </div>
          </div>
        }
      />
      <Route path="/:eventName" element={<EventDetail />} />
    </Routes>
  )
}
