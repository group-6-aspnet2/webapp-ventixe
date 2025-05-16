import React, { useState } from "react";
import BookingCard from "../../BookingCard";
import "../../../styles/booking.css";

const Bookings = () => {
  const [tableColumns, setTableColumns] = useState([
    "Invoice ID",
    "Date",
    "Event",
    "Ticket Category",
    "Price",
    "Qty",
    "Total",
    "Status",
  ]);
  const [bookings, setBookings] = useState([
    {
      id: "fds-543vfds3-435fe",
      eventName: "Disco fever",
      date: "2025-07-10",
      time: "22:00",
      ticketCategory: "Gold",
      ticketPrice: 489,
      ticketQuantity: 2,
      totalPrice: 978,
      status: "Confirmed",
    },
    {
      id: "943-gert4vd-43fj8-33fe",
      eventName: "Disco fever",
      date: "2025-07-10",
      time: "22:00",
      ticketCategory: "Platinum",
      ticketPrice: 799,
      ticketQuantity: 3,
      totalPrice: 2397,
      status: "Pending",
    },
    {
      id: "345se-734egre-756yg",
      eventName: "Way out west",
      date: "2025-07-21",
      time: "20:00",
      ticketCategory: "Silver",
      ticketPrice: 299,
      ticketQuantity: 1,
      totalPrice: 299,
      status: "Pending",
    },
    {
      id: "12493-0dkaoj09-z3wqfe",
      eventName: "Way out west",
      date: "2025-07-21",
      time: "20:00",
      ticketCategory: "Standard",
      ticketPrice: 100,
      ticketQuantity: 5,
      totalPrice: 500,
      status: "Cancelled",
    },
  ]);

  return (
    <div className="booking-body">
      <h1 className="booking-headline">Admin Bookings</h1>
      <div className="bookings-container">
        {/* <BookingTable bookings={bookings} tableColumns={tableColumns} /> */}
        {bookings.map((b) => (
          <BookingCard booking={b} key={b.id} />
        ))}
      </div>{" "}
    </div>
  );
};

export default Bookings;
