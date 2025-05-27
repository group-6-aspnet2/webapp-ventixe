import React, { useState } from 'react'

import { AdminCategoryButtonSmall, CreateBookingButton, EventCategoryButton, } from '../styles/components/StyledButton'
import BookingModalLayout from './layouts/BookingModalLayout';

const EventCard = ({ event, getEvents }) => {
    const [showModal, setShowModal] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

  return (
    <>
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

        <div className="event-card-footer">
            <CreateBookingButton onClick={() => setShowModal(true)}>Book</CreateBookingButton>
        </div>
    </div>
        
        {showModal && 
            <BookingModalLayout event={event} onClose={() => setShowModal(false)} onSuccess={() => {setSuccessMessage(`Booking to ${event.eventName} is completed!`); 
            getEvents();
        }}/>
        }
    </>
    )
}

export default EventCard
