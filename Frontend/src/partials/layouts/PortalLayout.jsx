import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import HamburgerMenu from "../HamburgerMenu";
import "../../styles/menu.css";

const PortalLayout = () => {
  const [listItems, setListItems] = useState([
    {
      path: "/dashboard",
      name: "Dashboard",
      // img: "/dashboard-icon.svg",
      icon: <i class="fa-regular fa-border-all"></i>,
    },
    {
      path: "/bookings",
      name: "Bookings",
      // img: "/bookings-iconsvg.svg",
      icon: <i class="fa-regular fa-square-check"></i>,
    },
    {
      path: "/profile",
      name: "Profile",
      icon: <i class="fa-regular fa-user"></i>,
    },
  ]);
  return (
    <>
      <div className="portal-layout">
        <aside>
          <ul className="aside-menu-list">
            {listItems.map((item, index) => (
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
          <span>Header</span>
          <HamburgerMenu listItems={listItems} />
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default PortalLayout;
