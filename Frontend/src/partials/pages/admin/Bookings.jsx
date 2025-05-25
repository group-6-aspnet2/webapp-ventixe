import React, { useCallback, useEffect, useState } from "react";
import BookingCard from "../../BookingCard";
import "../../../styles/booking.css";
import { Get } from "../../../helpers/ApiHelper";
import BookingSortButton from "../../BookingSortButton";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [sortBy, setSortBy] = useState("createDate");

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

  const sortedBookings = [...bookings].sort((a, b) => {
    if (sortBy === "createDateOld") {
      return new Date(a.createDate) - new Date(b.createDate);
    } else if (sortBy === "createDateNew") {
      return new Date(b.createDate) - new Date(a.createDate);
    } else if (sortBy === "userId") {
      return a.userId.localeCompare(b.userId);
    } else if (sortBy === "eventName") {
      return a.eventName.localeCompare(b.eventName);
    }
    return 0;
  });

  return (
    <div className="booking-body">
      <h1 className="booking-headline">Admin Bookings</h1>
      <BookingSortButton
        sortBy={sortBy}
        setSortBy={(value) => setSortBy(value)}
      />
      <div className="bookings-container">
        {sortedBookings.length > 0 &&
          sortedBookings.map((b) => (
            <BookingCard isAdmin={true} booking={b} key={b.id} />
          ))}
      </div>
    </div>
  );
};

export default Bookings;
