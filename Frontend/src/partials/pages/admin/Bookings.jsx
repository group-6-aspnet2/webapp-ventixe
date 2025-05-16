import React, { useCallback, useEffect, useState } from "react";
import BookingCard from "../../BookingCard";
import "../../../styles/booking.css";
import { Get } from "../../../helpers/ApiHelper";

const Bookings = () => {
  // const [bookings, setBookings] = useState([
  //   {
  //     id: "fds-543vfds3-435fe",
  //     eventName: "Disco fever",
  //     eventDate: "2025-07-10",
  //     eventTime: "22:00",
  //     ticketCategoryName: "Gold",
  //     ticketPrice: 489,
  //     ticketQuantity: 2,
  //     totalPrice: 978,
  //     statusName: "Confirmed",
  //     invoiceId: "123456-sdfjkdf-23424",
  //   },
  //   {
  //     id: "943-gert4vd-43fj8-33fe",
  //     eventName: "Disco fever",
  //     eventDate: "2025-07-10",
  //     eventTime: "22:00",
  //     ticketCategoryName: "Platinum",
  //     ticketPrice: 799,
  //     ticketQuantity: 3,
  //     totalPrice: 2397,
  //     statusName: "Pending",
  //     invoiceId: "123456-sdfjkdf-23424",
  //   },
  //   {
  //     id: "345se-734egre-756yg",
  //     eventName: "Way out west",
  //     eventDate: "2025-07-21",
  //     eventTime: "20:00",
  //     ticketCategoryName: "Silver",
  //     ticketPrice: 299,
  //     ticketQuantity: 1,
  //     totalPrice: 299,
  //     statusName: "Pending",
  //     invoiceId: "123456-sdfjkdf-23424",
  //   },
  //   {
  //     id: "12493-0dkaoj09-z3wqfe",
  //     eventName: "Way out west",
  //     eventDate: "2025-07-21",
  //     eventTime: "20:00",
  //     ticketCategoryName: "Standard",
  //     ticketPrice: 100,
  //     ticketQuantity: 5,
  //     totalPrice: 500,
  //     statusName: "Cancelled",
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
