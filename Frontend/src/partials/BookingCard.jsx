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
      <p className="card-event-date">{booking.eventDate}</p>
      <p className="card-event-time">{booking.eventTime}</p>
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
      <p>
        Created:{" "}
        {new Date(booking.createDate).toLocaleString("sv-SE", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
    </div>
  );
};

export default BookingCard;
