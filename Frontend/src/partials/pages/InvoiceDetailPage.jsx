import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StyledButton } from "../../styles/components/StyledButton";
import { Get } from "../../helpers/ApiHelper";
import InvoiceCard from "../InvoiceCard";
import TicketDetailsTable from "../../styles/components/TicketDetailsTable";
import { DetailSection } from "../../styles/components/BookingDetailSection";
import "../../styles/invoice.css";

import { mockInvoices } from "../../mocks/mockInvoices";

const InvoiceDetailPage = () => {
 /*   const [invoice, setInvoice] = useState(null);
    const params = useParams();
    const navigate = useNavigate();

    const getInvoice = useCallback(async () => {
        await Get(
            "http://localhost:5299/api", // URL till invoiceserviceprovider
            `invoices/${params.id}`,
            (response) => {
                setInvoice(response);
            }
        );
    }, [params.id]);

    useEffect(() => {
        if (params.id) getInvoice();
    }, [getInvoice, params.id]);

    if (!invoice) {
        return (
            <div className="loading">
                Loading invoice...
            </div>
        );
    }   
*/
    const { id } = useParams();
    const navigate = useNavigate();
    const [invoice, setInvoice] = useState(null);

    useEffect(() => {
        const inv = mockInvoices.find(inv => inv.id === id);
        setInvoice(inv || null);
    }, [id])

    if (!invoice) {
        return (
            <div className="loading">
                Loading invoice...
            </div>
        );
    } 

    return (
        <div className="invoice-details-page">
            {/* Header */}
            <div className="page-header">
                <StyledButton onClick={() => navigate(-1)}>
                    ← Back
                </StyledButton>
            </div>

            {/* Detail container */}
            <div className="detail-container">
                <InvoiceCard invoice={invoice} isAdmin={true} />

                {/* Bill from / Bill to */}
                <DetailSection name="addresses">
                    <div className="addresses-grid">
                        <div>
                            <h3>Bill From</h3>
                            <p>{invoice.billFromName}</p>
                            <p>{invoice.billFromAddress}</p>
                            <p>{invoice.billFromEmail}</p>
                            <p>{invoice.billFromPhone}</p>
                        </div>
                        <div>
                            <h3>Bill To</h3>
                            <p>{invoice.billToName}</p>
                            <p>{invoice.billToAddress}</p>
                            <p>{invoice.billToEmail}</p>
                            <p>{invoice.billToPhone}</p>
                        </div>
                    </div>
                </DetailSection>

                {/* Ticket details */}
                <DetailSection name="ticket-details">
                    <h3>Ticket Details</h3>
                    <TicketDetailsTable items={invoice.items} />
                </DetailSection>

                {/* Notes */}
                <DetailSection name="notes">
                    <h3>Note</h3>
                    <p className="notes-text">
                        Please make payment by the due date to avoid penalites.
                        Contact support at support@domain.com if you have any questions.
                    </p>
                </DetailSection>

                {/* Action Buttons */}
                <div className="invoice-actions">
                    <button className="btn-secondary">Edit Invoice</button>
                    <button className="btn-primary">Send Invoice</button>
                    <button className="btn-danger">Hold Invoice</button>
                </div>
            </div>
        </div>
    );
};

export default InvoiceDetailPage;