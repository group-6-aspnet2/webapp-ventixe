import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import HamburgerMenu from "../HamburgerMenu";
import "../../styles/menu.css";

const PortalLayout = () => {
  const [listItems, setListItems] = useState([
    {
      path: "/admin/dashboard",
      name: "Admin Dashboard",
      // img: "/dashboard-icon.svg",
      icon: <i className="fa-regular fa-border-all"></i>,
      onlyAdmin: true,
      isAuthenticated: true,
    },
    {
      path: "/admin/events",
      name: "Admin Events",
      // img: "/events-iconsvg.svg",
      icon: <i className="fa-regular fa-ticket"></i>,
      onlyAdmin: true,
      isAuthenticated: true,
    },
    {
      path: "/admin/bookings",
      name: "Admin Bookings",
      // img: "/bookings-iconsvg.svg",
      icon: <i className="fa-regular fa-square-check"></i>,
      onlyAdmin: true,
      isAuthenticated: true,
    },
    {
      path: "/admin/tickets",
      name: "Admin Tickets",
      icon: <i className="fa-regular fa-ticket"></i>,
      onlyAdmin: true,
      isAuthenticated: true,
    },
    {
      path: "/admin/inbox",
      name: "Admin Inbox",
      icon: <i className="fa-regular fa-envelope"></i>,
      onlyAdmin: true,
      isAuthenticated: true,
    },

    {
      path: "/profile",
      name: "Profile",
      icon: <i className="fa-regular fa-user"></i>,
      onlyAdmin: false,
      isAuthenticated: true,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      // img: "/dashboard-icon.svg",
      icon: <i className="fa-regular fa-border-all"></i>,
      onlyAdmin: false,
      isAuthenticated: true,
    },
    {
      path: "/events",
      name: "Events",
      // img: "/events-iconsvg.svg",
      icon: <i className="fa-regular fa-ticket"></i>,
      onlyAdmin: false,
      isAuthenticated: true,
    },
    {
      path: "/bookings",
      name: "Bookings",
      // img: "/bookings-iconsvg.svg",
      icon: <i className="fa-regular fa-square-check"></i>,
      onlyAdmin: false,
      isAuthenticated: true,
    },
    {
      path: "/tickets",
      name: "Tickets",
      icon: <i className="fa-regular fa-ticket"></i>,
      onlyAdmin: false,
      isAuthenticated: true,
    },
    {
      path: "/inbox",
      name: "Inbox",
      icon: <i className="fa-regular fa-envelope"></i>,
      onlyAdmin: false,
      isAuthenticated: true,
    },
  ]);
  return (
    <>
      <div className="portal-layout">
        <aside>
          <ul className="aside-menu-list">
            {listItems
              // .filter((x) => x.isAuthenticated && x.onlyAdmin)
              .map((item, index) => (
                <li key={index} className="aside-menu-item">
                  <NavLink to={item.path} className={"aside-menu-link"}>
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </NavLink>
                </li>
              ))}
          </ul>
        </aside>
        <header>
          <img alt="ventixe-logo" src="/Logo.svg" />
          <span>Ventixe</span>
          <HamburgerMenu
            // listItems={listItems.filter(
            //   (x) => x.isAuthenticated && x.onlyAdmin
            // )}
            listItems={listItems}
          />
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default PortalLayout;
