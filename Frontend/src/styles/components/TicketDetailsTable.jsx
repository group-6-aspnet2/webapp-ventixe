import React from 'react';
import PropTypes from 'prop-types';
import "../../styles/invoice.css" 

const TicketDetailsTable = ({ items }) => {
  return (
    <table className='ticket-table'>
      <thead>
        <tr>
          <th>Category</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index} className={index % 2 === 0 ? 'even' : 'odd'}>
            <td>{item.ticketCategory}</td>
            <td>${item.price}</td>
            <td>{item.quantity}</td>
            <td>${item.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TicketDetailsTable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      ticketCategory: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired
    })
  ).isRequired
};

export default TicketDetailsTable;