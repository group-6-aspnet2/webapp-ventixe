import React from "react";

const TableRow = ({ booking }) => {
  return (
    <tr>
      {booking.map(() => (
        <td key={booking.id}>{booking}</td>
      ))}
    </tr>
  );
};

export default TableRow;

/*<tr>
            {data.map((item) => {
                return <td key={item}>{item}</td>;
            })}
        </tr>

        */
