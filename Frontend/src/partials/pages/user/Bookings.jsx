import React, { useCallback, useEffect, useState } from "react";
import { Get } from "../../../helpers/ApiHelper";
import BookingCard from "../../BookingCard";
import "../../../styles/booking.css";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  const getBookings = useCallback(async () => {
    const bookingUrl = "https://localhost:7221/api";
    const endpoint = "bookings"; // TODO ändra till userns bokningar baserat på userId från token (som ligger i local storage)
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
          <BookingCard isAdmin={false} booking={b} key={b.id} />
        ))}
      </div>
    </div>
  );
};

export default Bookings;
