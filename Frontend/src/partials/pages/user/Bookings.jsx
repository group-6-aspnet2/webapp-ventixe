import React, { useCallback, useEffect, useState } from "react";
import { Get } from "../../../helpers/ApiHelper";
import BookingCard from "../../BookingCard";
import "../../../styles/booking.css";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  const getBookings = useCallback(async () => {
    await Get(
      "https://bookingserviceprovider-pe-gehkczd6hmhabreg.swedencentral-01.azurewebsites.net/api",
      `bookings/user/${localStorage.getItem("userId")}`,
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
      <h1 className="booking-headline">Your Bookings</h1>
      <div className="bookings-container">
        {bookings.map((b) => (
          <BookingCard isAdmin={false} booking={b} key={b.id} />
        ))}
      </div>
    </div>
  );
};

export default Bookings;
