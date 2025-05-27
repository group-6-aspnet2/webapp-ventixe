import React from "react";
import PropTypes from "prop-types";
import InvoiceCard       from "../../partials/InvoiceCard";
import TicketDetailsTable from "./TicketDetailsTable";
import "../../styles/invoice.css";

export default function InvoiceDetailsCard({ invoice }) {
  return (
    <div className="invoice-details-card">
      {/* Header */}
      <InvoiceCard invoice={invoice} isAdmin={true}/>
      {/* Date */}
      <div className="dates-row">
        <div>Issued: {new Date(invoice.issuedDate).toLocaleString()}</div>
        <div>Due:    {new Date(invoice.dueDate).toLocaleString()}</div>
      </div>
      {/* Addresses */}
      <div className="addresses-grid">
        <div>
          <h4>Bill From</h4>
          <p>{invoice.billFromName}</p>
          <p>{invoice.billFromAddress}</p>
          <p>{invoice.billFromEmail}</p>
        </div>
        <div>
          <h4>Bill To</h4>
          <p>{invoice.billToName}</p>
          <p>{invoice.billToAddress}</p>
          <p>{invoice.billToEmail}</p>
        </div>
      </div>
      {/* Ticket Table */}
      <TicketDetailsTable items={invoice.items} />
      {/* Totals */}
      <div className="totals-row">
        <div>SubTotal: ${invoice.items.reduce((sum,i)=>sum+i.amount,0)}</div>
        <div>Tax (10%): ${(invoice.items.reduce((sum,i)=>sum+i.amount,0)*0.1).toFixed(2)}</div>
        <div>Fee: $5</div>
        <div className="grand-total">Total: ${invoice.total}</div>
      </div>
      {/* Notes + Actions */}
      <h3 className="note-title">Note</h3>
      <p className="note-text">
        Please make payment before the due date to avoid any penalties or cancellation of your ticket. 
        For any questions or concerns, contact our support team at <a href="">support@eventmgmt.com</a> or call +1-800-555-1234.
      </p>
      <div className="actions-row">
        <button className="btn-edit">Edit</button>
        <button className="btn-send">Send</button>
        <button className="btn-hold">Hold</button>
      </div>
    </div>
  );
}

InvoiceDetailsCard.propTypes = {
   invoice: PropTypes.object.isRequired,
};