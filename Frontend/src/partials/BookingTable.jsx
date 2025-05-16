import React from "react";
import TableRow from "./TableRow";

const BookingTable = ({ bookings, tableColumns }) => {
  return (
    <table>
      <thead>
        <tr>
          {tableColumns.map((head) => (
            <TableColHead key={head} headCol={head} />
          ))}
        </tr>
      </thead>
      <tbody>
        {bookings.map((b) => (
          <TableRow booking={b} key={b} />
        ))}
      </tbody>
    </table>
  );
};

export default BookingTable;
