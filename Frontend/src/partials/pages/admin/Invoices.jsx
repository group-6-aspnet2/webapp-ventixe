import React, { useState, useEffect } from "react";
import { mockInvoices } from "../../../mocks/mockInvoices";

import StatsCard          from "../../../styles/components/StatsCard";
import InvoiceList        from "../../../styles/components/InvoiceList";
import InvoiceDetailsCard from "../../../styles/components/InvoiceDetailsCard";

import "../../../styles/invoice.css";

export default function AdminInvoicesPage() {
  const [invoices, setInvoices]         = useState([]);
  const [selectedInvoiceId, setSelectedInvoiceId] = useState(null);

  useEffect(() => {
    // Hämta dina fakturor (här mock)
    setInvoices(mockInvoices);
    // välj första som default
    setSelectedInvoiceId(mockInvoices[0]?.id ?? null);
  }, []);

  const paidCount   = invoices.filter(i => i.status === "Paid").length;
  const unpaidCount = invoices.filter(i => i.status === "Unpaid").length;
  const overdueCount= invoices.filter(i => i.status === "Overdue").length;

  const paidTotal   = invoices.filter(i => i.status === "Paid").length;
  const unpaidTotal = invoices.filter(i => i.status === "Unpaid").length;
  const overdueTotal= invoices.filter(i => i.status === "Overdue").length;

  const selectedInvoice = invoices.find(i => i.id === selectedInvoiceId);

  return (
    <div className="admin-invoices-page">
      {/* --- Vänster kolumn --- */}
      <div className="left-panel">
        <div className="stats-cards">
          <StatsCard label="Paid"   count={paidCount}   total={paidTotal}   />
          <StatsCard label="Unpaid" count={unpaidCount} total={unpaidTotal} />
          <StatsCard label="Overdue"count={overdueCount}total={overdueTotal}/>
        </div>
        <div className="invoice-list-container">
          <InvoiceList
            invoices={invoices}
            selectedId={selectedInvoiceId}
            onSelect={setSelectedInvoiceId}
          />
        </div>
      </div>

      {/* --- Höger kolumn --- */}
      <div className="right-panel">
        {selectedInvoice && (
          <InvoiceDetailsCard invoice={selectedInvoice} />
        )}
      </div>
    </div>
  );
}








/*

import React, { useCallback, useEffect, useState } from "react";
import InvoiceCard from "../../InvoiceCard";
import "../../../styles/invoice.css";
import { Get } from "../../../helpers/ApiHelper";

import { mockInvoices } from "../../../mocks/mockInvoices"; 

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);
  /*
  const getInvoices = useCallback(async () => {
    await Get(
      "http://localhost:5299/api", // invoice service URL,
      "invoices", // controller route
      (repsonse) => {
        setInvoices(repsonse);
      }
    );
  }, []); 

  useEffect(() => {
    getInvoices();
  }, [getInvoices]); */

  /*
  useEffect(() => {
    setInvoices(mockInvoices); // Using mock data for now
  }, []); 

  return (
    <div className="invoice-body">
      <h1 className="invoice-headline">Admin Invoices</h1>
      <div className="invoices-container">
        {invoices.length > 0
          ? invoices.map((invoice) => (
            <InvoiceCard isAdmin={true} invoice={invoice} key={invoice.id} />
          ))
        : <p>Loading invoices...</p>}
      </div>
    </div>
  );
};

export default Invoices; */