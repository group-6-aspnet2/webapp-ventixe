import React, { useState } from 'react'
import { ModalOverlay, ModalContainer, CloseModalButton } from '../../styles/components/CreateModal'
import { Post } from '../../helpers/ApiHelper';

const CreateModalLayout = ({ onClose, onSuccess }) => {
    const [form, setForm] = useState({
        eventName: '',
        eventLocation: '',
        eventDate: '',
        eventTime: '',
        eventCategoryName: '',
        eventStatus: '',
        eventAmountOfGuests: ''
    });

    const categories = ["Food&Drink", "Music", "Sport"];
    const statuses = ["Draft", "Past", "Active"];

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Form data before sending:", form);


        const body = JSON.stringify(form);
        const eventUrl = "https://cs-ventixeevent.azurewebsites.net"
        const endpoint = "api/events"

        try {
            await Post(eventUrl, endpoint, body, (res) => {
                console.log("Event was created:", res)
                onSuccess();
                onClose();
            },
            (err) => {
                console.error("Something went wrong:", err)
            }
        );
        }
        
        catch (err) {
            console.error("Fatal fetch error: ", err)
        }
};

  return (
    <ModalOverlay>
        <ModalContainer>
            <CloseModalButton onClick={onClose}>&times;</CloseModalButton>
            <h2>Create new Event</h2>
            <form  onSubmit={handleSubmit}>
                <div className='create-form'>
                    <label htmlFor='eventName'>Event name:</label>
                        <input type='text' id='eventName' name='eventName' className='event-name' placeholder='Event name' value={form.eventName} onChange={handleChange}/>
                    
                    <label htmlFor='eventLocation'>Event location:</label>
                    <input type='text' id='eventLocation' name='eventLocation' className='event-location' placeholder='Event location' value={form.eventLocation} onChange={handleChange}/>
                
                <div className='create-form-date-time'>

                    <label htmlFor='eventDate'>Event date:</label>
                    <input type='date' id='eventDate' name='eventDate' className='event-date' value={form.eventDate} onChange={handleChange}/>
                    
                    <label htmlFor='eventTime'>Event time:</label>
                    <input type='time' id='eventTime' name='eventTime' className='event-time' value={form.eventTime} onChange={handleChange}/>
                </div>

                    <label htmlFor='eventAmountOfGuests'>Amount Of Guests:</label>
                    <input type='number' id='eventAmountOfGuests' name='eventAmountOfGuests' className='event-amount-of-guests' placeholder='Amount of guests' value={form.eventAmountOfGuests} onChange={handleChange}/>
                
                    <label htmlFor='eventCategoryName'>Category:</label>
                        <select id='eventCategoryName' name='eventCategoryName'  className='event-category-name' value={form.eventCategoryName} onChange={handleChange}>
                            <option value="">Choose event category</option>
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    <label htmlFor='eventStatus'>Status:</label>
                        <select id='eventStatus' name='eventStatus' className='event-status' value={form.eventStatus} onChange={handleChange}>
                            <option value="">Choose event status</option>
                            {statuses.map((es) => (
                                <option key={es} value={es}>{es}</option>
                            ))}
                        </select>
                </div>

                <div className='create-button'>
                    <button type ="submit" name='eventButton' className='event-button'>Save and Create</button>
                </div>
            </form>
        </ModalContainer>
    </ModalOverlay>
  )
}

export default CreateModalLayout