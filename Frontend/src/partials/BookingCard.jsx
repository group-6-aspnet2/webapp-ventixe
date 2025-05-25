import React from "react";
import { StatusButton } from "../styles/components/StyledButton";
import CategoryLabel from "./CategoryLabel";
import { useNavigate } from "react-router-dom";

const BookingCard = ({ booking, isAdmin }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() =>
        navigate(`${isAdmin ? "/admin" : ""}/booking/${booking.id}`, {
          id: booking.id,
        })
      }
      key={booking.id}
      className={"booking-card"}
    >
      <img
        className="booking-card-image"
        alt="event-image"
        src={`${
          booking.eventCategoryName.toUpperCase() === "MUSIC"
            ? "/event-music.png"
            : booking.eventCategoryName.toUpperCase() === "FOOD"
            ? "/event-food.png"
            : "/event-placeholder.png"
        }`}
      />
      <div className="booking-card-details">
        <div className="booking-card-header">
          <span className="card-title">
            {booking.eventName}{" "}
            <span className="event-category">{booking.eventCategoryName}</span>
          </span>

          <StatusButton status={booking.statusName.toUpperCase()}>
            {booking.statusName}
          </StatusButton>
        </div>
        <p className="card-event-date">{booking.eventDate}</p>
        <p className="card-event-time">{booking.eventTime}</p>

        <div className="booking-category-container">
          <span>
            {booking.ticketQuantity}x {booking.ticketPrice} sek
          </span>
          <CategoryLabel category={booking.ticketCategoryName} />
        </div>
        <p>Total: {booking.ticketQuantity * booking.ticketPrice} sek</p>
        {booking.invoiceId && <p>Invoice Id: {booking.invoiceId}</p>}
        {isAdmin && (
          <>
            <p>
              Customer: {booking.firstName} {booking.lastName}
            </p>{" "}
            <p>
              UserId: <p className="card-event-time">{booking.userId}</p>
            </p>
          </>
        )}
        <p>
          Created:
          {new Date(booking.createDate).toLocaleString("sv-SE", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </div>
  );
};

export default BookingCard;
