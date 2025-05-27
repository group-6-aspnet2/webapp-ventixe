import React, { useState, useEffect, useCallback } from "react";
import { mockInvoices } from "../../../mocks/mockInvoices";
import { Get } from "../../../helpers/ApiHelper";
import PageHeader from "../../../styles/components/PageHeader";
import StatsCard from "../../../styles/components/StatsCard";
import InvoiceList from "../../../styles/components/InvoiceList";
import InvoiceDetailsCard from "../../../styles/components/InvoiceDetailsCard";

import "../../../styles/invoice.css";

export default function Invoices() {
  const [invoices, setInvoices] = useState([]);
  const [selectedInvoiceId, setSelectedInvoiceId] = useState(null);

  useEffect(() => {
    setInvoices(mockInvoices);
    setSelectedInvoiceId(mockInvoices[0]?.id ?? null);
  }, []); 
  /*
  const getInvoices = useCallback(async () => {

    const res = await fetch("https://invoiceserviceprovider-app.azurewebsites.net/api/invoices")
    if (!res.ok) {
      console.error("Failed to fetch invoices:", res.statusText);
      return;
    }
    const data = await res.json();
    setInvoices(data)
    console.log(data)
  }, []); 

  useEffect(() => {
    getInvoices();
    setSelectedInvoiceId(invoices[0]?.id ?? null);
  }, [getInvoices, setSelectedInvoiceId]); 
*/
  const paidCount   = invoices.filter(i => i.status === "Paid").length;
  const unpaidCount = invoices.filter(i => i.status === "Unpaid").length;
  const overdueCount= invoices.filter(i => i.status === "Overdue").length;

  const paidTotal   = invoices.filter(i => i.status === "Paid").length;
  const unpaidTotal = invoices.filter(i => i.status === "Unpaid").length;
  const overdueTotal= invoices.filter(i => i.status === "Overdue").length;

  const selectedInvoice = invoices.find(i => i.id === selectedInvoiceId);

  return (
    <div className="invoice-body">
      <PageHeader
        breadcrumbs={["Dashboard", "Invoices"]}
        title="Admin Invoices"
        />
      <div className="admin-invoices-page">
        {/* Left Column */}
        <div className="left-panel">
          <div className="stats-cards">
            <StatsCard label="Paid" count="1805" total="1,600" />
            <StatsCard label="Unpaid" count="535" total="615" />
            <StatsCard label="Overdue" count="80" total="70"/>
            {/* <StatsCard label="Paid" count={paidCount} total={paidTotal} />
            <StatsCard label="Unpaid" count={unpaidCount} total={unpaidTotal} />
            <StatsCard label="Overdue" count={overdueCount} total={overdueTotal}/> */}
          </div>
          <div className="invoice-list-container">
            <InvoiceList
              invoices={invoices}
              selectedId={selectedInvoiceId}
              onSelect={setSelectedInvoiceId}
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="right-panel">
          {selectedInvoice && (
            <InvoiceDetailsCard invoice={selectedInvoice} />
          )}
        </div>
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