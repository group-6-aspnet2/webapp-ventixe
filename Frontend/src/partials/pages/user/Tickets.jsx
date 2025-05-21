import React, { useCallback, useEffect, useState } from "react";
import { Get } from "../../../helpers/ApiHelper";

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
          <div key={ticket.id}>
            <p>ticket id {ticket.id}</p>
            <p>user id {ticket.userId}</p>
            <p>event id {ticket.eventId}</p>
          </div>
        ))}
    </div>
  );
};

export default Tickets;
