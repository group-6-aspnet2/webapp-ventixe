import React, { useCallback, useEffect, useState } from 'react'
import EventCard from '../../EventCard'
import "../../../styles/event.css"
import { Get } from '../../../helpers/ApiHelper';
import { AdminCategoryButtonLarge, AdminCreateButton } from '../../../styles/components/StyledButton';
import CreateModalLayout from '../../layouts/CreateModalLayout';

const Events = () => {
const [showModal, setShowModal] = useState(false);
const [events, setEvents] = useState([]);
const [successMessage, setSuccessMessage] = useState('');

const getEvents = useCallback(async () => {
  const eventUrl = "https://cs-ventixeevent.azurewebsites.net";
  const endpoint = "api/events";
  await Get(eventUrl, endpoint, (res) => {
    setEvents(res.result)}
   );
}, []);

useEffect (() => {
  getEvents();
}, [getEvents]);

useEffect(() => {
  if (successMessage) {
    const timer = setTimeout(() => setSuccessMessage(''), 4000);
    return () => clearTimeout(timer);
  }
}, [successMessage]);

  return (
    <div className='event-body'>
      <div className='admin-buttons'>
        <div className='admin-category-buttons'>
          <AdminCategoryButtonLarge eventStatus="Active">Active</AdminCategoryButtonLarge>
          <AdminCategoryButtonLarge eventStatus="Draft">Draft</AdminCategoryButtonLarge>
          <AdminCategoryButtonLarge eventStatus="Past">Past</AdminCategoryButtonLarge> 
        </div>
           <AdminCreateButton onClick={() => setShowModal(true)}><i className="fa-solid fa-plus"></i> Create Event</AdminCreateButton>
      </div>

       {showModal && 
          <CreateModalLayout onClose={() => setShowModal(false)} onSuccess={getEvents}/>
       }

       {successMessage && (
        <div className="success-message">{successMessage}</div>
       )}

      <div className='event-container'>
        {events.length > 0 && events.map((e) => (
          <EventCard event={e} key={e.eventId} gerEvents={getEvents} setSuccessMessage={setSuccessMessage} />
        ))}
      </div>
    </div>
  )
}

export default Events