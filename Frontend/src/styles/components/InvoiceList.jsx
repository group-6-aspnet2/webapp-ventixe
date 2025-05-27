import React from "react";
import PropTypes from "prop-types";
import "../../styles/invoice.css";

export default function InvoiceList({ invoices, selectedId, onSelect }) {
  
  return (
    <ul className="invoice-list">
      {invoices.map(inv => (

        <li
          key={inv.id}
          className={`invoice-list-item ${inv.id === selectedId ? "selected" : ""}`}
          onClick={() => onSelect(inv.id)}
        >
          <div className="list-left">
            <span className="list-number">#{inv.invoiceNumber}</span>
            <span className="list-date">
              {new Date(inv.issuedDate).toLocaleDateString("sv-SE")}
            </span>
          </div>
          <div className="list-right">
            <span className="list-amount">${inv.total}</span>
            <span className={`list-status ${inv.statusName.toLowerCase()}`}>
              {inv.statusName}
            </span> 
          </div>
        </li>
      ))}
    </ul>
  );
}

InvoiceList.propTypes = {
  invoices:   PropTypes.array.isRequired,
  selectedId: PropTypes.string,
  onSelect:   PropTypes.func.isRequired,
};