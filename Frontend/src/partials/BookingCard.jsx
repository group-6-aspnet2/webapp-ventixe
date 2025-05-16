import React from "react";
import { StatusButton } from "../styles/components/StyledButton";
import CategoryLabel from "./CategoryLabel";

const BookingCard = ({ booking, isAdmin }) => {
  return (
    <div key={booking.id} className="booking-card">
      <div className="booking-card-header">
        <span className="card-title">{booking.eventName}</span>

        <StatusButton status={booking.statusName.toUpperCase()}>
          {booking.statusName}
        </StatusButton>
      </div>
      <p>{booking.eventDate}</p>
      <p>{booking.eventTime}</p>
      <div className="booking-category-container">
        <span>
          {booking.ticketQuantity}x {booking.ticketPrice}
        </span>
        <CategoryLabel category={booking.ticketCategoryName} />
      </div>
      <p>Total: {booking.ticketQuantity * booking.ticketPrice} sek</p>
      <p>Invoice Id: {booking.invoiceId}</p>
      {isAdmin && (
        <p>
          Customer: {booking.firstName} {booking.lastName}
        </p>
      )}
    </div>
  );
};

export default BookingCard;
