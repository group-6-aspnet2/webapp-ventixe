import React, { useCallback, useEffect, useState } from "react";
import { Get } from "../../../helpers/ApiHelper";
import TicketCard from "../../TicketCard";

const Tickets = () => {
  const [tickets, setTickets] = useState([]);

  const fetchAllTickets = useCallback(async () => {
    await Get(
      "https://pe-ticketserviceprovider-c5auddc9buh2d0cp.swedencentral-01.azurewebsites.net/api",
      `tickets/user/${localStorage.getItem("userId")}`,
      (response) => {
        setTickets(response);
        console.log(response);
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
          <TicketCard key={ticket.id} ticket={ticket}></TicketCard>
        ))}
    </div>
  );
};

export default Tickets;
