import "../styles/ticket.css";
const TicketCard = ({ ticket }) => {
  return <div className="ticket-card">{ticket.id}</div>;
};

export default TicketCard;
