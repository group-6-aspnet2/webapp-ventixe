import React, { useCallback, useEffect, useState } from "react";
import BookingCard from "../../BookingCard";
import "../../../styles/booking.css";
import { Get } from "../../../helpers/ApiHelper";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  const getBookings = useCallback(async () => {
    await Get(
      "https://bookingserviceprovider-pe-gehkczd6hmhabreg.swedencentral-01.azurewebsites.net/api",
      "bookings",
      (response) => {
        setBookings(response);
      }
    );
  }, []);

  useEffect(() => {
    getBookings();
  }, [getBookings]);

  return (
    <div className="booking-body">
      <h1 className="booking-headline">Admin Bookings</h1>
      <div className="bookings-container">
        {bookings.length > 0 &&
          bookings.map((b) => (
            <BookingCard isAdmin={true} booking={b} key={b.id} />
          ))}
      </div>
    </div>
  );
};

export default Bookings;
