import React from 'react'
import { AdminCategoryButtonSmall, EventCategoryButton } from '../styles/components/StyledButton'

const EventCard = ({ event }) => {

  return (
    <div key={event.eventId} className="event-card">
        <div className="event-card-header">
            <EventCategoryButton>
                {event.eventCategoryName}
            </EventCategoryButton>
            <AdminCategoryButtonSmall eventStatus={event.eventStatus}>
                {event.eventStatus}
            </AdminCategoryButtonSmall>
        </div>

        <div className="event-card-body">
            <p>{event.eventDate} {event.eventTime}</p>
            <h3 className="event-card-title">{event.eventName}</h3>
            <p><i className="fa-light fa-location-dot"></i>{event.eventLocation}</p>
        </div>
    </div>  
    )
}

export default EventCard
