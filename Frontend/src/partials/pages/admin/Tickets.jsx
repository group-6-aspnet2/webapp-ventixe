import { useCallback, useEffect, useState } from "react";
import { Get } from "../../../helpers/ApiHelper";
import TicketCard from "../../TicketCard";

const Tickets = () => {
  const [tickets, setTickets] = useState([]);

  const fetchAllTickets = useCallback(async () => {
    await Get(
      "https://pe-ticketserviceprovider-c5auddc9buh2d0cp.swedencentral-01.azurewebsites.net/api",
      "tickets",
      (response) => {
        setTickets(response);
      }
    );
  }, []);

  useEffect(() => {
    fetchAllTickets();
  }, [fetchAllTickets]);

  return (
    <div>
      {tickets.length > 0 &&
        tickets.map((ticket) => (
          <TicketCard
            key={ticket.id}
            eventCategoryName={ticket.eventCategoryName}
            ticket={ticket}
          ></TicketCard>
        ))}
    </div>
  );
};

export default Tickets;
