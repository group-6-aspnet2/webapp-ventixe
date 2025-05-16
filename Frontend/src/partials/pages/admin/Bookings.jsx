import React, { useCallback, useEffect, useState } from "react";
import BookingCard from "../../BookingCard";
import "../../../styles/booking.css";
import { Get } from "../../../helpers/ApiHelper";

const Bookings = () => {
  // const [bookings, setBookings] = useState([
  //   {
  //     id: "fds-543vfds3-435fe",
  //     eventName: "Disco fever",
  //     date: "2025-07-10",
  //     time: "22:00",
  //     ticketCategory: "Gold",
  //     ticketPrice: 489,
  //     ticketQuantity: 2,
  //     totalPrice: 978,
  //     status: "Confirmed",
  //     invoiceId: "123456-sdfjkdf-23424",
  //   },
  //   {
  //     id: "943-gert4vd-43fj8-33fe",
  //     eventName: "Disco fever",
  //     date: "2025-07-10",
  //     time: "22:00",
  //     ticketCategory: "Platinum",
  //     ticketPrice: 799,
  //     ticketQuantity: 3,
  //     totalPrice: 2397,
  //     status: "Pending",
  //     invoiceId: "123456-sdfjkdf-23424",
  //   },
  //   {
  //     id: "345se-734egre-756yg",
  //     eventName: "Way out west",
  //     date: "2025-07-21",
  //     time: "20:00",
  //     ticketCategory: "Silver",
  //     ticketPrice: 299,
  //     ticketQuantity: 1,
  //     totalPrice: 299,
  //     status: "Pending",
  //     invoiceId: "123456-sdfjkdf-23424",
  //   },
  //   {
  //     id: "12493-0dkaoj09-z3wqfe",
  //     eventName: "Way out west",
  //     date: "2025-07-21",
  //     time: "20:00",
  //     ticketCategory: "Standard",
  //     ticketPrice: 100,
  //     ticketQuantity: 5,
  //     totalPrice: 500,
  //     status: "Cancelled",
  //     invoiceId: "123456-sdfjkdf-23424",
  //   },
  // ]);
  const [bookings, setBookings] = useState([]);

  const getBookings = useCallback(async () => {
    const bookingUrl = "https://localhost:7221/api";
    const endpoint = "bookings";
    await Get(bookingUrl, endpoint, (response) => {
      setBookings(response);
      console.log(response);
    });
  }, []);

  useEffect(() => {
    getBookings();
  }, [getBookings]);

  return (
    <div className="booking-body">
      <h1 className="booking-headline">Admin Bookings</h1>
      <div className="bookings-container">
        {bookings.map((b) => (
          <BookingCard isAdmin={true} booking={b} key={b.id} />
        ))}
      </div>
    </div>
  );
};

export default Bookings;
