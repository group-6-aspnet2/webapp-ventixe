import React from "react";
import {
  CategoryButton,
  StatusButton,
} from "../styles/components/StyledButton";
import CategoryLabel from "./CategoryLabel";

const BookingCard = ({ booking }) => {
  return (
    <div key={booking.id} className="booking-card">
      <div className="booking-card-header">
        <span className="card-title">{booking.eventName}</span>

        <StatusButton status={booking.status.toUpperCase()}>
          {booking.status}
        </StatusButton>
      </div>
      <p>{booking.date}</p>
      <p>{booking.time}</p>
      <div className="booking-category-container">
        <span>
          {booking.ticketQuantity}x {booking.ticketPrice}
        </span>
        <CategoryLabel category={booking.ticketCategory} />
      </div>
      <p>Total: {booking.totalPrice} sek</p>
    </div>
  );
};

export default BookingCard;
