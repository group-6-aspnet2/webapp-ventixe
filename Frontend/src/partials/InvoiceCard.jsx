import React from 'react';
import { StatusButton } from '../styles/components/StyledButton';
import { useNavigate } from 'react-router-dom';

const InvoiceCard = ({ invoice, isAdmin }) => {
  const navigate = useNavigate();

  const date = new Date(invoice.issuedDate);
  const formattedDate = date.toLocaleDateString("sv-SE", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const formattedTime = date.toLocaleTimeString("sv-SE", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div 
      className='invoice-card' onClick={() =>
        navigate(`${isAdmin ? "/admin" : ""}/invoice/${invoice.id}`)
      }
    >
      {/* Number and Date */}
      <div className='invoice-card-left'>
        <span className='invoice-number'>#{invoice.invoiceNumber}</span>
        <span className='invoice-date'>
          {formattedDate} {formattedTime}
        </span>
      </div>

      {/* Total and Status */}
      <div className='invoice-card-right'>
        <span className='invoice-total'>${invoice.total}</span>
        <StatusButton className='status-button' $status={invoice.statusName.toUpperCase()}>
          {invoice.statusName}
        </StatusButton>
      </div>
    </div>
  );
};

export default InvoiceCard