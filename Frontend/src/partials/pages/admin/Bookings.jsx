import React, { useCallback, useEffect, useState } from "react";
import BookingCard from "../../BookingCard";
import "../../../styles/booking.css";
import { Get } from "../../../helpers/ApiHelper";
import BookingSortButton from "../../BookingSortButton";
import BookingFilterButtons from "../../BookingFilterButtons";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [sortBy, setSortBy] = useState("eventName");
  const [bookingStatuses, setBookingStatuses] = useState([]);
  const [activeStatusId, setActiveStatusId] = useState(0);

  const getBookings = useCallback(async () => {
    await Get(
      "https://bookingserviceprovider-pe-gehkczd6hmhabreg.swedencentral-01.azurewebsites.net/api",
      "bookings",
      (response) => {
        setBookings(response);
      }
    );
  }, []);

  const getStatuses = useCallback(async () => {
    await Get(
      "https://bookingserviceprovider-pe-gehkczd6hmhabreg.swedencentral-01.azurewebsites.net/api",
      "bookingStatuses",
      (response) => {
        setBookingStatuses([{ id: 0, statusName: "All" }, ...response]);
      }
    );
  }, []);

  useEffect(() => {
    getBookings();
    getStatuses();
  }, [getBookings, getStatuses]);

  const sortedBookings = [...bookings]
    .filter((x) => activeStatusId === 0 || x.statusId === activeStatusId)
    .sort((a, b) => {
      if (sortBy === "createDateOld") {
        return new Date(a.createDate) - new Date(b.createDate);
      } else if (sortBy === "createDateNew") {
        return new Date(b.createDate) - new Date(a.createDate);
      } else if (sortBy === "userName") {
        return a.lastName.localeCompare(b.lastName);
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
      <BookingFilterButtons
        activeStatusId={activeStatusId}
        statuses={bookingStatuses}
        setActiveStatusId={(id) => setActiveStatusId(id)}
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
