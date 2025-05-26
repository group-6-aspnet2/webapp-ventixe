import "../styles/ticket.css";
const TicketCard = ({ ticket, activeBooking }) => {
  return (
    <div className="ticket-card">
      <div className="ticket-section ticket-left">
        <div
          className={`ticket-image ${activeBooking.eventCategoryName.toLowerCase()}`}
        />
        <div className="event-title">
          <h2>{ticket.eventName}</h2>
        </div>
      </div>

      <div className="ticket-section ticket-middle">
        <div className="info-pair">
          <span className="property-name">Ticket Type</span>
          <span>{ticket.ticketCategoryName}</span>
        </div>
        <div className="info-pair">
          <span className="property-name">Location</span>
          <span>{ticket.eventLocation}</span>
        </div>
        <div className="info-pair">
          <span className="property-name">Seat Number</span>
          <span>{ticket.seatNumber}</span>
        </div>
        <div className="info-pair">
          <span className="property-name"> Gate</span>
          <span>{ticket.gate}</span>
        </div>

        <div className="info-pair">
          <span className="property-name">Date</span>
          <span>{ticket.eventDate}</span>
        </div>
        <div className="info-pair">
          <span className="property-name">Time</span>
          <span>{ticket.eventTime}</span>
        </div>
      </div>

      <div className="ticket-section ticket-right">
        <p className="barcode-title">Scan to Enter</p>
        <img src="/e-voucher.svg" alt="Barcode" className="barcode" />
        <p className="footer">
          Thank you for your purchase! Enjoy the festival and experience the
          rhythm like never before.
        </p>
      </div>
    </div>
  );
};

export default TicketCard;
