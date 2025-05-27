import React, { useState } from 'react'
import { ModalOverlay, ModalContainer, CloseModalButton } from '../../styles/components/CreateModal'
import { Post } from '../../helpers/ApiHelper';

const BookingModalLayout = ({ event, onClose, onSuccess }) => {
    
    const [ticketCount, setTicketCount] = useState(1);
    const [form, setForm] = useState({
        eventId: '',
        ticketCategoryName: '',
        ticketPrice: '',
        ticketQuantity: '',
        userId: localStorage.getItem("userId"),
    });

    const increase = () => setTicketCount(prev => prev + 1);
    const decrease = () => {
        if (ticketCount > 1) setTicketCount(prev => prev - 1);
    };

    const ticketPrice = 399
    const totalPrice = ticketCount * ticketPrice;
    const categories = ["Standard", "Silver", "Gold"];

    // const handleChange = (e) => {
    //     setForm({ ...form, [e.target.name]: e.target.value});
    // };

    const handleChange = (e) => {
  const updated = { ...form, [e.target.name]: e.target.value };
  setForm(updated);
  console.log("Form updated:", updated);
};


    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Form data before sending:", form);


        const body = JSON.stringify({
            EventId: event.eventId,
            TicketCategoryName: form.ticketCategoryName,
            TicketQuantity: ticketCount,
            TicketPrice: ticketPrice,
            TotalPrice: totalPrice,
            UserId: form.userId,
        });
        const eventUrl = "https://bookingserviceprovider-pe-gehkczd6hmhabreg.swedencentral-01.azurewebsites.net/api"
        const endpoint = "bookings"

        console.log("Sending body:", body);

        try {
            await Post(eventUrl, endpoint, body, (res) => {
                console.log("Booking was created:", res)
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
            <h2>Book: {event.eventName}</h2>
            <form  onSubmit={handleSubmit}>
                <div className='booking-form'>   
                    <label htmlFor='ticketCategoryName'>Ticket Category:</label>
                        <select id='ticketCategoryName' name='ticketCategoryName'  className='ticket-category-name' value={form.ticketCategoryName} onChange={handleChange}>
                            <option value="">Choose ticket category</option>
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>

                    <div className='ticket-count-control'>
                        <button type='button' onClick={decrease}>-</button>
                        <span>{ticketCount}</span>
                        <button type='button' onClick={increase}>+</button>
                    </div>

                    <div className='ticket-price-display'>
                        <label htmlFor='ticketPrice'>Total price: </label>
                        <span type='number' id='ticketPrice' name='ticketPrice' className='ticket-price'> {ticketCount} X {ticketPrice} = {totalPrice} SEK</span>
                    </div> 
                </div>
                

                <div className='book-button'>
                    <button type ="submit" name='eventButton' className='event-button'>Book</button>
                </div>
            </form>
        </ModalContainer>
    </ModalOverlay>
  )
}

export default BookingModalLayout