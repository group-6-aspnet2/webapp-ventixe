import React, { useCallback, useEffect, useState } from 'react'
import EventCard from '../../EventCard'
import "../../../styles/event.css"
import { Get } from '../../../helpers/ApiHelper';
import { AdminCategoryButtonLarge, AdminCreateButton } from '../../../styles/components/StyledButton';
import CreateModalLayout from '../../layouts/CreateModalLayout';

const Events = () => {
const [createModal, setCreateModal] = useState(false);
const [events, setEvents] = useState([]);

const getEvents = useCallback(async () => {
  const eventUrl = "https://cs-ventixeevent.azurewebsites.net";
  const endpoint = "api/events";
  await Get(eventUrl, endpoint, (res) => {
    setEvents(res.result)}
   );
}, []);

const refreshEvents = () => {
  getEvents();
};

useEffect (() => {
  getEvents();
}, [getEvents]);

  return (
    <div className='event-body'>
      <div className='admin-buttons'>
        <div className='admin-category-buttons'>
          <AdminCategoryButtonLarge eventStatus="Active">Active</AdminCategoryButtonLarge>
          <AdminCategoryButtonLarge eventStatus="Draft">Draft</AdminCategoryButtonLarge>
          <AdminCategoryButtonLarge eventStatus="Past">Past</AdminCategoryButtonLarge> 
        </div>
           <AdminCreateButton onClick={() => setCreateModal(true)}><i class="fa-solid fa-plus"></i> Create Event</AdminCreateButton>
      </div>

       {createModal && 
          <CreateModalLayout onClose={() => setCreateModal(false)} onSuccess={refreshEvents}/>
       }
      <div className='event-container'>
        {events.length > 0 && events.map((e) => (
          <EventCard event={e} key={e.eventId} />
        ))}
      </div>
    </div>
  )
}

export default Events