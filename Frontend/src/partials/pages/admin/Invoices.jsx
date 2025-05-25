import React, { useCallback, useEffect, useState } from "react";
import InvoiceCard from "../../InvoiceCard";
import "../../../styles/invoice.css";
import { Get } from "../../../helpers/ApiHelper";

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);
  
  const getInvoices = useCallback(async () => {
    await Get(
      "https://invoiceserviceprovider-app.azurewebsites.net/api", // invoice service URL,
      "invoices", // controller route
      (repsonse) => {
        setInvoices(repsonse);
      }
    );
  }, []); 

  useEffect(() => {
    getInvoices();
  }, [getInvoices]);

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

export default Invoices;