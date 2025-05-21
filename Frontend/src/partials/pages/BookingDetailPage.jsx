import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StyledButton } from "../../styles/components/StyledButton";
import { Get } from "../../helpers/ApiHelper";
import BookingCard from "../BookingCard";
import "../../styles/booking.css";
import { DetailSection } from "../../styles/components/BookingDetailSection";
import TicketCard from "../TicketCard";

const BookingDetailPage = () => {
  const [activeBooking, setActiveBooking] = useState(null);
  const [schedule, setSchedule] = useState([]);
  const [tickets, setTickets] = useState([]);

  const params = useParams();
  const navigate = useNavigate();

  const calculateTimes = (eventTimeString) => {
    const [hours, minutes, seconds] = eventTimeString.split(":").map(Number);
    const eventTime = {
      hours,
      minutes,
      seconds,
    };

    setSchedule([
      {
        time: `${eventTime.hours - 3}:${eventTime.minutes} - ${
          eventTime.hours - 2
        }:${eventTime.minutes}`,
        activity: "Gates Open",
      },
      {
        time: `${eventTime.hours - 2}:${eventTime.minutes} - ${
          eventTime.hours - 1
        }:${eventTime.minutes}`,
        activity: "Pre-Show Activities",
      },
      {
        time: `${eventTime.hours - 1}:${eventTime.minutes} - ${
          eventTime.hours - 0
        }:${eventTime.minutes}`,
        activity: "Event Begins",
      },
    ]);
  };

  const fetchBooking = useCallback(async () => {
    await Get(
      "https://bookingserviceprovider-pe-gehkczd6hmhabreg.swedencentral-01.azurewebsites.net/api",
      `bookings/${params.id}`,
      (response) => {
        setActiveBooking(response);
        calculateTimes(response.eventTime);
      }
    );
  }, [params.id]);

  const fetchTicketsToBooking = useCallback(async () => {
    await Get(
      "https://pe-ticketserviceprovider-c5auddc9buh2d0cp.swedencentral-01.azurewebsites.net/api",
      `tickets/booking/${params.id}`,
      (response) => {
        setTickets(response);
        console.log(response);
      }
    );
  }, [params.id]);

  useEffect(() => {
    fetchBooking();
    fetchTicketsToBooking();
  }, [fetchBooking, fetchTicketsToBooking]);

  return (
    <div className="booking-detail-page">
      <div className="page-header">
        <StyledButton
          onClick={() => {
            setActiveBooking(null);
            navigate(-1);
          }}
        >
          Back
        </StyledButton>
      </div>

      {activeBooking && params.id && (
        <div className="detail-container">
          <BookingCard isAdmin={true} booking={activeBooking} key={params.id} />

          <DetailSection name="schedule">
            <div className="event-details-header">
              <h3>Event Schedule</h3>
              <span className="dots">⋯</span>
            </div>
            <ul className="schedule-list">
              {schedule.map((item, index) => (
                <li key={index} className="schedule-item">
                  <span className="time">{item.time}</span>
                  <span className="separator">—</span>
                  <span className="activity">{item.activity}</span>
                </li>
              ))}
            </ul>
          </DetailSection>

          <DetailSection name="tickets">
            {tickets.length > 0 &&
              tickets.map((ticket) => (
                <TicketCard key={ticket.id} ticket={ticket}></TicketCard>
              ))}
          </DetailSection>

          <DetailSection name="terms">
            <h2>Terms & Conditions</h2>
            <ol>
              <li>
                <strong>Ticket Purchase and Entry</strong>
                <ul>
                  <li>All attendees must possess a valid ticket for entry.</li>
                  <li>
                    Tickets are non-refundable and non-transferable unless
                    specified by the event organizer.
                  </li>
                  <li>
                    Attendees must present a valid government-issued ID along
                    with their ticket at the gate.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Security and Safety</strong>
                <ul>
                  <li>
                    Attendees are subject to security checks, including bag
                    inspections, upon entry.
                  </li>
                  <li>
                    Prohibited items include weapons, drugs, alcohol, fireworks,
                    and other hazardous materials.
                  </li>
                  <li>
                    The event organizer reserves the right to deny entry to
                    individuals deemed a security risk.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Code of Conduct</strong>
                <ul>
                  <li>
                    Attendees are expected to behave responsibly and
                    respectfully toward others.
                  </li>
                  <li>
                    Any disruptive behavior, harassment, or illegal activity
                    will result in immediate removal from the event without
                    refund.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Event Schedule and Changes</strong>
                <ul>
                  <li>
                    The event schedule is subject to change without prior
                    notice.
                  </li>
                  <li>
                    The event organizer is not responsible for delays or
                    cancellations caused by weather, technical issues, or
                    unforeseen circumstances.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Photography and Recording</strong>
                <ul>
                  <li>
                    Professional cameras and recording devices are prohibited
                    unless authorized by the organizer.
                  </li>
                  <li>
                    By attending, you consent to being photographed or filmed
                    for promotional purposes.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Health and Safety</strong>
                <ul>
                  <li>
                    Attendees must comply with health and safety guidelines,
                    including those related to COVID-19 (if applicable).
                  </li>
                  <li>
                    The organizer reserves the right to enforce mask mandates or
                    other health measures as necessary.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Liability</strong>
                <ul>
                  <li>
                    The event organizer is not responsible for any personal
                    injury, loss, or damage to personal property during the
                    event.
                  </li>
                </ul>
              </li>
            </ol>
          </DetailSection>
        </div>
      )}
    </div>
  );
};

export default BookingDetailPage;
{
  /* <div className="detail-header">
          <h1 className="booking-headline">Booking {activeBooking.id}</h1>
          <h3 className="booking-event-name">{activeBooking.eventName}</h3>
        </div> */
}
