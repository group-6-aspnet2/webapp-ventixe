import { useCallback, useEffect, useState } from "react";
import { Get } from "../../../helpers/ApiHelper";

const Tickets = () => {
  const [tickets, setTickets] = useState([]);

  const fetchAllTickets = useCallback(async () => {
    await Get(
      "https://pe-ticketserviceprovider-c5auddc9buh2d0cp.swedencentral-01.azurewebsites.net/api",
      "tickets",
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
          <div key={ticket.id}>ticket id {ticket.id} </div>
        ))}
    </div>
  );
};

export default Tickets;
