import { lazy } from "react";
import { Navigate } from "react-router-dom";

import AuthLayout from "../partials/layouts/AuthLayout";
import PortalLayout from "../partials/layouts/PortalLayout";
import Unauthorized from "../partials/pages/auth/Unauthorized";

const NotFound = lazy(() => import("../partials/pages/NotFound"));

const SignUp = lazy(() => import("../partials/pages/auth/SignUp"));
const SignIn = lazy(() => import("../partials/pages/auth/SignIn"));

const UserDashboard = lazy(() => import("../partials/pages/user/Dashboard"));
const UserBookings = lazy(() => import("../partials/pages/user/Bookings"));
const UserProfile = lazy(() => import("../partials/pages/user/UserProfile"));
const UserEvents = lazy(() => import("../partials/pages/user/Events"));
const UserInbox = lazy(() => import("../partials/pages/user/Inbox"));
const AdminDashboard = lazy(() => import("../partials/pages/admin/Dashboard"));
const AdminBookings = lazy(() => import("../partials/pages/admin/Bookings"));
const AdminEvents = lazy(() => import("../partials/pages/admin/Events"));
const AdminInbox = lazy(() => import("../partials/pages/admin/Inbox"));
const BookingDetail = lazy(() => import("../partials/pages/BookingDetailPage"));
const AdminTickets = lazy(() => import("../partials/pages/admin/Tickets"));
const UserTickets = lazy(() => import("../partials/pages/user/Tickets"));
const UserInvoices = lazy(() => import("../partials/pages/user/Invoices"));
const AdminInvoices = lazy(() => import("../partials/pages/admin/Invoices"));
const InvoiceDetail = lazy(() => import("../partials/pages/InvoiceDetailPage"));

export const routes = [
  {
    children: [{ path: "/", element: <Navigate to="/dashboard" replace /> }],
  },
  {
    layout: AuthLayout, // centered layout
    children: [
      { path: "/signup", element: <SignUp /> },
      { path: "/login", element: <SignIn /> },
      { path: "/denied", element: <Unauthorized /> },
    ],
  },
  {
    layout: PortalLayout, // main layout with menu, aside etc
    protected: true,
    children: [
      { path: "/dashboard", element: <UserDashboard /> },
      { path: "/bookings", element: <UserBookings /> },
      { path: "/profile", element: <UserProfile /> },
      { path: "/events", element: <UserEvents /> },
      { path: "/inbox", element: <UserInbox /> },
      { path: "/booking/:id", element: <BookingDetail /> },
      { path: "/tickets", element: <UserTickets /> },
      { path: "/invoices", element: <UserInvoices /> },
      { path: "/invoice/:id", element: <InvoiceDetail /> },
    ],
  },
  {
    layout: PortalLayout,
    protected: true,
    adminOnly: true,
    children: [
      { path: "/admin/dashboard", element: <AdminDashboard /> },
      { path: "/admin/bookings", element: <AdminBookings /> },
      { path: "/admin/events", element: <AdminEvents /> },
      { path: "/admin/inbox", element: <AdminInbox /> },
      { path: "/admin/booking/:id", element: <BookingDetail /> },
      { path: "/admin/tickets", element: <AdminTickets /> },
      { path: "/admin/invoices", element: <AdminInvoices /> },
      { path: "/admin/invoice/:id", element: <InvoiceDetail /> },
    ],
  },
  {
    children: [{ path: "*", element: <NotFound /> }],
  },
];
